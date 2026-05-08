function ScoreCard({ students }) {
  const total = students.reduce((sum, s) => sum + s.score, 0);
  const avg = (total / students.length || 0).toFixed(2);
  const pass = students.filter((s) => s.score >= 50).length;

  return (
    <div className="card score-card">
      <h2>Summary</h2>
      <p>Total Students: {students.length}</p>
      <p>Average Score: {avg}</p>
      <p>Passed: {pass}</p>
    </div>
  );
}
export default ScoreCard;
