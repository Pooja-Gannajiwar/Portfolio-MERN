import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");
  const [github, setGithub] = useState("");

  const navigate = useNavigate(); // ✅ INSIDE COMPONENT

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/projects", {
      title,
      description,
      techStack: techStack.split(","),
      github,
    });

    navigate("/projects"); // ✅ redirect after add
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Project</h2>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <br /><br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="text"
          placeholder="Tech Stack (comma separated)"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="text"
          placeholder="GitHub Link"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />

        <br /><br />

        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default AddProject;
