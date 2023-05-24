import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

// components
import EntryMessage from "./components/EntryMessage";
import ChatBody from "./components/ChatBody";

function App() {
	const [showMainMessage, setShowMainMessage] = useState(true);

	return (
		<>
			{showMainMessage && <EntryMessage setShowMainMessage={setShowMainMessage} />}

			{!showMainMessage && <ChatBody setShowMainMessage={setShowMainMessage} />}
		</>
	);
}

export default App;
