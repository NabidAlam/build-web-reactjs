import React from "react";
import ContactCard from "./ContactCard";
import Joke from "./Joke";

function App() {
  return (
    <div>
      <Joke
        question="What's the best thing about Switzerland?"
        punchLine="I don't know, but the flag is a big plus!"
      />
      <Joke
        question="What's the best thing about ereeeeeeeeeeee?"
        punchLine="I don't know, but the flag is a big jjjjjjjjjj!"
      />
      <Joke
        question="What's the best thing about gggggggggg?"
        punchLine="I don't know, but the flag is a big ffffffffff!"
      />
      <Joke
        question="What's the best thing about ddddddddddddd?"
        punchLine="I don't know, but the flag is a big sssssssssss!"
      />
      <Joke
        question="What's the best thing about hhhhhhhhhhhhh?"
        punchLine="I don't know, but the flag is a big bbbbbbbbb!"
      />
    </div>
  );
}

export default App;
