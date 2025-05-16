<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Erdmännchen Fütterung</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="game-container">
        <div class="score-board">
            <h2>Punkte: <span id="points">0</span></h2>
        </div>
        
        <div class="game-area">
            <div id="meerkat" class="meerkat"></div>
            <div class="food-tray">
                <button class="food-item" data-points="5">🥕 Karotte</button>
                <button class="food-item" data-points="10">🍎 Apfel</button>
                <button class="food-item" data-points="15">🥜 Erdnüsse</button>
            </div>
        </div>

        <div class="info-panel">
            <h3>Füttere das Erdmännchen!</h3>
            <p>Wähle verschiedene Lebensmittel aus und sammle Punkte.</p>
        </div>
    </div>
    <script src="game.js"></script>
</body>
</html>
