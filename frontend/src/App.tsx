import axios from "axios";
import "./App.css";

function App() {
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      id: Math.floor(Math.random() * 1000),
      name: (document.getElementById("name") as HTMLInputElement).value,
      email: (document.getElementById("email") as HTMLInputElement).value,
    };

    axios
      .post("http://localhost:3001/api/users", body)
      .then((response) => {
        alert("User created successfully!");
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the user:", error);
        alert("Failed to create user.");
      });
  };

  return (
    <div>
      <form action="POST" onSubmit={submitForm} className="formstyle">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
