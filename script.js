function receberDados(){
    var numberOne = document.getElementById("numberOne");
    var numberTwo = document.getElementById("numberTwo");
    console.log(numberOne.value);
    console.log(numberTwo.value);

    //Calcular Adição
    var adicao = numberOne.valueAsNumber + numberTwo.valueAsNumber;
    resultadoAdicao = document.getElementById('resultadoAdicao');
    resultadoAdicao.value = adicao;

    //Calcular Subtração A-B
    var subtracaoA = numberOne.valueAsNumber - numberTwo.valueAsNumber;
    resultadoSubtracaoA = document.getElementById('resultadoSubtracaoA');
    resultadoSubtracaoA.value = subtracaoA;

    //Calcular Subtração B-A
    var subtracaoB = numberTwo.valueAsNumber - numberOne.valueAsNumber;
    resultadoSubtracaoB = document.getElementById('resultadoSubtracaoB');
    resultadoSubtracaoB.value = subtracaoB;

    //Calcular Multiplicação A*B
    var multiplicacao = numberOne.valueAsNumber * numberTwo.valueAsNumber;
    resultadoMultiplicacao = document.getElementById('resultadoMultiplicacao');
    resultadoMultiplicacao.value = multiplicacao;

    //Calcular Divisão A/B
    if(numberTwo.valueAsNumber!=0){
        var divisaoA = numberOne.valueAsNumber / numberTwo.valueAsNumber;
    resultadoDivisaoA = document.getElementById('resultadoDivisaoA');
    resultadoDivisaoA.value = divisaoA;
    }else if(numberTwo.valueAsNumber===0){
        resultadoDivisaoA = document.getElementById('resultadoDivisaoA');
        resultadoDivisaoA.value = "Divisão por 0" ;
    }

    //Calcular Divisão B/A
    if(numberOne.valueAsNumber!=0){
        var divisaoB = numberTwo.valueAsNumber / numberOne.valueAsNumber;
    resultadoDivisaoB = document.getElementById('resultadoDivisaoB');
    resultadoDivisaoB.value = divisaoB;
    }else if(numberOne.valueAsNumber===0){
        resultadoDivisaoB = document.getElementById('resultadoDivisaoB');
        resultadoDivisaoB.value = "Divisão por 0" ;
    }

    //Calcular Potenciação A**
    var potenciacaoA = numberOne.valueAsNumber * numberOne.valueAsNumber;
    resultadoPotenciacaoA = document.getElementById('resultadoPotenciacaoA');
    resultadoPotenciacaoA.value = potenciacaoA;

    //Calcular Potenciação B**
    var potenciacaoB = numberTwo.valueAsNumber * numberTwo.valueAsNumber;
    resultadoPotenciacaoB = document.getElementById('resultadoPotenciacaoB');
    resultadoPotenciacaoB.value = potenciacaoB;

    //Calcular Divisores A
    var divisoresA = [1]
    for (var i = 2; i <= numberOne.valueAsNumber; i ++) {
        if (numberOne.valueAsNumber % i == 0) {
            divisoresA.push(i);
        }
    }
    document.getElementById('resultadoDivisoresA').value = divisoresA.join(', ');
    console.log(divisoresA);

    //Calcular Divisores BS
    var divisoresB = [1]
    for (var i = 2; i <= numberTwo.valueAsNumber; i ++) {
        if (numberTwo.valueAsNumber % i == 0) {
            divisoresB.push(i);
        }
    }
    document.getElementById('resultadoDivisoresB').value = divisoresB.join(', ');
    console.log(divisoresB);

    //Calcular Fatorial A
    var fatorialA=1;
    if(numberOne.valueAsNumber<=21){
        for(var i = 1; i <= numberOne.valueAsNumber; i++){
            fatorialA = fatorialA * i;
            resultadoFatorialA = document.getElementById('resultadoFatorialA');
            resultadoFatorialA.value = fatorialA;
        }
    }else{
        resultadoFatorialA = document.getElementById('resultadoFatorialA');
        resultadoFatorialA.value = "Número muito grande";
    }

    //Calcular Fatorial B
    var fatorialB=1;
    if(numberTwo.valueAsNumber<=21){
        for(var i = 1; i <= numberTwo.valueAsNumber; i++){
            fatorialB = fatorialB * i;
            resultadoFatorialB = document.getElementById('resultadoFatorialB');
            resultadoFatorialB.value = fatorialB;
        }
    }else{
        resultadoFatorialB = document.getElementById('resultadoFatorialB');
        resultadoFatorialB.value = "Número muito grande";
    }

}
