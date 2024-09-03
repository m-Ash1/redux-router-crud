import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function AppLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export default AppLayout;

