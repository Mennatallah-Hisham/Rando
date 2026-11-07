const firstWordRow = ["Hello", "Ciao", "Hola", "Hallo", "Welcome", "Grazie", "Gracias", "Danke"];
const secondWordRow = ["Good morning", "Buongiorno", "Buenos días", "Guten Tag", "Please", "Per favore", "Por favor", "Bitte"];

function WordRow({ words, reverse = false }: { words: string[]; reverse?: boolean }) {
  const repeatedWords = [...words, ...words];

  return (
    <div className="word-row" aria-hidden="true">
      <div className={`word-row__track${reverse ? " word-row__track--reverse" : ""}`}>
        {repeatedWords.map((word, index) => (
          <span className={`word-pill word-pill--${index % 6}`} key={`${word}-${index}`}>{word}</span>
        ))}
      </div>
    </div>
  );
}

export function LanguagesAndLevels() {
  return (
    <section className="section" aria-labelledby="languages-title">
      <div className="container language-practice">
        <div className="language-practice__copy">
          <p className="eyebrow">Made for your next sentence</p>
          <h2 id="languages-title">Practise in the language you are learning.</h2>
          <p>
            Level recommendations can help you choose a starting point, but every activity stays open to every learner.
          </p>
        </div>
        <div className="word-rows" aria-label="Example words in the supported languages">
          <WordRow words={firstWordRow} />
          <WordRow words={secondWordRow} reverse />
        </div>
      </div>
    </section>
  );
}
