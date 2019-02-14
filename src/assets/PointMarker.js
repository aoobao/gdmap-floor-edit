import './PointMarker.scss'
const DEFAULT_IMAGE_STYLE = {
  src: './image/point.png',
  width: 69,
  height: 69,
  offsetTop: 35,
  offsetLeft: 35,
  opacity: 1
}
// const DEFAULT_TEXT_STYLE = {
//   left: 30, // 'auto' 表示水平居中
//   top: 10, // 'auto' 表示垂直居中
//   color: '#fff',
//   fontSize: 14
// }
// const AUTO = 'center'
/**
 * opt
 * imageStyle : 图片样式
 * position : [longitude,latitude]
 * text : 文字
 * textStyle : 文字样式
 * extData
 */
export default class PointMarker {
  constructor(map, opt) {
    this._initialize(map, opt || {})
  }
  _initialize(map, opt) {
    this._map = map
    this._imageStyle = opt.imageStyle || DEFAULT_IMAGE_STYLE
    // this._textStyle = opt.textStyle || DEFAULT_TEXT_STYLE
    this._text = opt.text
    this._position = opt.position || [120, 30]
    this._extData = opt.extData
    this._click = opt.click
    this._dragend = opt.dragend

    let obj = this._createMarker()
    this._marker = obj.marker
    this._dom = obj.body
  }

  show() {
    this._marker.setMap(this._map)
  }

  hide() {
    this._marker.setMap(null)
  }

  destory() {
    this.hide()
  }

  _clickHandle() {
    // console.log(this)
    typeof this._click === 'function' && this._click(this._extData)
  }

  _dragendHandle(e) {
    typeof this._dragend === 'function' && this._dragend(this._extData, e)
  }

  _createMarker() {
    let offsetWidth = -p(parseInt(this._imageStyle.offsetLeft), parseInt(this._imageStyle.width) / 2)
    let offsetHeight = -p(parseInt(this._imageStyle.offsetTop), -parseInt(this._imageStyle.height) / 2)
    let body = this._createElement()

    // body.div.addEventListener('click', () => {
    //   typeof this._click === 'function' && this._click(this._extData)
    // })

    let marker = new AMap.Marker({
      position: this._position,
      offset: new AMap.Pixel(offsetWidth, offsetHeight),
      content: body.div,
      draggable: true
    })

    marker.on('click', this._clickHandle, this)
    marker.on('dragend', this._dragendHandle, this)
    return {
      marker,
      body
    }
  }

  setText(text) {
    this._dom.text.innerText = text
  }

  setImageStyle(image) {
    let div = this._dom.div
    let img = this._dom.img
    if (image.src) {
      img.style.backgroundImage = `url(${image.src})`
    }
    if (image.width != undefined) {
      div.style.width = image.width + 'px'
    }
    if (image.height != undefined) {
      div.style.height = image.height + 'px'
    }
  }

  setTextStyle(textStyle) {
    let text = this._dom.text
    if (textStyle.color) {
      text.style.color = textStyle.color
    }
    if (textStyle.fontSize) {
      text.style.fontSize = textStyle.fontSize + 'px'
    }
    if (textStyle.left != undefined) {
      text.style.left = textStyle.left + 'px'
    }
    if (textStyle.top != undefined) {
      text.style.top = textStyle.top + 'px'
    }
  }

  _createElement() {
    let width = parseInt(this._imageStyle.width)
    let height = parseInt(this._imageStyle.height)

    let div = document.createElement('div')
    div.className = 'custom-marker-point'
    div.style.width = width + 'px'
    div.style.height = height + 'px'

    let img = document.createElement('div')
    img.className = 'map-point-img-dom'
    // img.src = this._imageStyle.src
    img.style.backgroundImage = `url(${this._imageStyle.src})`
    // if (this._textStyle.left == AUTO) {
    //   img.style.justifyContent = 'center'
    // }
    // if (this._textStyle.top == AUTO) {
    //   img.style.alignItems = 'center'
    // }

    let text = document.createElement('div')
    text.className = 'map-point-text-dom'
    text.style.color = '#fff'
    text.style.fontSize = 14 + 'px'

    // if (this._textStyle.left == AUTO || this._textStyle.top == AUTO) {
    //   if (this._textStyle.left != AUTO) {
    //     text.style.marginLeft = parseInt(this._textStyle.left) + 'px'
    //   }
    //   if (this._textStyle.top != AUTO) {
    //     text.style.marginTop = parseInt(this._textStyle.top) + 'px'
    //   }
    // } else {
    //   text.style.position = 'absolute'
    //   text.style.left = parseInt(this._textStyle.left) + 'px'
    //   text.style.top = parseInt(this._textStyle.top) + 'px'
    // }

    text.innerText = this._text

    //img.appendChild(text)

    div.appendChild(img)

    return {
      div,
      img,
      text
    }
  }
}

function p(value, defaultValue) {
  return value === undefined ? defaultValue : value
}
