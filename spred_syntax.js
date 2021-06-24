const number = [5, 6, 7, 8];

// without spread oprator
const counting = [1, 2, 3, 4, number, 9, 10];
console.log(counting);


// with spread oprator
const spreadCounting = [1, 2, 3, 4, ...number, 9, 10];

console.log(spreadCounting);




function addThreeNumber (x, y, z){
    console.log(x+y+z);
}

let args = [1, 2, 5];
addThreeNumber(...args)

// class
// they are object in which we have instance properties and for processing on instance properties we have instance methods

class Rectangle {
    constructor (_width, _length){
    this.width = _width;
    this.length = _length
    }
}

let rectangle1 = new Rectangle(3, 5)
console.log(rectangle1);