import React from "react";
import { useParams } from "react-router-dom";

function Ticket() {
  const { id } = useParams();
  return <div>Ticket Page {id}</div>;
}

export default Ticket;
