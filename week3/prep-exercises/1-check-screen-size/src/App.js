import React from "react";
import { AvatarDisplay } from "./components/AvatarDisplay";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <h1>Responsive Avatar Display</h1>
      <AvatarDisplay />
    </div>
  );
}

export default App;
