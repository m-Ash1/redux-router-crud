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
          <Form method="post" action={`post/${post.id}/edit`}>
            <input type="hidden" name="post" value={JSON.stringify(post)} />
            <Button variant="primary" type="submit">
              Edit
            </Button>
          </Form>
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
