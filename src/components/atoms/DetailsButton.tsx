import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

export default function DetailsButton({ authorId }) {
  return (
    <>
      <IconButton component={Link} to={`/author/${authorId}`}>
        <InfoIcon />
      </IconButton>
    </>
  );
}