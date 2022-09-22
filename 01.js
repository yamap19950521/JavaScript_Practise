//JavaScript 資料類型
console.log(100)
let myName = '我是錚錚' // (1) 字串 String
console.log(myName)

let age=100 // (2) 數字 Ｎumber(整數跟小數在Js都叫Ｎumber)
let number=100.037
console.log(age)
console.log(number)

let isFake = true // (3) 布林值 boolean(true or false)
let notFake = false 
console.log(isFake)
console.log(notFake)

let bag = undefined // (4) undefined (代表沒有 跟null一樣)
console.log(bag)

let bag2 = null // (5) null (代表沒有 跟undefined一樣)
console.log(bag2) 



//字串的連接 (用＋)
let name = '錚錚'
let myAge = '27'
console.log( name + '年齡' + myAge )


//數字的 加＋  減-  乘*  除/  取餘數%
let score = 100
console.log( score + 100 )
console.log( score - 50 )
console.log( score * 10 )
console.log( score / 20 )
console.log( score % 3 )



// let(用來取代var) 、 var 、  const(無法重複指定)
const aa = "aaa"
console.log(aa)
aa="bbbb"  //會錯誤 （index.js:43 Uncaught TypeError: Assignment to constant variable.）
console.log(aa) 
