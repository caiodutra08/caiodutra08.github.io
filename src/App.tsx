import React from "react";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { Stacks } from "./components/Stacks";

interface Props {};

export default function App({}: Props) {
  return (
    <div className="bg-gradient-to-t from-slate-500 to-slate-600">
      <Header />
      <AboutMe />
      <Stacks />
    </div>
  );
}
