/* FIRST Task - Dwarf Roll Call
it should return string with number and . that looks like this: "1. Doc 2. Dopey 3. Bashful 4. Grumpy"*/

function dwarfRollCall(dwarves) {
  
  var newStr =[];
  dwarves.forEach(function(item, name){
    newStr.push(name+1 +". " + item + " ");
    
  });
  return newStr.join("")
  
}

/* SECOND TASK - Summon Capitan America: function should accept an array of paneteers that looks like this planeteerCalls = ["earth", "wind", "fire", "water", "heart"]; us should return them in all uppercase and add !*/

function summonCaptainPlanet(planeteerCalls){
  
  var results = planeteerCalls.map(
    function(capitalletter){

    return capitalletter.toUpperCase()+"!";  
    });
  
  return results;
}

/*THIRD TASK - The longPlaneteerCalls function should accept an array of calls. The function should tell us if any of the calls are longer than four characters*/

function longPlaneteerCalls(words) {
  
  var calls = []
  if(words.length > 4){
    return true
    
  } 
  
  return false;
  
}


/*---------FIRST TRY
function findTheCheese (foods) {
  
  var ingredients =["garlic","rosemary","bread"]
  var typeofcheese =["cheddar","gouda,","camembert"]
  if(ingredients !== []){
    return "no cheese!"
    } 
    else
 return typeofcheese.shift()

}
---------------------*/


/*---------SECOND TRY
function findTheCheese (foods){
  
  var cheesetypes = ["cheddar", "gouda", "camembert"];
  var ingredients = ["crackers", "gouda", "thyme"];
  var count=cheesetypes.length;
  for(var i=0;i<count;i++){

        if(cheesetypes[i]===[]){return true;}
  
    return "cheddar";
}

  return "no cheese!";
    
}
----------------------------*/

/*THIRD TRY ----------------
function findTheCheese (foods) {
  
  var cheesetypes = ["cheddar", "gouda", "camembert"];
  var ingredients = ["crackers", "gouda", "thyme"];
 
if(foods.length === cheesetypes) {
      return cheesetypes.shift();
}
  
return "no cheese!";
}
*/

function findTheCheese (foods) {
  var cheesetypes = ["camembert", "cheddar", "gouda","swiss"];
  var ingredients = ["crackers", "gouda", "thyme"];
 
  for(var i = 0; i < foods.length; i++) { /*it will run through the length of food array*/
  for(var j = i; j < cheesetypes.length; j++){
    if(foods[i] === cheesetypes[j]) {
    return cheesetypes[j];
      }
    }
  }
  return "no cheese!";
}

function wordsWithB(words){
 var output = [];
  for(var i=0; i < words.length; i++){
   if(words[i][0] === "B" ){
   
  output.push(words[i]);
   }
   
  }
 return output;
}
