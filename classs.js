var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    //create get number method
    Point.prototype.getX = function () {
        return this.x;
    };
    return Point;
}());
var point = new Point(3, 2);
console.log(point.getX());
