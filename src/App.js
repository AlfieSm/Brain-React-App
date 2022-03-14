import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Navbar from "./components/Navbar";
import { recognition } from "./API/voicerecognition";
import "./style.css";

const App = () => {
  const history = useHistory();
  const [stopReco, setStopReco] = useState(false);

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript;

    if (command.includes("what controls my") || command.includes("navigate to")) {
      if (command.includes("home") || command.includes("index")) {
        history.push("/");
      } else if (
        command.includes("cerebrum") ||
        command.includes("emotion") ||
        command.includes("senses") ||
        command.includes("personality") ||
        command.includes("learning") ||
        command.includes("language") ||
        command.includes("imagination") ||
        command.includes("creativity")

      ) {
        history.push("/cerebrum");
      } 
      
        else if (
        command.includes("cerebellum") ||
        command.includes("balance") ||
        command.includes("movement") ||
        command.includes("seeing") ||
        command.includes("motor learning")

      ) {
        history.push("/cerebellum");
      } 

        else if (
        command.includes("brainstem") || 
        command.includes("digestion") || 
        command.includes("circulation") || 
        command.includes("involuntary actions") || 
        command.includes("breathing") || 
        command.includes("heart")
        
      )
        {
        history.push("/brainstem");
      }

        else if (
        command.includes("pituitary") || 
        command.includes("growth") || 
        command.includes("hormones") || 
        command.includes("blood pressure") || 
        command.includes("metabolism") || 
        command.includes("puberty"))
        
        {
        history.push("/pituitary");
      }
      
      else if (
        command.includes("hypothalamus") || 
        command.includes("hunger") || 
        command.includes("first") || 
        command.includes("weight") || 
        command.includes("circadian rhythm") || 
        command.includes("body temperature"))
        
        {
        history.push("/hypothalamus");
      }

    } else if (
      command.includes("stop listening") ||
      command.includes("stop recognition") ||
      command.includes("stop recognizing") ||
      command.includes("stop voice controlling") ||
      command.includes("stop voice control")
    ) {
      recognition.stop();
      setStopReco(true);
    }
  };

  recognition.onend = () => {
    if (!stopReco) {
      recognition.start();
    }
  };

  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <h1 className="text-center py-5"> This is the Home Page </h1>
          <div style={{paddingTop: '2em'}}>
      		<p>Eh up, me duck!</p>
      	</div>
        </Route>
        <Route exact path="/cerebrum">
          <h1 className="text-center py-5"> This is the Cerebrum Page </h1>
        </Route>
        <Route exact path="/cerebellum">
          <h1 className="text-center py-5"> This is the Cerebellum Page </h1>
        </Route>
        <Route exact path="/brainstem">
          <h1 className="text-center py-5"> This is the Brain Stem Page </h1>
        </Route>
        <Route exact path="/pituitary">
          <h1 className="text-center py-5"> This is the Pituitary Page </h1>
        </Route>
        <Route exact path="/hypothalamus">
          <h1 className="text-center py-5"> This is the Hypothalamus Page </h1>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
