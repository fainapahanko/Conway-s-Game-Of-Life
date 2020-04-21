const canvas = document.querySelector("#gamefield")
const ctx = canvas.getContext("2d")

const game = new GameOfLife()
game.gameSetUp()

window.onload = () => {

    document.querySelector("#start-random").addEventListener("click", () => {
        game.arrayRandomize();
        game.fillArray();
        window.setInterval(() => {
            game.runGame();
        }, 300)
    })

    document.querySelector("#stop").addEventListener("click", () => {
        game.gameSetUp();
    })

}


