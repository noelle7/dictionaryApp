
const Result = ({wordDefinitions}) => {
    return wordDefinitions ? (
        <div className="results">
            <h1 className="word">{wordDefinitions}</h1>
            <p className="definition">{wordDefinitions}</p>
        </div>
    ) : (

        <p>Search a word</p>

        // { 
        //     error 
        //     ? <p> Please try searching again</p> 
        //     : null
        // }
        // <div className="unknownWordContainer">
        //     <h3>🫤</h3>
        //     <h3>No Definitions Found</h3>
        //     <p className="unknownWordMessage">Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at a later time or head to the web instead.</p>
        // </div>
    )
}

export default Result;