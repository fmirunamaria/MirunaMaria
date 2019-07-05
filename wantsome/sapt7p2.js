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


/* function prime(n) {
    if( n<=1 ) return false;
    if (n==2) return true;
    for ( var i=3; i <=n /2 ; i+=2){
        if (n%i ===0) {
            return false;
        }
    }

}
console.log(prime(10)); */

/* GRESIT function arg(a,b) {
    var argString = 'Repet sau nu';
    for (var x = 0; x < a; x++) {
        argString += 'Repet sau nu'
    };
    return argString;
}

console.log(arg(100)); */

/* function repeatString(str,n) {
    var result = "";
    for(var i=0; i < n; i++ ) {
        result += str;
    }
    return result;
}

console.log(repeatString("ceva",5)); */

//function calculateTax(salary,tax) {
//    return "taxa este" + tax + "respectiv" + salary + tax  
//}

/*
var venit = function(ren) {
    if (ren <=30000) {
        return "Taxa este 0%.";
    }
    if (ren >30000 && ren<50000) {
        taxa = ren * 0.15 ;
        return "Taxa este de 15%, respectiv " + taxa ;
    }
    if (ren >50000 && ren<100000) {
        taxa = ren * 0.35 ;
        return "Taxa este de 35%, respectiv " + taxa ;
    }
    taxa= ren * 0,4;
    return "Taxa este de 40%, respectiv " + taxa;
};

console.log(venit(60000)); */

/// array 5 elem, gasiti elem cu numele "Gabriel"----- folosind metoda indexof

var cantareti = ["Alin", "Alex", "Andrei", "Bogdan", "Gabriel Miron"];


function findGabriel(element) {
    return element.name === "Gabriel Miron";
}


console.log(cantareti.indexOf(4));
const result = cantareti.findIndex(function( element) {
    console.log( "" , element);

});
 ////// callback element
////////////////functie ca argument


/////////////////////////// numere pare

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const results =numbers.filter(function(element) {
    console.log ("in filter => ", element);
return element % 2 == 0;
});



function myfilter(arr) {
    var result = []
    for ( var i=0; i <arr.length; i++) {
        if (arr[1] % 2 == 0) {
            result.push(arr[1]);
        }
    }
}






