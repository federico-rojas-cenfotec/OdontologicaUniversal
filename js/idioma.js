const lagEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const logoText = document.querySelector('.logoText'); //es título principal COU

const tp2 = document.querySelector('.tp2'); //es el slogan

const menuHome = document.querySelector('.menuHome');
const menuPrevencion = document.querySelector('.menuPrevencion');
const menuImplante = document.querySelector('.menuImplante');
const menuEstetica = document.querySelector('.menuEstetica');
const menuServicios = document.querySelector('.menuServicios');
const menuQuienes = document.querySelector('.menuQuienes');
const menuSonrisas = document.querySelector('.menuSonrisas');
const menuCitas = document.querySelector('.menuCitas');
const menuRegresar = document.querySelector('.menuRegresar');

/* sección de Servicios */
const titServicios = document.querySelector('.titServicios');
const aPrevencion = document.querySelector('.aPrevencion');
const aImplante = document.querySelector('.aImplante');
const aEstetica = document.querySelector('.aEstetica');

/* sección de testimonios */
const titTestimonios = document.querySelector('.titTestimonios');
const pAlvaro1 = document.querySelector('.pAlvaro1');
const pAlvaro2 = document.querySelector('.pAlvaro2');
const pHeily1 = document.querySelector('.pHeily1');
const pHeily2 = document.querySelector('.pHeily2');
const pMasSonrisas = document.querySelector('.pMasSonrisas');
const aSonrisas = document.querySelector('.aSonrisas');

/* sección conozca nuestra clínica */
const hConozca = document.querySelector('.hConozca');
const bConozcanos = document.querySelector('.bConozcanos');
const bMision = document.querySelector('.bMision');
const bVision = document.querySelector('.bVision');
const bValores = document.querySelector('.bValores');
const pEquipo = document.querySelector('.pEquipo');
const pEquipoDescrip = document.querySelector('.pEquipoDescrip');
const hMision = document.querySelector('.hMision');
const pMisionDescrip = document.querySelector('.pMisionDescrip');
const hVision = document.querySelector('.hVision');
const pVisionDescrip = document.querySelector('.pVisionDescrip');
const pValores = document.querySelector('.pValores');
const pValores1 = document.querySelector('.pValores1');
const pValores2 = document.querySelector('.pValores2');
const pValores3 = document.querySelector('.pValores3');

/* sección del vídeo */
const hRecomenda = document.querySelector('.hRecomenda');
const pConsejos = document.querySelector('.pConsejos');
const bVideo = document.querySelector('.bVideo');
const bVideoCerrar = document.querySelector('.bVideoCerrar');

/* sección del footer */
const pVisitenos = document.querySelector('.pVisitenos');
const sClinica = document.querySelector('.sClinica');

