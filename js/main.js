var scene;

function startGame(){
  viewport.start();
  scene = new primitive_rect(500,300,"black",0,0);
}

function primitive_rect(width,height,color,x,y){
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  ctx = viewport.context;
  ctx.fillStyle = color;
  ctx.fillRect(this.x,this.y, this.width,this.height);
}

function sprite(args){
  var s = {};

  s.context = args.context;
  s.width = args.width;
  s.height = args.height;
  s.image = args.image;

  return s;
}

var viewport = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 650;
    this.canvas.height = 300;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas,document.body.childNodes[0]);
  }
}
