
var num1 = document.getElementById('in1')
var num2 = document.getElementById('in2')
var num3 = document.getElementById('in3')
var num4 = document.getElementById('in4')
var btn  = document.getElementById('btn')
var res  = document.getElementById('lab2')
var one = document.getElementById('one')
var circle = document.getElementById('circle')
var lab = document.getElementById('lab4')

btn.onclick = function (){
    var result = ((Number(num1.value)+Number(num2.value)+Number(num3.value)+Number(num4.value))/4)
    res.innerText = result

    if(result >=90 && result<=100){
        one.style.backgroundColor ='hsl(0 100% 67% /0.1)'
        lab.innerText = 'A+'
        lab.style.color = 'black'

    }
    else if(result >=80 && result<=90){
        one.style.backgroundColor ='hsl(39 100% 56% /0.1)'
        lab.innerText = 'B+'
        lab.style.color = 'black'

    }
    else if(result >=70 && result<=80){
        one.style.backgroundColor ='hsl(166 100% 37% /0.1)'
        lab.innerText = 'C+'
        lab.style.color = 'black'

    }
    else if(result >=60 && result<=70){
        one.style.backgroundColor ='hsl(234 85% 45% /0.1)'
        lab.innerText = 'C'
         lab.style.color = 'black'

    }
}



