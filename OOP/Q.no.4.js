// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount{
    accountNumber;
    balance;

    constructor(accountNumber,balance){
        this.accountNumber=accountNumber;
        this.balance=balance
    }

    deposit(deposit){
            this.balance=this.balance+deposit
            console.log(`Your account has debited/deposited Rs${deposit} and your total balance is Rs${this.balance}`)
    }

    withdraw(withdraw){
        setTimeout(() => {
            this.balance=this.balance-withdraw
            console.log(`Your account has credited/withdraw Rs${withdraw} and your total balance is Rs${this.balance}`)
        }, 3000);
    }
}

const ReasonAccount=new BankAccount("Reason123@",2000)
ReasonAccount.deposit(10)
ReasonAccount.withdraw(5)