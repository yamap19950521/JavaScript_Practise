// Array and Object

//陣列 Array
let classA=["小明","小白","小華"]
console.log('轉學前：', classA)
classA.push("小錚")
console.log('轉學後：',classA)

let isPhotos=[
  "https://xx.img.com/a1.png",
  "https://xx.img.com/a2.png",
  "https://xx.img.com/a3.png"
]
console.log('isPhotos:', isPhotos)

//長度 length
console.log('isPhotos len:' , isPhotos.length)
console.log('classA len:', classA.length)

//取出陣列裡的 ‘第幾筆’ 資料
console.log('classA第一筆:',classA[0] )
console.log('classA第二筆:',classA[1] )
//----------------------------------

//物件 Object  
const card = {
  name : '我的名片',
  address : '新加坡....',
  age : 999,
}


//物件跟陣列可以放在一起

const post = {
  image:  "https://xx.img.com/a1.png",
  desc:"這是一張圖片",
  date: "2022/09/22",
  comment:["很美","我也要去"]  //物件裡面放陣列
}

const wall=[  //陣列裡面放物件
  post,
  post,
  post,
  post
]

console.log(wall)

//物件如何取值
console.log('物件取值',post.desc)