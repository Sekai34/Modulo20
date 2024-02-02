var arr = ["885.9", "984.9", "444.9", "528.9", "528.9"];
var maior = Number.NEGATIVE_INFINITY,
    menor = Infinity;

arr.forEach(function(item){
  if (Number(item) > maior) maior = item;
  if (Number(item) < menor) menor = item;
});

console.log(maior, menor)