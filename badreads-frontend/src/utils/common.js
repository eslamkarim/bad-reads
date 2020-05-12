import axios from 'axios';
// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem('token') || null;
}
 
// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
}
 
// set the token and user from the session storage
export const setUserSession = (token, user) => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('user', JSON.stringify(user));
}

const verifyUser = async () => {
  const userStr = sessionStorage.getItem('user');
  if (userStr){
    var token = getToken(); 
    var resp = await axios.get(`http://localhost:4000/login/verifyToken?token=${token}`)
    .then(response => {
        setUserSession(response.data.token, response.data.user);
        var user = JSON.parse(sessionStorage.getItem('user'));
        return user;
      }).catch(error => {
        removeUserSession();
        return null;
      });

      return resp
  } 
  else return null;
}

export const getUser = () =>{
  var user = verifyUser();
  user.then(data =>{ 
    console.log(data);
    return data
  });
}