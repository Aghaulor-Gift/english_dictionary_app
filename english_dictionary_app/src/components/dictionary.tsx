
import { useState } from "react";
import "./dictionary.css";

function Dictionary() {
  const [searched, setSearched] = useState(false);

  return (
    <div className="dictionary-container">
      <h1 className="title">English Dictionary</h1>

      <p className="subtitle">
        Search for any word and find definitions, examples, and translations
      </p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter a word"
        />

        <button onClick={() => setSearched(true)}>
          Search
        </button>
      </div>

      {
        searched && (
          <div className="result-section">

            <div className="word-header">
              <h2>Word</h2>
              <span className="audio-icon">🔊</span>
            </div>

            <p className="transcription">/transcription/</p>

            <h3>Definitions</h3>

            <div className="definition-group">
              <h4>Noun</h4>

              <div className="definition-card">
                <ol>
                  <li>
                    Meaning One
                    <p>Example use</p>
                  </li>

                  <li>
                    Meaning two
                    <p>Example use</p>
                  </li>
                </ol>
              </div>
            </div>

            <div className="definition-group">
              <h4>Adjective</h4>

              <div className="definition-card">
                <ol>
                  <li>
                    Meaning One
                    <p>Example use</p>
                  </li>

                  <li>
                    Meaning two
                    <p>Example use</p>
                  </li>
                </ol>
              </div>
            </div>

            <h4>Synonyms</h4>

            <h4>Translations</h4>

          </div>
        )
      }

    </div>
  );
}

export default Dictionary;