link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');
        logoText.textContent = changeLanguage[attr].logoText;
        tp2.textContent = changeLanguage[attr].tp2;
        menuHome.textContent = changeLanguage[attr].menuHome;
        menuPrevencion.textContent = changeLanguage[attr].menuPrevencion;
        menuImplante.textContent = changeLanguage[attr].menuImplante;
        menuEstetica.textContent = changeLanguage[attr].menuEstetica;
        menuServicios.textContent = changeLanguage[attr].menuServicios;
        menuQuienes.textContent = changeLanguage[attr].menuQuienes;
        menuSonrisas.textContent = changeLanguage[attr].menuSonrisas;
        menuCitas.textContent = changeLanguage[attr].menuCitas;
        menuRegresar.textContent = changeLanguage[attr].menuRegresar;

        titServicios.textContent = changeLanguage[attr].titServicios;
        aPrevencion.textContent = changeLanguage[attr].aPrevencion;
        aImplante.textContent = changeLanguage[attr].aImplante;
        aEstetica.textContent = changeLanguage[attr].aEstetica;

        titTestimonios.textContent = changeLanguage[attr].titTestimonios;
        pAlvaro1.textContent = changeLanguage[attr].pAlvaro1;
        pAlvaro2.textContent = changeLanguage[attr].pAlvaro2;
        pHeily1.textContent = changeLanguage[attr].pHeily1;
        pHeily2.textContent = changeLanguage[attr].pHeily2;
        pMasSonrisas.textContent = changeLanguage[attr].pMasSonrisas;

        hConozca.textContent = changeLanguage[attr].hConozca;
        bConozcanos.textContent = changeLanguage[attr].bConozcanos;
        bMision.textContent = changeLanguage[attr].bMision;
        bVision.textContent = changeLanguage[attr].bVision;
        bValores.textContent = changeLanguage[attr].bValores;
        pEquipo.textContent = changeLanguage[attr].pEquipo;
        pEquipoDescrip.textContent = changeLanguage[attr].pEquipoDescrip;
        hMision.textContent = changeLanguage[attr].hMision;
        pMisionDescrip.textContent = changeLanguage[attr].pMisionDescrip;
        hVision.textContent = changeLanguage[attr].hVision;
        pVisionDescrip.textContent = changeLanguage[attr].pVisionDescrip;
        pValores.textContent = changeLanguage[attr].pValores;
        pValores1.textContent = changeLanguage[attr].pValores1;
        pValores2.textContent = changeLanguage[attr].pValores2;
        pValores3.textContent = changeLanguage[attr].pValores3;

        hRecomenda.textContent = changeLanguage[attr].hRecomenda;
        pConsejos.textContent = changeLanguage[attr].pConsejos;
        bVideo.textContent = changeLanguage[attr].bVideo;
        bVideoCerrar.textContent = changeLanguage[attr].bVideoCerrar;

        pVisitenos.textContent = changeLanguage[attr].pVisitenos;
        sClinica.textContent = changeLanguage[attr].sClinica;
    });
});
let changeLanguage = {
    "espanish": {
        "logoText": "Clínica Odontológica Universal",
        "tp2": "...sonrisas que enamoran",
        "menuHome": "Inicio",
        "menuPrevencion": "Prevención",
        "menuImplante": "Implantes",
        "menuEstetica": "Estética",
        "menuServicios": "Servicios",
        "menuQuienes": "Quiénes somos",
        "menuSonrisas": "Sonrisas",
        "menuCitas": "Citas",
        "menuRegresar": "Regresar",
        "titServicios": "Servicios",
        "aPrevencion": "Prevención dental",
        "aImplante": "Implantes dentales",
        "aEstetica": "Estética dental",
        "titTestimonios": "Testimonios",
        "pAlvaro1": "Hola soy Álvaro",
        "pAlvaro2": "Esta gran sonrisa expresa muchos años de frustración y de ocultar mi boca. Gracias a la Clínica Universal hoy disfruto reír a más no poder.",
        "pHeily1": "En la clínica obtuve la sonrisa que siempre quise y a mi edad. Su trato es personal y amable.",
        "pHeily2": "100% recomendadísimos!",
        "pMasSonrisas": "Querés conocer más",
        "hConozca": "Conozca nuestra clínica",
        "bConozcanos": "Conózcanos",
        "bMision": "Misión",
        "bVision": "Visión",
        "bValores": "Valores",
        "pEquipo": "Nuestro equipo humano",
        "pEquipoDescrip": "Somos una Clínica Odontológica en Costa Rica, conformado por un grupo de odontólogos enfocados en brindar a los pacientes soluciones efectivas y adecuadas para sus necesidades dentales. Contamos con las herramientas odontológicas más avanzadas tecnológicamente, para agilizar su diagnóstico y crear el mejor plan de tratamiento dental para usted.",
        "hMision": "Mission",
        "pMisionDescrip": "Somos un grupo de profesionales en constante formación. Nuestro objetivo es proporcionar unos cuidados bucales óptimos a nuestros pacientes. Buscamos conocer perfectamente cada caso y el entorno que lo rodea, ofrecer una atención personalizada e individualizada y alcanzar la excelencia en nuestra labor.Intentamos, asimismo, que el tratamiento dental interfiera lo mínimo posible en la vida diaria.",
        "hVision": "Visión",
        "pVisionDescrip": "Queremos que se nos conozca por nuestro profesionalismo y trato. Ser referentes en San José, Costa Rica por nuestra forma de trabajar y nuestra cercanía con los pacientes.",
        "pValores": "Los valores de nuestra clínica son:",
        "pValores1": "Profesionales. Hacemos nuestro mejor esfuerzo en cada intervención",
        "pValores2": "Cercanos. Estamos siempre a disposición de nuestros clientes, sin importar hora ni día.",
        "pValores3": "Honestos. Lo que decimos al cliente eso hacemos.",
        "hRecomenda": "Recomedaciones",
        "pConsejos": "Consejos para entender la salud bucal",
        "bVideo": "Ver vídeo",
        "bVideoCerrar": "Cerrar",
        "pVisitenos": "Visítenos en nuestras redes sociales",
        "sClinica": "Clínica Ondotológica Universal"
    },
    "english": {
        "logoText": "Universal Dental Clinic",
        "tp2": "...smiles that make you fall in love",
        "menuHome": "Home",
        "menuPrevencion": "Prevention",
        "menuImplante": "Implants",
        "menuEstetica": "Cosmetic",
        "menuServicios": "Services",
        "menuQuienes": "About us",
        "menuSonrisas": "Smiles",
        "menuCitas": "Appointments",
        "menuRegresar": "Back",
        "titServicios": "Services",
        "aPrevencion": "Dental Prevention",
        "aImplante": "Dental Implants",
        "aEstetica": "Cosmetic",
        "titTestimonios": "Testimonials",
        "pAlvaro1": "Hi I'm Alvaro",
        "pAlvaro2": "This big smile expresses many years of frustration and hiding my mouth. Thanks to the Universal Clinic, today I enjoy laughing as hard as I can.",
        "pHeily1": "At the clinic I got the smile I always wanted and at my age. His treatment is personal and friendly.",
        "pHeily2": "100% highly recommended!",
        "pMasSonrisas": "You want to know more",
        "hConozca": "Let me show you our clinic",
        "bConozcanos": "Know us",
        "bMision": "Mission",
        "bVision": "Vision",
        "bValores": "Values",
        "pEquipo": "Our human team",
        "pEquipoDescrip": "We are a Dental Clinic in Costa Rica, made up of a group of dentists focused on providing patients with effective and adequate solutions for their dental needs. We have the most technologically advanced dental tools to speed up your diagnosis and create the best dental treatment plan for you.",
        "hMision": "Mission",
        "pMisionDescrip": "We are a group of professionals in constant training. Our goal is to provide optimal oral care for our patients. We seek to fully understand each case and the environment that surrounds it, offer personalized and individualized attention and achieve excellence in our work. We also try to ensure that dental treatment interferes as little as possible in daily life.",
        "hVision": "Vision",
        "pVisionDescrip": "We want to be known for our professionalism and treatment. To be a reference in San José, Costa Rica for our way of working and our closeness to patients.",
        "pValores": "The values of our clinic are:",
        "pValores1": "Professionals. We do our best in each intervention",
        "pValores2": "Close. We are always available to our clients, regardless of time or day.",
        "pValores3": "Honest. What we tell the client that we do.",
        "hRecomenda": "Recommendations",
        "pConsejos": "Tips for understanding oral health",
        "bVideo": "Watch video",
        "bVideoCerrar": "Close",
        "pVisitenos": "Visit us on our social networks",
        "sClinica": "Universal Dental Clinic"
    }
}