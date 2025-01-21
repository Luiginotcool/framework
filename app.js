App = {}





App.init = function() {
    App.frames = 0;
    App.oldTimeStamp = 0;
    App.canvas = document.getElementById("canvas");
    App.width = window.innerWidth;
    App.height = window.innerHeight;
    App.canvas.width = App.width;
    App.canvas.height = App.height;


    App.noLoop = false;
    App.drawBackground = false;


    Graphics.init(App.canvas);
    Input.init();
    Game.init();

    App.testGraphics();


    window.requestAnimationFrame(App.appLoop);
}

App.appLoop = function(timeStamp) {
    if (App.noLoop) {
        window.requestAnimationFrame(App.appLoop);
    } else {

        App.dt = (timeStamp - App.oldTimeStamp);
        App.oldTimeStamp = timeStamp;
        let fps = Math.round(1000 / App.dt);

        if (App.drawBackground) {
            Graphics.background();
        }
        else {
            Graphics.fillRect(9, 17, 41, 17, "black")
        }


        Graphics.drawFps(fps);
        App.frames++;
        App.noLoop = false;
        window.requestAnimationFrame(App.appLoop);
    }
}



App.testGraphics = function() {
    Graphics.background();
    Graphics.drawCircle(100, 200, 20);
}



App.verbose = function(array) {
    array.forEach(node => {console.log(node)})
}

App.init();