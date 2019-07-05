///////////ARRAY
//Creati un array cu 50 de elemente fie random, fie numere naturale consecutive.
/*
var numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,]

//● afisati doar primele 10 elemente din array

numbers.slice(10, 50);


//● adaugati la finalul array-ului un obiect care contine numele si prenumele vostru

numbers[numbers.length]="Miurna Maria"

//● creati un nou array cu 5 elemente si uniti-l cu array-ul initial

var numbers2= [1, 2, 3, 4, 5];

var final = numbers.concat(numbers2);


//● introduceti un element nou la pozitia 2 a array-ului

final[1]="element"

console.log(final); */

//////////////////////////////////////////////////////////////////////////////////////
// ● Creati o functie care trunchiaza un string (primul argument) daca lungimea sa este mai mare
//decat lungimea maxima permisa (al doilea argument). Returnati string-ul trunchiat urmat de …
//● Creati o functie care primeste ca argument un string si il converteste intr-un array de cuvinte

/*
function truncatestring(string, lmax) {
    if (string.length > lmax) {
        returnarea = string.slice(0, lmax) + "...";
    } else {
        returnarea = string;
    }

    return returnarea;
}

truncatestring("Abcdef" , 4)   //"Abcd..."
truncatestring("Abcdef" , 8)   //"Abcdef"

*/
//////////////////////

/*
function functie(a, b, c) {
    var prop = a + b + c ;
    var rez = prop.split(",");
}

functie("Ana", "are", "mere");
 
*/
