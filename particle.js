class Particle {
  constructor(x, y, hu, firework) {
    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifespan = 255;
    this.hu = hu;
    this.acc = createVector(0, 0);

    if (this.firework) {
      this.vel = createVector(0, random(-15, -10)); // bay cao hơn
    } else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(6, 18)); // lan rộng hơn, pháo to hơn
    }
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  done() {
    return this.lifespan < 0;
  }

  show() {
    colorMode(HSB);

    if (!this.firework) {
      strokeWeight(4); // hạt pháo to hơn
      stroke(this.hu, 255, 255, this.lifespan);
    } else {
      strokeWeight(6); // tia pháo chính to hơn
      stroke(this.hu, 255, 255);
    }

    point(this.pos.x, this.pos.y);
  }
}
