window.PawnDancer = class PawnDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.element.classList.add('fa-chess-pawn');
    this.moves = [[0, 1], [0, -1]];
    /*
    this.$inner.removeClass('fa-chess-knight');
    this.$inner.removeClass('flip');
    this.$inner.addClass('fa-chess-pawn');
    this.$inner.addClass('bounce'); */
    // this.setPosition(top, left);

  }

  step() {
    super.step();
  }

  chessMoves(animationName) {
    super.chessMoves();
    animationName = animationName || 'bounce';
    this.animate(animationName);
  }
};

