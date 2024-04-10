import { Link } from "react-router-dom";
import { useState } from "react";

import HomeIcon from '@mui/icons-material/Home';


function HomeButton() {
  const [click] = useState(false);


  if (click) {
    return <Link to={`/author`} />;
  }

  return (
   
      <Link to={"/author"} style={{ textDecoration: "none" }}>
        <HomeIcon>
         
        </HomeIcon>
      </Link>
   
  );
}

export default HomeButton;