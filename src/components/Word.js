


const Word = ({ searchedWord }) => {
    return (
        <div className="displayWord">
            <h1>{searchedWord.word}</h1>

            {/* PHONETIC */}
            {
                searchedWord.phonetics.length > 0 && (
                    <h2 className="phonetic">{searchedWord.phonetics[0].text}</h2>
                )
            }
            
        </div>
    )
}

export default Word;