import { useState } from "react";

function AddStudent({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !score) return;

    addStudent(name, score);
    setName("");
    setScore("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-column">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="score-row">
        <input
          type="number"
          placeholder="Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />

        <button className="btn-add">Add</button>
      </div>
    </form>
  );
}

export default AddStudent;
