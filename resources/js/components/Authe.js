import react from 'react';
import Cookies from 'universal-cookie';

 const Authe=()=>{
 	const cookies = new Cookies();

	if(cookies.get('token-access'))
	{
		return  cookies.get('token-access')

	}
	else{
		return false;
	}
}
export default Authe;
