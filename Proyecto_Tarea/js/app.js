let MyDom = document
let MyApp = document.getElementById("MyApp")
class Button {
    constructor(parentID, text, id){
        this.parentID = parentID;// el id del div en el cual estara el boton
        this.text = text; //Texto que le puedo pasar
        this.id = id; //paremetro que le puedo pasar
    }
    render(){
        let myContenedor = document.getElementById(this.parentID)
        console.log(myContenedor);
        console.log("HOLIS");
        const myButtonHTML = "<button id="+this.id+">"+this.text+"</button>"//test

        myContenedor.innerHTML = myButtonHTML; //Aca se va a generar el html del boton
    }
}

let myButton = new Button("contenedor","Presiona aquí!","boton");
myButton.render();
const boton = document.getElementById('boton');
boton.addEventListener('click', function() {
	const nombre = prompt('¿Cuál es tu nombre?');
    if (nombre == null || nombre == "" )
    {
        MyApp.innerHTML = "Dejaste el Promt Vacio o lo Cancelaste";
    } else {
        MyApp.innerHTML = "Hola! "+ nombre;
    }
	    
});
