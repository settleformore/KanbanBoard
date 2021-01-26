import "./styles.css";
import PendingColumn from "./components/Pending";

export default function App() {
  return (
    <div className="App">
      <div className="grid">
        <PendingColumn className="col" title={"Pending"} />
        {/* <Column className="col" title={"In Progress"} /> */}
        {/* <Column className="col" title={"Completed"} /> */}
      </div>
    </div>
  );
}
