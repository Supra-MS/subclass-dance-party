window.BlinkyDancer = class BlinkyDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$inner.removeClass('fas');
    this.$inner.addClass('blinker');

    this.$node.append(this.$inner);
    // this.$inner.on('click', this.blink.bind(this));
    // this.step();
  }

  step() {
    super.step();
    this.$node.toggle();
  }

  setPosition(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }
};


/* BlinkyDancer.prototype.blink = function() {
  this.$inner.addClass('blinker');
  setTimeout(this.$inner.removeClass.bind(this.$inner, 'blinker'), 1000);
}; */