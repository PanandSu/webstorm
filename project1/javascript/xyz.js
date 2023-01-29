//事件
//常见HTML事件
/*
1.onclick()   单击
2.ondblclick()     双击
3.onmouseover()    鼠标移到上面
4.onmouseout()     鼠标移走
5.onsubmit()     确认按钮被点击
 */
function onclick() {
    document.getElementById("demo1").innerHTML = "点击事件"
}

function onmouseover() {
    document.getElementById("demo3").innerHTML = "鼠标移动到元素上面"
}

function onmouseout() {
    document.getElementById("demo4").innerHTML = "鼠标移出元素"
}
