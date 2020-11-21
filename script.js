var nav = document.querySelector('.header__nav');

class Scroll {
    constructor(obj) {
        if (typeof obj.el == 'string') {
            this.el = document.querySelector(obj.el);
        } else if (obj.el instanceof HTMLElement) {
            this.el = obj.el;
        }

        this.top = obj.top;
        this.unit = obj.unit;
        this.el.style.position = 'fixed';
        this.el.style.top = this.scroll();

        window.addEventListener('scroll', () => this.scroll())
    }

    scroll() {
        this.window = this.scrollNumber();

        if (this.window - window.pageYOffset > 0) {
            this.el.style.top = this.window - window.pageYOffset + 'px';
        } else {
            this.el.style.top = 0;
        }

    }

    scrollNumber() {
        if (this.unit == 'px') {
            return this.top > 0 ? this.top : 0;
        } else if (this.unit == '%' || this.unit == undefuned) {
            return this.top = calc(window.innerHeight, this.top) - this.el.clientHeight;
        }
    }
    calc(height, top) {
        return height / 100 * top;
    }

}
const element = new Scroll({
    el: nav,
    top: 700,
    unit: 'px'
});


function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var content = document.querySelector('.header__content');
class Hover {
    constructor(obj) {
        this.el = obj.el;
        if (typeof obj.el == 'string') {
            this.el = document.querySelector(obj.el);
        }
        else if (obj.el instanceof HTMLElement) {
            this.el = obj.el;
        }
        this.el.addEventListener('mouseover', () => this.move())
    }



    move() {
        this.el.style.position = 'absolute';
        this.el.style.top = getRandom(100, 600) + 'px';
        this.el.style.left = getRandom(100, 1000) + 'px';

    }
}

const example = new Hover({
    el: content,

});