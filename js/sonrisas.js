window.onload = function() {
    document.getElementById('fotosSonrisas').onchange = function(e) {
        n = e.target.value;
        var archivo = "url('imagenes/equipo" + n + ".jpg')";
        document.getElementById("img1").style.backgroundImage = archivo;
    }
}

//querySelector permite elegr el selector llamado select del form
let seleccionar = document.querySelector('select');
//addEventListener es un listado de eventos (biblioteca)
seleccionar.addEventListener('change', elegir);

function elegir() {
    let eleccion = parseInt(seleccionar.value);
    console.log(typeof(seleccionar.value));
    console.log(typeof(eleccion));
    console.log(eleccion);
    sonria.style.display = 'none';
    testigos.style.display = 'block';

    switch (eleccion) {
        case 0:
            descripcion.innerHTML = '';
            descripcion2.innerHTML = '';
            descripcion3.innerHTML = '';
            document.getElementById("img2").style.backgroundImage = "";
            document.getElementById("img3").style.backgroundImage = "";
            break;
        case 1:
            descripcion.innerHTML = '<p>Me enorgullece mi sonrisa.  Así que periódicamente voy a la clínica, para saber que no tengo nada grave. En ella recibo el mejor trato y su legítimo interés por mi salud bucal.</p>' + '<p style="font-weight: 700">I am proud of my smile. So I periodically go to the clinic, to find out that I have nothing serious. In it I receive the best treatment and your legitimate interest in my oral health.</p>' + '<p>Teresa, Escazú</p>';
            descripcion2.innerHTML = '<p>Mantengo sanos mis dientes gracias a los cuidados esmerados que me dan en la Clínica Universal. Sin duda los mejores!!!</p>' + '<p style="font-weight: 700">I keep my teeth healthy thanks to the careful care they give me at the Universal Clinic. Without a doubt the best !!!</p>' + '<p>Cindy, Puriscal</p>';
            descripcion3.innerHTML = '<p>Me encantó todo sobre la clínica. Ambiente agradable, fresco y limpio, con tecnología actualizada. ¡Venimos para citas dentales generales y vendremos por más!</p>' + '<p style="font-weight: 700">I loved everything about the clinic. Nice, fresh and clean environment, with updated technology. We are coming for general dental appointments and we will be back for more!</p>' + '<p>Juan Mora. Brasil de Mora</p>';
            document.getElementById("img2").style.backgroundImage = "url('imagenes/equipo4.jpg')";
            document.getElementById("img3").style.backgroundImage = "url('imagenes/equipo5.jpg')";
            break;
        case 2:
            descripcion.innerHTML = '<p>Hace poco tuve un accidente de tránsito y perdí todos mis dientes. En la clínica me hicieron el mejor trabajo y lo mejor, ... el precio insuperable.</p>' + '<p>Estaré siempre muy agradecida por su profesionalismo e interés en mi.</p>' + '<p style="font-weight: 700">I was recently in a car accident and lost all my teeth. In the clinic they did the best job and the best, ... the unbeatable price. I will always be very grateful for your professionalism and interest in me.</p>' + '<p>Josseline, San José</p>';
            descripcion2.innerHTML = '<p>Tuve un problema serio de encías y mis doctores me quitaron algunos de mis dientes frontales.  Así que debí recurrir a un implante. Me espanté… pero luego vi el resultado y quedé admirado del gran trabajo!</p>' + '<p style="font-weight: 700">I had a serious gum problem and my doctors removed some of my front teeth. So I had to resort to an implant. I was scared ... but then I saw the result and was amazed at the great work!</p>' + '<p>Gracias-Thanks.</p>' + '<p>Fernando, Heredia</p>';
            descripcion3.innerHTML = '<p>Fuimos a la clínica la semana pasada. INCREÍBLE servicio. Somos de Canadá y recibimos un mejor servicio con equipos y técnicas más actualizados en esta clínica que en casa por menos de la mitad del precio. ¡Esto sin hablar del servicio personalizado y flexible que brindó el Dr. Vargas! ¡Definitivamente haremos un punto para regresar para nuestro cuidado dental en esta gran clínica! ¡Gracias amigos! ¡Nos vemos pronto!</p>' + '<p style="font-weight: 700">We went to the clinic last week. INCREDIBLE service. We are from Canada and receive better service with more up-to-date equipment and techniques at this clinic than at home for less than half the price. Not to mention the flexible and personalized service Dr. Vargas provided! We will definitely make a point to come back for our dental care at this great clinic! Thanks friends! See you soon!</p>' + '<p>Beth, Quebec Canada</p>';
            document.getElementById("img2").style.backgroundImage = "url('imagenes/equipo6.jpg')";
            document.getElementById("img3").style.backgroundImage = "url('imagenes/equipo7.jpg')";
            break;
        case 3:
            descripcion.innerHTML = '<p>Por años mis dientes estaban casi negros por diversos tratamientos. Ahora hallé una solución que puedo mostrar sin vergüenza.</p>' + '<p style="font-weight: 700">For years my teeth were almost black from various treatments. Now I found a solution that I can show without shame.</p>' + '<p>Gracias - Thanks, Drs.</p>' + '<p>Rogelio, Puntarenas</p>';
            descripcion2.innerHTML = '<p>Estoy muy satisfecha con los resultados de mi tratamiento Flash Whitening. Las respuestas oportunas de la clínica a mi correo electrónico y preguntas demuestran su profesionalismo afectuoso y mi bienestar es su principal prioridad. Durante todo el tratamiento, me explicó todo el proceso, desde la limpieza sónica de los dientes hasta el procedimiento de blanqueamiento instantáneo, y se aseguró de que estuviera cómoda en todo momento.</p>' + '<p style="font-weight: 700">I am very satisfied with the results of my Flash Whitening treatment. The clinic´s timely responses to my emails and questions demonstrate their caring professionalism and my well - being is their top priority.Throughout the treatment, she explained the entire process to me, from sonic teeth cleaning to the instant whitening procedure, and made sure I was comfortable at all times. <p>' + '<p>Lisbeth, Guanacaste</p>';
            descripcion3.innerHTML = '<p>Recomiendo altamente esta clínica y su técnica para blanquear los dientes, no podría estar más emocionado y estoy mostrando mi brillante sonrisa para que todos la vean.</p>' + '<p style="font-weight: 700">I highly recommend this clinic and their teeth whitening technique, I couldn´t be more excited and I´m showing my brilliant smile for all to see.</p>' + '<p>Eduardo, Cartago</p>';
            document.getElementById("img2").style.backgroundImage = "url('imagenes/equipo8.jpg')";
            document.getElementById("img3").style.backgroundImage = "url('imagenes/equipo9.jpg')";
            break;
        default:
            alert("error");
            break;
    }
}