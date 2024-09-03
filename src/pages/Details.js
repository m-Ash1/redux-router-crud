export async function loader({ params }) {
  if (typeof params.id === "string") {
    throw new Error("Invalid ID");
  } else {
    return console.log(params);
  }
}

function Details() {
  return <div>Details</div>;
}

export default Details;
