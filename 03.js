//流程控制 (if...else的用法)
let condition = 100 < 50 //Boolean
if(condition){ 
  console.log("確實大於50")//如果條件成立做這件事
}else{
  console.log("錯誤") //如果條件不成立做這件事
}



// + - * / 算術運算子
// && || ! 邏輯運算子
// (1) &&(And) 兩邊都該是true 結果才是true
let condition1 = true && false
console.log('condition1:',condition1) //印出false(只要有一個不是true 印出來都是false)

let condition2 = true && true
console.log('condition2:',condition2) //印出true(兩邊都是true 印出來才會是true)


// (2) ||(or) 兩邊只要有一邊是true 結果就是true
let condition3 = true || false //邏輯運算是由左至右，如果左邊符合右邊就不會看
console.log('condition3:',condition3) //印出true(只要有一邊是true 印出來就是true)

let condition4 = false || true
console.log('condition4:',condition4) //印出true(只要有一邊是true 印出來就是true)



//(3) ！(把結果反向)
let condition5 = !( true && false )  //印出true (括弧裡是false前面加了！ -> 變成true)
console.log('condition5:', condition5) 





// = == ===
let scoreA = 59 //一個等於 ( 是指定 )
let scoreB = 100
let  condition6 = scoreA === scoreB//三個等於 （代表比較兩邊是否一樣）

// >大於  <小於   >=大於等於  <=小於等於   ===相等   !==不相等


if ( scoreA > scoreB ){
  console.log("A考得比較高")
}else{
  console.log("B考的比較高")
}


//程式由上往下執行，上面的成立後 下面程式就不會再執行了
let score = 60
if( score ===100){
  console.log("好棒棒")
} else if(score === 70){
  console.log("再加油")
} else if(score === 60){
  console.log("下次小心點")
} else{
  console.log("去補修！！！！")
}


//-----------------------------

// switch...case 用法 （類似if...else）
let key =100
switch (key) {
  case 100:
    console.log('考了100分')
  break;
  case 200:
    console.log('考了200分')
  break;
  case 300:
    console.log('考了300分')
  break;
  default:
    console.log("沒去考試")
  break;
}