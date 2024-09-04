import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, ButtonGroup } from "react-bootstrap";
import { Form, redirect } from "react-router-dom";

async function deletePost(postId) {
  try {
    await fetch(`http://localhost:5000/posts/${postId}`, {
      method: "DELETE",
    });
  } catch (error) {
    // Handle network or other errors
    console.error("An error occurred while deleting the post", error);
  }
  return redirect("/");
}

function PostItem({ post, idx }) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

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
          <Button variant="danger" onClick={() => mutate(post.id)}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
}

export default PostItem;
