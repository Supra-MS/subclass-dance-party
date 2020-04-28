window.QueenDancer = class QueenDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.element.classList.add('fa-chess-queen');
    this.moves = [[2, 2], [2, -2], [-2, 2], [-2, -2], [-2, 0], [0, 2], [0, -2], [2, 0]];

  }

  step() {
    super.step();
  }

  chessMoves(animationName) {
    super.chessMoves();
    animationName = animationName || 'glow';
    this.animate(animationName);
  }
};
