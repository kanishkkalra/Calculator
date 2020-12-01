function dis(val) {
    document.getElementById('result').value += val;
}

function solve(){
    var result = document.getElementById('result').value;
    var finalResult = eval(result);
    document.getElementById('result').value = finalResult;
}

function backspace(){
    document.getElementById('result').value;
}