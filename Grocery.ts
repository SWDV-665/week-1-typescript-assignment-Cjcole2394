class Grocery {
    name: string; 
    quantity: number;
    price: number;

    constructor(a:string, b:number, c:number) {
        this.name =a;
        this.quantity =b;
        this.price =c;
    }
}
let List=[
    new Grocery("carrots", 2, 10),
    new Grocery("Eggs",1,3),
    new Grocery("Bread",2,5)
]
const ele= document.getElementById("app")

List.forEach(e =>{
    const p = document.createElement("p");
    p.textContent= '${e.name} ${e.quantity} -> $${e.price}';
    ele.appendChild(p);
});