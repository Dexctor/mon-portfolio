import {  faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faDesktop, faPalette } from '@fortawesome/free-solid-svg-icons';
import './index.scss'

const Services = () => {
    return (<div className="services">
        <div className="container">
            <div className="text-zone">
                <h2 className="title">Mes Services</h2>
            </div>
            <div className="services-list">
                <div className="service">
                    <FontAwesomeIcon icon={faDesktop} />
                    <h3>Applications Web</h3>
                    <p>
                    Développe des sites vitrines, e-commerce, applications web, mobile ou de bureau.
                    </p>
                   
                </div>
                <div className="service">
                <FontAwesomeIcon icon={faAccessibleIcon} />
               
                    <h3>Accesssibilité</h3>
                    <p>
                    Rendez votre site accessible à tous : une navigation simplifiée pour une portée maximisée.
                    </p>
                   
                </div>
                <div className="service">
                <FontAwesomeIcon icon={faPalette} />
                    <h3>Expérience utilisateur & Design</h3>
                    <p>
                    La facilité de naviguer sur un site est importante tout en ayant un design attirant
                    </p>
                   
                  
                    
                </div>
               
            </div>
        </div>
    </div>)
};

export default Services;