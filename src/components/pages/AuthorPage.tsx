import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import AuthorService from "../service/AuthorService";
import NavBar from "../molecules/NavBar";
import DetailsButton from "../atoms/DetailsButton";
import UpdateButton from "../atoms/UpdateButton";

function AuthorPage() {
  const [APIAuthorData, setAPIAuthorData] = useState([]);

  useEffect(() => {
    AuthorService()
      .getAllAuthors()
      .then((response) => {
        setAPIAuthorData(response);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching authors:", error);
      });
  }, []);

  const deleteOnClickHandler = async (authorId) => {
    try {
      await AuthorService()
        .deleteAuthor(authorId);

      const updatedAuthorData = APIAuthorData.filter((author) => author.id !== authorId);
      setAPIAuthorData(updatedAuthorData);
    } catch (error) {
      console.error("Error deleting an author:", error);
    }
  };

  return (
    <>
    <NavBar />
     
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Author ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Birthday</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {APIAuthorData.map((author) => (
              <TableRow key={author.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {author.id}
                </TableCell>
                <TableCell align="right">{author.author_name}</TableCell>
                <TableCell align="right">{author.birth_date}</TableCell>
                <TableCell align="right">
                  
                    <DetailsButton authorId={undefined} />
                    <UpdateButton authorId={0} />
                    <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteOnClickHandler(author.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AuthorPage;