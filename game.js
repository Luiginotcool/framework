Game = {}

Game.init = function() {
    App.canvas.onclick = () => {
        console.log(Input.mouseX, Input.mouseY, 10+ Math.random()*50, `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`)
        Graphics.drawCircle(Input.mouseX, Input.mouseY, Math.random()*50, `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`);
    }
}

Game.loop = function(dt) {

}

Game.draw = function() {

}