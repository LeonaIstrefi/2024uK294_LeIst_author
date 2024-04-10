
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export default function AddButton() {
  return (
    <Fab
      size="small"
      
      component={Link}
      to="/create"
    >
      <ControlPointIcon />
    </Fab>
  );
}