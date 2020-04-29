import React from 'react';
import { getUser, removeUserSession } from '../utils/common';
 
function Dashboard(props) {
  const user = getUser();
  console.log(user);
  
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
 
  return (
    <div>
      Welcome {user.firstName+" "+user.lastName}!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Dashboard;