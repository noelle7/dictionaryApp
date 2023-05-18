
import playIcon from '../assets/images/icon-play.svg'

const Word = ({ searchedWord }) => {

    const handlePlayButtonClick = () => {
        const word = new Audio (searchedWord.phonetics[0].audio)

        word.play()
    }

    return (
        <div className="displayWord">
            <h1>{searchedWord.word}</h1>
            
            {/* PHONETIC */}
            <h2 className="phonetic">{searchedWord.phonetics[0].text}</h2>

            {/* AUDIO */}
            {
                searchedWord.phonetics[0].audio !== '' && (
                <button className='button' onClick={handlePlayButtonClick}>
                    <img src={playIcon} className="playIcon" alt="Play audio button" />
                </button>
            )}
        </div>
    )
}


export default Word;