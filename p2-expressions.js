/*
    CIT 281 Project 2
    Name: Ivan Sigala-Ramos 
*/

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 
const getRandomInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//This function will return a single, random, lowercase letter from the alphabet array
const getRandomLetter =function (){
    return Math.floor(Math.random() * alphabet.length);
}

// This function will return the random length string
const getRandomString = function (minLength, maxLength){
    let stringlength = getRandomInteger(minLength, maxLength);
    let result= "";
    for(i = 0; i< stringlength; i++){
        let letters= getRandomLetter();
        result  += alphabet[letters];
    }
    return result;
}

//This function will return a string in ascending order 
 const getSortedString = function (string){
return string.split("").sort().join("");
}

let random = getRandomInteger(0, 25);

result = " ";

for ( i=0; i<= random; i++){
    let randletters = getRandomLetter();
    result += alphabet[randletters];
}
console.log(result);
console.log(getSortedString(result));

