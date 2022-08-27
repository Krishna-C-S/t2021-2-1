class Calculator{

    add(a,b){
        this.result=a+b
        console.log(`${this.result}`);
    }

    sub(a,b){
        this.result=a-b
        console.log(`${this.result}`);
    }

    mul(a,b){
        this.result=a*b
        console.log(`${this.result}`);
    }

    div(a,b){
        this.result=a/b
        console.log(`${this.result}`);

    }

}
var calc=new Calculator()
calc.add(10,5)
calc.sub(10,5)
calc.mul(10,5)
calc.div(10,5)
