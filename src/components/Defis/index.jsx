import "./defis.css";

function Defis({ defi, goal }) {
  return (
    <button className="defi">
      <h3>{defi}</h3>
      <div className="doneDefis">
        <p>0/{goal}</p>
      </div>
    </button>
  );
}

export default Defis;
