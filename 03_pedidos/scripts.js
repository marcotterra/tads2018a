class Orders {
    constructor() {
        this.arrOrd = [];
    }


    save() {
        let p = document.getElementById('shirt-p').value;
        let m = document.getElementById('shirt-m').value;
        let g = document.getElementById('shirt-g').value;

        let array = [];

        let total = parseInt(p) + parseInt(m) + parseInt(g);

        array.p = p;
        array.m = m;
        array.g = g;
        array.total = total;

        this.arrOrd.push(array);
        this.update();
    }

    update() {
        let list = document.getElementById('list');

        list.innerHTML = '';

        this.arrOrd.forEach((element, index) => {
            return list.innerHTML += this.write(element, index);
        });
    }

    write(obj, ...rest) {
        return `<li>
                    <span class="box-item text-center">${rest[0] + 1}</span>
                    <span class="box-item text-center">${obj.p}</span>
                    <span class="box-item text-center">${obj.m}</span>
                    <span class="box-item text-center">${obj.g}</span>
                    <span class="box-item text-center">${obj.total}</span>
                    <span class="box-item text-center">
                        <button onclick="ord.edit(${rest[0] - 1})})">Edit</button>
                    </span>
                </li>
            `;
    }

}


var ord = new Orders();

