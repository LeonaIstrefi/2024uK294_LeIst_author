
import Navbar from "../Molecules/Navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

function DetailedCarPage() {
  return (
    <>
     <Navbar />
      
      <Card className="cardWrapper" sx={{ maxWidth: 500 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CardMedia
                  component="img"
                  height="140"
                  image={books.image}
                  sx={{ height: 270 }}
                />
              </Grid>
              <Grid item xs={6}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <TextField
                      id="standard-required-read-only-input"
                      label="Bookname"
                      defaultValue={books.name}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="standard"
                    />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <TextField
                      onChange={handleChange}
                      id="outlined-required-read-only-input"
                      label="Author"
                      defaultValue={books.author}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <br />
                    <br />
                    <TextField
                      onChange={handleChange}
                      id="outlined-required-read-only-input"
                      label="Genre"
                      defaultValue={books.genre}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <br />
                    <br />

                    <TextField
                      onChange={handleChange}
                      id="outlined-required-read-only-input"
                      label="Price"
                      defaultValue={books.price}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
    </>
  );
}

export default DetailedCarPage;