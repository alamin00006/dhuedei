import React, { useEffect, useState } from "react";

const Map = () => {
  const [mapLink, setMapLink] = useState([]);

  useEffect(() => {
    fetch("map.json")
      .then((res) => res.json())
      .then((data) => {
        setMapLink(data);
      });
  }, []);
  return (
    <div>
      {mapLink.map((link) => (
        <div key={link.id}>
          <iframe
            src={link?.mapLink}
            width="550"
            height="320"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map-link"
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default Map;
