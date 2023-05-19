import React,{FC,useContext} from 'react';
import {Link} from "react-router-dom"
import { LOGIN_ROUTE } from '../utils/consts';
import {useAuthState} from "react-firebase-hooks/auth"
import { Context } from '..';
interface IHeaderProops{
  btn:string
}
const Header:FC<IHeaderProops> = ({btn}) => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  const logout=()=>{
    auth.signOut()
  }
   return (
      <header className='header'>
        <div className="wrap">
          <div className="header-wrap">
            {user?
            <button onClick={logout} className="button-29" role="button">Выйти</button>
            :<Link to={LOGIN_ROUTE} className="button-29" role="button">Логин</Link>}
          </div>
        </div>
      </header>
   );
};

export default Header;