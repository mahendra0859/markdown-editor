import React, { useState } from "react";
import "./styles.css";
import styled from "styled-components";
import { MarkedInput } from "./components/markdowninput";
import { Result } from "./components/result";
import EditorContext from "./editorContext";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
`;

const EditorConatiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export default function App() {
  const [markdownText, setMarkdownText] = useState("");
  const contextValue = { markdownText, setMarkdownText };

  return (
    <EditorContext.Provider value={contextValue}>
      <AppContainer>
        <Title>Markdown Editor</Title>
        <EditorConatiner>
          <MarkedInput />
          <Result />
        </EditorConatiner>
      </AppContainer>
    </EditorContext.Provider>
  );
}
