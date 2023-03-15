import { useSelector } from "react-redux";
import GlobalStyle from "./globalStyles";
import PersonalHomepage from "./PersonalHomepage";
import { selectDarkTheme } from "./themeSlice";

const App = () => {
    const themeIsDark = useSelector(selectDarkTheme)
    return (<>
        <GlobalStyle themeIsDark={themeIsDark} />
        <PersonalHomepage />
    </>
    );
};

export default App;