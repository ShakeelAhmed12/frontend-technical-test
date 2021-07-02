import React from 'react';
import VehicleImage from './vehicle-image';

const VehicleCard = ({
  name,
  media,
  price,
  description
}) => (
  <div className="card">
    <VehicleImage
      name={name}
      media={media}
    />
    <div className="card__body">
      <h1 className="card__title">
        {`Jaguar ${name.toUpperCase()}`}
      </h1>
      <p className="card__price">
        {price ? (
          `From ${price}`
        ) : (
          'TBA'
        )}
      </p>
      <p className="card__copy">
        {description || (
          'Coming Soon'
        )}
      </p>
    </div>
  </div>
);

export default VehicleCard;
