import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthorService from "../service/AuthorService";

function DetailedAuthors() {
  const { authorId } = useParams();
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authorData = await AuthorService().getAuthorById(authorId);
        setName(authorData.Name);
        setBirthday(authorData.birthday);
      } catch (error) {
        alert("Error fetching author data.");
      }
    };

    fetchData();
  }, [authorId]);

  const handleSave = async () => {
    try {
      if (isEditMode) {
        
        await AuthorService().putAuthor(authorId, { Name: name, birthday: birthday });
        
        const updatedAuthorData = await AuthorService().getAuthorById(authorId);
        setName(updatedAuthorData.Name);
        setBirthday(updatAedAuthorData.birthday);
        setIsEditMode(false);
      } else {
        
        const newAuthorId = parseInt(authorId) + 1;
        await AuthorService().postAuthor({ id: newAuthorId, Name: name, birthday: birthday });
        
        setName("");
        setBirthday("");
      }
    } catch (error) {
      alert("Error saving author data.");
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <TextField
                id="authorName"
                label="Authorname"
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputProps={{
                  readOnly: !isEditMode,
                }}
                variant="standard"
              />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <TextField
                id="authorBirthday"
                label="Birthday"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                InputProps={{
                  readOnly: !isEditMode,
                }}
                variant="outlined"
              />
            </Typography>
            <div style={{ marginTop: "20px" }}>
              {!isEditMode ? (
                <Button variant="contained" onClick={() => setIsEditMode(true)}>
                  Edit
                </Button>
              ) : (
                <Button variant="contained" onClick={handleSave}>
                  Save
                </Button>
              )}
            </div>
          </CardContent>
        </Grid>
      </Grid>
    </>
  );
}

export default DetailedAuthors;
