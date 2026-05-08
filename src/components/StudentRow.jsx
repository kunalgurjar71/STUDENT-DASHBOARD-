function StudentRow({ student, updateScore, deleteStudent }) {
  const isPass = student.score >= 50;

  return (
    <tr className={student.score > 85 ? "topper" : ""}>
      <td>{student.name}</td>
      <td>{student.score}</td>

      <td className={isPass ? "pass" : "fail"}>{isPass ? "Pass" : "Fail"}</td>

      <td>
        <button
          className="btn-green"
          onClick={() => updateScore(student.id, student.score + 5)}
        >
          +5
        </button>

        <button
          className="btn-yellow"
          onClick={() => updateScore(student.id, student.score - 5)}
        >
          -5
        </button>

        <button className="btn-red" onClick={() => deleteStudent(student.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;
