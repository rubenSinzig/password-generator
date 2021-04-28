// function for generate password
const passwordGen = () => {
  // declare a var with all charaters that the password should be includes
  let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!$%&/+*#/@€()={}[]?";
  // console.log(characters.length);
  // var for the length of the pw
  let userLength = document.querySelector("#selectLength").value;
  // console.log(userLength);
  // declare a empty var for the loop
  let password = "";
  for (let i = 0; i < userLength; i++) {
    /* with .charAt() we can pick a character from a string
           example: 
           console.log(charaters.charAt(6))
           will print out the "g" from the string characters in line 14
        */
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    ); // characters length 81
  }
  // console.log(password.length);
  //console.log(password);
  document.querySelector("#password").value = password;
};
