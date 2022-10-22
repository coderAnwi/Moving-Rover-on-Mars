canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var rover_x = 10;
var rover_y = 10;
var rover_width = 100;
var rover_height = 90;

var nasa = ["nasa0.jpg","nasa1.jpg","nasa2.jpg","nasa3.jpg","nasa4.jpg"];
var k = Math.floor(Math.random()*5);
bgimg = nasa[k];
roverimg = "rover.png";


function add() {
    bg_imgTag = new Image(); 
    bg_imgTag.onload = uploadBackground;
    bg_imgTag.src = bgimg;

    rover_imgTag = new Image(); 
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = roverimg;
    
}

function uploadBackground() {
    ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;

    if(keyPressed == '37' )
    {
        left();
        
    }

    if(keyPressed == '38' )
    {
        up();
        
    }

    if(keyPressed == '39' )
    {
        right();
        
    }

    if(keyPressed == '40' )
    {
        down();
        
    }
} 

function right() {
    if(rover_x<=700){
        rover_x+= 10;
    uploadBackground();
    uploadrover();
    console.log(rover_x);
    }
}

function left() {
    if(rover_x>0){
        rover_x-= 10;
    uploadBackground();
    uploadrover();
    console.log(rover_x);
    }
}

function down() {
    if(rover_y<=510){
        rover_y+= 10;
    uploadBackground();
    uploadrover();
    console.log(rover_y);
    }
}

function up() {
    if(rover_y>0){
        rover_y-= 10;
    uploadBackground();
    uploadrover();
    console.log(rover_y);
    }
}

