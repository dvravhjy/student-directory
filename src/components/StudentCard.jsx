import styles from './StudentCard.module.css';

export default function StudentCard({ student }) {
  const isProbation = student.status === "On Probation";
  const isDeanLister = student.gwa <= 1.75;

  return (
    <div className={`${styles.card} ${isProbation ? styles.probation : ''}`}>
      <h2>{student.name}</h2>

      <p><strong>Course:</strong> {student.course}</p>

      <p><strong>Year Level:</strong> {student.yearLevel}</p>

      <p>
        <strong>Status:</strong>{" "}
        {isProbation ? "On Probation" : student.status}
      </p>

      <p><strong>GWA:</strong> {student.gwa.toFixed(2)}</p>

      {isDeanLister && (
        <span className={styles.badge}>
          Dean's Lister
        </span>
      )}
    </div>
  );
}