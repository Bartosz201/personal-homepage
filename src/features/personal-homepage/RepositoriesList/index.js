import { useSelector } from "react-redux";
import { selectDarkTheme } from "../../../comon/themeSlice";
import { selectRepositories } from "../repoSlice";
import { Description, Header, Link, LinkWraper, List, ListItem } from "./styled";


const RepositoriesList = () => {
    const repositories = useSelector(selectRepositories);
    const themeIsDark = useSelector(selectDarkTheme);

    return (
        <List>
            {repositories.map(repository => (
                <ListItem key={repository.id} themeIsDark={themeIsDark}>
                    <Header themeIsDark={themeIsDark}>{repository.name}</Header>
                    {repository.description && <Description>{repository.description}</Description>}
                    <LinkWraper>
                        {repository.homepage &&
                            <>
                                <div>Demo:</div>
                                <Link
                                    target="_blank" rel="noreferrer noopener"
                                    href={repository.homepage}
                                    themeIsDark={themeIsDark}
                                >
                                    {repository.homepage}
                                </Link>
                            </>}
                        {repository.svn_url &&
                            <>
                                <div>Repo:</div>
                                <Link
                                    target="_blank" rel="noreferrer noopener"
                                    href={repository.svn_url}
                                    themeIsDark={themeIsDark}
                                >
                                    {repository.svn_url}
                                </Link>
                            </>}
                    </LinkWraper>
                </ListItem>
            ))}
        </List>
    );
};

export default RepositoriesList;