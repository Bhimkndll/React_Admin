import { useCookies } from 'react-cookie';
import react from 'react';
 const Authess=()=>{
	if(localStorage.getItem('token-access'))
	{
		return localStorage.getItem('token-access');
	}
	else{
		return false;
	}
}
export default Authess;
