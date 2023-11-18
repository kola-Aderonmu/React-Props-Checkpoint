import PlayersList from "./components/PlayerList";
import "./App.css"
function App() {
  return (
    <>
      <div>
        <div className="marqeee">
          <marquee behavior="scroll" direction="left">
            Players of the Year
          </marquee>
        </div>

        <PlayersList />
      </div>
    </>
  );
}

export default App;
