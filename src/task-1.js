
const NORTH = "north",
    EAST = "east",
    SOUTH = "south",
    WEST = "west";

class Rover {
    constructor(x = 0, y = 0, direction = NORTH) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        if(!Number.isInteger(x) || !Number.isInteger(y) || ![NORTH,EAST,SOUTH,WEST].includes(direction)){
            throw TypeError()
        }
    }

    left() {
            if(this.direction == "east")                this.direction = "north"     //up
            else if(this.direction == "west")           this.direction  = "south"    //down
            else if(this.direction == "north")          this.direction  = "west"    //left
            else if(this.direction == "south")          this.direction  = "east"   //right
        return this
    }

    right() {
          if(this.direction == "east")              this.direction = "south"    //down
          else if(this.direction == "west")         this.direction = "north"    //up
          else if(this.direction == "south")        this.direction = "west"     //left
          else if(this.direction == "north")        this.direction = "east"     //right
        return this
    }

    move(n) {  
      if(!Number.isInteger(n))                  throw TypeError() 

      if(this.direction == "east")              this.x+=n        //right
      if(this.direction == "west")              this.x+=-n       //left
      if(this.direction == "north")             this.y+=n       //up
      if(this.direction == "south")             this.y+=-n      //down

        return this
    }

    getPosition() {return {x:this.x,y:this.y}}
    getDirection() {return this.direction}
}

export { NORTH, EAST, SOUTH, WEST, Rover };
