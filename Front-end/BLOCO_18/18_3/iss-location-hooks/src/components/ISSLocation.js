import React, { useContext, useEffect } from 'react';
import Marker from 'pigeon-marker';
import Map from 'pigeon-maps';

import ISSContext from '../context/ISSContext';

import latitudeImg from '../assets/latitude.svg';
import longitudeImg from '../assets/longitude.svg';
import loadingImg from '../assets/loading.svg';
import useTimer from '../effects/useTimer';

const TWO_SECONDS = 2000;

function ISSLocation() {
  const { latitude, longitude, isFetching, fetchISSLocation } = useContext(ISSContext);

  useTimer(fetchISSLocation, TWO_SECONDS);

  useEffect(() => {
    document.title = new Date().toLocaleString();
  });

  // useEffect(() => {}); // componentDidUpdate
  // useEffect(() => {}, []); // componentDidMount

  return (
    <main>
      <div className="map">
        <Map
          center={ [0, 0] }
          defaultWidth={ 450 }
          height={ 450 }
          minZoom={ 1.5 }
          maxZoom={ 8 }
          zoom={ 1.5 }
        >
          <Marker anchor={ [latitude, longitude] } />
        </Map>
      </div>
      {isFetching
        ? (
          <img
            src={ loadingImg }
            alt="loading animation"
            width={ 32 }
            height={ 32 }
          />
        )
        : (
          <section className="lat-long-section">
            <div className="lat-long">
              <img
                className="lat-long-img"
                src={ latitudeImg }
                width={ 24 }
                height={ 24 }
                alt="latitude"
              />
              <span>{latitude}</span>
            </div>
            <div className="lat-long">
              <img
                className="lat-long-img"
                src={ longitudeImg }
                width={ 24 }
                height={ 24 }
                alt="longitude"
              />
              <span>{longitude}</span>
            </div>
          </section>
        )}
    </main>
  );
}

export default ISSLocation;
