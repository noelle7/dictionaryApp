import sourceIcon from '../assets/images/icon-new-window.svg';
// import { v4 as uuid } from 'uuid';


const Meanings = ({ searchedWord}) => {
    const renderedMeanings = searchedWord.meanings.map((meaning, index) => {
        console.log(meaning);

        return (
            <section className="displayMeaning" key={index} >

                {/* PART OF SPEECH */}
                <div className="displayPartOfSpeech">
                    <h3 className="partOfSpeech">{meaning.partOfSpeech}</h3>
                    <div className="displayLine"></div>
                </div>

                {/* DEFINITIONS */}
                <div className="displayDefinition" >
                    <h4>Meaning</h4>
                    <ul>
                        {
                            meaning.definitions.map((def, index) => {
                                return (
                                    <li key={index}>
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
                            <span className="synonym">{meaning.synonyms[0]}</span>
                        </div>
                    ) 
                }

            </section>
        )
    })

    return (
        <div className="displayContainer">
            
            {renderedMeanings}

            {/* source */}
            <div className="displayLineSource"></div>
            <div className="displaySource">
                <p className="source">Source</p>
                <a 
                    href={searchedWord.sourceUrls[0]}
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    {searchedWord.sourceUrls[0]}
                </a>
                <img src={sourceIcon} className="sourceIcon" alt="new window icon" />
            </div>
        </div>
    )
}

export default Meanings;