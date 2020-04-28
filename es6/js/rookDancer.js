window.RookDancer = class RookDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.element.classList.add('fa-chess-rook');
    this.moves = [[0, 2], [0, -2], [2, 0], [-2, 0], [0, 3], [0, -3], [3, 0], [-3, 0]];

  }

  step() {
    super.step();
  }

  chessMoves(animationName) {
    super.chessMoves();
    animationName = animationName || 'squash';
    this.animate(animationName);
  }
};
