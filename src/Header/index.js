import { Image, Paragraph, StyledH1, StyledHeader, Wraper } from "./styled";
import exampleImage from "../images/exampleImage.jpg"
import ModeSwitch from "../ModeSwitch";
import { ImportantText } from "../ImportantText";
import EmailLink from "../EmailLink";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "../themeSlice";

const Header = () => {
    const themeIsDark = useSelector(selectDarkTheme);

    return (
        <StyledHeader>
            <Image src={exampleImage} alt="" />
            <Wraper>
                <ModeSwitch />
                <ImportantText>THIS IS</ImportantText>
                <StyledH1 themeIsDark={themeIsDark}>Bartosz Barć</StyledH1>
                <Paragraph>
                    I'm a starting front end developer. I am searching for a job as a junior front-end developer, where I will have the opportunity to develop and gain professional experience.
                </Paragraph>
                <EmailLink />
            </Wraper>
        </StyledHeader>
    );
};

export default Header;