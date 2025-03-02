import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  isNew?: boolean;
}

interface FeaturedCardsProps {
  cards: CardProps[];
}

const FeaturedCards = ({ cards }: FeaturedCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {cards.map((card, index) => (
        <div key={index} className="card bg-base-100 shadow-sm">
          <figure>
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {card.title}
              {card.isNew && <div className="badge badge-secondary">NEW</div>}
            </h2>
            <p>{card.description}</p>
            <div className="card-actions justify-end">
              {card.tags.map((tag, tagIndex) => (
                <div key={tagIndex} className="badge badge-outline">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCards;