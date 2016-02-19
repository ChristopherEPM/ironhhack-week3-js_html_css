function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function doFight(attacker,victim)
// {
//   victim.health -= attacker.strength;
// }
var Saxon = function(){
  this.health = getRandom(10, 40);
  this.strength = getRandom(1,9);
}
var Viking = function(name){
  this.name = name;
  this.health = getRandom(120, 400);
  this.strength = getRandom(10,50);
  this.speed = getRandom(1,100);
  this.fullHealth = this.health;

  this.doFight = function(attacker,victim){
    victim.health -= attacker.strength;
  }

  this.useRecoveryPotion = function(){

    this.health = this.fullHealth;
    console.log(this.name+ " wasted a potion to restore health.\n"+this.name+ " current health: " +this.health)
  }


  this.pitFight = function(another_viking,turns_amount){
    var turn = 1;
    var both_can_continue = true;
    while ( turn <= turns_amount && both_can_continue) {//
      if(another_viking.health - this.strength <=0 ){
        both_can_continue = false;
        console.log("Oracule: With the next atack " +this.name+ " will kill "+another_viking.name+"...\nBoss: Stooop!! The pitfight winner was: "+this.name);}
      else if(another_viking.health - this.strength >0 ){
        this.doFight(this, another_viking);
        console.log(this.name+" atack. "+another_viking.name+" health:"+another_viking.health)}

      if(this.health - another_viking.strength <=0 ){
        both_can_continue = false;
        console.log("Oracule: With the next atack " +another_viking.name+ " will kill "+this.name+"...\nBoss: Stoooop!! The pitfight winner was: "+another_viking.name);}
      else if(this.health - another_viking.strength >0){
        this.doFight(another_viking, this);
        console.log(another_viking.name+" atack. "+this.name+" health:"+this.health);}

      turn += 1;
    }
    if(turn > turns_amount){
      if(this.health > another_viking.health ){
        return console.log("Boss: Time finished!. The pitfight winner was: "+this.name);}
      else if(this.health < another_viking.health ) {
        return console.log("Boss: Time Finished! The pitfight winner was: "+another_viking.name);}
      else{
        return console.log("Boss: Time Finished! We dont have a winner today, was a great fight");}
    }
  }




};

v1 = new Viking("Viki");
console.log(v1);
v2 = new Viking("Olaf");
console.log(v2);
v1.pitFight(v2,20);
console.log("viki: " +v1.health);
console.log("olaf: " +v2.health);
v1.useRecoveryPotion();
v2.useRecoveryPotion();












// var Car = function(model, noise){//constructores con mayuscula
//   this.model = model;
//   this.noise = noise;
//   this.wheels_number = 4;
//   var doors = 3 //no sera accesible desde el prototipo
//
//   this.makeNoise = function(){
//     console.log(this.noise);
//
//   }
//   this.howManytDoors = function(){
//      console.log(doors);// hoisting, mira el modelo superior anque no este declarada la pude usar
//   }
// }
// Car.prototype.makeNoise = function(){
//    console.log(this.noise);
//    // aqui no podriasmos obtener this.doors, al no estar definido
// }
// var renault = new Car("renault","mook mook");
// renault.makeNoise(); //primero busca si tiene uno dentro.. y sino lo tine usa el prototipo
