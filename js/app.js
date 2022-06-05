//evento de carga LOAD
window.addEventListener('load', inicial, false);

var pConsultaPreve = 50000;
var pConsultaImpla = 75000;
var pConsultaEstet = 100000;


function inicial() {

    //creacion de tabla de registros
    var tabla = document.createElement('table');
    ubicTabla.appendChild(tabla);

    //declaracion de variables 
    var proveedoresSlt = document.getElementById('proveedoresSlt');
    var cantFresasTxt = document.getElementById('cantFresasTxt');
    var registrarBtn = document.getElementById('registrarBtn');
    var pagoBtn = document.getElementById('pagoBtn');
    var totalFresasBtn = document.getElementById('totalFresasBtn');
    var mayorProductorBtn = document.getElementById('mayorProductorBtn');
    var restablecerBtn = document.getElementById('restablecerBtn');
    var resultadoPr = document.getElementById('resultadoPr');

    //arreglo bidimensional
    //Para obtener un elemento de un arreglo, debe indicarse los índices de su fila i y su columna 
    var datos = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];

    //carga de funcion con los datos quemados
    registrarProveedores(1, 'Isabel', 'Martínez', 'Prevención', 0, 0, 0, 'imartinez@cou.com', 60234566);
    registrarProveedores(2, 'Pedro', 'Alvarez', 'Implantes', 0, 0, 0, 'palvarez@cou.com', 75678746);
    registrarProveedores(3, 'Alonso', 'Soto', 'Prevención', 0, 0, 0, 'asolo@cou.com', 60138932);
    registrarProveedores(4, 'Guillermo', 'Barrientos', 'Estética', 0, 0, 0, 'gbarrientos@cou.com', 60784256);
    registrarProveedores(5, 'Alvaro', 'Calderón', 'Implantes', 0, 0, 0, 'acalderon@cou.com', 83471578);
    registrarProveedores(6, 'Karla', 'Obando', 'Estética', 0, 0, 0, 'kobando@cou.com', 83768146);
    registrarProveedores(7, 'Maritza', 'Picado', 'Implantes', 0, 0, 0, 'mpicado@cou.com', 83251831);
    registrarProveedores(8, 'Uriel', 'Barrantes', 'Estética', 0, 0, 0, 'ubarrantes@cou.com', 71788942);
    registrarProveedores(9, 'Kattia', 'Briceño', 'Implantes', 0, 0, 0, 'kbriceno@cou.com', 70161368);
    registrarProveedores(10, 'Roxana', 'Araya', 'Prevención', 0, 0, 0, 'raraya@cou.com', 60947923);
    registrarProveedores(11, 'Luisa', 'Gallardo', 'Estética', 0, 0, 0, 'lgallardo@cou.com', 87368164);
    registrarProveedores(12, 'Mario', 'Alonso', 'Prevención', 0, 0, 0, 'malonso@cou.com', 83258113);
    registrarProveedores(13, 'Virginia', 'Durán', 'Estética', 0, 0, 0, 'vduran@cou.com', 81788929);
    registrarProveedores(14, 'Karol', 'Almanza', 'Implantes', 0, 0, 0, 'kalmanza@cou.com', 60161863);
    registrarProveedores(15, 'Luis', 'Camacho', 'Prevención', 0, 0, 0, 'lcamacho@cou.com', 86904932);

    //carga de la funcion tablaProveedores();
    tablaProveedores();


    //funcion que permite registrar los registros al arreglo
    function registrarProveedores(id, nombre, apellido, tipo, cantidad, total, comis, email, telefono) {
        datos[0].push(id);
        datos[1].push(nombre);
        datos[2].push(apellido);
        datos[3].push(tipo);
        datos[4].push(cantidad);
        datos[5].push(total);
        datos[6].push(comis);
        datos[7].push(email);
        datos[8].push(telefono)
    }



    //funcion que permite ingresar la cantidad del producto a la tabla = datos[4][id] 
    function ingresarFresas() {
        var fresasSumar = Number(cantFresasTxt.value);

        id = Number(proveedoresSlt.value - 1); //proveedoresSlt es el ID del SELECT

        var cantFresas = Number(datos[4][id]); //verifica a cual persona le asigna la cantidad 
        cantFresas = cantFresas + Number(fresasSumar); //formula sumatoria

        datos[4][id] = cantFresas;

        //tipos
        id = Number(proveedoresSlt.value - 1); //proveedoresSlt es el ID del SELECT
        var total = 0;
        var pagoNeto;
        var totalAcum = Number(datos[4][id]);
        console.log("el total ACUMULADO ES: " + totalAcum);

        //condicional para definir los honorarios de c/Dr.-Dra. según la especialidad
        if (datos[3][id] === 'Prevención') {
            pagoNeto = totalAcum * pConsultaPreve * 0.85;
        } else {
            if (datos[3][id] === 'Implantes') {
                pagoNeto = Number(datos[4][id]) * pConsultaImpla * 0.75;
            } else {
                if (datos[3][id] === 'Estética') {
                    pagoNeto = Number(datos[4][id]) * pConsultaEstet * 0.7;
                } else {
                    alert("error");
                }
            }
        }
        total = pagoNeto;
        //equivale al campo total del arreglo
        datos[6][id] = total;
    }

    //función que permite crear los datos de la tabla
    function tablaProveedores() {

        //Eliminar los registros de la tabla
        tabla.innerHTML = '';

        //Encabezado de la tabla
        var tr = document.createElement('tr');
        tabla.appendChild(tr);

        //Celdas dentro del encabezado
        var th = document.createElement('th');
        th.innerHTML = 'ID';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Nombre';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Apellido';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Tipo';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Total consultas';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Honorarios';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Correo';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Tel';
        tr.appendChild(th);

        //etiqueta Borrar (invisible)
        th = document.createElement('th');
        th.innerHTML = '';
        tr.appendChild(th);


        //ciclo que permite recorrer los registros de la tabla
        for (var y = 0; y < datos[0].length; y++) {

            var tr = document.createElement('tr');
            tabla.appendChild(tr);

            td = document.createElement('td');
            td.innerHTML = datos[0][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[1][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[2][y]; //datos[2][y] = apellido
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[3][y]; //datos[3][y] = tipo
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[4][y]; //datos[4][y] = total consultas
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[6][y]; //datos[6][y] = honorarios
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[7][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[8][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = '<button class="deleteBtn btn btn-outline-dark fs-3" id="eliminarBtn">Borrar</button>';
            tr.appendChild(td);
        }
    }


    //Permite generar el total general
    function totalFresasRecolectados() {
        var total = 0;
        resultadoPr.innerHTML = '';
        //classList.add permite acceder a la lista de clases de un elemento como una cadena de texto 
        resultadoPr.classList.add('resultadoPr');
        //ciclo que permite efectuar la sumatoria del total de fresas recolectadas
        for (var y = 0; y < datos[4].length; y++) {
            total = total + Number(datos[4][y]);
        }
        resultadoPr.innerHTML = 'La cantidad total de consultas de este día fue de: ' + total;
    }


    //Permite buscar el mayor productor
    function mayorProveedor() {
        /*permite buscar el mayor provedoor mediante el arreglo(matriz) y lo busca mediante la propiedad indexOf 
        la variable maxProveedor  que tiene el nombre de la matriz y la posicion [4][0] que es la que posee el total de fresas*/
        var maxProveedor = datos[4][0];
        var posicionMayor = 0;
        resultadoPr.innerHTML = '';
        //ciclo que recorre la matriz para buscar el dato
        for (var y = 0; y < datos[4].length; y++) {
            if (maxProveedor < datos[4][y]) {
                maxProveedor = datos[4][y];
            }
        }
        //apunta el dato encontrado
        posicionMayor = datos[4].indexOf(maxProveedor);
        //muestra el resultado final
        resultadoPr.innerHTML = 'El médico que tuvo más consultas fue: ' + datos[1][posicionMayor] + "  " + datos[2][posicionMayor] + ' con ' + datos[4][posicionMayor];
    }

    /* el médico con menos consultas */
    function menorProductor() {
        var minProveedor = 1000000;
        var posicionMenor = 0;
        resultadoPr.innerHTML = '';
        for (var y = 0; y < datos[4].length; y++) {
            if (minProveedor > datos[4][y] && datos[4][y] > 0) {
                posicionMenor = y;
                minProveedor = datos[4][y];
            }
        }
        if (minProveedor == 1000000) {
            resultadoPr.innerHTML = 'error de digitación';
        } else {
            resultadoPr.innerHTML = 'El médico con menos pacientes es: ' + datos[1][posicionMenor] + " " + datos[2][posicionMenor] + ' con ' + datos[4][posicionMenor];
        }
    }


    //Permite pagar de acuerdo a un criterio logico
    function pagoHonorarios() {
        //variables para el precio de la consulta, según la especialidad, están en las líneas iniciales como variables globales

        //tipos
        id = Number(proveedoresSlt.value - 1); //proveedoresSlt es el ID del SELECT
        var total = 0;
        var pagoNeto;
        var totalAcum = Number(datos[4][id]);
        console.log("el total ACUMULADO ES: " + totalAcum);

        //condicional para definir los honorarios de c/Dr.-Dra. según la especialidad
        if (datos[3][id] === 'Prevención') {
            pagoNeto = totalAcum * pConsultaPreve * 0.85;
        } else {
            if (datos[3][id] === 'Implantes') {
                pagoNeto = Number(datos[4][id]) * pConsultaImpla * 0.75;
            } else {
                if (datos[3][id] === 'Estética') {
                    pagoNeto = Number(datos[4][id]) * pConsultaEstet * 0.7;
                } else {
                    alert("error");
                }
            }
        }
        total = pagoNeto;
        console.log("el pagoNeto es:" + pagoNeto);
        console.log("el total es:" + total);
        //equivale al campo total del arreglo

        //datos[6][id] = total;

        console.log("id es:" + id);
        console.log("es:" + datos[6][id]);
        //muestra el resultado final
        resultadoPr.innerHTML = 'El monto a pagar al Dr./ a la Dra. ' + datos[1][id] + ' ' + datos[2][id] + ' ' + 'es de:  ' + total;
    }

    //Permite validar cuando NO existe ningun numero en el campo cantidad de fresas 
    //se usa la libreria sweet alert para brindar mensaje al usuario.
    registrarBtn.onclick = function registrarBtnOnClick() {
        //cargar las 2 funciones de ingresar y crear tabla de registros al mismo tiempo
        ingresarFresas();
        tablaProveedores();
        if (cantFresasTxt.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Atención Usuario',
                html: '<p style="font-size: 18px">El campo esta vacío. Inténtelo de nuevo. Gracias</p>',
                showConfirmButton: false,
                timer: 3000
            })
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Atención Usuario',
                html: '<p style="font-size: 18px">Registró apropiadamente la información. Gracias</p>',
                showConfirmButton: false,
                timer: 3000
            })
        }
    }

    //Permite borrar el registro deseado de la tabla
    function borrarfila(e) {
        //deleteBtn es un ID del botón borrar
        //condicional que define cuando NO existe boton Borrar en la fila, retorna.
        if (!e.target.classList.contains("deleteBtn")) {
            return;
        }
        //constante que apunta al destino del evento
        const btn = e.target;
        //borra la fila o el registro elegido usando JQUERY
        btn.closest("tr").remove();
    }

    //Permite restablecer los registros de la tabla
    function restablecer() {
        var id = Number(proveedoresSlt.value - 1); //proveedoresSlt es el ID del SELECT
        var cantFresasTxt = 0;
        //agrega al arreglo la cantidad de fresas en 0
        datos[4][id] = cantFresasTxt;
        datos[6][id] = 0;
    }

    //Permiten la carga de funciones principales		
    pagoBtn.onclick = function pagoBtn() {
        pagoHonorarios();
    }
    mayorProductorBtn.onclick = function mayorProductorBtnOnclick() {
        mayorProveedor();
    }
    menorProductorBtn.onclick = function menorProductorBtnOnclick() {
        menorProductor();
    }

    totalFresasBtn.onclick = function totalFresasBtnOnclick() {
        totalFresasRecolectados();
    }
    restablecerBtn.onclick = function restablecerBtnOnClick() {
        restablecer();
        tablaProveedores();
    }

    //el id tabla ejecuta el evento click para ejecutar la funcion borrarfila
    tabla.addEventListener("click", borrarfila);

    //cierre de la función inicial
}