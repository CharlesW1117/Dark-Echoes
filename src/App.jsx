import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  // state variables
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  return (
    <div className="app">
      <h1>Dark Echoes Episodes</h1>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
            {episode.title}
          </li>
        ))}
      </ul>

      {selectedEpisode ? (
        <div className="details">
          <h2>{selectedEpisode.title}</h2>
          <p>{selectedEpisode.description}</p>
        </div>
      ) : (
        <p>Select an episode to see details.</p>
      )}
    </div>
  );
}
