import React from 'react';

const InfoCard = ({img, cartTitle, bgClass}) => {
    return (
        <div class={`card lg:card-side shadow-xl text-white ${bgClass}`}>
        <figure className="lg:pl-5 py-5"><img src={img} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{cartTitle}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    );
};

export default InfoCard;