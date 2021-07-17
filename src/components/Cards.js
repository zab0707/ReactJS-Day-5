import React from 'react';

import Card from './Card';
import apple from './apple.jpg';
import orange from './orange.jpg';
import mango from './mango.jpg'

const Cards = () => {
    return(
        <div>
            <section className="contact bg-success ">
                <div className="container ">
                    <h2 className="text-white">We love new friends!</h2>
                    <div className="row">
                        <Card image={apple} title="Apple" desc=" It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions." />
                        <Card image={orange} title="Orange" desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal." />
                        <Card image={mango} title="Mango" desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cards;