import React from 'react'

const Certificates = props => (
  <div className="Certificates">
    <div className="Certificates-container">

      {props.data.map((cer, index) => (
        <div className="Certificates-item" key={`Cer-${index}`}>

          <h3>{cer.name} at {cer.institution} on  <span>{cer.date}</span></h3>

          <p>{cer.description}</p>

        </div>
      ))}

    </div>
  </div>
);

export default Certificates;