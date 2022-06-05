const lagEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const logoText = document.querySelector('.logoText');

const hSonrisas = document.querySelector('.hSonrisas');
const pSonrisas = document.querySelector('.pSonrisas');
const pSonrisas1 = document.querySelector('.pSonrisas1');

const menuHome = document.querySelector('.menuHome');
const menuPrevencion = document.querySelector('.menuPrevencion');
const menuImplante = document.querySelector('.menuImplante');
const menuEstetica = document.querySelector('.menuEstetica');
const menuServicios = document.querySelector('.menuServicios');
const menuQuienes = document.querySelector('.menuQuienes');
const menuSonrisas = document.querySelector('.menuSonrisas');
const menuCitas = document.querySelector('.menuCitas');

/* sección del select */
const oSeleccione = document.querySelector('.oSeleccione');
const oPreve = document.querySelector('.oPreve');
const oImpla = document.querySelector('.oImpla');
const oEstet = document.querySelector('.oEstet');

/* sección de las fotos */


/* sección del footer */
const pVisitenos = document.querySelector('.pVisitenos');
const sClinica = document.querySelector('.sClinica');

link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');
        logoText.textContent = changeLanguage[attr].logoText;
        hSonrisas.textContent = changeLanguage[attr].hSonrisas;
        pSonrisas.textContent = changeLanguage[attr].pSonrisas;
        pSonrisas1.textContent = changeLanguage[attr].pSonrisas1;
        menuHome.textContent = changeLanguage[attr].menuHome;
        menuPrevencion.textContent = changeLanguage[attr].menuPrevencion;
        menuImplante.textContent = changeLanguage[attr].menuImplante;
        menuEstetica.textContent = changeLanguage[attr].menuEstetica;
        menuServicios.textContent = changeLanguage[attr].menuServicios;
        menuQuienes.textContent = changeLanguage[attr].menuQuienes;
        menuSonrisas.textContent = changeLanguage[attr].menuSonrisas;
        menuCitas.textContent = changeLanguage[attr].menuCitas;
        oSeleccione.textContent = changeLanguage[attr].oSeleccione;
        oPreve.textContent = changeLanguage[attr].oPreve;
        oImpla.textContent = changeLanguage[attr].oImpla;
        oEstet.textContent = changeLanguage[attr].oEstet;
        pVisitenos.textContent = changeLanguage[attr].pVisitenos;
        sClinica.textContent = changeLanguage[attr].sClinica;
    });
});
let changeLanguage = {
    "espanish": {
        "logoText": "Clínica Odontológica Universal",
        "hSonrisas": "que sonrisas",
        "pSonrisas": "Las sonrisas son la carta de presentación de nuestros amigos. Queremos mostrarles algunas de ellas.",
        "pSonrisas1": "Disfrute de las sonrisas que usted deseé, según la especialidad:",
        "menuHome": "Inicio",
        "menuPrevencion": "Prevención",
        "menuImplante": "Implantes",
        "menuEstetica": "Estética",
        "menuServicios": "Servicios",
        "menuQuienes": "Quiénes somos",
        "menuSonrisas": "Sonrisas",
        "menuCitas": "Citas",
        "oSeleccione": "Seleccione una:",
        "oPreve": "Prevención",
        "oImpla": "Implantes",
        "oEstec": "Estética",
        "pVisitenos": "Visítenos en nuestras redes sociales",
        "sClinica": "Clínica Ondotológica Universal"
    },
    "english": {
        "logoText": "Universal Dental Clinic",
        "hSonrisas": "than smiles",
        "pSonrisas": "Smiles are the calling card of our friends. We want to show you some of them.",
        "pSonrisas1": "Enjoy the smiles you want, depending on the specialty:",
        "menuHome": "Home",
        "menuPrevencion": "Prevention",
        "menuImplante": "Implants",
        "menuEstetica": "Cosmetic",
        "menuServicios": "Services",
        "menuQuienes": "About us",
        "menuSonrisas": "Smiles",
        "menuCitas": "Appointments",
        "oSeleccione": "Select one:",
        "oPreve": "Prevention",
        "oImpla": "Implants",
        "oEstet": "Cosmetic",
        "pVisitenos": "Visit us on our social networks",
        "sClinica": "Universal Dental Clinic"
    }
}