// PVector p0 = new PVector();
// PVector p1 = new PVector();
let count  = 0;
let p0 = new p5.Vector();
let p1= new p5.Vector();
let p2 = new p5.Vector();
let p3 = new p5.Vector();

let m = 50;
	let tmin; 
	let tmax; 
	let tdif = 0.01;
	let t; 

let mult = 1;


let eye1;
let eye2;
let imgPath1 = "badu-eye1.png";
let imgPath2 = "badu-eye2.png";

function preload() {
	eye1 = loadImage(imgPath1);
	eye2 = loadImage(imgPath2);
}

function setup() {
tmin = -PI;
tmax = PI; 
t=tmin;

// console.log("hi");
  createCanvas(1000, 1000);
  frameRate(15);
    background(120,87,120);


 
  // stroke(0);
  // strokeWeight(2);

  polarPos(p0, t, m);
  polarPos(p2, t, m);
  
  // while (t < tmax) {
  
    // polarPos(p1, t, m);
    // line(p0.x, p0.y, p1.x, p1.y);
    // p0.set(p1);
    // t += tdif;
    // console.log(p0);
  
  // }
  
}

function draw() {
	// background(random(120,255),20,20);
	rotate(t/30);
	//scale(0.5/4);
	 //translate(width/2, height/4);
	  translate(width/2, height/4);
    polarPos(p1, t, m);
    polarPosInv(p2, t, m);
    //line(p0.x, p0.y, p1.x, p1.y);
   //  noStroke();
     fill(255,0,0);
    //ellipse(p0.x,p0.y,60);
	 //ellipse(p2.x,p2.y,60);


    image(eye2, p0.x,p0.y,100,100);
    image(eye1, p2.x,p2.y,100,100);
    p0.set(p1);
    p2.set(p3);
    	
// console.log(t);
	if (t > 6 || t < -6) {
		mult*=-1;
	}

    t += tdif*mult;
    
// if (count > 5 && count < 10) {
// // var canvas = document.querySelector('canvas');
// // var dataUrl = canvas.toDataURL();  
// // console.log(dataUrl);

// // window.open(dataUrl, "toDataURL() image", "width=1000, height=1000");

// var imgOut = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
// window.location.href=imgOut;
// }
// console.log(count);
// count++;

}

 
function polarPos(v, t, size){
  let sint = sin(t), cost = cos(t);
  let r = (sint * sqrt(abs(cost)))/(sint + 10.5) - 1*sint + 2;
  // convert to Cartesian coordinates``
  v.x = size * r * cost;
  v.y = - size * r * sint;
}


function polarPosInv(v, t, size){
  let sint = sin(t), cost = cos(t)*-1;
  let r = (sint * sqrt(abs(cost)))/(sint + 1.3) - 3*sint + 2;
  // convert to Cartesian coordinates``
  v.x = size * r * cost;
  v.y = - size * r * sint;
}