import { useEffect } from "react";

const HomePage = () => {
    const [authors,  setAuthors ] = useState <AuProp[]> ([]); 

    useEffect(() => {
        AuthorService.getlimitedAuthors()
        .then(authordata => setAuthors(authordata))
        .catch(error => console.log(error))
    }, []);

    return (
        <>
        {}
        <div className="homePage"> 
        
        <h1>Authors</h1>
        <Grid container spacing={2}>
            {authors.map((author) => ( 
                <Grid item xs={3} key={author.id}>
                    <CardButton authors={[author]} /> 
        </Grid>
            ))}
            </Grid>
        </div>
        
        
        
        
        </>
    )

























}