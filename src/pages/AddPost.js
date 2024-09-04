import { Button } from "react-bootstrap";
import { Form, redirect } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const post = Object.fromEntries(formData);
  try {
    await fetch("http://localhost:5000/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  } catch (error) {
    // Handle network or other errors
    console.error("An error occurred while Creating the post", error);
  }
  return redirect("/");
}

function AddPost() {
  return (
    <div
      className="wrapper"
      style={{
        padding: "0 15rem",
      }}
    >
      <Form
        method="post"
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <label htmlFor="title">Post Title</label>
        <input
          style={{
            border: "1px solid #ced4da",
            borderRadius: "5px",
          }}
          type="text"
          name="title"
          id="title"
        />

        <label htmlFor="content">Description</label>
        <textarea
          style={{
            border: "1px solid #ced4da",
            borderRadius: "5px",
          }}
          type="text"
          name="content"
          id="content"
        />

        <Button
          variant="primary"
          style={{ display: "flex", width: "fit-content", marginTop: "10px" }}
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddPost;
