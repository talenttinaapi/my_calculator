function display(val){
    document.getElementById('result').value += val;
    return val;
}

function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}

function clearScreen(){

    document.getElementById('result').value = ''

}

class Cars { 

    constructor(name, maker, price) { 

      this.name = name; 

      this.maker =  maker; 

      this.price = price; 

    } 

    getDetails(){ 

        return (`The name of the car is ${this.name}.`) 

    } 

  } 

  let car1 = new Cars('Rolls Royce Ghost', 'Rolls Royce', '$315K'); 

  let car2 = new Cars('Mercedes AMG One', 'Mercedes', '$2700K'); 

  console.log(car1.name);     

  console.log(car2.maker);   

  console.log(car1.getDetails()); 

