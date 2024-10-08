<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MCQZONE-SignUp</title>
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
       <div class="signup-container">
        <div class="form-container">
            <h1>Sign Up</h1>
            <form action="signup.php" method="POST">
                <input type="text" name="fullname" placeholder="Full Name" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Password" required>
                <input type="password" name="confirm_password" placeholder="Confirm Password" required>
                <button type="submit" class="btn">Sign Up</button>
            </form>
            <p>Already have an account? <a href="./login.php">Login</a></p>
        </div>
    </div>




    <!-- Php code -->

    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "quiz-test";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $user_name = $_POST['fullname'];
        $user_email = $_POST['email']; 
        $user_password = $_POST['password']; 
        $confirm_password = $_POST['confirm_password'];



        if ($user_password == $confirm_password) {


       
            $hashed_password = password_hash($user_password, PASSWORD_DEFAULT);

            
            $stmt = $conn->prepare("INSERT INTO user_data (user_name, user_email, user_password) VALUES (?, ?, ?)");

            if ($stmt === false) {
                die("Prepare failed: " . $conn->error);
            }

            $stmt->bind_param("sss", $user_name, $user_email, $hashed_password);

            if ($stmt->execute()) {
                echo "Sign up successful!";
                header("Location: login.php");
                exit();
            } else {
                echo "Error: " . $stmt->error;
            }

            $stmt->close();
        } else {
            echo "Passwords do not match!";
        }
    }

    $conn->close();
    ?>


</body>

</html>