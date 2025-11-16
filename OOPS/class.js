class BankAccount{
    accountHolder;
    accountNumber;
    balance;

    constructor(accountHolder,balance=0)
    {
        this.accountHolder=accountHolder;
        this.balance=balance;
    }
    deposit(amount)
    {
        this.balance+=amount;
    }
    widhrow(amount)
    {
        this.balance-=amount;
    }
}
const account1=new BankAccount("Chandan",5000);

account1.deposit(2000);
account1.widhrow(1000);

console.log(account1);

