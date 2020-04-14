// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, imageUrl) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.imageUrl = imageUrl;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getImageUrl() {
        return this.imageUrl;
    }

    getRole() {
        return "Employee";
    }
}


module.exports = Employee;