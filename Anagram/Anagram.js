
// look up into Anagram directory
// run command -- node Anagram.js

function anagram(first_str, second_str){
    let arr1 = first_str.split('').sort().join('')
    let arr2 = second_str.split('').sort().join('')
    
    if(arr1 === arr2){
      console.log('its anagram ')
      return true;
    }
    else{
      console.log('its not anagram ' )
      return false;
    }
} 


function anagram_check(first, second, anagram_result){
//   console.log( anagram_result )
  if( ( (first == 'bleat' || first == 'table' ) && ( second == 'table' || second == 'bleat' ) && anagram_result === true) || 
     ( ( first == 'eat' || first == 'tar' ) && ( second == 'tar' || second == 'eat' ) && anagram_result == false)  ){
    console.log('it works')
  }
  else{
    console.log('maybe your input is not similar with testing input or maybe function is incorrect')
  }
}

// unit test anagram_check function will work for these two cases (bleat, table) , (eat, tar)
// anagram function will work for any two words

let anagram_result = anagram('bleat', 'table');
anagram_check('table', 'bleat', anagram_result )

// let anagram_result = anagram('eat', 'tar');
// anagram_check('eat', 'tar', anagram_result )