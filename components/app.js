import React from "react";

import Emoji from "./emoji";
import emojipedia from "./emojipedia";

function createEntry(emojitem){
  return <Emoji
    key = {emojitem.id}
    emoji = {emojitem.emoji}
    name ={emojitem.name}
    description = {emojitem.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
