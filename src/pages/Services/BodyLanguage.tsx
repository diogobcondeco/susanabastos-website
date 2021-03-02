import React from 'react';
import Service from '../../components/Service/Service';
import { bodyLanguage } from './Services';

const BodyLanguage:React.FC = () => {
    return (
        <div className="page">
            <Service service={bodyLanguage.serviceName} segment={bodyLanguage.text}  />
        </div>
    )
}

export default BodyLanguage;
