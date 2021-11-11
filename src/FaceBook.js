import data from './data/berlin.json';
import { useState } from 'react';

let country = [];
data.map((currentCountry) => {
  return country.push(currentCountry.country);
});

let uniqueCountries = [...new Set(country)];
let bgColor;
let selectedCountry;

function FaceBook() {
  let [users, setClick] = useState(data);

  function click(currentCountry) {
    selectedCountry = currentCountry;

    const data2 = [...users];

    setClick(data2);
  }

  return (
    <div>
      {uniqueCountries.map((currentCountry) => {
        if (selectedCountry === currentCountry) {
          bgColor = '#A3D2E2';
        } else {
          bgColor = 'white';
        }
        return (
          <button
            key={currentCountry}
            style={{ backgroundColor: `${bgColor}` }}
            onClick={() => click(currentCountry)}
          >
            {currentCountry}
          </button>
        );
      })}
      <div>
        {users.map((currentObj) => {
          if (selectedCountry === currentObj.country) {
            bgColor = '#A3D2E2';
          } else {
            bgColor = 'white';
          }
          return (
            <div
              className="card mb-3"
              style={{ maxWidth: '540px', backgroundColor: `${bgColor}` }}
            >
              <div className="row g-0 d-flex align-items-center">
                <div className="col-md-4">
                  <img
                    src={currentObj.img}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">
                      <strong className="text-muted">First Name:</strong>{' '}
                      {currentObj.firstName}
                    </p>
                    <p className="card-text">
                      <strong className="text-muted">Last Name:</strong>{' '}
                      {currentObj.lastName}
                    </p>
                    <p className="card-text">
                      <strong className="text-muted">Country:</strong>{' '}
                      {currentObj.country}
                    </p>
                    <p className="card-text">
                      <strong className="text-muted">Type:</strong>{' '}
                      {currentObj.type ? 'Studen' : 'Teacher'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FaceBook;
