function Star() {
    this.rad = random(30,height)
    this.ang = random(0,360)
  
    this.update = function() {
      this.rad = this.rad + speed;
      if(this.rad>=height){
        this.rad = random(30,height)
      }
    
    };
  
    this.show = function() {
      fill(255)
      this.r = map(this.rad, 0, width, 5, 15);
      circle(this.rad * cos(this.ang),this.rad * sin(this.ang),this.r)
    };
  }