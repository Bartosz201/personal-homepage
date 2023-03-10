import { Image, Link, LinkText } from "./styled";
import message from "../images/message.png";


const EmailLink = () => {
    return (
        <Link href="mailto:bartosz.barc721@gmail.com">
            <Image src={message} />
            <LinkText>Hire Me</LinkText>
        </Link>
    );
};

export default EmailLink;