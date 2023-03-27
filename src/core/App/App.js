import { useSelector } from "react-redux";
import GlobalStyle from "./globalStyles";
import PersonalHomepage from "../../features/personal-homepage/PersonalHomepage";
import { selectDarkTheme } from "../../comon/themeSlice";

const App = () => {
    const themeIsDark = useSelector(selectDarkTheme)
    return (<>
        <GlobalStyle themeIsDark={themeIsDark} />
        <PersonalHomepage />
    </>
    );
};

export default App;