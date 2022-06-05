const lagEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const logoText = document.querySelector('.logoText');

const hConozcanos = document.querySelector('.hConozcanos');

const menuHome = document.querySelector('.menuHome');
const menuPrevencion = document.querySelector('.menuPrevencion');
const menuImplante = document.querySelector('.menuImplante');
const menuEstetica = document.querySelector('.menuEstetica');
const menuServicios = document.querySelector('.menuServicios');
const menuQuienes = document.querySelector('.menuQuienes');
const menuSonrisas = document.querySelector('.menuSonrisas');
const menuCitas = document.querySelector('.menuCitas');

/* sección de las fotos */
const pFotoPrev = document.querySelector('.pFotoPrev');
const pFotoPrev1 = document.querySelector('.pFotoPrev1');
const pFotoEste = document.querySelector('.pFotoEste');
const pFotoEste1 = document.querySelector('.pFotoEste1');
const pFotoImpla = document.querySelector('.pFotoImpla');
const pFotoImpla1 = document.querySelector('.pFotoImpla1');

/* sección del footer */
const pVisitenos = document.querySelector('.pVisitenos');
const sClinica = document.querySelector('.sClinica');

link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');
        logoText.textContent = changeLanguage[attr].logoText;
        hConozcanos.textContent = changeLanguage[attr].hConozcanos;
        menuHome.textContent = changeLanguage[attr].menuHome;
        menuPrevencion.textContent = changeLanguage[attr].menuPrevencion;
        menuImplante.textContent = changeLanguage[attr].menuImplante;
        menuEstetica.textContent = changeLanguage[attr].menuEstetica;
        menuServicios.textContent = changeLanguage[attr].menuServicios;
        menuQuienes.textContent = changeLanguage[attr].menuQuienes;
        menuSonrisas.textContent = changeLanguage[attr].menuSonrisas;
        menuCitas.textContent = changeLanguage[attr].menuCitas;

        pFotoPrev.textContent = changeLanguage[attr].pFotoPrev;
        pFotoPrev1.textContent = changeLanguage[attr].pFotoPrev1;
        pFotoEste.textContent = changeLanguage[attr].pFotoEste;
        pFotoEste1.textContent = changeLanguage[attr].pFotoEste1;
        pFotoImpla.textContent = changeLanguage[attr].pFotoImpla;
        pFotoImpla1.textContent = changeLanguage[attr].pFotoImpla1;

        pVisitenos.textContent = changeLanguage[attr].pVisitenos;
        sClinica.textContent = changeLanguage[attr].sClinica;
    });
});
let changeLanguage = {
    "espanish": {
        "logoText": "Clínica Odontológica Universal",
        "hConozcanos": "Conózcanos",
        "menuHome": "Inicio",
        "menuPrevencion": "Prevención",
        "menuImplante": "Implantes",
        "menuEstetica": "Estética",
        "menuServicios": "Servicios",
        "menuQuienes": "Quiénes somos",
        "menuSonrisas": "Sonrisas",
        "menuCitas": "Citas",
        "pFotoPrev": "Dra. Martínez y Dr. Alvarez. Y la asistente Karina",
        "pFotoPrev1": "Equipo de Prevención",
        "pFotoEste": "Dr. Calderón y Dra. Rímolo. Y las asistentes Bertha y Ana Sofía y el auxiliar Armando",
        "pFotoEste1": "Equipo de Estética",
        "pFotoImpla": "Dr. Soto y Dr. Barrientos. Y las asistentes, Karol, Nidia, Nicole y Kattia",
        "pFotoImpla1": "Equipo de Implantes",
        "pVisitenos": "Visítenos en nuestras redes sociales",
        "sClinica": "Clínica Ondotológica Universal"
    },
    "english": {
        "logoText": "Universal Dental Clinic",
        "hConozcanos": "Know us",
        "menuHome": "Home",
        "menuPrevencion": "Prevention",
        "menuImplante": "Implants",
        "menuEstetica": "Cosmetic",
        "menuServicios": "Services",
        "menuQuienes": "About us",
        "menuSonrisas": "Smiles",
        "menuCitas": "Appointments",
        "pFotoPrev": "Dra. Martínez and Dr. Alvarez. And the assistant Karina",
        "pFotoPrev1": "Prevention Team",
        "pFotoEste": "Dr. Calderón and Dra. Rímolo. The assistants Bertha and Ana Sofía and the assistant Armando",
        "pFotoEste1": "Cosmetic Team",
        "pFotoImpla": "Dr. Soto and Dr. Barrientos. And the assistants, Karol, Nidia, Nicole and Kattia",
        "pFotoImpla1": "Implant Team",
        "pVisitenos": "Visit us on our social networks",
        "sClinica": "Universal Dental Clinic"
    }
}