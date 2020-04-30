import React from 'react';
import { getUser, removeUserSession } from '../utils/common';
 
function Dashboard(props) {
  const user = getUser();
  console.log(user);
  
  return (
    <div>
      Welcome <br /><br />
    </div>
  );
}
 
export default Dashboard;