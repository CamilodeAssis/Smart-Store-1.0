
import Cookies from 'js-cookie';


export const isLogged = () => {
    let token = Cookies.get('token',);
    return (token) ? true : false;

}

export const doLogin = (token: string) => {
    let date = new Date();
    date.setTime(date.getTime() + (60 * 1000))
    
    Cookies.set('token', token, { expires: date });
}