const result = document.getElementById('result');
const resultHistory = document.getElementById('result-history');
const buttons =document.querySelectorAll('button');//nodelist
const backspace = document.querySelector('button i');
let output = '';
buttons.forEach(function (btn) {
    btn.addEventListener('click',function(e){

        let btnText = btn.innerText;
        if (btnText === 'x') {
            btnText = '*'
        }
        if (btnText === '=') {
            btnText = ''
            resultHistory.textContent = output;
            output = eval(output);
            result.textContent = output;
        } else if (btnText === "AC") {
            output = '';
            result.textContent = output;
            resultHistory.textContent = output;
        } else if (btnText === "C") {
            output = '';
            result.textContent = output;
        } else if (e.target === backspace) {
            output = output.slice(0, output.length - 1);
            result.textContent = output;
        } else if (btnText === '%') {
            btnText = '';
            output = eval(output / 100);
            result.textContent = output;
        }
        else {
            output += btnText;
            result.textContent = output;
        }
    })

})