import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-service";
import TransitionPage from "@/components/transition-page";
import Link from 'next/link';

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto mt-20 md:grid-cols-2 md:mt-0 px-4">
                <div className="max-w-[450px] mt-20 md:mt-0 text-center md:text-left">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    <p className="mb-3 text-lg md:text-xl text-gray-100">Ofrezco servicios como Desarrollador Full Stack y Tester QA. Algunas de las tecnologías más destacables con las que trabajo son: Spring, Angular, React, HTML, CSS, Cypress, Selenium. ¡Aunque estoy deseando aprender y desarrollarme más en el sector!</p>
                    <div className="flex justify-center md:justify-start">
                        <a href="mailto:juanjesusbenito04200416@gmail.com">
                            <button className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                                Contacta conmigo
                            </button>
                        </a>
                    </div>
                </div>

                <div className="w-full px-4 md:px-0">
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;
