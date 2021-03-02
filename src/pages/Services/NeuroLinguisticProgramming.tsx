import React from 'react';
import Service from '../../components/Service/Service';
import { neuroLinguisticProgramming } from './Services';

const NeuroLinguisticProgramming:React.FC = () => {
    return (
        <div className="page">
            <Service service={neuroLinguisticProgramming.serviceName} segment={neuroLinguisticProgramming.text}  />
        </div>
    )
}

export default NeuroLinguisticProgramming;
