// Create the Car constructor. It should take two parameters, model and noise
// • Each car should have 3 attributes: model, noise and number of wheels
// • Model and noise are set with the parameters and number of wheels will be 4
//for all the instances of Car• Create a method to print the noise of that car

var Car = function(model, noise){//constructores con mayuscula
  this.model = model;
  this.noise = noise;
  this.wheels_number = 4;
  var doors = 3 //no sera accesible desde el prototipo

  this.makeNoise = function(){
    console.log(this.noise);

  }
  this.howManytDoors = function(){
     console.log(doors);// hoisting, mira el modelo superior anque no este declarada la pude usar
  }
}
Car.prototype.makeNoise = function(){
   console.log(this.noise);
   // aqui no podriasmos obtener this.doors, al no estar definido
}
var renault = new Car("renault","mook mook");
renault.makeNoise(); //primero busca si tiene uno dentro.. y sino lo tine usa el prototipo

var baseCarBuilder(model){
  return{
    model: model //literal
  };
}
var carBuilder = function(model, noise, wheels){//con este modelo no se
  pueden usar prototypes
  //var that = {}; //that para no tner que usar new. {} se ijndica que se crea un  objeto vacio. y lo vamos rellenando con valores
  var that = baseCarBuilder(model);
  var wheels = wheels + 2;

  function makeNoise(){
  }
  that.model = model;
  that.noise = noise;

  return that;
}
var ferrari = carBuilder('Ferrari','Braum');
