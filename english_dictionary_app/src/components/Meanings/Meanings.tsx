import type { Meaning } from "../../types/dictionary";

type MeaningsProps = {
  meanings: Meaning[];
};

function Meanings({ meanings }: MeaningsProps) {
  return (
    <>
      <h3>Definitions</h3>

      {meanings.map((meaning, index) => (
        <div
          key={index}
          className="definition-group"
        >
          <h4>{meaning.partOfSpeech}</h4>

          <div className="definition-card">
            <ol>
              {meaning.definitions
                .slice(0, 5)
                .map((definition, idx) => (
                  <li key={idx}>
                    {definition.definition}

                    {definition.example && (
                      <p>
                        {definition.example}
                      </p>
                    )}
                  </li>
                ))}
                             
            </ol>
          </div>
        </div>
      ))}
    </>
  );
}

export default Meanings;