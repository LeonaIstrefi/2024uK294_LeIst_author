

export type AuProp = {
    id?: number; 
    author_name: string; 
    birth_date: string; 
}

function AuthorProp(props: AuProp){
    return (
        <>
        <div>{props.id}</div>
        <div>{props.author_name}</div>
        <div>{props.birth_date}</div>
        </>
    );
}

export default AuthorProp;