import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkTheme } from "../../../comon/themeSlice";
import ErrorPage from "../ErrorPage";
import Loading from "../Loading";
import RepositoriesList from "../RepositoriesList";
import { selectStatus, setStatusLoadin } from "../repoSlice";
import { Header, StyledIcon, SubHeader, Wraper } from "./styled";

const Portfolio = () => {
    const themeIsDark = useSelector(selectDarkTheme);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setStatusLoadin())
    }, [dispatch])

    return (
        <Wraper>
            <StyledIcon themeIsDark={themeIsDark} />
            <Header themeIsDark={themeIsDark}>Portfolio</Header>
            <SubHeader>My recent projects</SubHeader>
            {status === "loading" ?
                <Loading /> :
                status === "success" ?
                    <RepositoriesList /> :
                    <ErrorPage />}
        </Wraper>
    );
};

export default Portfolio;