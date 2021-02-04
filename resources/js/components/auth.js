import { useCookies } from 'react-cookie';
import react from 'react';
 const Auth=()=>{
	if(getCookies(token)&&getlocalstorage(user))
	{
		return getlocalstorage('user')
	}
	else{
		return false;
	}
}
export default Auth;