import React from "react";
import Card from "react-bootstrap/Card";

export default function Board({ maxCompt, chronoCompt }) {
  return (
    <Card style={{ width: "15rem" }}>
      <p>Capacité: {maxCompt}</p>
      <p>Compteur de nombres: {chronoCompt} </p>
    </Card>
  );
}
