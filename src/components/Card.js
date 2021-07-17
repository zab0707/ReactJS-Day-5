import React from 'react';

const Card = ({image, title, desc}) => {
    return(
        <div className="col-4">
            <div className="card" style={{"width": "18 rem"}}>
                <img
                src={image}
                className="card-img-top" alt="..." height="250"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}.</p>
                    <a href="#" className="btn btn-success">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default Card