App = {}




App.init = function() {
    App.canvas = document.getElementById("canvas");
    App.width = window.innerWidth;
    App.height = window.innerHeight;
    App.canvas.width = App.width;
    App.canvas.height = App.height;
    App.frames = 0;
    App.oldTimeStamp = 0;

    App.noLoop = false;

    Graphics.context = App.canvas.getContext("2d");
    Graphics.fg = "black"
    Graphics.bg = "#776065"

    App.testGraphics();


    window.requestAnimationFrame(App.gameLoop);
}

App.gameLoop = function(timeStamp) {
    if (App.noLoop) {
        window.requestAnimationFrame(App.gameLoop);
    } else {
        App.dt = (timeStamp - App.oldTimeStamp);
        App.oldTimeStamp = timeStamp;

        let fps = Math.round(1000 / App.dt);

        Graphics.background();
        Graphics.drawFps(fps);
        App.frames++;

        App.noLoop = false;
        window.requestAnimationFrame(App.gameLoop);
    }
}


App.testGraphics = function() {
    Graphics.background();
    Graphics.drawCircle(100, 200, 20);
}


App.init();