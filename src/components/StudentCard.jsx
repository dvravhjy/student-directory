import styles from "./StudentCard.module.css";

export default function StudentCard({ student }) {
  const isDeansLister = student.gwa <= 1.75;
  const isOnProbation = student.status === "On Probation";

  return (
    <div className={`${styles.card} ${isOnProbation ? styles.probation : ""}`}>
      <h2>{student.name}</h2>

      <p>
        <strong>Course:</strong> {student.course}
      </p>

      <p>
        <strong>Year Level:</strong> {student.yearLevel}
      </p>

      <p>
        <strong>Status:</strong> {student.status}
      </p>

      <p>
        <strong>GWA:</strong> {student.gwa.toFixed(2)}
      </p>

      {isDeansLister && <span className={styles.badge}>Dean's Lister</span>}
    </div>
  );
}
