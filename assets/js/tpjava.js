let inputNombre = document.getElementById('nombre');
let inputApellido = document.getElementById('apellido');
let inputCorreo = document.getElementById('correo');
let inputCantidad = document.getElementById('cantidad');
let inputCategoria = document.getElementById('categoria');
let inputResumen = document.getElementById('resumen');
let inputBorrar = document.getElementById('borrar');
let aPagar = document.getElementById('pagar');

function descuento(categoria){
    switch(categoria){
        case "1": return 0.2;
        case "2": return 0.5;
        case "3": return 0.85;
    }
}
function aplicaDescuento(cantidad, categoria){
    let precio = cantidad*200;
    return precio*Number(descuento(categoria));

}

inputResumen.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputCantidad.value && inputCategoria.selectedIndex != 0) {
      aPagar.innerHTML = `${aplicaDescuento(
        inputCantidad.value,
        inputCategoria.value
      )}`;
    } else {
      alert("Para calcular el total debes ingresar la cantidad y la categoría");
    }
  });

inputBorrar.addEventListener('click', (e)=>{e.preventDefault();
    inputNombre.value="";
    inputApellido.value="";
    inputCorreo.value="";
    inputCantidad.value="";
    aPagar.innerHTML = "";
    categoria.selectedIndex = 0
})
