window.KnightDancer = class KnightDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$inner.addClass('fa-chess-knight');
    this.moves = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
    // this.$inner.addClass('flip');
    // this.element.classList.add('fa-chess-knight');

  }

  step() {
    super.step();
  }

  chessMoves(animationName) {
    super.chessMoves();
    animationName = animationName || 'shake';
    this.animate(animationName);
  }
};
