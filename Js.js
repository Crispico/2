


const usuariosPlantas = JSON.parse(localStorage.getItem('users')) || [];

console.log(usuariosPlantas)




//alert("ingresa tu nombre")
//let nombreLocal = prompt("Quien eres")
//console.log(nombreLocal)
let barraInicio = document.getElementById("barraInicio");

let botonba = document.getElementById("botonba");
let botonac = document.getElementById("botonac");
let botonin = document.getElementById("botonInicio");
let botoncn = document.getElementById("botoncn");

const textoPD = document.getElementById("textopd");
const textoAC = document.getElementById("textoac");

let textoInicio = `<div> class="ventanita" id="textopd">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias libero aut unde esse, provident nihil omnis explicabo. Labore iusto asperiores, dolorem vero eveniet natus similique ut quas eius molestiae quae?</div>`;




/* PRIMERA PRUEBA
let textoAccesorios = `<div class="accesorios" id="textoac">
<div class="hijoAccesorios" style="background-image: url(repositorio/ab620af9-cf30-484b-8eb8-7c31a211601a1-cae54e59c629895c4016570535528993-240-0.jpeg)"></div>
<div class="hijoAccesorios" style="background-image: url(repositorio/IMG_7777-scaled.webp);"></div>
<div class="hijoAccesorios" style="background-image: url(repositorio/Sesion-de-estudio-212-1-1-500x500.webp);"></div>
<div class="hijoAccesorios" style="background-image: url(repositorio/D_NQ_NP_938219-MLA70369161350_072023-O.webp);"></div>


</div>`;
let textoPlantas = `<div class="poductos" id="textopd">
<div class="hijoProducto" style="background-image: url(repositorio/crasas-en-maceta_00483489_21c54e9d_1333x2000.jpg);"></div>
<div class="hijoProducto" style="background-image: url(repositorio/Diphembachia--370x500.webp);"></div>
<div class="hijoProducto" style="background-image: url(repositorio/pexels-nadiye-odabasi-10467814-scaled.jpg);"></div>
<div class="hijoProducto" style="background-image: url(repositorio/tronco-de-brasil-pinterest_e9b3d66c_1000x1500.jpg)"></div>


</div>`;


*/
let textocontacto = `<div> class="ventanita" id="textopd"><a href="https://mail.google.com/">Gomexg4@gmail.com</a>
 </div>`;

// Plantas


let texto1 = `<div id="Contenedor1">
<div class="Contenedor2"
    style="background-image: url(https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/estos-son-los-lugares-de-expansion-de-las-plantas-exoticas/5478919-1-esl-MX/Estos-son-los-lugares-de-expansion-de-las-plantas-exoticas.jpg)">
</div>
<h1 class="h1boton">Planta 1</h1>
<div class="botoness">
    <button id="Boton0" class="botonnn">Comprar</button>
    <button id="Botonn0" class="botonnn">Guardar</button>
</div>

</div>`
let texto2 = `<div id="Contenedor1">
<div class="Contenedor2"
    style="background-image: url(https://cdn.shopify.com/s/files/1/0272/1392/2339/products/Ficus-moclame_19o_moonbeige_comprar-plantas-online_plantas-de-interior.jpg?v=1655200452)">
</div>
<h1 class="h1boton">Planta 2</h1>
<div class="botoness">
    <button id="Boton1">Comprar</button>
    <button id="Botonn1">Guardar</button>
</div>

</div>`;

let texto3 = `<div id="Contenedor1">
<div class="Contenedor2"
    style="background-image: url(https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_450,h_600/productos/fol/11251/11251218_1.jpg?19-04-2024)">
</div>
<h1 class="h1boton">Planta 3</h1>
<div class="botoness">
    <button id="Boton2">Comprar</button>
    <button id="Botonn2">Guardar</button>
</div>

</div>`;

let texto4 = `<div id="Contenedor1">
<div class="Contenedor2"
    style="background-image: url(https://www.elmueble.com/medio/2020/09/02/plantas-carnivoras-ideas-consejos_da2cc168_674x506.jpg)">
</div>
<h1 class="h1boton">Planta 4</h1>
<div class="botoness">
    <button id="Boton3">Comprar</button>
    <button id="Botonn3">Guardar</button>
</div>

</div>`;


