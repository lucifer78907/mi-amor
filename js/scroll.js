class scroll {
  #nav = document.querySelector('.nav');
  #sections = document.querySelectorAll('.section');
  #footer = document.querySelector('.footer');
  #allSections = [this.#nav, ...this.#sections, this.#footer];
  #currIndx = 0;

  constructor() {
    this._addEventListner();
  }

  _addEventListner() {
    document.addEventListener('wheel', this._scroll.bind(this));
  }

  _scroll(eve) {
    if (eve.deltaY > 0) {
      this._scrollIntoView();
    }
  }

  _scrollIntoView() {
    this.#currIndx += 1;
    if (this.#currIndx > 4) this.#currIndx = 0;
    this.#allSections[this.#currIndx].scrollIntoView({ behavior: 'smooth' });
  }
}

export default new scroll();
