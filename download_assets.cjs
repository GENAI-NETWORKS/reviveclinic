const fs = require('fs');
const path = require('path');
const https = require('https');

const ASSETS_DIR = path.join(__dirname, 'src', 'assets');
if (!fs.existsSync(ASSETS_DIR)) fs.mkdirSync(ASSETS_DIR, { recursive: true });

const filesToProcess = [
  'src/pages/Home.jsx',
  'src/pages/About.jsx',
  'src/pages/Psychiatry.jsx',
  'src/index.css'
];

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) {
      resolve(); // Already downloaded
      return;
    }
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        https.get(response.headers.location, (res2) => {
          res2.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', err => { fs.unlink(dest, () => reject(err)); });
      } else {
        response.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      }
    }).on('error', err => { fs.unlink(dest, () => reject(err)); });
  });
}

function sanitizeVarName(id) {
  return 'img_' + id.replace(/[^a-zA-Z0-9]/g, '_');
}

async function run() {
  const allMatches = new Map();

  for (const file of filesToProcess) {
    let content = fs.readFileSync(file, 'utf8');
    const regex = /['"](https:\/\/lh3\.googleusercontent\.com\/d\/([a-zA-Z0-9_-]+)(=w[0-9h-]+)?)['"]/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      const url = match[1];
      const id = match[2];
      const params = match[3] || '';
      const uniqueName = id + params.replace('=', '_');
      allMatches.set(uniqueName, url);
    }
  }

  console.log(`Downloading ${allMatches.size} images...`);
  for (const [name, url] of allMatches.entries()) {
    const dest = path.join(ASSETS_DIR, name + '.jpg');
    console.log(`Downloading ${url} -> ${name}.jpg`);
    await downloadImage(url, dest);
  }
  console.log('Downloads complete.');

  for (const file of filesToProcess) {
    let content = fs.readFileSync(file, 'utf8');
    const isCss = file.endsWith('.css');
    const imports = [];
    const fileMatches = new Map();
    
    const regex = /(['"])(https:\/\/lh3\.googleusercontent\.com\/d\/([a-zA-Z0-9_-]+)(=w[0-9h-]+)?)\1/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      const quote = match[1];
      const url = match[2];
      const id = match[3];
      const params = match[4] || '';
      const uniqueName = id + params.replace('=', '_');
      fileMatches.set(url, { uniqueName, quote });
    }

    if (fileMatches.size === 0) continue;

    if (!isCss) {
      for (const [url, info] of fileMatches.entries()) {
        const varName = sanitizeVarName(info.uniqueName);
        imports.push(`import ${varName} from '../assets/${info.uniqueName}.jpg';`);
      }
      
      for (const [url, info] of fileMatches.entries()) {
        const varName = sanitizeVarName(info.uniqueName);
        content = content.split(`"${url}"`).join(`{${varName}}`);
        content = content.split(`'${url}'`).join(`${varName}`);
      }
      
      const importRegex = /import .* from ['"].*['"];/g;
      let lastImportIndex = 0;
      let importMatch;
      while ((importMatch = importRegex.exec(content)) !== null) {
        lastImportIndex = importMatch.index + importMatch[0].length;
      }
      
      content = content.slice(0, lastImportIndex) + '\n' + imports.join('\n') + content.slice(lastImportIndex);
    } else {
      for (const [url, info] of fileMatches.entries()) {
        content = content.split(`'${url}'`).join(`'../assets/${info.uniqueName}.jpg'`);
        content = content.split(`"${url}"`).join(`'../assets/${info.uniqueName}.jpg'`);
      }
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}

run().catch(console.error);
