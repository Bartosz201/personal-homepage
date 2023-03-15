import { useSelector } from "react-redux";
import { selectDarkTheme } from "../themeSlice";
import { Header, List, ListItem, Wraper } from "./styled";

const Article = ({ title, listItems }) => {
    const themeIsDark = useSelector(selectDarkTheme);
    
    return (
        <Wraper themeIsDark={themeIsDark}>
            <Header themeIsDark={themeIsDark}>
                {title}
            </Header>
            <List>
                {listItems.map(content => (
                    <ListItem
                        themeIsDark={themeIsDark}
                        key={content}>
                        {content}
                    </ListItem>
                ))}
            </List>
        </Wraper>
    );
};

export default Article;