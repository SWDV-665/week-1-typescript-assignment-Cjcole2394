var Grocery = /** @class */ (function () {
    function Grocery(a, b, c) {
        this.name = a;
        this.quantity = b;
        this.price = c;
    }
    return Grocery;
}());
var List = [
    new Grocery("carrots", 2, 10),
    new Grocery("Eggs", 1, 3),
    new Grocery("Bread", 2, 5)
];
var ele = document.getElementById("app");
List.forEach(function (e) {
    var p = document.createElement("p");
    p.textContent = `${e.name} ${e.quantity} -> $${e.price}`;
    ele.appendChild(p);
});
