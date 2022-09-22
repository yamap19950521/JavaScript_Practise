// Function 函數 是什麼？
function hello(){ //宣告函數
  console.log("您好")
}
hello() //呼叫函數(執行函數)

//-----------------------------------------------


//為什麼會用到Fn？ 包裝成一個函式的方式，可以邏輯共用，如果需要改邏輯直接到函式去改就好了～
function addMoney(){
  console.log( 100 + 200 )
}

//結帳頁面
addMoney()

//購物車頁面
addMoney()




//-----------------------------------------------

//有參數的function (參數要幾個都可以)
function addMoney2(price1, price2, discount){ //接受傳入三個參數
  console.log( price1 + price2 - discount) //數字類型-其他類型 ，會出現NaN
  console.log(discount) //如果沒有的時候會出現undefined
}


//結帳頁面
addMoney2(2000,100) 

//購物車頁面
addMoney2(200,100,50)



//-----------------------------------------------

//有回傳值的function (reurn)

function addMoney3(price1, price2, discount){ 
  let result = price1 + price2 - discount   //如果沒有寫console.log就永遠不知道result是什麼值 因此把result丟出去當回傳值
  let message = "普通會員"

  if(result > 20000){
    message = '白金會員'
    return message //判斷到了就return (如果沒有寫 會根據符合的 但根據程式碼順序 新的蓋掉舊的)
  }

  if(result>50000){
    message = "尊榮會員"
    return message //判斷到了就return (如果沒有寫 會根據符合的 但根據程式碼順序 新的蓋掉舊的)
  }
  return message
}
let message = addMoney3(200, 21000, 1000) //fn裡的變數只作用在fn裡面，因此不會影響
console.log('msg:', message)



//-----------------------------------------------
//＊＊＊＊(重要) 透過構造函數來建立物件 
function createCard(initName){
  this.nmae = initName //this代表函數本身，更進階的說法是代表當下誰執行這個函數this就是誰  
}

//new 建立 或 構造
const a1 = new createCard("小明")
const a2 = new createCard("小白")
const a3 = new createCard("小黃")

console.log(a1)
console.log(a2)
console.log(a3)



//補充說明 

//這兩種宣告函數的方法功能差不多，差別在：
function hello(){}  //如果在上面使用這個fn，可以被調用
let hello =function(){} //如果在上面使用這個fn，會報錯



//-----------------------------------------------
//箭頭函式 (解決this的問題)

let hello = () => {}
//如果跟this無關的話，基本上上下兩種寫法相等
let hello =function(){}  