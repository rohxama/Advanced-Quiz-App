<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MCQZONE-Home</title>
    <!-- Remix Icons -->
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet" />
    <!-- Font Family -->
    <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap" rel="stylesheet">
    <!-- Css File -->
    <link rel="stylesheet" href="./assets/style/style.css">


    <style>
          .home-section p{
    color: var(--clr-neutral-100);
    background: linear-gradient(
        to right,
        #ffffff,
        #c0c0c022);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.25em;
    text-align: center;
    font-weight: 500;
  }
    </style>

</head>

<body class="home-body">

    <section class="nav-parent">
        <div class="nav-wrapper">
                <a href="index.html" class="logo">
                    <i class="ri-question-answer-line text-neutral-100"></i>
                    <h2 class="logo text-neutral-100">MCQZONE</h2>
                </a>
        </div>
    </section>

   
    <section class="home-section">
        <h1>
            Get ready to fight
        </h1>
        <p>Put your knowledge to the test and see where you stand!</p>

        <div class="hero-btn">
             <a href="signup.php"> Sign Up to Start
                <i class="ri-arrow-right-line"></i>
             </a></div>
    </section>


    <script>
        const burgerLinks = document.querySelector('.burger-links');
        const burger = document.querySelector('.burger');
        const body = document.querySelector('body');

        burgerButton = function () {
            burgerLinks.classList.toggle('active');
            burger.classList.toggle('active');
            body.classList.toggle('active');
        }
    </script>

</body>

</html>