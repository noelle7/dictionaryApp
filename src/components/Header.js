import logo from '../assets/images/logo.svg'
import moonIcon from '../assets/images/icon-moon.svg'
import arrowIcon from '../assets/images/icon-arrow-down.svg'

const Header = ({ font, setFont, theme, setTheme}) => {

    const handleClick = () => {
        if (theme === 'lite') {
            setTheme('dark')
        } else {
            setTheme('lite')
        }
    }

	return (
		<header>
            <img src={logo} className="appLogo" alt="dictionary app logo" />


            <div className='theme'>
                <button className='buttonTheme' onClick={() => handleClick()}>
                    <div className={`themeSwitch ${theme}`}></div>
                </button>

                <img src={moonIcon} className="moonIcon" alt="dark theme moon icon" />
            </div>

		</header>
	);
};

export default Header;
