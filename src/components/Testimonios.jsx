import React from 'react';
import Marquee from "react-fast-marquee";

const Testimonios = () => {

    const testimonials = [
        {
            image: "public/imgs/testimonios/foto-opinion-1.jpg",
            name: "Juan Pérez",
            comment: "Excelente trabajado de Nahuel, un genio la verdad y excelente trato de él y de todo el grupo que integra este estudio 🙌🏼🙌🏼🙌🏼",
            rating: "⭐⭐⭐⭐⭐",
        },
        {
            image: "public/imgs/testimonios/foto-opinion-2.jpg",
            name: "María Gómez",
            comment: "Muy buena atención al cliente, definitivamente lo recomiendo.",
            rating: "⭐⭐⭐⭐",
        },
        {
            image: "public/imgs/testimonios/foto-opinion-3.jpg",
            name: "Carlos López",
            comment: "Excelente experiencia, volvería a usar este servicio sin duda.",
            rating: "⭐⭐⭐⭐⭐",
        },
    ];

    return (
        <section id='testimonios' className="container-fluid contenedor-testimonios">
            <h2 className="text-center testimonios_title">Testimonios</h2>

            <div className="row contenedor-cards">
                <Marquee             // Efecto Horizontal
                    speed={30}      
                    pauseOnHover={false}
                    gradient={false}
                    gradientWidth={100}
                    loop={0}
                >
                    {testimonials.concat(testimonials).map((testimonial, index) => (  // Duplica las cards
                        <div className="testimonio-card text-center" key={index}>
                            <div className='card_foto-y-nombre'>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="testimonio-foto rounded-circle mb-3"
                                    width="70"
                                    height="70"
                                />
                                <h5 className='testimonio-nombre'>{testimonial.name}</h5>   
                            </div>
                            <div className='card_calificación-y-testimonio'>
                                <div className="rating">{testimonial.rating}</div>
                                <p className='testimonio'>{testimonial.comment}</p>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Testimonios;
