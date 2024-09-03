//Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

class Bank {

    constructor() {
      this.bankName = '';
      this.branches = [];
    }

    addBranch(branch) {
      this.branches.push(branch);
      console.log(`${branch} added successfully.`);
    }
  
    removeBranch(branch) {

    // indexOf helps to find the index of the given branch name. For eg => branchB has index 2 so the index value became 2
    // It search the branch name from the this.branch and provides the index
    const index = this.branches.indexOf(branch);   


      if (index !== -1) {
        this.branches.splice(index, 1);  // It removes the branch from the array because index represents the array of the given branch. 
        console.log(`Branch ${branch} removed successfully.`);
      } 

      else {
        console.log(`Branch "${branch}" does not exist.`);
      }

    }
  
    displayBranches() {
      if (this.branches.length === 0) {
        console.log('No branches available.');
      } else {
        console.log('List of Bank Branches:');
        this.branches.forEach((branch, index) => {
          console.log(`${index + 1}. ${branch}`);   // branch A at 0 index and 0+1 so output => 1. Branch A
        });
      }
    }
  }


  // Create an instance of the Bank class
  const bank = new Bank();

  // Add branches
  bank.addBranch('Branch A');
  bank.addBranch('Branch B');
  bank.addBranch('Branch C');

  // Display all branches
  bank.displayBranches();

  // Remove a branch
  bank.removeBranch('Branch B');

  // Display all branches again
  bank.displayBranches();
  