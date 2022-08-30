class Point {
    
    private x:number;
    private y:number;
    
    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }
   //create get number method
    getX():number {
        return this.x;
    }

}
let point = new Point(3, 2);

console.log(point.getX());
