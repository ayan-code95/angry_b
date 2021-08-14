class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility=255
  }
display()
{
  console.log(this.body.speed)


if(this.body.speed>3){
  World.remove(world,this.body)

  push()
  tint(255, this.visibility)
  super.display()
  this.visibility-=5
  pop()
}
else{

  super.display()
 

}
}
};
