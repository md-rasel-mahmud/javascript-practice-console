function feetToMile(calculate){
    calculate = calculate / 5280;
    calculate = calculate.toFixed(7);
    return calculate;
}

let output = feetToMile(1);
console.log(output);