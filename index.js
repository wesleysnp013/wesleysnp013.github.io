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
    if(value === "c" ) { 
       
        console.log(groupValue1.length)
        memory = memory.slice(0, -1)
        dataInput.value = memory;   

        return
    }


    if (!signal.includes(value)) {
        // Se não for um operador, concatena o número
 
        memory += value;  
        dataInput.value = memory;   

    
        if(currentGroup === 2) {
            // if(value === "c" ) { 
       
            //     memory = memory.slice(0, -1)
            //     dataInput.value = memory;   
            //     groupValue2.pop()
        
            //     return
            // }
            groupValue2.push(memory);
        }   
    } else {
        // if(value === "c" ) { 
       
        //     memory = memory.slice(0, -1)
        //     dataInput.value = memory;   
        //     groupValue1.pop()
    
        //     return
        // }
        // Se for um operador, armazena o número no grupo atual
        groupValue1.push(memory);  // Armazena o primeiro número
        currentGroup = 2; 
        operator = value;  // Salva o operador
        memory = "";  // Limpa a memória para o próximo número
    };

};

function handleEquals() {

    if (groupValue1.length >= 0 && groupValue2.length >= 0 && operator !== "") {
        console.log("teste ")

        let num1 = groupValue1.join('');  
        let num2 = groupValue2.join(''); // Junta os valores do grupo 2
        console.log("groupValue1", groupValue1)

        console.log("groupValue2", parseFloat(num1) + parseFloat(num2) )
 
        // Usando eval() para calcular a expressão
        let result = 0.0

        if (operator === '+') {
            result = parseFloat(num1) + parseFloat(num2);
        } else if (operator === '-') {
            result = parseFloat(num1) - parseFloat(num2);
        } else if (operator === '*') {
            result = parseFloat(num1) * parseFloat(num2);
        } else if (operator === '/') {
            result = parseFloat(num1) / parseFloat(num2);
        }

        console.log(typeof result.toString())

        console.log( result.toString())
        dataInput.value = result.toString()
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

