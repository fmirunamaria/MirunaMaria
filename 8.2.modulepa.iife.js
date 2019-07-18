//MODULE PATTERN AND IIFE!!!!


 function all() {
    var name = "";
    var cont = 100;
    function increase() {
        cont++;
    };
    function changeName(newname) {
        name = newname;
    };
    function balance(depuneri, retrageri) {
        var cont;
        if (depuneri > retrageri) {
            var cont = depuneri - retrageri
        }
        else {
            var cont = "Insuficient"
        };
        console.log(` ${nume} | ${cont} | ${balance} `)
    };
    function showbalance() {
        console.log(cont)
    }
    return {
        balance,
        changeName,
        increase,
        showbalance,
    };
} 

var bank = all()
bank.increase()
bank.showbalance()
bank.increase()
bank.showbalance()


/*

function bank() {
    var name = "";
    var balance = 100;
    function showName(newname) {
        name = newname;
    };
    function deposit() {
        return balance +=amount 
    };
    function withdraw() {
        var amount;
        balanced= balance-amount;
    };
    function showbalance() {
        console.log(balanced)
    };
    return {
        showName,
        deposit,
        withdraw,
        showbalance,
    };
}

var rezultat = bank()
bank.showName()
bank.deposit()
bank.wothdraw()
bank.showbalance()


////////////
var balance [ amount, op, date];
withdraw(amount) {
    balance.push{
        amount, 
        operatiuni,
        date: date.now) }

    }
}
deposit(amount) {}
showBalance() {}
showHistory() {}

///////////////////
BuildFun(n)
buildfun[f,f,f]= Arr
arr[1]() -> console.log(1)

*/
/*
var laura= atm(3000);
function atm (inbal) {
    var balance= inibal;
    function deposit(amount) {
        return (balance += balance+=amount);
        function withd(amount) {
            return (balance -=amount) ;

        }
    return {
        deposit,
        withdraw,
    }
};
laura.deposit (100);
laura.withdraw(100);
}
*/