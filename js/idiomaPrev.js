const lagEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');

const tp2 = document.querySelector('.tp2');

const menuHome = document.querySelector('.menuHome');
const menuPrevencion = document.querySelector('.menuPrevencion');
const menuImplante = document.querySelector('.menuImplante');
const menuEstetica = document.querySelector('.menuEstetica');
const menuServicios = document.querySelector('.menuServicios');
const menuQuienes = document.querySelector('.menuQuienes');
const menuSonrisas = document.querySelector('.menuSonrisas');
const menuCitas = document.querySelector('.menuCitas');

/* sección de Prevención dental */
const titPrevencion = document.querySelector('.titPrevencion');
const pPrev1 = document.querySelector('.pPrev1');
const pPrev2 = document.querySelector('.pPrev2');
const pPrev3 = document.querySelector('.pPrev3');
const pPrev4 = document.querySelector('.pPrev4');
const pPrev5 = document.querySelector('.pPrev5');

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

        titPrevencion.textContent = changeLanguage[attr].titPrevencion;
        pPrev1.textContent = changeLanguage[attr].pPrev1;
        pPrev2.textContent = changeLanguage[attr].pPrev2;
        pPrev3.textContent = changeLanguage[attr].pPrev3;
        pPrev4.textContent = changeLanguage[attr].pPrev4;
        pPrev5.textContent = changeLanguage[attr].pPrev5;

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
        "titPrevencion": "Prevención dental",
        "pPrev1": "Nuestro servicio de prevención dental, busca solucionar los problemas primarios que puede presentar un paciente en su boca, dientes u otras áreas relacionadas. Son procedimientos sencillos que abarcan el tratamiento de caries y la elaboración de calzas hasta limpiezas dentales.",
        "pPrev2": "Los principales tratamientos que realiza la prevención dental son: endodoncias, bruxismo, extracciones, odontología conservadora: obstrucciones (empastes), incrustaciones, reconstrucciones de piezas dentales, sellado de fisuras, restauración de caries etc. En estos tratamientos ofrecemos opciones de sedación en caso que el paciente así lo requiera o prefiera.",
        "pPrev3": "Conozca",
        "pPrev4": "sobre nuestros profesionales en esta área",
        "pPrev5": "más",
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
        "titPrevencion": "Dental Prevention",
        "pPrev1": "Our dental prevention service seeks to solve the primary problems that a patient may present in their mouth, teeth or other related areas. They are simple procedures that range from caries treatment from shims to dental cleanings.",
        "pPrev2": "The main treatments carried out by dental prevention are: root canals, bruxism, extractions, conservative dentistry: obstructions (fillings), inlays, reconstructions of teeth, sealing fissures, restoration of cavities, etc. In these treatments we offer sedation options in case the patient requires or prefers it.",
        "pPrev3": "Learn",
        "pPrev4": "about our professionals in this area",
        "pPrev5": "more",
        "pVisitenos": "Visit us on our social networks",
        "sClinica": "Universal Dental Clinic"
    }
}