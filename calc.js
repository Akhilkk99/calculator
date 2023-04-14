function displayData(n){
   result.value+=n
}
function Allclear(){
result.value=""
}
function evalExprsn(){
    result.value=eval(result.value)
}
function backspace(){
    s=result.value
    result.value=s.slice(0,-1)
}