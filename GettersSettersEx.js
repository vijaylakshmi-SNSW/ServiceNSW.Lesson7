// Q1-Q2

// class Square {
//     constructor (sideLength ){
//         this.sideLength = sideLength;
//         // this.area = function area(){
//         //     return (this.sideLength * this.sideLength);
//         }
//     get area () {
//         return (this.sideLength * this.sideLength);
//     }
    
// }

// let squareMeasurement = new Square(20);
// //let sArea= squareMeasurement.area();
// console.log(squareMeasurement.area);
// //console.log(sArea);

//Q3
class Square {
    constructor (sideLength ){
        this.sideLength = sideLength;
    }
    get area () {
        return (this.sideLength * this.sideLength);
    }
    set area (value) {
        this.sideLength = Math.sqrt(value);
    }
    
}

let squareMeasurement = new Square(20);

console.log(squareMeasurement.area);

squareMeasurement.area = 400;
console.log(squareMeasurement.sideLength);