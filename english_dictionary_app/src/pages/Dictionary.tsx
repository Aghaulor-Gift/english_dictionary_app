import { useDictionary } from "../hooks/useDictionary";

import "./Dictionary.css";

import Search from "../components/Search/Search";
import Word from "../components/Word/Word";
import Meanings from "../components/Meanings/Meanings";
import Synonyms from "../components/Synonyms/Synonyms";
import Antonyms from "../components/Antonyms/Antonyms";
import Translations from "../components/Translations/Translations";

function Dictionary() {
  const {
    wordData,
    loading,
    error,
    searchWord,
  } = useDictionary();

  return (
    <div className="dictionary-container">
      <h1 className="title">
        English Dictionary
      </h1>

      <p className="subtitle">
        Search for any word and find definitions,
        examples, and translations
      </p>

      <Search onSearch={searchWord} />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {wordData && (
        <div className="result-section">
          <Word
            word={wordData.word}
            phonetic={wordData.phonetics[0]?.text || ""}
            audio={
                wordData.phonetics.find(
                (p) => p.audio
                )?.audio || ""
            }
            />

          <Meanings meanings={wordData.meanings} />

          <Synonyms />

          <Antonyms />

          <Translations />
        </div>
      )}
    </div>
  );
}

export default Dictionary;