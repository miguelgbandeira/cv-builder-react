import "../styles/Field.css";
export default function Field({ label, handleChange }) {
  return (
    <label className="section-input-field">
      {label}{" "}
      <input className="text-input" value={label} onChange={handleChange} />
    </label>
  );
}
