import { Col, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { redirect, useLoaderData } from "react-router-dom";
import PostItem from "../components/PostItem";

export async function action({ params }) {
  try {
    // Make an API call to delete the post with the given id
    await fetch(`http://localhost:5000/posts/${params.id}`, {
      method: "DELETE",
    });
  } catch (error) {
    // Handle network or other errors
    console.error("An error occurred while deleting the post", error);
  }
  return redirect("/");
}

export async function loader() {
  try {
    const response = await fetch("http://localhost:5000/posts");
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("An error occurred while fetching posts", error);
  }
}

function Home() {
  const posts = useLoaderData();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch]);

  const { isLoading } = useSelector((store) => store.posts);
  return isLoading ? (
    "Loading..."
  ) : (
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
              posts.map((post, idx) => (
                <PostItem key={idx} post={post} idx={idx} />
              ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default Home;
