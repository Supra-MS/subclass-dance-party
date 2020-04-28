window.FlashDancer = class FlashDancer extends BlinkyDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.timeBetweenSteps = 250;
    this.colors = ['red', 'blue', 'green', 'yellow', 'orange'];
    this.colorState = 0;
    this.$inner.removeClass('blinker');
    this.$inner.addClass('flash');
    this.$inner.addClass(this.colors[this.colorState]);
    this.isLarge = false;
    this.initial = 0;
    this.max = 5;
    /*
    this.$inner.on('mouseover', (function() {
      this.$inner.css({'border': '8px solid rgb(134, 8, 198)'});
    })); */
    this.$inner.on('mouseover', this.confetti.bind(this));
    this.$inner.on('mouseover', this.enlarge.bind(this));
    this.$inner.on('mouseout', this.shrink.bind(this));
    this.step();

  }

  step() {
    super.step();
    this.repeat();
  }

  enlarge() {
    this.isLarge = true;
    this.scale();
  }

  shrink() {
    this.isLarge = false;
    this.$inner.css({ 'transform': 'scale(1.0)' });
    this.initial = 0;
  }

  repeat() {
    this.$inner.removeClass(this.colors[this.colorState]);
    if (this.colorState + 1 > this.colors.length - 1) {
      this.colorState = 0;
    } else {
      this.colorState++;
    }
    this.$inner.addClass(this.colors[this.colorState]);
  }

  scale() {
    if (this.isLarge) {
      this.initial = Math.min(this.initial + 1, this.max);
      this.$inner.css({ 'transform': `scale(${this.initial})` });
      setTimeout(this.scale.bind(this), 1000);
    }
  }

  confetti() {
    this.$inner.removeClass(this.colors[this.colorState]);
    this.$inner.addClass('confetti');
    this.$inner.confettiButton({
      hoverOnly: true
    });
    setTimeout(this.$inner.removeClass.bind(this.$inner, 'confetti'), 1000);
  }

};
