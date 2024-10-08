import { Button } from "react-bootstrap";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="mt-5 text-center" id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button variable="link" onClick={() => navigate(-1, { replace: true })}>
        Back
      </Button>
    </div>
  );
}
