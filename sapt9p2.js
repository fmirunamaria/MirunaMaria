/*
var array= [1,2,3,4,5];
var mutable = array.splice (0,2); ----> 1,2
var immutable = array.slice (0,2);  ----> 3,4

console.log ( {imutable, mutable, array }); 

*/  /*

//IIFE

(function myFn() {
    console.log("IIFE");
})(); 

*/

/////

/*

(function myfvt(name) {
    console.log('Hi ' + name);
})('Alex'); 

*/

// hof
//functiile- class citizens
/*

const arr = [1,2,3,4];
const result = arr.filter(function(el) {
    return el % 2 ===0;
});
console.log(result);
*/ /*
//al doilea


var arr = [1,2,3,4];

function sum10(el) {
    return el*10
};
function double(el) {
    return el*2;
}

function modify(arr,fn) {
    var result = [];
    for (let i =0; i< arr.length; i++ ) {
        result.push(fn(arr[i]))
    }
    return result;
}

console.log("sum10 ->", modify(arr,sum10));
console.log("double ->", modify(arr,double));




*/
/* primul ex

var arr = [1,2,3,4]

function isOdd (el) {
    return el % 2=== 1;
};
function isEven (el) {
    return el % 2=== 0;
};
function gtTwo (el) {
    return el>2;
};

function filterFn(arr, fn) {
    var result =[];
    for(let i = 0; i<arr.length; i++) {
        if( fn(arr[i]) === true) {
            result.push(arr[i]);
        }
    }
    return result;
};



console.log("isOdd ->", filterFn(arr,isOdd));
console.log("isEven ->", filterFn(arr,isEven));
console.log("gtTwo ->", filterFn(arr,gtTwo));

*/
/*
var arr = [1, 2, 3, 4, 5];

function findFn(arr, fn) {
    arr[0]
};

var found = arr.findFn(function () {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) = 0) {
            result.push(arr[i]);
        }
        return result;
    }
}
);


console.log(found); */

///////// sus eu
function firstGT5(el,index,arr) {
    console.log("firstGT5", {el,index,arr} );
    return  el > 5 ;
};

var arr= [1,2,3,4,5,6,7,8];

function findFn(arr,fn) {
    for (let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i, arr)) {
            //return arr[i];
            return {element: arr[i], index: i};
        }
    }
};

console.log(findFn(arr,firstGT5));

/// sau 
//arr.forEach(function(el) {
//    console.log(el, index, arr);
//}); 

// alt mod de a scrie: c.l("cu find -> ", arr.find(firstGT5));


//// pt cheie plus valoare:
 /*
function findFn(arr,fn) {
    for (let i = 0; i < arr.length; i++) {
        if(fn(arr[i])) {
            return {
                index: 1,
                el:arr[i]
            };
        }
    }
}; */
/// 

//////////////objects in js
var obj1 = {
    name: "alex",
    age: 29
};

var obj2 = {
    name: "Bogdan",
    color: "white"
}

var alex = {
    ...obj1,
    ...obj2
};

//console.log(alex);

function Account() {
    this.name= "Munteanu"
    this.arr=[1,2,3,4,5];
    this.newArr=[-1,0, ...this.arr];
    return { age:29,... this};
}; 

// [...] = concatenare (3 puncte)

const x= new Account();  // const x = Account()
console.log(x);

