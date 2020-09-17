import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Banners() {
  useEffect(() => {
    fetchBanners();
 
  }, []);
  const [banners, setBanners] = useState([]);

  const fetchBanners = async () => {
    const data = await fetch("https://fortnite-api.com/v1/banners");
    const banners = await data.json();

    setBanners(banners.data);

    
  };

  return (
    <div>
      <h2>Banners Page</h2>
     
      <ul>
        {banners.map((banner) => (
          <li>
            <Link to={`/banners/${banner.id}`}>
                {banner.devName}
                </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Banners;
