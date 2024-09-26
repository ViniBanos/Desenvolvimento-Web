function calc(num1, num2, operacao){
    let result 
    switch (operacao){
        case ("soma" || "Soma"):
            result = (num1+num2);
            break;
        case ("subtracao" || "Subtracao"):
            result = (num1 - num2);
            break;
        case ("multiplicacao" || "multiplicacao"):
            result = (num1 * num2);
            break;
        case ("divisao" || "Divisao"):
            if (num2 == 0){
                console.log('Não existe divisao por 0!');
                break;
            }
            else{
                result = (num1/num2);
                break;
            }
        default: "Você digitou algum valor errado, seu saco de batata vazio!"
    }
    return result
}

console.log(calc(8, 12, "Subtração"))