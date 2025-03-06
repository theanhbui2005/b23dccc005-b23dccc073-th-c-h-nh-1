import React, { useState } from "react";
import "./Game.css";

type Choice = "Kéo" | "Búa" | "Bao";

type Result = "Thắng" | "Thua" | "Hòa";

const images: Record<Choice, string> = {
  Kéo: "https://www.phanxuanchanh.com/wp-content/uploads/2022/02/Keo.png",
  Búa: "https://www.phanxuanchanh.com/wp-content/uploads/2022/02/Bua.png",
  Bao: "https://i0.wp.com/www.phanxuanchanh.com/wp-content/uploads/2022/02/Bao.png?ssl=1",
};

const Game: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const generateComputerChoice = (): Choice => {
    const choices: Choice[] = ["Kéo", "Búa", "Bao"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (player: Choice, computer: Choice): Result => {
    if (player === computer) return "Hòa";

    if (
      (player === "Kéo" && computer === "Bao") ||
      (player === "Búa" && computer === "Kéo") ||
      (player === "Bao" && computer === "Búa")
    ) {
      return "Thắng";
    }

    return "Thua";
  };

  const handlePlayerChoice = (choice: Choice) => {
    const computer = generateComputerChoice();
    const gameResult = determineWinner(choice, computer);

    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(gameResult);

    setHistory((prev) => [...prev, `Bạn: ${choice} | Máy: ${computer} | Kết quả: ${gameResult}`]);
  };

  return (
    <div>
      <h1>Trò chơi Oẳn Tù Tì</h1>
      <div>
        {(["Kéo", "Búa", "Bao"] as Choice[]).map((choice) => (
          <button key={choice} onClick={() => handlePlayerChoice(choice)}>
            <img src={images[choice]} alt={choice} width="100" />
          </button>
        ))}
      </div>

      {playerChoice && computerChoice && (
        <div>
          <p>Bạn chọn:</p>
          <img src={images[playerChoice]} alt={playerChoice} width="100" />
          <p>Máy chọn:</p>
          <img src={images[computerChoice]} alt={computerChoice} width="100" />
          <p>Kết quả: {result}</p>
        </div>
      )}

      <h2>Lịch sử</h2>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
