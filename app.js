var canvas = document.querySelector("canvas")
var c = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize',function(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})


var keyState = {};    
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);    
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

x = 100;


var x = 200
var y = 200

// function getDistance(ax,ay,){

// }

var player = {
    x: 650,
    y: 220,
    width: 40,
    height: 40
}

var wall = {
    x: 200,
    y: 200,
    width: 400,
    height: 40
}

// var leftspeed = 1

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,window.innerWidth,window.innerHeight)

    let leftspeed = 1
    let rightspeed = 1
    let upspeed = 1
    let downspeed = 1



            if(player.y <= wall.y + wall.height && player.y > wall.y || player.y + player.height  <= wall.y+wall.height && player.y + player.height > wall.y){
                if(player.x -2< wall.x + wall.width && player.x > wall.x){
                    leftspeed = 0
                }else if(player.x + player.width +2 > wall.x && player.x + player.width < wall.x + wall.width){
                    rightspeed = 0
                }
            }

            if(player.x <= wall.x + wall.width && player.x > wall.x || player.x + player.width  <= wall.x+wall.width && player.x + player.width > wall.x){
                if(player.y -2 < wall.y + wall.height && player.y > wall.y){
                    upspeed = 0
                }else  if(player.y + player.height +2> wall.y && player.y + player.height < wall.y + wall.height){
                    downspeed = 0
                }
            }


          


    if(keyState[37] || keyState[65]) {
        // console.log('left')
        player.x-=leftspeed
    }
    if(keyState[39] || keyState[68]) {
        // console.log('right')
        player.x+=rightspeed
    }
    if(keyState[38] || keyState[87]) {
        // console.log('up')
        player.y-=upspeed
    }
    if(keyState[40] || keyState[83]) {
        // console.log('down')
        player.y+=downspeed
    }
   

    c.fillRect(player.x,player.y,player.width,player.height)

    

    

    

    c.fillRect(wall.x,wall.y,wall.width,wall.height)


    // c.strokeRekt(x,y,20,20)
}

animate()