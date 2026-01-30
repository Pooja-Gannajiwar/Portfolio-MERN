import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/profile")
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{profile.name}</h1>
      <p>{profile.bio}</p>

      <h3>Skills</h3>
      <ul>
        {profile.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
