<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="./assets/style/style.css">

    <style>
        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        body,
        h1,
        h2,
        h3,
        p {
            margin: 0;
            padding: 0;
            font-family: system-ui, sans-serif;
        }

        a {
            text-decoration: none;
        }

        input,
        button,
        textarea,
        select {
            font: inherit;
        }

        :root {
            --shadow-color: rgba(0, 0, 0, 0.15);
            --clr-neutral-500: #1c232b;
            --clr-neutral-400: #28323E;
            --clr-neutral-300: #384656;
            --clr-neutral-200: #51657B;
            --clr-neutral-100: #E6EAEF;
        }

        .login-container,
        .signup-container {
            margin: 0;
            display: grid;
            place-items: center;
            min-height: 100vh;
            background-color: var(--clr-neutral-500);
            color: var(--clr-neutral-100);
            font-family: system-ui, sans-serif;
            line-height: 1.5;
        }

        .signup-container h1,
        .login-container h1,
        .logout-container h1 {
            margin-bottom: 3rem;
        }

        .form-container {
            background-color: var(--clr-neutral-400);
            padding: 2rem;
            border-radius: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
            text-align: center;
        }

        #logout .form-container {
            background-color: var(--clr-neutral-200);
            color: var(--clr-neutral-100);
            margin: 5rem auto;
        }

        .form-container input {
            width: 100%;
            padding: 0.8rem;
            margin-bottom: 1.5rem;
            border: 1px solid var(--clr-neutral-300);
            border-radius: 10px;
            background-color: var(--clr-neutral-100);
            outline: none;
        }

        .form-container .btn {
            background-color: var(--clr-neutral-300);
            color: var(--clr-neutral-100);
            padding: 0.8rem;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            text-transform: uppercase;
            margin-top: 2rem;
        }

        .form-container .btn:hover {
            background-color: var(--clr-neutral-100);
            color: var(--clr-neutral-300);
            transition: 0.8 all ease-in;
        }

        .form-container p {
            margin-top: 1rem;
            margin-top: 2rem;
        }

        .form-container a {
            color: var(--clr-neutral-200);
            text-decoration: underline;
        }
    </style>

</head>

<body>

    <div class="login-container">
        <div class="form-container">
            <h1>Login</h1>
            <form action="login.php" method="POST">
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit" class="btn">Login</button>
            </form>
            <p>Don't have an account?
                <a href="./signup.php">Sign Up</a>
            </p>
        </div>
    </div>



    <?php
    session_start();
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);


    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "quiz-test";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST['email'];
        $password = $_POST['password'];


        $sql = "SELECT * FROM user_data WHERE user_email = ?";
        $stmt = $conn->prepare($sql);

        if (!$stmt) {
            die("Error preparing statement: " . $conn->error);
        }

        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();


            if (password_verify($password, $row['user_password'])) {
                $_SESSION['user_email'] = $email;
                header("Location: quiz.php");
                exit();
            } else {
                echo "Incorrect password!";
            }
        } else {
            echo "No account found with that email!";
        }
        $stmt->close();
    }
    $conn->close();
    ?>

</body>

</html>