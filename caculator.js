function add() {
    let number1 = Number(document.getElementById('no1').value)
    let number2 = Number(document.getElementById('no2').value)
    let total = number1 + number2
    document.getElementById('result').innerHTML = "Sum: " + total
}

function sub() {
    let number1 = Number(document.getElementById('no1').value)
    let number2 = Number(document.getElementById('no2').value)
    let total = number1 - number2
    document.getElementById('result').innerHTML = "Difference: " + total
}

function div() {
    var number1 = Number(document.getElementById('no1').value)
    var number2 = Number(document.getElementById('no2').value)
    if (number2 == 0) {
        alert("Can't solve")
    } else {
        let total = number1 / number2
        document.getElementById('result').innerHTML = "Quotient: " + total
    }
}

function multi() {
    let number1 = Number(document.getElementById('no1').value)
    let number2 = Number(document.getElementById('no2').value)
    let total = number1 * number2
    document.getElementById('result').innerHTML = "Product: " + total
}