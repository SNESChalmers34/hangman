//creat start function
function start(){
  //array of alphabet
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// letter divs
  // function letters(){
    for (i = 0; i < 26; i++){
    let div = $('div').addClass('letters')
    $('body').append('<div></div')
    }
  // }

//end of start function
}




//create div for alphabet
//

//start function
start()
//rerun start function


// RANDOM CODE

//cycle through array
function cycle(){
  for (i = 0; i < alphabet.length; i++)
  console.log(alphabet[i])
}
cycle()
