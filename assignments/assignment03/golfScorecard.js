//---------------------------------------------------------
//Author: Austin Barbee
//Contact: ambarbee@svsu.edu
//Description: JS code for keeping track of golf scores
//---------------------------------------------------------

//declare variables
let elem = [];
let totalScore = 0;
let totalOver = 0;
// assign the entire table row for hole 1 to a variable, elem
// elem[1] = document.getElementById("1");

// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
// elem[1].children[4].children[0].onclick = function(){add1(elem[1]);};

for(let i=1; i<=18; i++) {
  // console.log(i);
  elem[i] = document.getElementById(i.toString());
  elem[i].children[4].children[0].onclick = function(){add1(elem[i]);};
  elem[i].children[4].children[1].onclick = function(){remove1(elem[i]);};
  elem[i].children[4].children[2].onclick = function(){clear(elem[i]);}
}

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";

  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
    
    let overScore = -3 + currentScore;
    elem.children[3].innerHTML = overScore;
    
    totalScore += 1;
    totalOver += 1;
    
    totals = document.getElementById('totals');
    totals.children[2] = 1;
    
  }
}

//create an "remove1" function
function remove1 (elem) {
  
  if (elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML == "-";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
    
    let overScore = -3 + currentScore;
    elem.children[3].innerHTML = overScore;
    
    totalScore = totalScore - 1;
    totalOver = totalOver - 1;
  }
}

//create a clear function
function clear (elem) {
  elem.children[2].innerHTML = "-";
  elem.children[3].innerHTML = "-";
}
