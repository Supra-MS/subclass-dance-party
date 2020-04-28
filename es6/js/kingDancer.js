window.KingDancer = class KingDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.element.classList.add('fa-chess-king');
    this.moves = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  }

  step() {
    super.step();
  }

  chessMoves(animationName) {
    super.chessMoves();
    animationName = animationName || 'flip';
    this.animate(animationName);
  }
};
