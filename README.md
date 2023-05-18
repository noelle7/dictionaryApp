
# Dictionary web app

Integrate with the Dictionary API to create a real-world dictionary web app.

*** Goals ***

Users should be able to:

- Search for words using the input field
- See the Free Dictionary API's response for the searched word
- See a form validation message when trying to submit a blank form
- Responsive design for different screen sizes
- See hover and focus states for all interactive elements on the page

**Stretch Goals**: 
- Switch between light and dark themes
- Switch between different font family
- Have the correct color scheme chosen for them based on their computer preferences.
 _Hint_: Research `prefers-color-scheme` in CSS.
- Play the audio file for a word when it's available
- A landing page with a welcome message


## Pseudo code 

*** App Component ***

// Render the application
    // - header
    // - form with user input to search word
    // - use the imported Result component
    // - footer

*** Form Component ***

// Create state items to hold data coming from the third-party API and the user input
    // - selectedWord
    // - userQuery

// A local method (getWord) to make the third-party API call with or without user input
    // - when successful, update the state (setSelectedWord) with new data
    // - if unsuccessful, display the error message

// A local method (handleChange) to handle the onChange event to update state (userQuery) with user input

// upon form submission, make an AJAX request to retrieve third-party data based on user's input

// Render the Result component to display the definition of the selected word

*** Result Component ***

// This component will get data (word) passed in as props

// Use .map() to render out the definition of selected word

// A local method (handleClick) to handle the onClick event for the audio button to play the pronunciation of the selected word