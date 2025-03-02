import React from "react";

interface CardsProps {
  image: string;
  title: string;
  description: string;
}

const Cards: React.FC<CardsProps> = ({ image, title, description }) => {
  return (
    <div className="card card-compact bg-white w-72 shadow-lg">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;