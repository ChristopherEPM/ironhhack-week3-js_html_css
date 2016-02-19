var exampleArray = [2,-5,10,5,4,-10,0]
var result = exampleArray.reduce(function(result, x, i) {
  return exampleArray.reduce(function(aux, y , j){
    return x + y ===0
    ? aux.concat('(' + i + ',' + j +')')
    : aux
  }, result)
},[])
//=>['(0,5)','3,5']
console.log(result);

var result =[]
for(var i = 0 ; i < exampleArray.length; i++){
  for(var j = 0; j < exampleArray.length; j++){
    if(exampleArray[i]+ exampleArray[j]===0){
      result.push('(' + i + ',' + j +')');
    }
  }
}

console.log(result);
function process(data){
    var positions =[];
    data.forEach(function(a,i){
      data.forEach(function(b,j){
        if(a + b === 0){positions.push(i + "," + j)}
      });
    });
}
    console.log("You can sum these pairs of numbers and get zero: ")
    console.log(positions);
