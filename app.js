var answer = document.getElementById('screen')
var user = document.getElementById('input-screen');
user.innerText = "0"
function calculator(){
    var userInput = user.innerText
    answer.innerText = Number(eval(userInput)).toFixed(2)
    user.innerText = "0"
}


// var user = document.getElementById('input-screen')

function calc(data){
    if (user.innerText == '0' && (data == '+' || data == '*' || data == '/' || data == '%')) {
       alert('Please first enter any number') 
       return
    }
    if(data == 'C'){
        user.innerText = '0'
        answer.innerText = ""
        return
    }
    
    if(data == 'del'){
        var textLength = user.innerText.length;
        user.innerText = user.innerText.slice(0, textLength -1);
        if (textLength == 1) {
            user.innerText = "0"
        }
        return
    }
 if (user.innerText === '0') {
        answer.innerText = ""
        user.innerText = data;
    } else {
        answer.innerText = ""
        user.innerText += data;
    }
}
