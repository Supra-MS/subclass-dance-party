var lineUp = function(dancers) {
  var topValue = '50%';
  var leftIncrement = Math.min(100 / (dancers.length + 1));
  var leftValue = leftIncrement;

  if ( window.dancersLinedUp ) {
    window.dancers.forEach(function(dancer, index) {
      // $(dancer.element).hide();
      dancer.setPosition(-2000, 0);
    });
    setTimeout(function () {
      window.dancers.forEach(function(dancer, index) {
        $(dancer.element).show();
      });
    }, 3000);

    window.dancersLinedUp = false;

  } else {
    window.dancers.forEach(function(dancer) {
      dancer.setPosition(topValue, `${leftValue}`);
      leftValue += leftIncrement;
    });
    window.dancersLinedUp = true;
  }
};

var chessLineup = function() {
  $('i').remove();
  var pixPerMove = 30;
  window.dancers = [];
  var createDancer = function(top, left, dancerClass) {
    var dancer = new dancerClass (top, left);
    window.dancers.push(dancer);
    $('.chessboard').append(dancer.$inner);
    dancer.setPosition(top * pixPerMove, left * pixPerMove);
    var interval = setInterval(function() {
      if (window.dancersLinedUp) {
        return;
      }
      dancer.chessMoves();
    }, 1000);

    $('.chessboard').on('dblclick', function(event) {
      clearInterval(interval);
    });
  };

  var top = 4;
  var left = 1;
  for (var i = 0; i < 8; i++) {
    createDancer(top + i, left, PawnDancer);
  }

  var left = 14;
  for (var i = 0; i < 8; i++) {
    createDancer(top + i, left, PawnDancer);
  }

  createDancer(4, 0, RookDancer);
  createDancer(5, 0, KnightDancer);
  createDancer(6, 0, BishopDancer);
  createDancer(7, 0, QueenDancer);
  createDancer(8, 0, KingDancer);
  createDancer(9, 0, BishopDancer);
  createDancer(10, 0, KnightDancer);
  createDancer(11, 0, RookDancer);

  createDancer(4, 15, RookDancer);
  createDancer(5, 15, KnightDancer);
  createDancer(6, 15, BishopDancer);
  createDancer(7, 15, KingDancer);
  createDancer(8, 15, QueenDancer);
  createDancer(9, 15, BishopDancer);
  createDancer(10, 15, KnightDancer);
  createDancer(11, 15, RookDancer);

};