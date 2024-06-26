var str = "hello";//String
var ob = new String("hello");//Object
console.log(typeof str);
console.log(typeof ob);

//litral
const book = {
    title : "Pyramid Game",
    cast : "Bona",
    year : "2024",
    getTitle : function(){
        return `this title is ${this.title}`;
    }
};
//book.cast= "DaAh"
console.log(book);
console.log(book.getTitle());
console.log(Object.keys(book));
console.log(Object.values(book));

//constructor
function drama(title,cast,year){
    this.title = title;
    this.cast = cast;
    this.year = year;
    this.getTitle = function() {
        return `this title is ${this.title}`;
    };
}
var dorama = new drama("BeautyNewbie","BaiFern","2024");
console.log(dorama);
console.log(dorama.getTitle());
//console.log(dorama.title);

