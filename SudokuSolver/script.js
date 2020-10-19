let input=''; let inputs=document.getElementsByTagName("input"); 

console.log("I Work")
numbers='0123456789'

function doit(){
    getGrid()
    console.log(input)
    input=sudoku.solve(input)
    console.log(input)
}

function getGrid(){
    for (const item of inputs.children){
        let input=''; 
        if (!numbers.includes(item.value)){input+='0'} else{input+=item.value}}
}
$(window).resize(function(){
    console.log("YO")
    if ($(window).width()>=1440){
        console.log("hi")
    }
})