botonba.addEventListener("click", () => {
    console.log("click")
    textoPD.innerHTML = texto1 + texto2 + texto3 + texto4;
    const botonesDeCompra = document.getElementById("Boton0");
    const botonesDeCompra1 = document.getElementById("Boton1");
    const botonesDeCompra2 = document.getElementById("Boton2");
    const botonesDeCompra3 = document.getElementById("Boton3");

    const botonnes = document.getElementById("Botonn0");
    const botonnes1 = document.getElementById("Botonn1");
    const botonnes2 = document.getElementById("Botonn2");
    const botonnes3 = document.getElementById("Botonn3");

    botonesDeCompra.addEventListener("click", () => {
        alert(" Funcion no disponible");
    });
    botonesDeCompra1.addEventListener("click", () => {
        alert(" Funcion no disponible");
    });
    botonesDeCompra2.addEventListener("click", () => {
        alert(" Funcion no disponible");
    });
    botonesDeCompra3.addEventListener("click", () => {
        alert(" Funcion no disponible");
    });

    botonnes.addEventListener("click", () => {
        alert("Aun no tenemos carrito");
    });
    botonnes1.addEventListener("click", () => {
        alert("Aun no tenemos carrito");
    });

    botonnes2.addEventListener("click", () => {
        alert("Aun no tenemos carrito");
    });
    botonnes3.addEventListener("click", () => {
        alert("Aun no tenemos carrito");
    });

});





// Accesorios

let textoAc1 = `<div id="Contenedor1">
<div class="Contenedor2"
    style="background-image: url(https://acdn.mitiendanube.com/stores/001/813/636/products/screen-shot-2022-09-23-at-5-31-29-pm1-a96bf95d7b5e1a650b16639673990540-640-0.png)">
</div>
<h1 class="h1boton">Accesorio 1</h1>
<div class="botoness">
    <button id="Boton0">Comprar</button>
    <button id="Botonn0">Guardar</button>
</div>

</div>`
let textoAc2 = `<div id="Contenedor1">
<div class="Contenedor2"
    style="background-image: url(https://http2.mlstatic.com/D_NQ_NP_909556-MLA54552518602_032023-O.webp)">
</div>
<h1 class="h1boton">Accesorio 2</h1>
<div class="botoness">
    <button id="Boton1">Comprar</button>
    <button id="Botonn1">Guardar</button>
</div>

</div>`;

let textoAc3 = `<div id="Contenedor1">
<div class="Contenedor2"
    style="background-image: url(https://materiales-express.com/wp-content/uploads/2021/02/Pala-De-Jardineria-1334-350mm.jpg)">
</div>
<h1 class="h1boton">Accesorio 3</h1>
<div class="botoness">
    <button id="Boton2">Comprar</button>
    <button id="Botonn2">Guardar</button>
</div>

</div>`;

let textoAc4 = `<div id="Contenedor1">
<div class="Contenedor2"
    style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRecajQqAJKqaiTar8VuEefkEPsXNgs02-wTw&s)">
</div>
<h1 class="h1boton">Accesorio 4</h1>
<div class="botoness">
    <button id="Boton3">Comprar</button>
    <button id="Botonn3">Guardar</button>
</div>

</div>`;

botonac.addEventListener("click", () => {
    console.log("click")
    textoPD.innerHTML = textoAc1 + textoAc2 + textoAc3 + textoAc4;
    const botonesDeCompra = document.getElementById("Boton0");
    const botonesDeCompra1 = document.getElementById("Boton1");
    const botonesDeCompra2 = document.getElementById("Boton2");
    const botonesDeCompra3 = document.getElementById("Boton3");

    const botonnes = document.getElementById("Botonn0");
    const botonnes1 = document.getElementById("Botonn1");
    const botonnes2 = document.getElementById("Botonn2");
    const botonnes3 = document.getElementById("Botonn3");

    botonesDeCompra.addEventListener("click", () => {
        alert(" Funcion no disponible");
    });
    botonesDeCompra1.addEventListener("click", () => {
        alert(" Funcion no disponible");
    });
    botonesDeCompra2.addEventListener("click", () => {
        alert(" Funcion no disponible");
    });
    botonesDeCompra3.addEventListener("click", () => {
        alert(" Funcion no disponible");
    });

    botonnes.addEventListener("click", () => {
        alert("Aun no tenemos carrito");
    });
    botonnes1.addEventListener("click", () => {
        alert("Aun no tenemos carrito");
    });

    botonnes2.addEventListener("click", () => {
        alert("Aun no tenemos carrito");
    });
    botonnes3.addEventListener("click", () => {
        alert("Aun no tenemos carrito");
    });

});















botonin.addEventListener("click", () => {
    console.log("click")
    textoPD.innerHTML = textoInicio;

});

botoncn.addEventListener("click", () => {
    console.log("click")
    textoPD.innerHTML = textocontacto;

});





//console.log(plataformaDeCompra)





