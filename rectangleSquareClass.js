
class Rectangle {
    constructor(a,b){
        this.len = a;
        this.bdth= b;
    }

    getArea(){
       console.log(this.len * this.bdth);
    }
}

class Square extends Rectangle{
    constructor(a){
        super(a,a);
        super.getArea();
    }
}

let squareArea = new Square(4);
