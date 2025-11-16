function BankAccount(customerName,accountNumber,balance=0)
{
    this.customerName=customerName;
    this.accountNumber=accountNumber;
    this.balance=balance;

    this.deposit=function(amount)
    {
        this.balance+=amount;
    }
}

// const account1=new BankAccount("Chandan",5000);

// const account2=new BankAccount("Ravi");

// account1.deposit(2000);

// console.log(account1);
// console.log(account2);

const form=document.querySelector("#account-form");
const nameInput=document.querySelector("#account-holder");
const balanceInput=document.querySelector("#initial-balance");
const accountNumberInput=document.querySelector("#account-number");

const deposit=document.querySelector("#deposit");
const accountNumber1=document.querySelector("#accountNumber");
const depositAmount=document.querySelector('#deposit-amount')
const student=[];

form.addEventListener('submit',function(e){
    e.preventDefault();
   const account3=new BankAccount(nameInput.value,accountNumberInput.value,Number(balanceInput.value));
    student.push(account3);
    console.log(student);
})

deposit.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(typeof(accountNumber1.value));
    console.log(student);

    const account=student.find((acc)=>(acc.accountNumber===accountNumber1.value));
    console.log(account);
    if(account)
    {
        account.deposit(Number(depositAmount.value));
        console.log(account);
    }
})
