// Extra work :)
// create a repo for this app. we are coming later to it :)
// Create a program that generate a random password with the length of 30 character, 
// every time you call the function should give you a different password

// Examples you will have other passwords for sure

// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP

const passwordGen = (length) => {
    // declare a var with all charaters that the password should be includes
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!$%&/+*#/@€()={}[]?";
    // declare a empty var for the loop
    let password = ""; 
    for (let i = 0; i < length; i++) {
        /* with .charAt() we can pick a character from a string
           example: 
           console.log(charaters.charAt(6))
           will print out the "g" from the string characters in line 14
        */
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    console.log(password.length);
    console.log(password);
};
passwordGen(30); // change the value inside the () for the length of the password