export function getTreeList() {
  let treeList = [{
    id: 1,
    title: '创业大厦',
    expand: true,
    children: [{
        id: 10,
        title: '创业大厦A幢',
        expand: true,
        children: [{
            id: 100,
            title: '1F',
            image: {
              url: './image/image_map.png',
              width: 4731,
              height: 4211
            }
          },
          {
            id: 101,
            title: '2F'
          },
          {
            id: 102,
            title: '13F'
          }
        ]
      },
      {
        id: 11,
        title: '创业大厦B幢',
        children: [{
            id: 103,
            title: '1F'
          },
          {
            id: 104,
            title: '2F'
          }
        ]
      }
    ]
  }]
  return treeList
}

export function getPointList() {
  return [{
    id: 1,
    title: 'xxx设备1',
    image: {
      src: './image/point.png',
      width: 69,
      height: 69,
      offsetTop: 35,
      offsetLeft: 35,
      opacity: 1
    },
    longitude: null,
    latitude: null
  }, {
    id: 2,
    title: 'xxx设备2',
    image: {
      src: './image/point.png',
      width: 69,
      height: 69,
      offsetTop: 35,
      offsetLeft: 35,
      opacity: 1
    },
    longitude: null,
    latitude: null
  }, {
    id: 3,
    title: 'xxx设备3',
    image: {
      src: './image/point.png',
      width: 69,
      height: 69,
      offsetTop: 35,
      offsetLeft: 35,
      opacity: 1
    },
    longitude: null,
    latitude: null
  }, {
    id: 4,
    title: 'xxx设备4',
    image: {
      src: './image/point.png',
      width: 69,
      height: 69,
      offsetTop: 35,
      offsetLeft: 35,
      opacity: 1
    },
    longitude: null,
    latitude: null
  }, {
    id: 5,
    title: 'xxx设备5',
    image: {
      src: './image/point.png',
      width: 69,
      height: 69,
      offsetTop: 35,
      offsetLeft: 35,
      opacity: 1
    },
    longitude: null,
    latitude: null
  }, {
    id: 6,
    title: 'xxx设备6',
    image: {
      src: './image/point.png',
      width: 69,
      height: 69,
      offsetTop: 35,
      offsetLeft: 35,
      opacity: 1
    },
    longitude: null,
    latitude: null
  }]
}
