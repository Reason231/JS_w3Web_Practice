//  Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.


class BankAccount{
    accountNumber;
    accoutHolder;
    balance;

    constructor(accountNumber,accoutHolder,balance){
        this.accountNumber=accountNumber;
        this.accoutHolder=accoutHolder;
        this.balance=balance;
    }

    depoist(depoistamount){
        this.balance=this.balance+depoistamount
        console.log(`You have deposited ${depoistamount} successfully in the account ${this.accoutHolder}`)
        console.log(`Your current balance is ${this.balance}`)

    }

    withdraw(withdrawamount){
        if(this.balance <= 0){
            console.log("You account doesn't have enough money for the withdrawal")
        }
        else{
            this.balance=this.balance-withdrawamount
            console.log(`You have withdraw ${withdrawamount} successfully in the account ${this.accoutHolder}`)
            console.log(`Your current balance is ${this.balance}`)

        }
    }

   transferAmount(amount,account){
    if(amount<0){
        console.log("The transfer amount should be in positive")
    }
    else if(this.balance < amount){
        console.log("You have insufficient balance to transfer the money")
    }
    else{
        this.balance=this.balance-amount
        console.log(`You have successfully transfered ${amount} to ${account.accoutHolder}`)
        account.depoist(amount)
    }
}

}

const RizaAccount=new BankAccount(123,"Riza",10)
const RijanAccount=new BankAccount(456,"Rijan",0)
RizaAccount.depoist(10)
RizaAccount.withdraw(5)
RizaAccount.transferAmount(5,RijanAccount)
