import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthorService from "../service/AuthorService";
import NavBar from "../molecules/NavBar";

function UpdatePage() {
  const { authorId } = useParams();
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authorData = await AuthorService().getAuthorById(authorId);
        setName(authorData.Name);
        setBirthday(authorData.Birthday);
      } catch (error) {
        alert("Error fetching author data");
      }
    };

    fetchData();
  }, [authorId]);
  

  const updateOnClickHandler = async () => {
    if (!name && !birthday) { // ! heisst es hat keinen Wert 
      setError("Author Name or Birthday is required.");
      return;
    }

if (!/^\d{4}-\d{2}-\d{2}$/.test(birthday)) {
  setError("Invalid Birthday format. Please use YYYY-MM-DD.");
  return;
}

    try {
      await AuthorService().putAuthor(authorId, name, birthday);
      alert("Updated Author successful.");
      navigate("/author");
    } catch (error) {
      alert("Couldn't update the Author");
    }
  };

  return (
    <>
      <NavBar />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography>
            <TextField
              id="name"
              label="author_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="standard"
            />
            <br />
            <TextField
              id="birthday"
              label="Birth_date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              variant="standard"
            />
            {error && <Typography color="error">{error}</Typography>}
          </Typography>
          <Button variant="contained" onClick={updateOnClickHandler}>
            Save
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default UpdatePage;
