window.BishopDancer = class BishopDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.element.classList.add('fa-chess-bishop');
    this.moves = [[2, 2], [2, -2], [-2, 2], [-2, -2]];
  }

  step() {
    super.step();
  }

  chessMoves(animationName) {
    super.chessMoves();
    animationName = animationName || 'rotate';
    this.animate(animationName);
  }
};