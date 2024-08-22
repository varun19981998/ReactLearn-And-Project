import "./App.css";
import ClockHeading from "./componets/ClockHeading";
import ClockSlogon from "./componets/ClockSlogon";
import ClockTime from "./componets/ClockTime";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <center>
        <ClockHeading></ClockHeading>
        <ClockSlogon></ClockSlogon>
        <ClockTime></ClockTime>
      </center>
    </div>
  );
}
export default App;
