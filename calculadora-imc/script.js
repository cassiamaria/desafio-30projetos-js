const calculate = document.getElementById('calculate');

function calculateImc() {
    const userName = document.getElementById('userName').value;
    const userHeight = document.getElementById('userHeight').value;
    const userWeight = document.getElementById('userWeight').value;
    const result = document.getElementById('result');

    if(userName !== '' && userWeight !== '' && userHeight !== '') {
        const valueImc = (userWeight / (userHeight * userHeight)).toFixed(1);

        let classification = '';

        if(valueImc < 18.5) {
            classification = 'abaixo do peso.';
        } else if (valueImc < 25) {
            classification = 'com peso ideal. Parabéns!!!';
        } else if (valueImc < 30){
            classification = 'levemente acima do peso.';
        } else if (valueImc < 35){
            classification = 'com obesidade grau I.';
        } else if (valueImc < 40){
            classification = 'com obesidade grau II';
        } else {
            classification = 'com obesidade grau III. Cuidado!!';
        }

        result.textContent = `${userName} seu IMC é ${valueImc} e você está ${classification}`;

    } else {
        result.textContent = 'Preencha todos os campos!';
    }
}

calculate.addEventListener('click', calculateImc)