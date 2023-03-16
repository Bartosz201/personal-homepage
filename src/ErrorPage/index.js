import { useSelector } from "react-redux";
import { selectDarkTheme } from "../themeSlice";
import { Header, Information, Link, StyledDanger, Wraper } from "./styled";

const ErrorPage = () => {
    const themeIsDark = useSelector(selectDarkTheme);

    return (
        <Wraper>
            <StyledDanger themeIsDark={themeIsDark} />
            <Header themeIsDark={themeIsDark}>Ooops! Something went wrong... </Header>
            <Information>
                Sorry, failed to load Github projects.<br />
                You can check them directly on Github.
            </Information>
            <Link
                themeIsDark={themeIsDark}
                target="_blank" rel="noreferrer noopener"
                href="https://github.com/Bartosz201"
            >
                Go to Github
            </Link>
        </Wraper>
    );
};

export default ErrorPage;