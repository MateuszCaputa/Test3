function showResult() {
    const number1 = document.querySelector(".box1").value;
    const number2 = document.querySelector(".box2").value;

    let sequence = '';

    for(let i = number1; i <= number2; i++) {
        sequence = sequence + ' ' + i;
    }
    document.querySelector(".result").innerHTML = sequence;
}