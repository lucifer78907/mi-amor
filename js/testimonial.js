class testimonial {
  #btnLeft = document.querySelector('.circle__btn--left');
  #btnRight = document.querySelector('.circle__btn--right');
  constructor() {
    this._addEventListners();
  }

  _addEventListners() {
    this.#btnLeft.addEventListener('click', this._showNext);
  }

  _showNext() {
    console.log('Left');
  }
}

export default new testimonial();
