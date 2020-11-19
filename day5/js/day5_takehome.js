function getpstr() {
    let pstr = prompt("Please enter a password: ");
    console.log(pstr);
    if (!pstr) {
        getpstr();  // recursion
    } else if (pstr.length < 6) {
        alert('Password must be more than 6 characters long');
        getpstr();  // recursion        
    } else if (pstr.length  > 60) {
        alert('Password must be less than 60 characters long');
        getpstr();  // recursion        
    } else if (!isLetter(pstr[0])) {
        alert('Password must start with a letter');
        getpstr();  // recursion        
    } else {
        alert('Password is accepted');
        console.log(pstr);      
    }
    return pstr;
  }

  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }
  
  getpstr(); 