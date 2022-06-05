const lagEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const logoText = document.querySelector('.logoText');

const hContactenos = document.querySelector('.hContactenos');
const lNombre = document.querySelector('.lNombre');
const lApellido = document.querySelector('.lApellido');
const lCorreo = document.querySelector('.lCorreo');
const lTel = document.querySelector('.lTel');
const lCita = document.querySelector('.lCita');
const lMensaje = document.querySelector('.lMensaje');
const lEspecialidad = document.querySelector('.lEspecialidad');
const lPrevencion = document.querySelector('.lPrevencion');
const lImplantes = document.querySelector('.lImplantes');
const lEstetica = document.querySelector('.lEstetica');
const iMostrar = document.querySelector('.iMostrar');
const pPreveDescrip = document.querySelector('.pPreveDescrip');
const pImplaDescrip = document.querySelector('.pImplaDescrip');
const pEstetDescrip = document.querySelector('.pEstetDescrip');
const aEnviar = document.querySelector('.aEnviar');
const pNota = document.querySelector('.pNota');

const menuHome = document.querySelector('.menuHome');
const menuPrevencion = document.querySelector('.menuPrevencion');
const menuImplante = document.querySelector('.menuImplante');
const menuEstetica = document.querySelector('.menuEstetica');
const menuServicios = document.querySelector('.menuServicios');
const menuQuienes = document.querySelector('.menuQuienes');
const menuSonrisas = document.querySelector('.menuSonrisas');
const menuCitas = document.querySelector('.menuCitas');

/* sección del footer */
const pVisitenos = document.querySelector('.pVisitenos');
const sClinica = document.querySelector('.sClinica');

link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');
        logoText.textContent = changeLanguage[attr].logoText;
        hContactenos.textContent = changeLanguage[attr].hContactenos;
        lNombre.textContent = changeLanguage[attr].lNombre;
        lApellido.textContent = changeLanguage[attr].lApellido;
        lCorreo.textContent = changeLanguage[attr].lCorreo;
        lTel.textContent = changeLanguage[attr].lTel;
        lCita.textContent = changeLanguage[attr].lCita;
        lMensaje.textContent = changeLanguage[attr].lMensaje;
        lEspecialidad.textContent = changeLanguage[attr].lEspecialidad;
        lPrevencion.textContent = changeLanguage[attr].lPrevencion;
        lImplantes.textContent = changeLanguage[attr].lImplantes;
        lEstetica.textContent = changeLanguage[attr].lEstetica;
        iMostrar.textContent = changeLanguage[attr].iMostrar;
        pPreveDescrip.textContent = changeLanguage[attr].pPreveDescrip;
        pImplaDescrip.textContent = changeLanguage[attr].pImplaDescrip;
        pEstetDescrip.textContent = changeLanguage[attr].pEstetDescrip;
        aEnviar.textContent = changeLanguage[attr].aEnviar;
        pNota.textContent = changeLanguage[attr].pNota;
        menuHome.textContent = changeLanguage[attr].menuHome;
        menuPrevencion.textContent = changeLanguage[attr].menuPrevencion;
        menuImplante.textContent = changeLanguage[attr].menuImplante;
        menuEstetica.textContent = changeLanguage[attr].menuEstetica;
        menuServicios.textContent = changeLanguage[attr].menuServicios;
        menuQuienes.textContent = changeLanguage[attr].menuQuienes;
        menuSonrisas.textContent = changeLanguage[attr].menuSonrisas;
        menuCitas.textContent = changeLanguage[attr].menuCitas;
        pVisitenos.textContent = changeLanguage[attr].pVisitenos;
        sClinica.textContent = changeLanguage[attr].sClinica;
    });
});
let changeLanguage = {
    "espanish": {
        "logoText": "Clínica Odontológica Universal",
        "hContactenos": "Contáctenos para obtener su cita",
        "lNombre": "Nombre",
        "lApellido": "Apellido",
        "menuHome": "Inicio",
        "menuPrevencion": "Prevención",
        "menuImplante": "Implantes",
        "menuEstetica": "Estética",
        "menuServicios": "Servicios",
        "menuQuienes": "Quiénes somos",
        "menuSonrisas": "Sonrisas",
        "menuCitas": "Citas",
        "lCorreo": "Correo",
        "lTel": "Teléfono",
        "lCita": "Día de la cita",
        "lMensaje": "Mensaje",
        "lEspecialidad": "Elija la especialidad",
        "lPrevencion": "Prevención",
        "lImplantes": "Implantes",
        "lEstetica": "Estética",
        "iMostrar": "Mostrar",
        "pPreveDescrip": "Nuestro servicio de prevención dental, busca solucionar los problemas primarios que puede presentar un paciente en su boca, dientes u otras áreas relacionadas. Son procedimientos sencillos que abarcan el tratamiento de caries y la elaboración de calzas  hasta limpiezas dentales.",
        "pImplaDescrip": "Los implantes dentales son aditamentos, como raíces artificiales, creados para sustituir dientes ausentes o perdidos por cualquier causa, capaces de integrarse hasta el punto de convivir de forma sana y totalmente natural con el resto de los tejidos de la boca.Los implantes dentales se colocan, de manera quirúrgica, en los huesos de la mandíbula o del maxilar.",
        "pEstetDescrip": "La odontología estética busca embellecer su boca y engloba todos aquellos tratamientos que corrigen las imperfecciones de nuestras sonrisas y por tanto, requieren tratamientos multidisciplinarios en que han de intervenir especialistas ampliamente formados en cada una de las áreas de la odontología.",
        "aEnviar": "Enviar datos",
        "pNota": "* Todos los campos deben ser completados debidamente",
        "pVisitenos": "Visítenos en nuestras redes sociales",
        "sClinica": "Clínica Ondotológica Universal"
    },
    "english": {
        "logoText": "Universal Dental Clinic",
        "hContactenos": "Contact us to get your appointment",
        "lNombre": "Name",
        "lApellido": "Last name",
        "menuHome": "Home",
        "menuPrevencion": "Prevention",
        "menuImplante": "Implants",
        "menuEstetica": "Cosmetic",
        "menuServicios": "Services",
        "menuQuienes": "About us",
        "menuSonrisas": "Smiles",
        "menuCitas": "Appointments",
        "lCorreo": "Email",
        "lTel": "Phone",
        "lCita": "Appointment day",
        "lMensaje": "Message",
        "lEspecialidad": "Choose the specialty",
        "lPrevencion": "Prevention",
        "lImplantes": "Implants",
        "lEstetica": "Cosmetic",
        "iMostrar": "Show",
        "pPreveDescrip": "Our dental prevention service seeks to solve the primary problems that a patient may present in their mouth, teeth or other related areas. They are simple procedures that range from caries treatment from shims to dental cleanings.",
        "pImplaDescrip": "Dental implants are attachments, such as artificial roots, created to replace missing or lost teeth due to any cause, capable of integrating to the point of living together in a healthy and totally natural way with the rest of the tissues of the mouth. , surgically, in the bones of the jaw or maxilla.",
        "pEstetDescrip": "Aesthetic dentistry seeks to beautify your mouth and encompasses all those treatments that correct the imperfections of our smiles and therefore require multidisciplinary treatments in which widely trained specialists in each of the areas of dentistry must intervene.",
        "aEnviar": "Send data",
        "pNota": "* All fields must be completed properly",
        "pVisitenos": "Visit us on our social networks",
        "sClinica": "Universal Dental Clinic"
    }
}