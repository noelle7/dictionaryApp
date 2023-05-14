// import NewWindow from '../assets/images/icon-new-window.svg';


const Meanings = ({ searchedWord }) => {
    const renderedMeanings = searchedWord.meanings.map((meaning) => {
        return (
            <section className="displayMeaning" >

                {/* PART OF SPEECH */}
                <div className="displayPartOfSpeech">
                    <h3>{meaning.partOfSpeech}</h3>
                    <div className="displayLine"></div>
                </div>

                {/* DEFINITIONS */}
                <div className="displayDefinition">
                    <h4>Meaning</h4>
                    <ul>
                        {
                            meaning.definitions.map((def) => {
                                return (
                                    <li>
                                        <p>{def.definition}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                {/* SYNONYMS */}
                {
                    meaning.synonyms.length > 0 && (
                        <div className="displaySynonyms">
                            <h4>Synonyms</h4>
                            <span>{meaning.synonyms[0]}</span>
                        </div>
                    ) 
                }

            </section>
        )
    })

    return (
        <div className="displayContainer">
            {renderedMeanings}

            <div className="displaySource">
                <p className="source">Source</p>
                <a 
                    href={searchedWord.sourceUrls[0]}
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    {searchedWord.sourceUrls[0]}
                </a>
            </div>
            {/* <NewWindow /> */}
        </div>
    )
}

export default Meanings;