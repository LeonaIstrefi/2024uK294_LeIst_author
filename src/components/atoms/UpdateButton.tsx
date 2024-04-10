import { Link } from "react-router-dom";
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';

interface UpdateButtonProps {
  authorId: number;
}

const UpdateButton = ({ authorId }: UpdateButtonProps) => {
  return (
    <Link to={`/author/update/${authorId}`}>
      
      <IconButton
      >
        <CreateIcon />
      </IconButton>
        </Link>
    
  );
};

export default UpdateButton;