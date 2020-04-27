$(document).ready(function() {
  // $( '#chesstable i' ).draggable();
  // $( '#chesstable td' ).droppable();
  makeChessBoard();
  window.dancers = [];
  window.dancersLinedUp = false;

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-type');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    if (dancerMakerFunctionName !== 'BlinkyDancer' && dancerMakerFunctionName !== 'FlashDancer') {
      var dancer = new dancerMakerFunction(
        Math.floor(Math.random() * 16),
        Math.floor(Math.random() * 16)
        // 1000
      );
      window.dancers.push(dancer);
      dancer.chessMoves();
      setInterval(function() {
        if (window.dancersLinedUp) {
          return;
        }
        dancer.chessMoves();
      }, 1000);

      $('.chessboard').append(dancer.$inner);

    } else {
      var dancer = new dancerMakerFunction(
        $('body').height() * Math.random(),
        $('body').width() * Math.random(),
        Math.random() * 1000
      );

      window.dancers.push(dancer);
      dancer.step();

      $('body').append(dancer.$node);
      dancer.$node.append(dancer.$inner);
    }

  });

  $('.lineup').on('click', function(event) {
    lineUp(dancers);
  });

  $('.boardLineUp').on('click', function(event) {
    window.dancersLinedUp = !window.dancersLinedUp;
    chessLineup(dancers);
  });

  $('.pair').on('click', function(event) {
    $('body').find('.fas').remove();
    $('body').find('.dancer').remove();

    var dancer = new Dancer();
    dancer.boardLineUp();

    var king = new KingDancer();
    var queen = new QueenDancer();
    var rook = new RookDancer();
    var knight = new RookDancer();
    var bishop = new BishopDancer();
    var pawn = new PawnDancer();

    setTimeout(function() {

      king.centerDancer('.kingdanceL', '.kingdanceR', 'kingdance', KingDancer);
      queen.centerDancer('.queendanceL', '.queendanceR', 'queendance', QueenDancer);
      rook.centerDancer('.rookdancetpL', '.rookdancebtmR', 'rookdance', RookDancer);
      knight.centerDancer('.knightdancetpR', '.knightdancetpL', 'knightdance', KnightDancer);
      bishop.centerDancer('.bishopdancebtmL', '.bishopdancebtmR', 'bishopdance', BishopDancer);
      pawn.centerDancer('.pawndancer5', '.pawndancer17', 'pawndance', PawnDancer);


      setTimeout(function() {
        var king1 = king.dancers[king.dancers.length - 1];
        var king2 = king.dancers[king.dancers.length - 2];
        var queen1 = queen.dancers[queen.dancers.length - 1];
        var queen2 = queen.dancers[queen.dancers.length - 2];
        var rook1 = rook.dancers[rook.dancers.length - 1];
        var rook2 = rook.dancers[rook.dancers.length - 2];
        var knight1 = knight.dancers[knight.dancers.length - 1];
        var knight2 = knight.dancers[knight.dancers.length - 2];
        var bishop1 = bishop.dancers[bishop.dancers.length - 1];
        var bishop2 = bishop.dancers[bishop.dancers.length - 2];
        var pawn1 = pawn.dancers[pawn.dancers.length - 1];
        var pawn2 = pawn.dancers[pawn.dancers.length - 2];

        king1.$inner.confettiButton({
          hoverOnly: true
        });

        king2.$inner.confettiButton({
          hoverOnly: true
        });

        queen1.$inner.confettiButton({
          hoverOnly: true
        });

        queen2.$inner.confettiButton({
          hoverOnly: true
        });

        rook1.$inner.confettiButton({
          hoverOnly: true
        });

        rook2.$inner.confettiButton({
          hoverOnly: true
        });

        knight1.$inner.confettiButton({
          hoverOnly: true
        });

        knight2.$inner.confettiButton({
          hoverOnly: true
        });

        bishop1.$inner.confettiButton({
          hoverOnly: true
        });

        bishop2.$inner.confettiButton({
          hoverOnly: true
        });

        pawn1.$inner.confettiButton({
          hoverOnly: true
        });

        pawn2.$inner.confettiButton({
          hoverOnly: true
        });

        var interval = setInterval(function() {
          if (window.dancersLinedUp) {
            return;
          } else {
            king1.chessMoves('rotate');
            king2.chessMoves();
            queen1.chessMoves('rotate');
            queen2.chessMoves();
            rook1.chessMoves('rotate');
            rook2.chessMoves();
            knight1.chessMoves('rotate');
            knight2.chessMoves();
            bishop1.chessMoves('rotate');
            bishop2.chessMoves();
            pawn1.chessMoves('shake');
            pawn2.chessMoves();

          }

        }, 1000);


        $('.chessboard').on('dblclick', function(event) {
          clearInterval(interval);
          king.repositionK('.fa-chess-king', KingDancer);
          queen.repositionQ('.fa-chess-queen', QueenDancer);
          rook.repositionR('.fa-chess-rook', RookDancer);
          knight.repositionKn('.fa-chess-knight', KnightDancer);
          bishop.repositionB('.fa-chess-bishop', BishopDancer);
          pawn.repositionP('.pawndance', '.pawndancer', PawnDancer);
        });

      }, 1000);

    }, 2500);

  });

  $('.clear').on('keydown', function(event) {
    $('body').find('.fas').remove();
    $('body').find('.dancer').remove();
  });

  // Interactions of close dancers
  setInterval(() => {
    for (var k = 0; k < window.dancers.length; k++) {
      var dancer = window.dancers[k];
      dancer.$inner.removeClass('close');
    }
    for (var i = 0; i < window.dancers.length; i++) {
      for (var j = i + 1; j < window.dancers.length; j++) {
        var dancer1 = window.dancers[i];
        var dancer2 = window.dancers[j];
        if (dancer2 === dancer1) { continue; }
        var dx = Math.abs(dancer1.left - dancer2.left);
        var dy = Math.abs(dancer1.top - dancer2.top);
        if (dx <= 1 && dy <= 1) {
          dancer1.$inner.addClass('close');
          dancer2.$inner.addClass('close');
        }
      }
    }
  }, 300);

});

var makeChessBoard = function() {
  var table = document.createElement('table');
  for (var i = 0; i < 16; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 16; j++) {
      var td = document.createElement('td');
      if (i % 2 === j % 2) {
        td.className = 'white';
      } else {
        td.className = 'black';
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  $('.chessboard').append(table);
};
