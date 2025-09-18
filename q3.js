
var fitaOriginal = ['A', 'U', 'C', 'G', 'A', 'C', 'U', 'G', 'A', 'U'];


var fitaComplementar = [];


for (var i = 0; i < fitaOriginal.length; i++) {
    var base = fitaOriginal[i];
    if (base === 'A') {
        fitaComplementar.push('U');
    } else if (base === 'U') {
        fitaComplementar.push('A');
    } else if (base === 'C') {
        fitaComplementar.push('G');
    } else if (base === 'G') {
        fitaComplementar.push('C');
    }
}


console.log("Fita original:");
console.log(fitaOriginal.join(' '));

console.log("Fita complementar:");
console.log(fitaComplementar.join(' '));
