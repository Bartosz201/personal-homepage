import { Image, Link, LinkText } from "./styled";
import message from "../images/message.png";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "../../../comon/themeSlice";

const EmailLink = () => {
    const themeIsDark = useSelector(selectDarkTheme);
    
    return (
        <Link
            themeIsDark={themeIsDark}
            href="mailto:bartosz.barc721@gmail.com">
            <Image src={message} />
            <LinkText>Hire Me</LinkText>
        </Link>
    );
};

export default EmailLink;