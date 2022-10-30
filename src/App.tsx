import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useAccount, Web3Modal } from "@web3modal/react";
import type { ConfigOptions } from "@web3modal/core";
import Home from "./pages/Home";
import NotLog from "./pages/NotLog";
import Playgound from "./pages/Playgound";

const config: ConfigOptions = {
  projectId: `${import.meta.env.VITE_WALLECT_CONNECT_PROJECT_ID}`,
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: "errors-on-ipfs, ETHLisbon22 entry",
  },
};

function App() {
  const { account, isReady } = useAccount();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Playgound" element={<Playgound />} />
        <Route path="notlog" element={<NotLog />} />
      </Routes>
      <Web3Modal config={config} />
    </>
  );
}

export default App;
