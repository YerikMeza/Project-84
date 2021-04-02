canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


Car1_width = 120;
Car1_height = 70;
Car1_x = 10;
Car1_y = 10;
Car1_img = "https://i.postimg.cc/YqdnnNX1/car1.png";

Car2_width = 120;
Car2_height = 70;
Car2_x = 10;
Car2_y = 100;
Car2_img = "https://d29fhpw069ctt2.cloudfront.net/clipart/118084/preview/SimpleDarkBlueCarTopView_preview_d296.png";

background_img = "https://i.postimg.cc/bv5d35nK/racing.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    Car1_imgTag = new Image();
    Car1_imgTag.onload = uploadCar1;
    Car1_imgTag.src = Car1_img;

    Car2_imgTag = new Image();
    Car2_imgTag.onload = uploadCar2;
    Car2_imgTag.src = Car2_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadCar1(){
    ctx.drawImage(Car1_imgTag,Car1_x,Car1_y,Car1_width,Car1_height);
}

function uploadCar2(){
    ctx.drawImage(Car2_imgTag,Car2_x,Car2_y,Car2_width,Car2_height);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
{
    KeyPressed = e.keyCode;
    console.log(KeyPressed);
    if (KeyPressed == "38" )
    {
        Car1_up();
        console.log("up")
    }

    if (KeyPressed == "40" )
    {
        Car1_down();
        console.log("down")
    }

    if (KeyPressed == "37" )
    {
        Car1_left();
        console.log("left")
    }

    if (KeyPressed == "39" )
    {
        Car1_right();
        console.log("right")
    }



    if (KeyPressed == "87" )
    {
        Car2_up();
        console.log("w")
    }

    if (KeyPressed == "83" )
    {
        Car2_down();
        console.log("s")
    }

    if (KeyPressed == "66" )
    {
        Car2_left();
        console.log("d")
    }

    if (KeyPressed == "65" )
    {
        Car2_right();
        console.log("a")
    }
}