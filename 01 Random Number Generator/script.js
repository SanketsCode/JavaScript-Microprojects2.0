function generatorANumber(min,max) {
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}

document.getElementById("btn").addEventListener("click",() => {
    let min = 1;
    let max = 1000;

    const num = generatorANumber(min,max);

    document.getElementById("num").textContent = num;
    
})