import React, { useContext } from 'react';
import { GlobalContext } from './Context/Context';
 import { UserContext } from './Context/UserContext';

const CompC = ({info}) => {
   const contextData = useContext(GlobalContext)
    const userInfo = useContext(UserContext)
   console.log(contextData)
    return (
        <div>
              <div>Comp C will be here</div>
              <div>from global context {contextData}</div> 
              <div> {userInfo.name}</div>
              <div>{userInfo.job}</div>
              {/* <div>{info}</div> */}
        </div>
    );
};

export default CompC;