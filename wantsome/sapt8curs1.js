/*var a =1;
function foo() {
    var a = 10;
    console.log (a);
}

console.log(a);

////////////////////////////

foo();
var i =10;
for ( var i=0; i<5; i++) {                    ------leti -->>> i=10

}

console.log(i);

//i= 5  

function a() {
    var x=2;
    let y=5;
}
a();
console.log(x); //eroare//



//functie in functie//

function f1() {
    var x ="";

    function f2() {
        var y =""
        console.log(x);
        console.log(y);
    }

    f2();
}
f1();



// console : "" "" 


function f1() {
    const x="";

    function f2() {
        console.log()
    };

    return f2;
}

const f2 = f1 ();
f2();

/// ca in tema, creati o functie numita makediff -->

//const diff10 = makediff(10)
console.log (dif(10(3)))--> 7
            diff10(5)-->5 */




/*
function makeDiff(d) {
    function inner(s) {
        return d - s;
    }
    return inner;
}

const diff10 =  makeDiff(10)                    /// =makeDiff(10)(4)()..
console.log(diff10(3));

console.log(diff10) // cons:functia
*/





