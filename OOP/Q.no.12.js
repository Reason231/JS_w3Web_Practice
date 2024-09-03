// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

class University{
    name;
    departmentName;

    constructor(name){
        this.name=name;
        this.departmentName=[]
    }

    addDepartment(...department){
        var departments=department
        for (let i = 0; i < department.length; i++) {
            this.departmentName.push(department[i])
            console.log(`Your ${this.departmentName} has been added successfylly in the ${this.name}`)
        }
        return departments
    }

    removeDepartment(departmentToRemove) {
        const normalizedDepartmentToRemove = departmentToRemove.toLowerCase().trim();
        const index = this.departmentName.findIndex(department => 
            department.toLowerCase().trim() === normalizedDepartmentToRemove
        );

        if (index !== -1) {
            const removedDepartment = this.departmentName.splice(index, 1);
            console.log(`The ${removedDepartment} has been removed from ${this.name}.`);
        } else {
            console.log(`The ${departmentToRemove} does not exist in ${this.name}.`);
        }
    }

    displayDepartments() {
        console.log(`Departments in ${this.name}: ${this.departmentName.join(', ')}`);
    }
}

const university1=new University("Softwarica University")
university1.addDepartment("IT Department","Health Department")
university1.removeDepartment("IT Department")
university1.displayDepartments()