import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Projects</h1>

      <Link to="/add-project">
        <button>+ Add Project</button>
      </Link>

      {projects.length === 0 && <p>No projects found</p>}

      {projects.map((p) => (
        <div key={p._id} style={{ marginTop: "20px" }}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <p><b>Tech:</b> {p.techStack.join(", ")}</p>
          <a href={p.github} target="_blank">GitHub</a>

          <br />
          <button
            onClick={() =>
              axios
                .delete(`http://localhost:5000/api/projects/${p._id}`)
                .then(() =>
                  setProjects(projects.filter(x => x._id !== p._id))
                )
            }
          >
            ❌ Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Projects;
