import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Instagram } from "lucide-react";
import Image from "next/image";
import { Mail, PhoneCall } from 'lucide-react';


export const socialNetworks = [
    {
        id: 1,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "mailto:juanjesusbenito04200416@gmail.com",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/juan-jesús-benito-dequero-671130312",
    },
    {
        id: 3,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/juanje_fotos?igsh=b3l1NHdhdzY4aDgw",
    },
    {
        id: 3,
        logo: <PhoneCall size={30} strokeWidth={1} />,
        src: "tel:+34619583046",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Curso DAM",
        subtitle: "Escuelas Salesianas María Auxiliadora Nervión",
        description: "He completado un curso en Desarrollo de Aplicaciones Multiplataforma, adquiriendo habilidades en diversas tecnologías y herramientas necesarias para crear aplicaciones que funcionen en varios dispositivos.",
        date: "Abril 2024",
    },
    {
        id: 2,
        title: "Tester QA",
        subtitle: "Eviden",
        description: "Trabajé durante tres meses como Tester QA en un proyecto interno, abarcando todas las áreas del testing y aplicando diversas metodologías. Mi labor incluyó la planificación y ejecución de pruebas, identificación y reporte de errores, y colaboración estrecha con los equipos de desarrollo para asegurar la calidad del producto final.",
        date: "Junio 2024",
    },
    {
        id: 3,
        title: "Curso Desarrollador Full Stack",
        subtitle: "Udemy",
        description: "He completado un curso como Desarrollador Full Stack, adquiriendo habilidades en tecnologías como Spring y Angular. Este curso me ha permitido consolidar mis conocimientos en desarrollo de aplicaciones web, tanto en el frontend como en el backend, y me ha brindado una comprensión profunda de todo el ciclo de vida del desarrollo de software.",
        date: "Julio 2024",
    },

]

export const dataCounter = [
    {
        id: 0,
        endCounter: 3,
        text: "Meses de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 2,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 5,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de marca sólida y coherente, incluyendo colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "Optimización",
        description: "Optimización de código y pruebas del código previamente desarrollado",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Ecommerce Web",
        image: "/image-1.png",
        urlGithub: "https://github.com/Juanje0416/Ecommerce-Spring-Angular",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Portfolio Personal",
        image: "/image-2.png",
        urlGithub: "https://github.com/Juanje0416/Portfolio-React",
        urlDemo: "https://portfolio-juanjesus.netlify.app/",
    },
    {
        id: 3,
        title: "Página vista pokemon",
        image: "/image-3.png",
        urlGithub: "https://github.com/Juanje0416/Pokemon-Card",
        urlDemo: "https://charizard-pokemon-card.netlify.app/",
    },

    
];
