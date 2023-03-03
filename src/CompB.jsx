import React from 'react';
import CompC from './CompC';

const CompB = ({info}) => {
    return (
        <div>
              <div>Comp B will be here</div>
              <CompC info={info}/>
        </div>
    );
};

export default CompB;