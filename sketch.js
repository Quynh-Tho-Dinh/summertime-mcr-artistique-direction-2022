var song;
var input;
var namep;

/*function preload () {
song = loadSound("summertime-mcr.mp3");}*/

function setup() {
  /*h1= image(bg1,0,0);
  h2= image(bg2,0,0);
  h3= image(bg3,0,0);*/
  createCanvas(1920,1080);
  input = createInput ('#proudly-made-by');
  //namep = createP('your name');
}

let mylyrics = ["If you stay", "I would even wait all night","Or until my heart explodes","How long until we find our way","In the dark and out of harm?"]

let mylyrics2 = ["You can run away with me","ANYTIME YOU WANT!!!"]

function get_random (list) {
  return list[Math.floor((Math.random()*list.length))];
}

function draw() {
  /*float (j='h1');
  float (k='h2');
  float (m='h3');
  image(get_random([j,k,m]),20,20);*/
  textSize(30);
  text (input.value(),5,490);
  //input.html(input.value());
  if (mouseIsPressed) {
    //image(img,0, height/20, img.width / 20, img.height / 20);
      if (song.isPlaying() == false) {
        song.play()
      }
          textSize(20);
            float (x='Monospace');
            float (w='Pinyon Script');
            float (q='Open Sans');
            float (r="Helvetica");
          textFont( get_random ([x,w,q,r]));
          //var line3 = "anytime you want";
          //var line4 = line3 + "!!!";
          text(get_random(mylyrics2),mouseX+40,mouseY)
    float (a= color (255,255,255));     
    float (b= color (255,215,255));
    float (c= color (121,0,201));
    float (d= color (224,22,45));
    float (e= color (222,0,148));
    fill( get_random ([a,b,c,d,e]));
    stroke (255,0,224);
    strokeWeight(2);
  } 
  else {
        textSize(20);
        textFont ('Helvetica');
    //var line1 = "you can run away with me";
    //var line2 = line1 + "!!!";
    float (a= color (0,0,255));
    float (b= color (255,0,224));
    float (c= color (202,0,242));
    float (d= color (255,0,127));
    float (e= color (0,242,245));
    text(get_random(mylyrics),mouseX+40,mouseY);
    fill(255);
    stroke (get_random ([a,b,c,d,e]));
    strokeWeight(1);
  }
  ellipse(mouseX, mouseY, 40, 40);
  //hex(mouseX, mouseY,80,80,);
}

function keyTyped() {
  if (key === 'a') {
    clear();
  }
}