import React from 'react';
import Service from '../../components/Service/Service';
import { coaching } from './Services';

const Coaching:React.FC = () => {
    return (
        <div className="page">
            <Service service={coaching.serviceName} segment={coaching.text}  />
        </div>
    )
}

export default Coaching;
