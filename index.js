let dataInput = document.getElementById("input");
dataInput.value="0" 

let memory = "";
let data = [];
let groupValue1 = []
let groupValue2 = []
let currentGroup = 1;  
let operator = "";

function handleClick(value) {
    const signal = ['-', '+', '*', '/'];  

    if (!signal.includes(value)) {
        // Se não for um operador, concatena o número
 
        memory += value;  
        dataInput.value = memory;   

    
        if(currentGroup === 2) {
         
            groupValue2.push(memory);
        }   
    } else {
      
        groupValue1.push(memory); 
        currentGroup = 2; 
        operator = value;  
        memory = ""; 
    };

};

function handleEquals() {

    if (groupValue1.length >= 0 && groupValue2.length >= 0 && operator !== "") {

        let num1 = groupValue1.join('');  
        let num2 = groupValue2.join('');
        // Usando eval() para calcular a expressão
        let result =  eval(`${num1}  ${operator}  ${num2}` )
 

        dataInput.value =  result
        // Limpa as variáveis para o próximo cálculo
        groupValue1 = [result.toString()]; // Guarda o resultado para continuar a operação
        groupValue2 = [];
        operator = "";
        memory = "";
    }else{ 
        console.error("Esta faltando valores ou operador é inválido.")
    }
}

function handleClear(e) {
    location.reload();
}

