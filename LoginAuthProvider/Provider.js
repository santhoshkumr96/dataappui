import { useState , useEffect } from "react";
import PropTypes from 'prop-types';
import LoginContext from "./Context";

const LoginProvider = ({children}) => {
    const [userDets, setUserDets] = useState({});


    return(
        <LoginContext.Provider value={{userDets,setUserDets}}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginProvider;