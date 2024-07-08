import "./success.css";
export default function SendSuccess({ setSuccess }) {
  return (
    <div className="divModal">
      <div className="modal-content">
        <div className="modal-body" style={{ textAlign: "center" }}>
          <h3>Register Success!</h3>
          <button className="btn btn-primary" onClick={() => setSuccess(false)}>Close</button>
        </div>
      </div>
    </div>
  );
}
