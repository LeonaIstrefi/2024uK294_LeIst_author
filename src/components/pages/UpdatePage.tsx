import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthorService from "../service/AuthorService";
import NavBar from "../molecules/NavBar";

function UpdatePage() {
  const { authorId } = useParams(); 
  const [name, setName] = useState("");
  const [birthday, setbirthday] = useState("");
const nav = useNavigate();
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const authorData = await AuthorService().getAuthorById(authorId);
        setName(authorData.Name);
        setbirthday(authorData.Birthday);
      } catch (error) {
        alert("Error fetching author data");
      }
    };

    fetchData();
  }, [authorId]);

  const updateOnClickHandler = async () => {
    try {
      await AuthorService().putAuthor(authorId, name, birthday);
      alert("Updated Author successful.")
      nav("/author")
    } catch (error) {
      alert("Couldnt update the Author");
    }
  };
  return (
    <>
      <NavBar />
  
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography>
            <TextField
              id="margin-normal"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)} 
              variant="standard"
            />
            <br />
            <TextField
              id="margin-normal"
              label="Birthday"
              
              value={birthday}
              onChange={(e) => setbirthday(e.target.value)}
              variant="standard"
            />
          </Typography>
          <Button
            variant="contained"
            onClick={updateOnClickHandler}
          >
           Save
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default UpdatePage;