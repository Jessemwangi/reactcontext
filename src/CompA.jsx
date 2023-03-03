import React from 'react';
import CompB from './CompB';

const CompA = ({info}) => {
    return (
        <div>
            <div>Comp A will be here</div>
            <CompB info={info}/>
           
        </div>
    );
};

export default CompA;