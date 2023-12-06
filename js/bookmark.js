const serviceSlides = document.querySelectorAll('.slider-service');
const serviceTabs = document.querySelectorAll('.service-item button');

if (serviceSlides.length) {
  for (let i = 0; i < serviceTabs.length; i++) {
    serviceTabs[i].addEventListener('click', function (e) {
      document.querySelector('.slide-active').classList.remove('slide-active');
      document.querySelector('.active-bookmark').classList.remove('active-bookmark');

      serviceSlides[e.target.dataset.slide].classList.add('slide-active');
      serviceTabs[e.target.dataset.slide].classList.add('active-bookmark');
    });
  }
}
