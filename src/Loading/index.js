import { useSelector } from "react-redux";
import { selectDarkTheme } from "../themeSlice";
import { LoadingInformation, StyledSpinner } from "./styled";

const Loading = () => {
    const themeIsDark = useSelector(selectDarkTheme);

    return (
        <>
            <LoadingInformation>Please wait, projects are being loaded...</LoadingInformation>
            <StyledSpinner themeIsDark={themeIsDark} />
        </>
    );
};

export default Loading;