const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: "1",
    loop: true,
    autoplay: false,
    centerMode: true,
  
});

/**
 * Animate text in H1
 * @param el
 * @param toRotate
 * @param period
 * @constructor
 * use construct  <span class="typewrite" data-period="2000" data-type='[ "word1", "СЂР°Р±РѕС‚Р°С‚СЊ", "word2"]'>
 * <span class="wrapword">РїСѓС‚РµС€РµСЃС‚РІРѕРІР°С‚СЊ</span>
 * </span>
 */

 var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrapword">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrapword { border-right: 0.08em solid #0366d6}";
    document.body.appendChild(css);
};