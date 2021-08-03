import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Confirm, Button, Loader } from 'semantic-ui-react';

const Note = ({ note }) => {
    const [confirm, setConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDeleting){
            deleteNote()
        }
    },[isDeleting])

    const open = () => setConfirm(true);

    const close = () => setConfirm(false);

    const deleteNote = async () => {
        const noteId = router.query.id;
        try {
           const deleted = await fetch(`https://nextjs-add-task.vercel.app/api/notes/${noteId}`, {
               method:"Delete"
           });
           router.push("/"); 
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        setIsDeleting(true);
        close();
    }
    return (
        <div className="container">
            {isDeleting
                ? <Loader active />
                :
                <div className="container p-5">
                    <h1>{note.title}</h1>
                    <p>{note.description}</p>
                    <Button color="red" onClick={open}>Delete</Button>
                </div>          
            
            }
            <Confirm
            open={confirm}
            onCancel={close}
            onConfirm={handleDelete} 
            />
        </div>
    )
}

Note.getInitialProps = async ({ query: { id }}) => {
    const res = await fetch(`https://nextjs-add-task.vercel.app/api/notes/${id}`);
    const { data } = await res.json();

    return { note: data }

}

export default Note;