// create an object 
// create a function 
// the function takes a string as a parameter
// add each characters to the object as a key
// if the key already exist in the object? increment it's count
// if the key does not exist in the object, add it to the object 


// create a function 
const countChar = (str) => {
    // create an object 
    const characterCount = {};

    // loop through the string 
    for(let i = 0; i < str.length; i++){

        if(characterCount[str[i]]){
            // if item exists in the object 
            // add one to the value 
            characterCount[str[i]] += 1
        }else{
            // if it does not exist
            // add it to the object and set the value to 1
            characterCount[str[i]] = 1;
        }  
    }

    console.log(characterCount)
}

countChar("connection")
