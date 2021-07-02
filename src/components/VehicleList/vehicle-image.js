import React, { useState } from 'react';

const VehicleImage = ({
  name,
  media,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    !imgError ? (
      <picture className="card__picture">
        <source
          media="(min-width: 768px)"
          onError={() => setImgError(true)}
          srcSet={media[0].url}
        />
        <img onError={() => setImgError(true)} className="card__image" src={media[1].url} alt={`Jaguar ${name.toUpperCase()}`} />
      </picture>
    ) : (
      <picture className="card__picture">
        <source
          media="(min-width: 768px)"
          srcSet="/images/16x9/coming-soon.jpg"
        />
        <img className="card__image" src="/images/1x1/coming-soon.jpg" alt={`Jaguar ${name.toUpperCase()}`} />
      </picture>
    )
  );
};

export default VehicleImage;
