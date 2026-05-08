import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ScoreCard from "./components/ScoreCard";
import SearchBar from "./components/SearchBar";
import AddStudent from "./components/AddStudent";
import StudentTable from "./components/StudentTable";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 78 },
    { id: 2, name: "Riya", score: 45 },
    { id: 3, name: "Karan", score: 90 },
    { id: 4, name: "Neha", score: 30 },
  ]);

  const [search, setSearch] = useState("");

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const updateScore = (id, newScore) => {
    if (newScore < 0 || newScore > 100) return;

    setStudents(
      students.map((s) => (s.id === id ? { ...s, score: newScore } : s)),
    );
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="app">
      <Header />
      <div className="top-section">
        <ScoreCard students={students} />

        <div className="right-panel card">
          <SearchBar search={search} setSearch={setSearch} />
          <AddStudent addStudent={addStudent} />
        </div>
      </div>

      <StudentTable
        students={filteredStudents}
        updateScore={updateScore}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default App;
