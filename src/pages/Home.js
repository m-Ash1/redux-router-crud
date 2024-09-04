import { useQuery } from "@tanstack/react-query";
import { Col, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import PostItem from "../components/PostItem";

async function getPosts() {
  try {
    const response = await fetch("http://localhost:5000/posts");
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("An error occurred while fetching posts", error);
  }
}

function Home() {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

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
            {data &&
              data?.map((post, idx) => (
                <PostItem key={idx} post={post} idx={idx} />
              ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default Home;
