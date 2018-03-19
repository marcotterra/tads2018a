class Orders {
    constructor() {
        this.orders = [];
        this.list = document.getElementById('list');
        this.form = document.getElementById('form');

        this.p = document.getElementById('shirt-p');
        this.m = document.getElementById('shirt-m');
        this.g = document.getElementById('shirt-g');

        this.editable = { "e": null, "eid": null };

        // array dos buttons
        this.buttons = [];

        // inicializacao dos botoes que tenham alguma ação.
        this.register();
    }

    register() {
        this.form.onsubmit = event => this.save(event);
        // this.btnEdit[].onclick = event => console.log(event);
    }

    save(event) {
        event.preventDefault();

        const { e, eid } = this.editable;
        const p = this.p.value;
        const m = this.m.value;
        const g = this.g.value;


        // verifica se o valor inserido no form é nulo ou vazio, se sim, cancela a ação.
        if (p.length === 0 || m.length === 0 || g.length === 0) {
            console.log("Some area wasn't populated")
            return;
        }

        const total = this.sum(p, m, g);

        if (!e) {
            // utiliza a metodologia Object Short Sintax do ES6
            // quando a variável destino tem o mesmo que a variável de origem tem o mesmo nome,
            //  é possível passar apenas uma delas, entre {}.
            this.orders.push({
                p,
                m,
                g,
                total
            });
        } else {
            this.orders[eid] = {
                p,
                m,
                g,
                total
            }; 
        }

        this.clear();
        this.render();
    }

    render() {
        this.list.innerHTML = '';
        this.orders.forEach((order, index) => {
            return list.innerHTML += this.listItem(order, index);
        })
        this.loadButtons();
    }

    listItem(order, index) {
        return `<li>
                    <span class="box-item text-center">${index + 1}</span>
                    <span class="box-item text-center">${order.p}</span>
                    <span class="box-item text-center">${order.m}</span>
                    <span class="box-item text-center">${order.g}</span>
                    <span class="box-item text-center">${order.total}</span>
                    <span class="box-item text-center">
                        <button class="btn-edit">
                            Editar
                        </button>
                    </span>
                </li>`;
    }

    sum(...nums) {
        return nums.reduce((total, next) => parseInt(total) + parseInt(next));
    }

    loadButtons() {
        // http://jsben.ch/#/hyj65
        this.buttons.length = 0;

        const bEl = document.getElementsByClassName('btn-edit');

        //converte a HTMLColletion em uma array
        const arrButtons = [...bEl];

        arrButtons.forEach((button, index) => {
            this.buttons.push(button);

            this.buttons[index].onclick = event => this.edit(index);
        });
    }

    edit(index) {
        this.p.value = this.orders[index].p;
        this.m.value = this.orders[index].m;
        this.g.value = this.orders[index].g;

        // e:   variavel no objeto para editar = true
        // eid: variavel no objeto de posicao
        const e = true;
        const eid = index;

        this.editable = {
            e,
            eid
        };
        console.log(`Editando o order ${index + 1}`)
    }

    clear() {
        this.editable = { "e": null, "eid": null };
        this.p.value = '';
        this.m.value = '';
        this.g.value = '';
    }
}

new Orders();