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

/* sección de estética dental */
const titEstetica = document.querySelector('.titEstetica');
const pEste1 = document.querySelector('.pEste1');
const pEste2 = document.querySelector('.pEste2');
const pPrev3 = document.querySelector('.pPrev3');
const pPrev4 = document.querySelector('.pPrev4');
const pPrev5 = document.querySelector('.pPrev5');
const pEsteInvisa = document.querySelector('.pEsteInvisa');
const titEsteCarrilla = document.querySelector('.titEsteCarrilla');
const pEsteCarrilla = document.querySelector('.pEsteCarrilla');
const titEsteBlanque = document.querySelector('.titEsteBlanque');
const pEsteBlanque = document.querySelector('.pEsteBlanque');

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

        titEstetica.textContent = changeLanguage[attr].titEstetica;
        pEste1.textContent = changeLanguage[attr].pEste1;
        pEste2.textContent = changeLanguage[attr].pEste2;
        pPrev3.textContent = changeLanguage[attr].pPrev3;
        pPrev4.textContent = changeLanguage[attr].pPrev4;
        pPrev5.textContent = changeLanguage[attr].pPrev5;
        pEsteInvisa.textContent = changeLanguage[attr].pEsteInvisa;
        titEsteCarrilla.textContent = changeLanguage[attr].titEsteCarrilla;
        pEsteCarrilla.textContent = changeLanguage[attr].pEsteCarrilla;
        titEsteBlanque.textContent = changeLanguage[attr].titEsteBlanque;
        pEsteBlanque.textContent = changeLanguage[attr].pEsteBlanque;

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
        "titEstetica": "Prevención dental",
        "pEste1": "La odontología estética busca embellecer su boca y engloba todos aquellos tratamientos que corrigen las imperfecciones de nuestras sonrisas y por tanto, requieren tratamientos multidisciplinarios en que han de intervenir especialistas ampliamente formados en cada una de las áreas de la odontología.",
        "pEste2": "Una buena imagen personal también es síntoma de una buena salud y en la actualidad ambas van unidas, es por ello que nuestra clínica vela por la estética dental ofreciendo a sus pacientes tratamientos predecibles para obtener una sonrisa perfecta no solo a  nivel estético sino también de salud.",
        "pPrev3": "Conozca",
        "pPrev4": "sobre nuestros profesionales en esta área",
        "pPrev5": "más",
        "pEsteInvisa": "Los Invisalign se les conoce como brackets invisibles, estos alineadores son una especie de fundas totalmente transparentes, casi imperceptibles por otras personas, que se colocan en los dientes para corregir diversos problemas como dientes apiñados, torcidos o separados, mordida cruzada, profunda o abierta.Por medio de los invisalign que colocará el especialista en  ortodoncia las piezas se van a ir moviendo hasta lograr que queden perfectamente alineadas.",
        "titEsteCarrilla": "Carrilas dentales",
        "pEsteCarrilla": "Las carrillas dentales o más conocidas SmileVeneers, tienen el propósito principal de corregir las condiciones dentales estéticas y cosméticas que se tornan en limitantes para sonreír, tales como los dientes desalineados, manchados o descoloridos, torcidos e irregulares y separados utilizando las técnicas de odontología cosmética menos agresivas ofrecidas en el mercado.",
        "titEsteBlanque": "Blanqueamiento dental",
        "pEsteBlanque": "Ya sea porque el color natural de sus dientes es muy amarillo o simplemente porque se han ido amarillando por la edad o consumo de ciertos alimentos, el blanqueamiento dental puede resultar la opción ideal en caso de que usted desee tener una sonrisa más blanca. El blanqueamiento dental es una de las técnicas más utilizadas actualmente en odontología y estética dental y consiste en  aclarar el color de los dientes respecto de su color actual. Así mismo, muchos pacientes después de un tratamiento de ortodoncia (frenillos) solicitan realizarse este tratamiento.",
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
        "titEstetica": "Dental Prevention",
        "pEste1": "Aesthetic dentistry seeks to beautify your mouth and encompasses all those treatments that correct the imperfections of our smiles and therefore require multidisciplinary treatments in which widely trained specialists in each of the areas of dentistry must intervene.",
        "pEste2": "A good personal image is also a symptom of good health and currently both go together, that is why our clinic ensures dental aesthetics by offering its patients predictable treatments to obtain a perfect smile not only aesthetically but also health.",
        "pPrev3": "Learn",
        "pPrev4": "about our professionals in this area",
        "pPrev5": "more",
        "pEsteInvisa": "Invisalign are known as invisible braces, these aligners are a kind of totally transparent covers, almost imperceptible by other people, that are placed on the teeth to correct various problems such as crowded, crooked or separated teeth, cross, deep or open bite. Through the invisalign that the orthodontic specialist will place, the pieces will move until they are perfectly aligned.",
        "titEsteCarrilla": "Dental veneers",
        "pEsteCarrilla": "The dental veneers or better known SmileVeneers, have the main purpose of correcting aesthetic and cosmetic dental conditions that become limitations to smile, such as misaligned, stained or discolored teeth, crooked and irregular and separated using the less cosmetic dentistry techniques aggressive offered in the market.",
        "titEsteBlanque": "Teeth whitening",
        "pEsteBlanque": "Either because the natural color of your teeth is very yellow or simply because they have been yellowing due to age or consumption of certain foods, teeth whitening can be the ideal option in case you want to have a whiter smile. Teeth whitening is one of the techniques most used today in dentistry and dental aesthetics and consists of lightening the color of the teeth with respect to their current color. Likewise, many patients after orthodontic treatment (braces) request this treatment.",
        "pVisitenos": "Visit us on our social networks",
        "sClinica": "Universal Dental Clinic"
    }
}