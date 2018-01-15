# cokeStrawProgressBar
a little javascript progressBar utility built around phaser and a meme gif

Included in the code is a small demo function that shows how to use it.

start a loader in div 'loaderDiv':
var myLoader = newLoader(false) //an input of true will run it in demo mode

set the loader percentage:
myLoader.setLoadPercentage(51);

get the loader percentage:
myLoader.getLoadPercentage();

destroy the loader:
myLoader.destroy();
