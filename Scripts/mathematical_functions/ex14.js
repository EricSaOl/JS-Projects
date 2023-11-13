const avarge = (...number)=>{
    let sum = number.reduce((accum,num)=> accum +num,0)
    return sum / (number.length)
}

console.log(`Média aritmética: ${avarge(10,10,10,10)}`)

const weightedAvarge = (...number)=>{
    let result = number.reduce((accum,{num, weight})=> accum +(num*(weight ?? 1)),0)
    let sub = number.reduce((accum,w)=> accum+(w.weight ?? 1),0)
    return result/sub
}

console.log(`Média Aritmética Ponderada: ${weightedAvarge(
    {num:9, weight:3},
    {num:7},
    {num:10, weight:1}
)}`)

const median = (...number)=>{
    const ordered = [...number].sort((a,b)=> a-b)
    const middle = Math.floor((ordered.length)/2)
    if((ordered.length%2) === 0){
        let sum = ordered[middle-1] + ordered[middle]
        return sum /2
    }
    else{
        return ordered[middle + 1]
    }
}


console.log(`Mediana: ${median(2,5,99,4,42,7)}`)

const mode = (...number)=>{
    const quantity = number.map(num=>[
        num,
        number.filter(n=> num === n).length
    ])
    quantity.sort((a,b)=>b[1]-a[1])
    return quantity[0][0]
}

console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)

const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();
console.log(iterator1)