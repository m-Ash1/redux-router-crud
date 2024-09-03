import { useEffect } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "../components/PostItem";
import { getPosts } from "../store/posts";

function Home() {
  // const { posts } = useLoaderData();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { posts, isLoading } = useSelector((store) => store.posts);
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
