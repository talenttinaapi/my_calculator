function display(val){
    document.getElementById('result').value += val;
    return val;
}

function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}

function clearScreen(){

    document.getElementById('result').value = ''

}

function backspace(){

    let x = document.getElementById('result').value

    let y = x.slice(0, x.length - 1)

    document.getElementById('result').value = y

    return y

}