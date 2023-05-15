
import Word from "./Word";
import Meanings from "./Meanings";

const Display = ({ searchedWord, errorMessage }) => {
	return (
		<div className="displayContainer">
			{
				searchedWord.meanings.length > 0 && (
					<>
						<Word searchedWord={searchedWord} />
						<Meanings  searchedWord={searchedWord} />
					</>
				)
			}

			{/* error */}
			{
				errorMessage.isError && (
				<div className="displayError">
					<h2>🫤</h2>
					<h4>
						{errorMessage.title}
					</h4>
					<p>{errorMessage.message}</p>
				</div>
				)
			}
		</div>
	);
};

export default Display;
