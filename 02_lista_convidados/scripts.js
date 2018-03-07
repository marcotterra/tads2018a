class List {
    constructor() {
        this.arrInvited = [];
    }


    add() {
        let name = document.getElementById('name').value;
        let age = document.getElementById('age').value;
        let person = [];

        person.name = name;
        person.age = age;

        this.arrInvited.push(person);
    }
}


var li = new List();