import { Button, ButtonGroup } from "react-bootstrap";

function PostItem({post, idx}) {
  return (
    <tr >
      <td>{++idx}</td>
      <td>
        <td>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </td>
      </td>
      <td className="flex align-content-center">
        <ButtonGroup aria-label="Basic example">
          <Button variant="success">Edit</Button>
          <Button variant="danger">Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  );
}

export default PostItem;
