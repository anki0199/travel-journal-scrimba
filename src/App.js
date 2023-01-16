import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";
import "./App.css";

export default function App() {
  document.title = "Travel-Journal";
  const cards = data.map((item) => {
    return <Card key={item.title} {...item} />;
  });

  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
