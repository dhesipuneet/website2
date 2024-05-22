<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catch The Insect</title>
    <link rel="stylesheet" href="css/insect.css">
</head>
<body>
    <div class = "screen">
        <h1>Catch The Insect</h1>
        <button class = "btn" id = "start-btn">Play Game</button>
    </div>

    <div class = "screen">
        <h1>What is your favorite insect?</h1>
        <ul class = "insects-list">
            <li>
                <button class = "choose-insect-btn">
                    <p>Fly</p>
                    <img src = "images/fly.png" alt = "fly">
                </button>
            </li><li>
                <button class = "choose-insect-btn">
                    <p>mosquito</p>
                    <img src = "images/mosquito.png" alt = "mosquito">
                </button>
            </li>
            <li>
                <button class = "choose-insect-btn">
                    <p>roach</p>
                    <img src = "images/roach.png" alt = "roach">
                </button>
            </li>
            <li>
                <button class = "choose-insect-btn">
                    <p>spider</p>
                    <img src = "images/spider.png" alt = "spider">
                </button>
            </li>
        </ul>
    </div>
    <div class="screen game-container" id="game-container">
        <h3 class="time" id="time">
            time: 00:00</h3>
            <h3 id="score" class="score">Score: 0</h3>
        <h5 id="message" class="message">
            Are you annoyed yet? <br>
            You are playing an impossible game!!
        </h5>
    </div>
</body>
<script src= "js/insect.js"></script>
</html>