import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button, Card } from "semantic-ui-react";

export default function Home({ notes }) {
  return (
    <div className="container">
      <h1>Notes</h1>
      <div className="d-flex flex-wrap">
        {notes.map((note) => {
          return (
            <div key={note._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/${note._id}`}>
                      <a>{note.title}</a>
                    </Link>
                    <Card.Meta>
                      <span className="date">Created at {note.createdAt}</span>
                    </Card.Meta>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Link href={`/${note._id}`}>
                    <Button primary>View</Button>
                  </Link>
                  <Link href={`/${note._id}/edit`}>
                    <Button color="red">Edit</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Home.getInitialProps = async () => {
  const res = await fetch("https://nextjs-add-task.vercel.app/api/notes");
  const { data } = await res.json();

  return { notes: data };
};
