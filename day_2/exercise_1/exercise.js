     var numbers = '80:70:90:100';
     arrayNumbers = numbers.split(":").parseInt;
     function averageFromString(numbers){
       return numbers.split(':').reduce(function(result,number,index,vector){//parametros: resultados acumulados, item sobre el que se esta iterando,indice(posicion) del lemento en el array, el array en si. return para el return de la funcion, sino da undefined
         return result + parseInt(number)/vector.length; //retrn para el reduce
       }, 0)//0 seria el valor inical de result en la primera iteracion
     }
    //  function averageColon(arrayNumbers){
    //    sum = 0;
    //    arrayNumbers.map(function(num){
    //       sum += num;
    //    })
    //    return sum/arrayNumbers.length;
    //  }
    //  averageColon(arrayNumbers); //=> 85

console.log(averageFromString(numbers));
