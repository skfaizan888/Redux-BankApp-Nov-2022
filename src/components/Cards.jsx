import React from "react";
import { AddCard } from "./Cards/AddCards";
import { DebitTrans } from "./Cards/DebitTrans";
import { CreditTrans } from "./Cards/CreditTrans";

export const Cards = () => {
  return (
    <React.Fragment>
      <AddCard />
      <DebitTrans />
      <CreditTrans />
    </React.Fragment>
  );
};
