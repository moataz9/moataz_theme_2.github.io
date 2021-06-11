let headerSlider = new Splide('#header_slider', {
  rewind: true,
  type: 'loop',
  autoplay: true,
})

let testimonialsSlider = new Splide('#testimonialsSlider', {
  rewind: true,
  type: 'loop',
  arrows: false,
  autoplay: true,
})

headerSlider.mount()
testimonialsSlider.mount()
