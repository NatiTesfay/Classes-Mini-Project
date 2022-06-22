class Car{
    constructor(wheelsNumber,engine,color){
        this.wheelsNumber=wheelsNumber;
        this.engine=engine;
        this.color=color
        this.returnValue();
   
    }
    returnValue(){
     return (`${this.wheelsNumber} ${this.engine} ${this.color}`);
    }
}

const carValue = new Car(4,2000,'red');
console.log(carValue);


class Bus extends Car{
    constructor(wheelsNumber,engine,color,kind){
       super(wheelsNumber,engine,color)
        this.kind=kind;
        this.returnValuebus();

    }
        returnValuebus(){
        return (`${this.wheelsNumber} ${this.engine} ${this.color} ${this.kind}`);
        }
      
}
const busValue = new Bus(4,4000,'green','eged');
console.log(busValue);

class Truck extends Car{
    constructor(wheelsNumber,engine,color,kind,size){
    super(wheelsNumber,engine,color,kind)
    this.size=size;
    this.name=this.name
    this.returnValuetruck();
    }
    returnValuetruck(){
    return (`${this.wheelsNumber} ${this.engine} ${this.color} ${this.kind} ${this.size}`);
    }

}
const truckValue = new Truck(4,2000,'black','volvo','3 meter');
console.log(truckValue);


class Jeep extends Car{
    constructor(wheelsNumber,engine,color,kind,size,weight){
    super(wheelsNumber,engine,color,kind,size)
    this.weight=weight;
    this.returnValuejeep();
    get.Truck().toUpperCase(this.name);
    }
    returnValuejeep(){
    return (`${this.wheelsNumber} ${this.engine} ${this.color} ${this.kind} ${this.size} ${this.weight}`);
    }
    

}

const jeepValue = new Jeep(4,2000,'white','jeep','2 meter','3000kg',);
console.log(jeepValue);

