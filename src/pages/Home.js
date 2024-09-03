import { Button, ButtonGroup, Col, Row, Table } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();
  return { posts };
}
function Home() {
  const { posts } = useLoaderData();
  return (
    <Row>
      <Col xs={{ span: 8, offset: 2 }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th style={{ width: "70%" }}>Title</th>
              <th style={{ width: "10%" }}></th>
            </tr>
          </thead>
          <tbody>
            {posts &&
              posts.map((post) => (
                <tr>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="success">Edit</Button>
                      <Button variant="danger">Delete</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default Home;
