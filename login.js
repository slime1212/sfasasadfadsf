function login() {
    player1 = document.getElementById("player1name").value;
    player2 = document.getElementById("player2name").value;

    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);

    window.location = "play_game.html";
}