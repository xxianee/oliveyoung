let img_01;
let img_02;
let img_03;
let img_04;
let img_05;
let img_06;
let img_07;

let state=0;

function preload(){
  img_01 = loadImage('01.png');
  img_02 = loadImage('02.png');
  img_03 = loadImage('03.png');
  img_04 = loadImage('04.png');
  img_05 = loadImage('05.png');
  img_06 = loadImage('06.png');
  img_07 = loadImage('07.png');
}

function setup() {
  createCanvas(393, 852);
}

function draw() {
  background(255);
  if(state==0){
  image(img_01, 0,0,393,128);
  image(img_02,0,128,393,284);
  image(img_03,0,412,393,440);
  image(img_05, 320, 688,60,60);
  image(img_04, 0, 764, 393, 88);
}else if(state == 1){
  image(img_01, 0,0,393,128);
  image(img_02,0,128,393,284);
  image(img_03,0,412,393,440);
  image(img_06,0,612,393,152);
  image(img_05, 320, 688,60,60);
  image(img_04, 0, 764, 393, 88);}
}

function mouseClicked(){
  if(mouseX>=320 && mouseX <=380){
    if(mouseY>= 688 && mouseY <=748){
      if(state ==0){
        state = 1;
      }else if(state ==1){
        state=0;
      }
    }
  }
}