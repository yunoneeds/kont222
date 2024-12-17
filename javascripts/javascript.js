function calculateZ() {
    let x = parseFloat(document.getElementById('xValue').value)
    let y = parseFloat(document.getElementById('yValue').value)

    if (x === 0 || y === 0 || isNaN(x) || isNaN(y)) {
        alert('Ошибка: Убедитесь, что X и Y корректны и не равны нулю.')
        return
    }

    let z

    if (x > y) {
        z = x * y
    } else {
        z = Math.log(x + y)
    }

    document.getElementById('result').innerText = `Результат: Z = ${z}`
}

function sendToBing() {
    let x = parseFloat(document.getElementById('xValue').value)
    let y = parseFloat(document.getElementById('yValue').value)

    if (x === 0 || y === 0 || isNaN(x) || isNaN(y)) {
        alert('Ошибка: Убедитесь, что X и Y корректны и не равны нулю.')
        return
    }

    let z = x > y ? x * y : Math.log(x + y)
    let query = `https://www.bing.com/search?q=Задача: Определить значение Z=(X*Y), где X=${x}, Y=${y}, Z=${z}`
    window.open(query, '_blank')
}

function clearFields() {
document.getElementById('xValue').value = ''
document.getElementById('yValue').value = ''
document.getElementById('result').innerText = 'Результат: '
}

document.getElementById('calculateButton').addEventListener('click', calculateZ)
document.getElementById('sendButton').addEventListener('click', sendToBing)
document.getElementById('clearButton').addEventListener('click', clearFields)