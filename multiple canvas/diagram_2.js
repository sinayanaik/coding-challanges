let diagram_2 = new p5(( sketch ) => {

    let x = 100;
    let y = 100;
  
    sketch.setup = () => {
      let screen2 = sketch.createCanvas(200, 200);
      screen2.parent("2nd-canvas")
    };
  
    sketch.draw = () => {
      sketch.background(0);
      sketch.fill(255);
      sketch.rect(x,y,50,50);
    };
  });