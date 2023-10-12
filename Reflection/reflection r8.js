function make_withdraw(balance, password) {
    
    function withdraw(amount,pwd) {
        if (pwd !== password) {
            return "Wrong password; no withdraw";
        }else if(balance >= amount) {
            balance = balance - amount;
            return balance;
        } else {
            return "Insufficient funds";
        }
    }
    return withdraw;
}

const acc = make_withdraw(100, "my_password");
acc(30, "his_passcode"); // returns "Wrong password; no withdraw"
acc(30, "my_password"); // returns 70
