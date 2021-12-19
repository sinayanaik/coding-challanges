let diagram_1 = new p5(( sketch ) => {

    let x = 100;
    let y = 100;
  
    sketch.setup = () => {
      let screen1 = sketch.createCanvas(200, 200);
      screen1.parent("1st-canvas")
    };
  
    sketch.draw = () => {
      sketch.background(0);
      sketch.fill(255);
      sketch.rect(x,y,50,50);
    };
  });