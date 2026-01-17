var answer = document.getElementById('screen')
var user = document.getElementById('input-screen');
user.innerText = "0"
var hist = document.getElementById('his-screen')
var his = []
var ans = []
function calculator(){
    var userInput = user.innerText
    answer.innerText = Number(eval(userInput)).toFixed(2)
    his.push(userInput)
    ans.push(answer.innerText)
    user.innerText = "0"
}
function calc(data){
    if (user.innerText == '0' && (data == '+' || data == '*' || data == '**' || data == '/' || data == '%' || data == '(' || data == ')')) {
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
if (data == "his") {
    if (his.length > 0) {
        hist.innerHTML = `<h2>Calculation History</h2>`;
        for (let i = 0; i < his.length; i++) {
            hist.innerHTML += `<li>${his[i]} = ${ans[i]}</li>`;
        }

        answer.innerText = "";
        return;
    } else {
        alert('Please first calculate anything.');
        return;
    }
}

    if (data == 'remove-his') {
        hist.innerHTML = ""
        return
    }
    if (user.innerText === '0') {
        answer.innerText = ""
        user.innerText = data;
        hist.innerHTML = '';
    } else {
        answer.innerText = ""
        user.innerText += data;
        hist.innerHTML = '';
    }
}

