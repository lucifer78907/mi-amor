class testimonial {
  #btnLeft = document.querySelector('.circle__btn--left');
  #btnRight = document.querySelector('.circle__btn--right');
  #namesArr = ['lisa williams', 'jayed wolf', 'lil lover'];
  #descArr = [
    ' This application was a gamechanger for me , previously i was very very scared to go out and ask out people but after using mi-amor i found myself a lovely person who accepts me the way i am!  ',
    ' Wow , i am amazed by mi-amor, previously i was it very hard to go out and ask out people due to my shy nature, now i can easily go around on the application and meet the love of my life!.',
    ' Bravo!, mi-amor provides a healthy community to contact with and go on finding people with same interests , i found my love interest without any harrasment and bullying , that is heaven to me  ',
  ];
  #designationArr = ['tennis player', 'dentist', 'construction site worker'];
  #testimonialImg = document.querySelector('.testimonial__img');
  #testimonialPara = document.querySelector('.testimonial__para');
  #testimonialName = document.querySelector('.testimonial__author');
  #testimonialDesig = document.querySelector('.testimonial__designation');
  _currSlide = 1;

  constructor() {
    this._addEventListners();
  }

  _addEventListners() {
    this.#btnLeft.addEventListener('click', this._showPrev.bind(this));
    this.#btnRight.addEventListener('click', this._showNext.bind(this));
  }

  _showPrev() {
    console.log(this._currSlide);
    this._currSlide -= 1;
    if (this._currSlide <= 0) this._currSlide = 3;

    // Change Img
    this.#testimonialImg.setAttribute(
      'src',
      `img/testimonial-${this._currSlide}.jpg`
    );

    // Change Details

    this.#testimonialPara.textContent = this.#descArr[this._currSlide - 1];
    this.#testimonialName.textContent = this.#namesArr[this._currSlide - 1];
    this.#testimonialDesig.textContent =
      this.#designationArr[this._currSlide - 1];
  }

  _showNext() {
    this._currSlide += 1;
    if (this._currSlide >= 4) this._currSlide = 1;

    // Change Img
    this.#testimonialImg.setAttribute(
      'src',
      `img/testimonial-${this._currSlide}.jpg`
    );

    // Change Details

    this.#testimonialPara.textContent = this.#descArr[this._currSlide - 1];
    this.#testimonialName.textContent = this.#namesArr[this._currSlide - 1];
    this.#testimonialDesig.textContent =
      this.#designationArr[this._currSlide - 1];
  }
}

export default new testimonial();
