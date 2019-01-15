const cap = ([first,...rest]) =>{
    console.log(first.toUpperCase()+rest.join('').toLowerCase());
}

cap("fOOBAR") ;
cap("nODEJS") ;
 