let visitantes = prompt("Bienvenidos a Cabañas Cerro Negro, Cuantas personas nos quieren visitar?");
let noches = prompt(`"Serian ${visitantes}, los que nos visitan, Decinos cuantas noches nos visitarian?"`);

if(visitantes < 4){
     alert("Increible, estamos procesando tu reserva.");
     calculodereserva ();
    }  else{
    alert("En este caso seria necesario mas de una Cabañas");    
 }
function calculodereserva() {
    let medio = prompt(`¿Dime, como vas a pagar `); 
switch (medio) {
    case "Tarjeta de credito":
         alert(`Con ${medio} debes cancelar 10% mas del costo final.`);
     break;
     case "Tarjeta de debito":
         alert(` ${medio} no tiene carga adicional`);
         break;
    case "Efectivo":
         alert(`Por ser Online no podemos Aceptar ${medio} en este momento`);
         break;
     default:
         alert(`"ingrese un Medio de pago, Ejemplo: Tarjeta de credito o Tarjeta de Debito"`);
         break;
}    
}