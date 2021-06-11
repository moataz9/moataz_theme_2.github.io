let thumbinal_item = document.querySelectorAll('#slider_thumbinal .slider-item')
let thumbinal_preview = document.querySelector('#slider_preview img')
let imgPreviewSrc = thumbinal_preview.attributes.src
let prev_icon = document.getElementById('prev_icon')
let next_icon = document.getElementById('next_icon')

thumbinal_item.forEach((item) => {
  item.setAttribute('data-img', item.children[0].getAttribute('src'))
  console.log(item)
  item.addEventListener('click', () => {
    // console.log('click');
    imgPreviewSrc.nodeValue = item.dataset.img
    let items = [...item.parentElement.children]
    items.forEach((i) => {
      i.classList.remove('active')
    })
    item.classList.add('active')
  })
})

prev_icon.addEventListener('click', (e) => {
  let slider_items = e.target.parentElement.children[0].children
  slider_items = [...slider_items]
  slider_items.forEach((item, index) => {
    if (index > 0) {
      let prev_img = slider_items[index--]
      let next_img = slider_items[index++]
      if (item.classList.contains('active')) {
        prev_img.classList.remove('active')
        next_img.classList.add('active')
        imgPreviewSrc.nodeValue = next_img.dataset.img
      }
    }
  })
})
next_icon.addEventListener('click', (e) => {
  let slider_items = e.target.parentElement.children[0].children
  slider_items = [...slider_items]
  slider_items.forEach((item, index) => {
    let prev_img = slider_items[index--]
    let next_img = slider_items[index++]
    if (index < slider_items.lenght) {
      if (item.classList.contains('active')) {
        console.log(item, index)
        prev_img.classList.remove('active')
        next_img.classList.add('active')
        imgPreviewSrc.nodeValue = next_img.dataset.img
      }
    }
  })
})
