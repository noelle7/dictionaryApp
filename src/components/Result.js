const Result = ({ word, phonetic, filteredData }) => {

	// console.log(filteredData);

	return filteredData ? (
		<section className="results">
			<h1 className="word">{word}</h1>

			<h2 className="phonetic">{phonetic}</h2>

			{
				filteredData.map((filteredMeaning, index) => (
					<div className="partOfSpeech" key={index}>
					<h3>{filteredMeaning.partOfSpeech}</h3>

					{filteredMeaning.definitions.map(
						(filteredDefinition, index) => (
							<div className="definitions" key={index}>
								<ul>
									<li>{filteredDefinition.definition}</li>
								</ul>

								{filteredDefinition.synonyms && (
									<p className="synonym">
										Synonyms:{" "}
										{filteredDefinition.synonyms.map(
											(synonym, index) => (
												<span key={index}>
													{synonym}
													{
														index 
														!== filteredDefinition.synonyms.length - 1
														? ", "
														: ""
													}
												</span>
											)
										)}
									</p>
								)}
								{/* {filteredDefinition.examples && (
                <p>
                  Examples: {filteredDefinition.examples.map((example, index) => (
                    <span key={index}>{example}{index !== filteredDefinition.examples.length - 1 ? ', ' : ''}</span>
                  ))}
                </p>
              )} */}
							</div>
						)
					)}
				</div>
			))}
			{/* <p className="definition">{wordDefinitions}</p> */}
		</section>
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
	);
};

export default Result;
