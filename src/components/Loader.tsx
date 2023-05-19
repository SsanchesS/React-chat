import React,{FC} from 'react';

const Loader:FC = () => {
   return (
      <div className="wrap loader">
         <div className="lds-dual-ring"></div>
      </div>
   );
};

export default Loader;