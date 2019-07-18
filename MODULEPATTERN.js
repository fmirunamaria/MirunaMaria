/// MODULE PATTERN
//CURS////--------In programare exista principiul privilegiului minim (principle of minimum priviledge).
//CURS////--------Acest principiu sustine ca abstractiile ar trebui sa expuna utilizatorilor
//CURS//// setul minim de resurse si metode posibil.
//CURS////-------- In JavaScript nu exista un keyword prin care putem face unele variabile sau functii
//CURS////private. Totusi, putem realiza asta prin implementarea module pattern-ului folosind
//CURS////closures.

//BENEFITS:

// FREEZE THE SCOPING
// CODE ENCAPSULATION
// CREATING PRIVATE OR PUBLIC SCOPE
// CREATING A NAMESPACE
// CREATING PRIVATE AND PUBLOC ENCAPSULATION 


//CREATING A MODULE 

// DECLARE A FUNCTION, WHICH CALLS ITSELF IMMEDIATELY 
//    ---immediately-invoked-function-expression----
//     sooo... the function creates NEW SCOPE=> also Privacy

(function () {
    //cod
})(); 

// soooo... we just create a new scopee!!
// now we need to namespace our code(for using return)

var Module = (function () {
    //code
}) ();

// now the MODULE is declared in the GLOBAL SCOPE 
// (means that we can call it wherever we want)

//  JS doesn't have "private methods", buttttt
//  we can create a working equivalent!!
// let's make it inaccesible outside of our scope!

var Module = ( function () {
    var privateMethod = function () {
        // code
    };
}) ();

// now, our function privateMethod 
// is locally declared inside the new scope
// if we call it outside our module --> ERROR!

// RETURNNNN

// (return an object to the Module)
// return an obj with a function as a property:

var Module = (function () {
    return {
        publicMethod: function () {
            //code
        }
    }
});

// we returned an OBJECT LITERAL, 
// SO we can call it
// it is accesible for outside!

Module.publicMethod();

// how an object literal looks:

var myobjliteral= {
    defaults: {name: 'Mickey'},
    someMethod: function () {
        console.log(this.defaults);
        //we used "THIS!!"
    }
};

myobjliteral.someMethod();


// EXAMPLE( from classes):

function createModule() {
    var age=20;
    var name= "Wantsome";
    function increaseAge() {
        age++;
    }
    function changeName(newNAme){
        name=newName;
    }
    function print() {
        console.log( "My name is" + name + "and I'm" + age);
    }
};

return {
    print: print,
    changeName: changeName,
    increaseAge:increaseAge,
}; 

