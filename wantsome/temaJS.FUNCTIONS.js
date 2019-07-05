// Scrieti o functie de tip function expression asociata cu numele helloWorldInLang care:
//● Primeste ca argument codul unei limbi: “en”, “es”, “de”
//● Returneaza “Hello World” pentru limba corespunzatoare (cel putin 3 limbi)
//● Daca limba nu este specificata, trebuie sa returneze textul pentru limba engleza
////////////////////////////////////////////////////////////

/*
var language = function helloWorldInLang(lang) {
    if (lang = "en" ) {
        console.log("Hello world")
    }
    else if (lang = es) {
        console.log("Hola mundo")
    }
    else if (lang = de) {
        console.log("Hallo welt")
    }
    else {console.log("Hello world")}
};

helloWorldInLang("en"); */

//////////////////////////////////////////////////
//// Creati o functie care afiseaza cel mai mic numar dintr-un array
////////////////////////////////////////////

/*var numbers  = [ 10, 8 , 90, 13 ];
var min = numbers [0];
for( var i = 1; i < numbers.length; i++ ) {
    if ( numbers [1] < min) {
        min = numbers[1];
    }
}

console.log ("min=", min) */

//////////////////////////////////////////////////////////////////
// Creati o functie care afiseaza la consola daca un numar este prim
////////////////////////////////////////////////////////////////

/* function prime(x) {
    if (x === 1) {
        return false;
    }
    else if (x === 2) {
        return true;
    }
    else if (x <= 0) {
        return false;
    } else {
        for ( div = 2; div < x; x++) {
            if (x % div === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(prime(5)); */