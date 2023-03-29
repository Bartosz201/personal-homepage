import { Image, Paragraph, StyledH1, StyledHeader, } from "./styled";
import myImage from "../images/Bartosz.jpg"
import { ImportantText } from "../ImportantText";
import EmailLink from "../EmailLink";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "../../../comon/themeSlice";

const Header = () => {
    const themeIsDark = useSelector(selectDarkTheme);

    return (
        <StyledHeader>
            <Image src={myImage} alt="" />
                <div>
                <ImportantText>THIS IS</ImportantText>
                <StyledH1 themeIsDark={themeIsDark}>Bartosz Barć</StyledH1>
                <Paragraph>
                    I'm a starting front end developer. I'm searching for a job as a junior front-end developer, where I will have the opportunity to develop and gain professional experience.
                </Paragraph>
                <EmailLink />
                </div>
        </StyledHeader>
    );
};

export default Header;