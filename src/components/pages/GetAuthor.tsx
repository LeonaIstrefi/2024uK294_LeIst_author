import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Detail = () => {
    const {id} = useParams()
    const [authors, setAuthors] = useState<AuProp>(); 

    useEffect(()=> {
        if(!id) {
            return; 
        }

        AuthorService.getAuthorByID(Number(id))
        .then((authordata) => setAuthors(authordata))
        .catch((error) => console.log (error));
    }, [id]); 

    return (  
        <> 
            {author && authors.id !== undefined && ( 
                <div>
                    
                </div>
            )}
        
        
        </>
    )



}