import StudentRow from "./StudentRow";

function StudentTable({ students, updateScore, deleteStudent }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {students.length === 0 ? (
          <tr>
            <td colSpan="4">No students found</td>
          </tr>
        ) : (
          students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              updateScore={updateScore}
              deleteStudent={deleteStudent}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

export default StudentTable;
