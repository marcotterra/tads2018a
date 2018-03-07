class Calculator {
  getNumbers() {
    let numbers = {};

    let n1 = document.getElementById("number1").value;
    let n2 = document.getElementById("number2").value;

    numbers.n1 = n1;
    numbers.n2 = n2;

    return numbers;
  }

  validate(numbers) {

    let errors = [];
    let diverr = document.getElementById('errors');


    if (numbers.n1 == "") {
      errors.push({ msg: "#1 is blank" });
    } else if (numbers.n2 == "") {
      errors.push({ msg: "#2 is blank" });
    }


    for (let i = 0; i < errors.length; i++) {
        diverr.innerHTML += errors[i].msg;
    }
  }

  write(obj) {
      let result = document.getElementById('result');
      result.innerHTML = obj;
  }

  sum() {
    let num = this.getNumbers();

    this.validate(num);

    let res = parseInt(num.n1) + parseInt(num.n2);

    this.write(res);
  }
}
var calc = new Calculator();
