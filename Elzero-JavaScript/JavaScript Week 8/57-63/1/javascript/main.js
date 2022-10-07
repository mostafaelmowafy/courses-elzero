function sayHello(theName, theGender) {
    if(theGender === "Male"){
        document.write(`<h3> Hello Mr ${theName} </h3>`)
    }
    else if(theGender === "Female" ){
        document.write(`<h3> Hello Miss ${theName} </h3>`)
    }
    else{
        document.write(`<h3> Hello ${theName} </h3>`)
    }
}

  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"