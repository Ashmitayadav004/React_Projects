import { Form, redirect } from "react-router-dom";
const CreatePost = () => {
  // const { addPost } = useContext(PostListContext);
  //const navigate = useNavigate();

  const handleSubmit = (event) => {};
  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your userId here
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Your UserId !"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today !"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Content
        </label>
        <textarea
          type="text"
          rows="4"
          name="body"
          className="form-control"
          id="body"
          placeholder="Tell us more about it !"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post !"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your Hastags here !!
        </label>
        <input
          type="text"
          className="form-control"
          name="tags"
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};
export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split("");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body:JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => console.log(post));
    // .then((post) => addPost(post));
  // navigate("/");
return redirect("/");
 }

export default CreatePost;
