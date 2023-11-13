//Demosntração da assincroniedade das promises
function imc(weight, height){
    return new Promise((resolve, reject)=>{
        if((typeof weight !== 'number' || typeof height !== 'number')){
            reject (`Arguments must be of type: number.`)
        }else{
            resolve(weight/(height**2))   
        }
    }
    ) 
}

function showIMC(weight, height){
    imc(weight, height).then(
        (resolve)=>{console.log(`Seu imc é: ${resolve}`)
        if(resolve < 18.5) {console.log(`Você pertence ao espectro da magreza.`)
        }else if(resolve < 25){console.log(`Você pertence ao espectro normal.`)}
        else if(resolve < 30){console.log(`Você pertence ao espectro do sobrepeso.`)}
        else if(resolve < 40){console.log(`Você pertence ao espectro da obesidade.`)}
        else{console.log(`Você pertence ao espectro da obesidade grave.`)}
    }
    ).catch((reject)=> console.log(reject))
    .finally(()=>console.log(`Função finalizada.`))
    console.log(`Calculando o IMC do peso ${weight} e altura ${height}.`)
}


showIMC(110, 1.8)
showIMC(70, 1.7)
showIMC("Oitenta", "Um e quarenta")
showIMC(85, 1.83)
showIMC(65, 1.4)
showIMC(80, "")