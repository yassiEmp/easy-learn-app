"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const ChangeMode = () => {
  const [mode, setModeC] = useState("apprentissage");
  useEffect(() => {
    const devoir = document.querySelectorAll(".devoir");
    const apprentissage = document.querySelectorAll(".apprentissage");
    apprentissage.forEach((el) => {
      (el as HTMLElement).style.display =
        mode === "apprentissage" ? "block" : "none";
    });
    devoir.forEach((el) => {
      (el as HTMLElement).style.display = mode === "devoir" ? "block" : "none";
    });
  }, [mode]);
  return (
    <div>
      <h2 className="text-2xl">Activer le :</h2>
      <Button
        onClick={() =>
          setModeC(mode === "apprentissage" ? "devoir" : "apprentissage")
        }
      >
        {mode === "apprentissage" ? "Mode devoir" : "Mode apprentissage"}
      </Button>
    </div>
  );
};

export default ChangeMode;
