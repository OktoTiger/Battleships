var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
while (isSunk == false) {
    guess = prompt("Вы находитесь на странице с игрой Морской бой.\nВведите число от 0-6, чтобы попытаться потопить корабль:");
    // Объявления пeременных

    if (guess < 0 || guess > 6) {
    alert("Пожалуйста, введите валидное значение (0-6)!");
    } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
        alert("Попал!");
        hits = hits + 1;
        if (hits == 3) {
        isSunk = true;
        alert("Вы потопили мой корабль!");
          }
        }
        else {
            alert("Промах");}
    }
}
var stats = "У вас было " + guesses + " попыток потопить мой корабль, " +
"таким образов ваша точность равна " + (3/guesses);
alert(stats);