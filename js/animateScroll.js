class animateScroll {
  #allSections = [...document.querySelectorAll('.section')];
  constructor() {
    this._addHiddenClass();
    this._observe();
  }

  _observe() {
    const revealSection = function (entries, observer) {
      const [entry] = entries;

      if (!entry.isIntersecting) return; //if not intersecting then return
      entry.target.classList.remove('hidden');
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.01,
    });

    this.#allSections.forEach(function (section) {
      sectionObserver.observe(section);
      // section.classList.add('section--hidden');
    });
  }

  _addHiddenClass() {
    this.#allSections.forEach((sec) => sec.classList.add('hidden'));
  }
}

export default new animateScroll();
