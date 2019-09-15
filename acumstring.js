

function accum(s) {
let accumString = "";
  
      for (var i = 0; i < s.length; i++) {
        
          currentCharacter = s.charAt(i);
          
          for (var ii = 0; ii <= i; ii++){
              if (ii > 0){
              currentCharacter = currentCharacter.toLowerCase()
              }else{
              currentCharacter = currentCharacter.toUpperCase()
              }             
            accumString += currentCharacter;
            }
		  
          if (i != s.length-1){
            accumString += "-" ;
            }
			
        }

return(accumString)
}
