// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

class Employee {
    name;
    salary;

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    annualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    department;

    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    annualSalary(bonuses) {
        return super.annualSalary() + bonuses;
    }
}


const employee1 = new Employee('Riza', 2400);
console.log(`${employee1.name} Employee Annual Salary: ${employee1.annualSalary()}`);

const manager1 = new Manager('Rijan', 12, 'IT Department');
console.log(`${manager1.name} Manager of ${manager1.department} Annual Salary with Bonuses: ${manager1.annualSalary(1)}`);
