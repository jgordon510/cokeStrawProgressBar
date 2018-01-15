var Loader = function(demo) {
    this.States = {};
    // *****************************************************************************************
    // LoadState State
    this.States.LoadState = function() {};
    this.States.LoadState.prototype = {
        preload: function() {
            for (var i = 0; i < 60; i++) {
                var frameSpacer = "";
                if (i < 10) frameSpacer = "0";
                var frameFileName = 'assets/frame_' + frameSpacer + i.toString() + '.gif';
                game.load.image('frame' + i.toString(), frameFileName);
            }
        },
        create: function() {
            game.loader = game.add.sprite(0, 0, 'frame0');
            game.loadState = 'initial';
            game.loadFrame = 0;
            //for demo purposes
            if(demo)setTimeout(progress, 1000);
        },
        update: function() {
            if (game.loadState === 'initial') {
                if (game.loadFrame < 30) {
                    game.loadFrame++;
                    game.loader.loadTexture('frame' + game.loadFrame);
                }
                else {
                    game.loadState = 'loading';
                    game.loadPercentage = 0;
                }
            }
            else if (game.loadState === 'loading') {
                game.loadFrame = 30 + Math.floor(game.loadPercentage / 10);
                game.loader.loadTexture('frame' + game.loadFrame);
                if(game.loadPercentage >= 100) game.loadState = 'done'
            }
            else if (game.loadState === 'done') {
                if (game.loadFrame < 59) {
                    game.loadFrame++;
                    game.loader.loadTexture('frame' + game.loadFrame);
                }
            }
        }
    };
    this.getLoadPercentage = function() {
        console.log(game.loadPercentage)
        return game.loadPercentage;
    }
    this.setLoadPercentage = function(value) {
        game.loadPercentage = value;
    }
    this.destroy = function() {
        game.destroy();
    }
    var game = new Phaser.Game(720, 402, Phaser.CANVAS, 'loaderDiv', this.States.LoadState);
};

var loader = new Loader(true);

var progress = function() {
    console.log(loader.getLoadPercentage())
    if(loader.getLoadPercentage() < 100)
    {
        loader.setLoadPercentage(loader.getLoadPercentage()+1);
        setTimeout(progress, 50);
    } else
    {
        setTimeout(loader.destroy, 2000);
    }
};

