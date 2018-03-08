class List {
    constructor() {
        this.arrInvited = [];
        this.childrens = 0;
        this.teenagers = 0;
        this.adults = 0;
        this.olds = 0;
    }


    add() {
        let name = document.getElementById('name').value;
        let age = document.getElementById('age').value;
        let person = [];

        person.name = name;
        person.age = age;

        this.arrInvited.push(person);
    }

    showli(strings, ...values) {
        return `<li>
                    <span class="box-item left text-center">${strings.name}</span>
                    <span class="box-item right text-center">${strings.age}</span>
                </li>`
    }

    show() {

        let table1 = document.getElementById('ul-table1');
        let arrar = this.arrInvited;
        table1.innerHTML = '';

        for (let i = 0; i < arrar.length; i++) {
            table1.innerHTML += this.showli(arrar[i]);
        }

    }

    cReports() {

        for (let i = 0; i < this.arrInvited.length; i++) {
            if (this.arrInvited[i].age < 13) {
                this.childrens++;
            } else if (this.arrInvited[i].age < 18) {
                this.teenagers++;
            } else if (this.arrInvited[i].age < 56) {
                this.adults++;
            } else {
                this.olds++;
            }
        }
    }

    sReports(){

        this.cReports();

        let childrens = document.getElementById ("child");
        let teenagers = document.getElementById ("teenagers");
        let adults = document.getElementById ("adults");
        let olds = document.getElementById ("olds");
        
        childrens.innerHTML = this.childrens;
        teenagers.innerHTML = this.teenagers;
        adults.innerHTML = this.adults;
        olds.innerHTML = this.olds;
    }
}


var li = new List();