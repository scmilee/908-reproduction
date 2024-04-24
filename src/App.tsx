import React, { useRef } from "react";
import logo from "./logo.svg";
import {
  ComponentValuesType,
  VideoViewer,
} from "@adept-at/lib-react-components";
import "./App.css";

function App() {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <VideoViewer
          videoRef={ref}
          componentValues={{
            addedAt: "2020-12-17T00:44:23.174Z",
            encodingId: null,
            encodingProvider: null,
            encodingStatus: null,
            muxKey: "a80c55a7-d852-4756-89f5-4184f189b45f",
            order: 300,
            playbackUrl:
              "https://stream.mux.com/01b2r4H6Pg8Q01NJZGppCu6X6tmfP6f6Jtp5oFZaETUwU.m3u8?redundant_streams=true",
            title: null,
            updatedAt: "2020-12-17T00:45:52.474Z",
            uploadedFileName: "recording uploaded",
            videoId: "1031e6e9-b85c-473b-beaf-1223761b1971",
            type: ComponentValuesType.Video,
          }}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
