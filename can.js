var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//c.fillRect(100,100,100,100);
//c.fillRect(400,100,100,100);
//c.fillRect(300,300,100,100);
// circle
/*for( var i=0; i<100; i++){
var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;
c.beginPath();
c.arc(x,y,10,0,Math.PI * 2,false);
var gradient = c.createLinearGradient(0, 200, 170, 0);
gradient.addColorStop("0.0", "magenta");
gradient.addColorStop("0.20" ,"blue");
gradient.addColorStop("0.50", "red");    
// Fill with gradient
c.strokeStyle = gradient;
c.lineWidth = 5;
//c.strokeRect(20, 20, 150, 100);
c.stroke();
}*/






function Circle(x, y,dx ,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
     this.dy = dy;
     this.radius = radius;
    this.draw = function(){
        c.beginPath();
c.arc( this.x, this.y, this.radius,0,Math.PI * 2,false);
var gradient = c.createLinearGradient(0, 200, 170, 0);
gradient.addColorStop("0.0", "magenta");
gradient.addColorStop("0.20" ,"blue");
gradient.addColorStop("0.50", "red");    
// Fill with gradient
c.strokeStyle = gradient;
c.lineWidth = 5;
//c.strokeRect(20, 20, 150, 100);
c.stroke();
    c.fillStyle = "#3B99CB";
    c.fill();
    
    }
    this.update = function(){
     if( this.x +  this.radius >innerWidth ||  this.x -  this.radius<0 ) {
         this.dx = -  this.dx;
    }
    if( this.y +  this.radius >innerHeight ||  this.y -  this.radius<0){
         this.dy = -  this.dy;
    }
     this.x +=  this.dx;
     this.y +=  this.dy;
    this.draw(); 
    }
}



var circleArray = [];
for( var i=0; i<100; i++){

radius = 30;    
var x = Math.random() * (innerWidth - radius * 2) + radius;
var dx = (Math.random() -0.5) ;
var y = Math.random() * (innerHeight - radius * 2) + radius ;
var dy = (Math.random() -0.5) ;
    circleArray.push(new Circle(x,y,dx,dy,radius)); 


}





function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    
   
     for (var i =0; i <circleArray.length; i++){
         circleArray[i].update();
     }
   }
animate();
