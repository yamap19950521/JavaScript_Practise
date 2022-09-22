//for迴圈 
for(let i1 = 0; i1 < 10; i1 ++){ //i++  => i=i+1
  console.log('i1:', i1)
}

for(let i2 = 0; i2 < 10; i2 +=2){ //i+=2  => i=i+2
  console.log('i2:', i2)
}

//陣列結合for迴圈
let classA = [ 100 ,70 ,59 ]
classA.push(40)
for(let i = 0; i < classA.length; i ++){
  console.log('i:',classA[i])
}


//if else結合for迴圈
for (let i = 0; i<classA.length; i++){
  if (i===2)
  classA[i]=9999
}
console.log('classA', classA)



//結合陣列包物件 使用for迴圈跟if else取出物件的key
const posts=[
  {
    name:'Emma',
    desc:'貼文一'
  },
  {
    name:"Livia",
    desc:"貼文二"
  }
]
for(let i = 0; i<posts.length; i++){
  if(i === 1){
    let post = posts[i]
    console.log(post.name)
  }
}



//---------------------------------
//while迴圈
let condition = true
let target = 10
var i = 0

while (condition) { 
  if(i === target){
    condition = false
  }
  console.log(i)
  i++ //每次做+1
}