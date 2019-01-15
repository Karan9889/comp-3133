function gretter(myArray, counter) {
    let greetText = 'Hello';
    for(let index in myArray) {
        console.log(`ka ${greetText}  ${myArray[index]}`);
    
    }
}
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

console.log("***********************************************************************************");
