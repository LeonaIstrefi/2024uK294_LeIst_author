

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthorService from "../service/AuthorService";
import NavBar from "../molecules/NavBar";


function DetailedAuthors() {
  const { authorId } = useParams(); 
  const [name, setName] = useState("");
  const [birthday, setbirthday] = useState("");

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const authorData = await AuthorService().getAuthorById(authorId);
        setName(authorData.author_name);
        setbirthday(authorData.birth_date);
      } catch (error) {
        alert("cant get the author data.");
      }
    };

    fetchData();
  }, [authorId]);

  return (
    <>
      
    <NavBar />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <TextField
                id="standard-required-read-only-input"
                label="Authorname"
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <TextField
                id="outlined-required-read-only-input"
                label="Birthday"
                value={birthday}
                onChange={(e) => setbirthday(e.target.value)}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </>
  );
}

export default DetailedAuthors;