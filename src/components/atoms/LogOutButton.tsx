import { Link } from "react-router-dom";
import { useState } from "react";

import PersonIcon from '@mui/icons-material/Person';


function LogOutButton() {
  const [click] = useState(false);


  if (click) {
    return <Link to={`/`} />;
  }

  return (
   
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <PersonIcon>
         
        </PersonIcon>
      </Link>
   
  );
}

export default LogOutButton;
