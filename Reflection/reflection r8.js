function make_withdraw(balance) {

    function withdraw(amount) {
        if (balance >= amount) {
            balance = balance - amount;
            return balance;
        } else {
            return "Insufficient funds";
        }
    }
    return withdraw;
}

const W1 = make_withdraw(100);
W1(40);
W1(40);
W1(40);
