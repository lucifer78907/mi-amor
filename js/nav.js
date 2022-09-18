class nav {
  #navContainer = document.querySelector('.nav__nav');
  constructor() {
    this._addEventListner();
  }

  _addEventListner() {
    this.#navContainer.addEventListener('click', this._scroll.bind(this));
  }

  _scroll(eve) {
    eve.preventDefault();
    const e = eve.target;
    if (e.classList.contains('nav__item')) {
      const id = e.getAttribute('href');
      const ele = document.getElementById(id.slice(1));
      ele.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

export default new nav();
