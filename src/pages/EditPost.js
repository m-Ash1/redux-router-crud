export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const post = JSON.parse(data.post);
}
function EditPost() {
  return <div>Edit</div>;
}

export default EditPost;
