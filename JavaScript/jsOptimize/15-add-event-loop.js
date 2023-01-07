var aButtons = document.querySelectorAll('button')
// 有问题的
// for(var i = 0; i < aButtons.length; i++) {
//   aButtons[i].onclick = function (){
//     console.log(`当前索引值为${i}`)
//   }
// }

// 解决1：闭包
for(var i = 0; i < aButtons.length; i++) {
  (function (i){
    aButtons[i].onclick = function (){
      console.log(`当前索引值为${i}`)
    }
  })(i)
}
// 解决2：闭包2
for(var i = 0; i < aButtons.length; i++) {
  aButtons[i].onclick = (function (i){
    return function (){
      console.log(`当前索引值为${i}`)
    }
  })(i)
}
// 解决3：let
for(let i = 0; i < aButtons.length; i++) {
  aButtons[i].onclick = function (){
    console.log(`当前索引值为${i}`)
  }
}
// 解决4：添加自定义属性
for(var i = 0; i < aButtons.length; i++) {
  aButtons[i].myIndex = i
  aButtons[i].onclick = function (){
    console.log(`当前索引值为${this.myIndex}`)
  }
}
// 解决5：事件委托
document.body.onclick = function (ev) {
  var target = ev.target
  var targetDom = target.tagName
  if(targetDom === 'BUTTON') {
    var index = target.getAttribute('index')
    console.log(`当前点击的是第${index}个`)
  }
}
