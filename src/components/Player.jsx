export default function Player({ name, synbol }) {
  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{synbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}
