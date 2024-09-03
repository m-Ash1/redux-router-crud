import { Button, ButtonGroup } from "react-bootstrap";
import { Form } from "react-router-dom";

function PostItem({ post, idx }) {
  return (
    <tr>
      <td>{++idx}</td>
      <td>
        <h4>{post.title}</h4>
        <p>{post.content}</p>
      </td>
      <td className="flex align-content-center">
        <ButtonGroup aria-label="Basic example">
          <Button variant="success">Edit</Button>
          <Form
            method="post"
            action={`/post/delete/${post.id}`}
            style={{ margin: 0 }}
          >
            <Button variant="danger" type="submit">
              Delete
            </Button>
          </Form>
        </ButtonGroup>
      </td>
    </tr>
  );
}

export default PostItem;
