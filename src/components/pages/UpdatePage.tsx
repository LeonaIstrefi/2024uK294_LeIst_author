import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthorService from "../service/AuthorService";
import NavBar from "../molecules/NavBar";

function UpdatePage() {
  const { authorId } = useParams(); 
  const [name, setName] = useState("");
  const [birthday, setbirthday] = useState("");

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const authorData = await AuthorService().getAuthorById(authorId);
        setName(authorData.Name);
        setbirthday(authorData.Birthday);
      } catch (error) {
        alert("Cannot get the data from author");
      }
    };

    fetchData();
  }, [authorId]);

  const updateOnClickHandler = async () => {
    try {
      await AuthorService().putAuthor(authorId, name, birthday);
      alert("Updated Author successful.")
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
            component={Link}
            to="/author"
          >
           Save
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default UpdatePage;