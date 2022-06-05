const lagEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');

const tp2 = document.querySelector('.tp2'); //es el slogan

const menuHome = document.querySelector('.menuHome');
const menuPrevencion = document.querySelector('.menuPrevencion');
const menuImplante = document.querySelector('.menuImplante');
const menuEstetica = document.querySelector('.menuEstetica');
const menuServicios = document.querySelector('.menuServicios');
const menuQuienes = document.querySelector('.menuQuienes');
const menuSonrisas = document.querySelector('.menuSonrisas');
const menuCitas = document.querySelector('.menuCitas');

/* sección de Implantes dentales */
const titImplantes = document.querySelector('.titImplantes');
const pImpl1 = document.querySelector('.pImpl1');
const pImpl2 = document.querySelector('.pImpl2');
const pImpl3 = document.querySelector('.pImpl3');
const pPrev3 = document.querySelector('.pPrev3');
const pPrev4 = document.querySelector('.pPrev4');
const pPrev5 = document.querySelector('.pPrev5');

/* sección del carrusel */
const pCarruselImpl = document.querySelector('.pCarruselImpl');

/* sección del footer */
const pVisitenos = document.querySelector('.pVisitenos');
const sClinica = document.querySelector('.sClinica');

link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');
        tp2.textContent = changeLanguage[attr].tp2;
        menuHome.textContent = changeLanguage[attr].menuHome;
        menuPrevencion.textContent = changeLanguage[attr].menuPrevencion;
        menuImplante.textContent = changeLanguage[attr].menuImplante;
        menuEstetica.textContent = changeLanguage[attr].menuEstetica;
        menuServicios.textContent = changeLanguage[attr].menuServicios;
        menuQuienes.textContent = changeLanguage[attr].menuQuienes;
        menuSonrisas.textContent = changeLanguage[attr].menuSonrisas;
        menuCitas.textContent = changeLanguage[attr].menuCitas;

        titImplantes.textContent = changeLanguage[attr].titImplantes;
        pImpl1.textContent = changeLanguage[attr].pImpl1;
        pImpl2.textContent = changeLanguage[attr].pImpl2;
        pImpl3.textContent = changeLanguage[attr].pImpl3;
        pPrev3.textContent = changeLanguage[attr].pPrev3;
        pPrev4.textContent = changeLanguage[attr].pPrev4;
        pPrev5.textContent = changeLanguage[attr].pPrev5;

        pCarruselImpl.textContent = changeLanguage[attr].pCarruselImpl;

        pVisitenos.textContent = changeLanguage[attr].pVisitenos;
        sClinica.textContent = changeLanguage[attr].sClinica;
    });
});
let changeLanguage = {
    "espanish": {
        "tp2": "...sonrisas que enamoran",
        "menuHome": "Inicio",
        "menuPrevencion": "Prevención",
        "menuImplante": "Implantes",
        "menuEstetica": "Estética",
        "menuServicios": "Servicios",
        "menuQuienes": "Quiénes somos",
        "menuSonrisas": "Sonrisas",
        "menuCitas": "Citas",
        "titImplantes": "Implantes dentales",
        "pImpl1": "Los implantes dentales son aditamentos, como raíces artificiales, creados para sustituir dientes ausentes o perdidos por cualquier causa, capaces de integrarse hasta el punto de convivir de forma sana y totalmente natural con el resto de los tejidos de la boca.Los implantes dentales se colocan, de manera quirúrgica, en los huesos de la mandíbula o del maxilar.",
        "pImpl2": "En nuestra clínica se comienza con una evaluación a fondo de la situación del paciente, historia médica y dental, y un completo examen clínico de toda la boca y los dientes que faltan. El examen clínico debe incluir también los rayos X específicos.Después  de la evaluación del paciente, se diseña un plan de tratamiento.A partir de ese momento, los implantes son colocados quirúrgicamente en los huesos maxilares bajo anestesia local.",
        "pImpl3": "La duración del tiempo de curación se basa en la calidad y cantidad de hueso, así como el tipo de implante colocado. Existen diferentes técnicas, para realizarlos. La técnica escogida dependerá del problema que presente el paciente.",
        "pPrev3": "Conozca",
        "pPrev4": "sobre nuestros profesionales en esta área",
        "pPrev5": "más",
        "pCarruselImpl": "Implantes dentales",
        "pVisitenos": "Visítenos en nuestras redes sociales",
        "sClinica": "Clínica Ondotológica Universal"
    },
    "english": {
        "tp2": "...smiles that make you fall in love",
        "menuHome": "Home",
        "menuPrevencion": "Prevention",
        "menuImplante": "Implants",
        "menuEstetica": "Cosmetic",
        "menuServicios": "Services",
        "menuQuienes": "About us",
        "menuSonrisas": "Smiles",
        "menuCitas": "Appointments",
        "titImplantes": "Dental Implants",
        "pImpl1": "Dental implants are attachments, such as artificial roots, created to replace missing or lost teeth due to any cause, capable of integrating to the point of living together in a healthy and totally natural way with the rest of the tissues of the mouth. , surgically, in the bones of the jaw or maxilla.",
        "pImpl2": "Our clinic begins with a thorough evaluation of the patient's condition, medical and dental history, and a complete clinical examination of the entire mouth and missing teeth. The clinical examination should also include specific X-rays. After evaluation of the patient, a treatment plan is designed. From that moment, the implants are surgically placed in the jawbones under local anesthesia.",
        "pImpl3": "The length of healing time is based on the quality and quantity of bone, as well as the type of implant placed. There are different techniques to perform them. The chosen technique will depend on the problem that the patient presents.",
        "pPrev3": "Learn",
        "pPrev4": "about our professionals in this area",
        "pPrev5": "more",
        "pCarruselImpl": "Dental Implants",
        "pVisitenos": "Visit us on our social networks",
        "sClinica": "Universal Dental Clinic"
    }
}