function woodCalculator(chair, table, bed){
    chair = chair * 1;
    table = table * 3;
    bed = bed * 5;
    return {chair, table, bed};
}

var result = woodCalculator(45,123,12);
console.log(result);