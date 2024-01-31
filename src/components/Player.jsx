import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangePlayers,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangePlayers(symbol, playerName);
    }
  }

  function handleChangeName(event) {
    setPlayerName(event.target.value);
  }

  let playerNameField = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameField = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChangeName}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
