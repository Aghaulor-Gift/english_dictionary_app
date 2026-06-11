type WordProps = {
  word: string;
  phonetic: string;
  audio: string;
};

function Word({
  word,
  phonetic,
  audio,
}: WordProps) {

  const playAudio = () => {
    if (!audio) return;

    new Audio(audio).play();
  };

  return (
    <>
      <div className="word-header">

        <h2>{word}</h2>

        {audio && (
          <button
            className="audio-icon"
            onClick={playAudio}
          >
            🔊
          </button>
        )}

      </div>

      <p className="transcription">
        {phonetic}
      </p>
    </>
  );
}

export default Word;