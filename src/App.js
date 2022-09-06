import Phaser, { Physics } from "phaser";
import { useState } from "react";
import Breakout from "./scene";

let game = null;

function App() {
  const [loaded, setLoaded] = useState(false)

  // put in useEffect
  if (!loaded){
    setLoaded(true)
    const config = {
      type: Phaser.AUTO,
      parent: 'phaser',
      width: 800,
      height: 600,
      fps:{
        target: 60,
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: {y: 0},
          debug: false,
        },
      },
      backgroundColor: "FFFFFF",
      scene: [Breakout]
    }

    if (game === null){
      game = new Phaser.Game(config)
    }
  }
  


  return (
    <div className="App">
    </div>
  );
}

export default App;
