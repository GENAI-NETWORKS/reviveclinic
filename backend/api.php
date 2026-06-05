<?php
// backend/api.php
// Replace these with your actual Hostinger MySQL Database credentials
$db_host = 'localhost'; // Usually localhost on Hostinger works best for internal connections
$db_user = 'u416856653_revive';
$db_pass = 'Reviveclinic@123';
$db_name = 'u416856653_revive';

// Allow CORS (Cross-Origin Resource Sharing)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Connect to MySQL
$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Database Connection Failed", "details" => $conn->connect_error]);
    exit();
}

$method = $_SERVER['REQUEST_METHOD'];

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            // Get single post
            $id = $conn->real_escape_string($_GET['id']);
            $sql = "SELECT * FROM blog_posts WHERE id = '$id'";
            $result = $conn->query($sql);
            if ($result && $result->num_rows > 0) {
                echo json_encode($result->fetch_assoc());
            } else {
                http_response_code(404);
                echo json_encode(["error" => "Post not found"]);
            }
        } else {
            // Get all posts, sort by created_at DESC
            $sql = "SELECT * FROM blog_posts ORDER BY created_at DESC";
            $result = $conn->query($sql);
            $posts = [];
            if ($result) {
                while($row = $result->fetch_assoc()) {
                    $posts[] = $row;
                }
            }
            echo json_encode($posts);
        }
        break;

    case 'POST':
        // Create new post
        $id = $conn->real_escape_string($input['id']);
        $title = $conn->real_escape_string($input['title']);
        $category = $conn->real_escape_string($input['category']);
        $author = $conn->real_escape_string($input['author']);
        $date = $conn->real_escape_string($input['date']);
        $readTime = $conn->real_escape_string($input['readTime']);
        $image = $conn->real_escape_string($input['image']);
        $excerpt = $conn->real_escape_string($input['excerpt']);
        $content = $conn->real_escape_string($input['content']);

        $sql = "INSERT INTO blog_posts (id, title, category, author, date, readTime, image, excerpt, content) 
                VALUES ('$id', '$title', '$category', '$author', '$date', '$readTime', '$image', '$excerpt', '$content')";
        
        if ($conn->query($sql) === TRUE) {
            http_response_code(201);
            echo json_encode(["message" => "Post created successfully", "id" => $id]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Error creating post", "details" => $conn->error]);
        }
        break;

    case 'PUT':
        // Update post
        if (isset($_GET['id'])) {
            $id = $conn->real_escape_string($_GET['id']);
            $title = $conn->real_escape_string($input['title']);
            $category = $conn->real_escape_string($input['category']);
            $author = $conn->real_escape_string($input['author']);
            $date = $conn->real_escape_string($input['date']);
            $readTime = $conn->real_escape_string($input['readTime']);
            $image = $conn->real_escape_string($input['image']);
            $excerpt = $conn->real_escape_string($input['excerpt']);
            $content = $conn->real_escape_string($input['content']);

            $sql = "UPDATE blog_posts SET 
                    title='$title', category='$category', author='$author', 
                    date='$date', readTime='$readTime', image='$image', 
                    excerpt='$excerpt', content='$content' 
                    WHERE id='$id'";
            
            if ($conn->query($sql) === TRUE) {
                echo json_encode(["message" => "Post updated successfully"]);
            } else {
                http_response_code(500);
                echo json_encode(["error" => "Error updating post", "details" => $conn->error]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["error" => "ID is required for update"]);
        }
        break;

    case 'DELETE':
        if (isset($_GET['id'])) {
            $id = $conn->real_escape_string($_GET['id']);
            $sql = "DELETE FROM blog_posts WHERE id='$id'";
            if ($conn->query($sql) === TRUE) {
                echo json_encode(["message" => "Post deleted successfully"]);
            } else {
                http_response_code(500);
                echo json_encode(["error" => "Error deleting post", "details" => $conn->error]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["error" => "ID is required for deletion"]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "Method not allowed"]);
        break;
}

$conn->close();
?>
