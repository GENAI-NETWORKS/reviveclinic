const imageSize = require('image-size');

const ids = [
  '1TLa_Gi3OBzDlbV36VP9-jgwpjFDBy0RH',
  '1hx76iuD00gi45QVYVCGRRvH6kEBCuwUc',
  '1rX9c24pjZxgkjxC4MyXqdgaTJDHPFUjy',
  '1v0nYl9dpIrqaFly6B8PCs0BZSDEYGRBF',
  '1WWoGa3_PXSIsuzYZh-41CYSvwaLopxkb',
  '1rhnpajgpuI2QsypxulxAl5uaC9b_iT_i',
  '16DhL2WHmDT6zjsVbnyLkcjG3V9niZqhb',
  '1yOkU9D2peT8EsPqowkU6ntBTbY8rw5ja',
  '16WY3VJ2f0osL6oMDfbHsCtaZ9vuRyLTC',
  '1PgMsWg-jw6Rix5qj9M8NvrLXGF-AUP93',
  '1N5cm-vugS-Y6fIlk9gSOZdirTBzx_KFD',
  '19ipRdJ70CWRqphVNz5BEdahPp_r9-vxL',
  '1AG2mEOtX8tAo81E93IfvQYDdV9qbOYPo',
  '1eE1wcDq1dazzC-Yp0AV43w0SNsmxs58O',
  '14FafUJDHHgbhGkmrORrKMSIQa7cz3MDO',
  '1_QPT1-9ghEjDQchCRlLm6tIY89PJIvOG',
  '1TzkYdWDgM0ayoD9PPHHGy8iFuXwEawpi',
  '1J1Vm1TuVls0uoR91UOEuobovS11_NRgi',
  '1pfpnmZmHcRL7BH_-4mDebQSJCbTqtIf2',
  '1cS2GDC27NdBXekcWBUkGtRl-48DukFf4'
];

async function checkImages() {
  for (const id of ids) {
    const url = `https://lh3.googleusercontent.com/d/${id}=w1000`;
    try {
      const res = await fetch(url);
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const dimensions = imageSize.imageSize(buffer);
      const ratio = dimensions.width / dimensions.height;
      const type = ratio > 1.1 ? 'landscape' : (ratio < 0.9 ? 'portrait' : 'square');
      console.log(`${id}: ${dimensions.width}x${dimensions.height} (${type})`);
    } catch (e) {
      // try default export
      try {
        const dimensions = imageSize(buffer);
        const ratio = dimensions.width / dimensions.height;
        const type = ratio > 1.1 ? 'landscape' : (ratio < 0.9 ? 'portrait' : 'square');
        console.log(`${id}: ${dimensions.width}x${dimensions.height} (${type})`);
      } catch(e2) {
         console.log(`${id}: Error parsing image`, e.message);
      }
    }
  }
}

checkImages();
