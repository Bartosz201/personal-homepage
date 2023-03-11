
import { Header, List, ListItem, Wraper } from "./styled"


const Article = ({ title, listItems }) => {
    return (
        <Wraper>
            <Header>{title}</Header>
            <List>
                {listItems.map(content => (
                    <ListItem key={content}>{content}</ListItem>
                ))}
            </List>
        </Wraper>
    );
};

export default Article;