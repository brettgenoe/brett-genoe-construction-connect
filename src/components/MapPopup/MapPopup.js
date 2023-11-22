import './MapPopup.scss'
import React from 'react';




const MapPopup = ({ feature, address }) => {
    // console.log('MapPopup component called with feature:', feature);
    if (!feature) {
        return null;
    }
    return (
        <section className='popup__container'>

            <h3 className="popup__company-name">{feature.properties.company_name}</h3>
            <p className='popup__address'>{address}</p>
            <p className='popup__description'>{feature.properties.description}</p>
            <p className='popup__duration'> Minimum: {feature.properties.duration} Months of Work</p>
            <h3 className='popup__header'> Trades Needed:</h3>
            <p className='popup__trade'><b>Carpenters Needed: </b>{feature.properties.carpenters_needed}</p>
            <p className='popup__description'>{feature.properties.carpenters_description}</p>
            <p className='popup__trade'><b>Electricians Needed: </b>{feature.properties.electricians_needed}</p>
            <p className='popup__description'>{feature.properties.electricians_description}</p>
            <p className='popup__trade'><b>Plumbers Needed: </b>{feature.properties.plumbers_needed}</p>
            <p className='popup__description'>{feature.properties.plumbers_description}</p>
            <p className='popup__trade'><b>Operators Needed: </b>{feature.properties.operators_needed}</p>
            <p className='popup__description'>{feature.properties.operators_description}</p>
            <p className='popup__trade'><b>Labours Needed: </b>{feature.properties.labours_needed}</p>
            <p className='popup__description'>{feature.properties.labours_description}</p>
            <p className='popup__trade'><b>Safety Needed: </b>{feature.properties.safety_needed}</p>
            <p className='popup__description'>{feature.properties.safety_description}</p>
            <p className='popup__email'>Interested? Please email at: <a
                className='popup__link' href={`mailto:${feature.properties.email}`}>{feature.properties.email}</a></p>
            <p className='popup__phone' > Or call us at: <a className='popup__link'
                href={`tel:${feature.properties.telephone}`}>{feature.properties.telephone}</a> </p>
        </section>
    );
};

export default MapPopup;