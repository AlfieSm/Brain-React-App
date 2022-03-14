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
        command.includes("emotions") ||
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
        command.includes("desire to eat") || 
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
          <div className="home">
          <h1><br /> Welcome to Brain React ! <br /><br /></h1>
          <p> All you have to do is ask the page "What controls my..." followed by a function of the body (e.g. breathing) to find out which of the 5 major parts of the brain is responsible for that function as well as some other really interesting facts! <br /><br /> To start you off why not try "What controls my emotions" </p>
          </div>
        </Route>
        <Route exact path="/cerebrum">
          <h1 className="text-center py-5"> The Cerebrum </h1>
          <p>The largest part of your brain is the cerebrum, its the thinking part of your brain and it controls your voluntary muscles — the ones that move when you want them to, whether thats to jump, dance or kick a football.</p>
          <p>The cerebrum has two halves, with one on either side of the head. Scientists think that the right half helps you think about abstract things like music, colors, and shapes.</p>
          <p>Whilst the left half is said to be more analytical, helping you with math, logic, and speech. Scientists do know for sure that the right half of the cerebrum controls the left side of your body, and the left half controls the right side.</p>
        </Route>
        <Route exact path="/cerebellum">
          <h1 className="text-center py-5"> The Cerebellum </h1>
          <p>The cerebellum is at the back of the brain, below the cerebrum. It's a lot smaller than the cerebrum but by no means any less important. It controls balance, movement, and coordination (how your muscles work together). <br /><br />Because of your cerebellum, you can stand upright, keep your balance, and move around. Think about a surfer riding the waves on his board. What does he need most to stay balanced? The best surfboard? The coolest wetsuit? Nope — he needs his cerebellum!</p>
        </Route>
        <Route exact path="/brainstem">
          <h1 className="text-center py-5"> The Brain Stem </h1>
          <p>Small but mighty we find the brain stem sitting just beneath the cerebrum and in front of the cerebellum. It connects the rest of the brain to the spinal cord, which runs down your neck and back. The brain stem is in charge of all the functions your body needs to stay alive, like breathing air, digesting food, and circulating blood. <br /><br />Part of the brain stem's job is to control your involuntary muscles — the ones that work automatically, without you even thinking about it. It's the brain stem that tells your heart to pump more blood when you're cycling or your stomach to start digesting after a big lunch. <br /><br />The brain stem also sorts through the millions of messages that the brain and the rest of the body send back and forth. It's a big job being the brain's secretary!</p>
        </Route>
        <Route exact path="/pituitary">
          <h1 className="text-center py-5"> The Pituitary </h1>
          <p>The pituitary gland is very small — only about the size of a pea! Its job is to produce and release hormones into your body. If your clothes from last year are too small, it's because your pituitary gland released special hormones that made you grow. <br /><br />  This gland is a big player in puberty too. This is the time when boys' and girls' bodies go through major changes as they slowly become men and women, all thanks to hormones released by the pituitary gland. <br /><br /> This little gland also plays a role with lots of other hormones, like ones that control the amount of sugars and water in your body. </p>
        </Route>
        <Route exact path="/hypothalamus">
          <h1 className="text-center py-5"> The Hypothalamus </h1>
          <p>The hypothalamus is like your brain's inner thermostat (that little box on the wall that controls the heat in your house). The hypothalamus knows what temperature your body should be (about 98.6°F or 37°C). <br /><br /> If your body is too hot, the hypothalamus tells it to sweat. If you're too cold, the hypothalamus gets you shivering. Both shivering and sweating are attempts to get your body's temperature back where it needs to be.</p>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
