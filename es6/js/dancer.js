// Creates and returns a new dancer object that can step
class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<div class="dancer"></div>');
    this.$inner = $('<i class="fas inner"></i>');
    this.top = top;
    this.left = left;
    this.element = this.$inner.get(0);
    this.timeBetweenSteps = timeBetweenSteps;
    this.setPosition(top, left);
    this.pixPerMove = 30;
    this.dancers = [];

  }

  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  chessMoves() {
    var move = this.moves[Math.floor(Math.random() * this.moves.length)];
    var newTop = this.top + move[0];
    var newLeft = this.left + move[1];
    if (newLeft >= 0 && newLeft <= 15 && newTop >= 0 && newTop <= 15) {
      this.top = newTop;
      this.left = newLeft;
    }
    this.setPosition(this.top * this.pixPerMove, this.left * this.pixPerMove);
  }

  setPosition(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$inner.css(styleSettings);
  }

  animate(animationName) {
    this.element.classList.remove(animationName);
    void this.element.offsetWidth;
    this.element.classList.add(animationName);
  }

  createDancer(addClas, top, left, addFn) {
    var dancer = new addFn(top, left);
    this.dancers.push(dancer);
    window.dancers.push(dancer);
    dancer.$inner.addClass(addClas);
    dancer.setPosition(top * this.pixPerMove, left * this.pixPerMove);
    $('.chessboard').append(dancer.$inner);
  }

  boardLineUp() {
    var top = 4;
    var left = 1;
    for (var i = 0; i < 8; i++) {
      this.createDancer(`pawndancer${top + i}`, top + i, left, PawnDancer);
    }

    var left = 14;
    for (var i = 0; i < 8; i++) {
      this.createDancer(`pawndancer${14 + i}`, top + i, left, PawnDancer);
    }

    this.createDancer('rookdancetpL', 4, 0, RookDancer);
    this.createDancer('knightdancetpL', 5, 0, KnightDancer);
    this.createDancer('bishopdancetpL', 6, 0, BishopDancer);
    this.createDancer('queendanceL', 7, 0, QueenDancer);
    this.createDancer('kingdanceL', 8, 0, KingDancer);
    this.createDancer('bishopdancebtmL', 9, 0, BishopDancer);
    this.createDancer('knightdancebtmL', 10, 0, KnightDancer);
    this.createDancer('rookdancebtmL', 11, 0, RookDancer);

    this.createDancer('rookdancetpR', 4, 15, RookDancer);
    this.createDancer('knightdancetpR', 5, 15, KnightDancer);
    this.createDancer('bishopdancetpR', 6, 15, BishopDancer);
    this.createDancer('kingdanceR', 7, 15, KingDancer);
    this.createDancer('queendanceR', 8, 15, QueenDancer);
    this.createDancer('bishopdancebtmR', 9, 15, BishopDancer);
    this.createDancer('knightdancebtmR', 10, 15, KnightDancer);
    this.createDancer('rookdancebtmR', 11, 15, RookDancer);
  }

  centerDancer(rmClassL, rmClassR, addClass, addFn) {
    $('body').find(rmClassL).remove();
    $('body').find(rmClassR).remove();
    this.createDancer(addClass, 7, 7, addFn);
    this.createDancer(addClass, 8, 8, addFn);

  }

  repositionK(addClass, addFn) {
    $(addClass).remove();
    this.createDancer(addClass, 8, 0, KingDancer);
    this.createDancer(addClass, 7, 15, KingDancer);
  }

  repositionQ(addClass, addFn) {
    $(addClass).remove();
    this.createDancer(addClass, 8, 15, QueenDancer);
    this.createDancer(addClass, 7, 0, QueenDancer);

  }

  repositionR(addClass, addFn) {
    $(addClass).remove();
    this.createDancer(addClass, 4, 15, RookDancer);
    this.createDancer(addClass, 11, 15, RookDancer);
    this.createDancer(addClass, 4, 0, RookDancer);
    this.createDancer(addClass, 11, 0, RookDancer);
  }

  repositionKn(addClass, addFn) {
    $(addClass).remove();
    this.createDancer(addClass, 5, 15, KnightDancer);
    this.createDancer(addClass, 10, 15, KnightDancer);
    this.createDancer(addClass, 5, 0, KnightDancer);
    this.createDancer(addClass, 10, 0, KnightDancer);
  }

  repositionB(addClass, addFn) {
    $(addClass).remove();
    this.createDancer(addClass, 6, 15, BishopDancer);
    this.createDancer(addClass, 9, 15, BishopDancer);
    this.createDancer(addClass, 6, 0, BishopDancer);
    this.createDancer(addClass, 9, 0, BishopDancer);
  }

  repositionP(rmclass, addClass, addFn) {
    $('body').find(rmclass).remove();
    this.createDancer(addClass, 5, 1, PawnDancer);
    this.createDancer(addClass, 7, 14, PawnDancer);
  }
}

