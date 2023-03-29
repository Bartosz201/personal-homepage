import { useSelector } from "react-redux";
import { selectDarkTheme } from "../../../comon/themeSlice";
import { ImportantText } from "../ImportantText";
import { Content, Link, MailLink, SocialMedia, StyledFooter, StyledGithubIcon, StyledLinkedINIcon } from "./styled";

const Footer = () => {
    const themeIsDark = useSelector(selectDarkTheme);

    return (
        <StyledFooter>
            <ImportantText>Let's talk!</ImportantText>
            <MailLink
                href="mailto:bartosz.barc721@gmail.com"
                themeIsDark={themeIsDark}
            >
                bartosz.barc721@gmail.com
            </MailLink>
            <Content>
                I'm always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me
            </Content>
            <SocialMedia>
                <Link
                    themeIsDark={themeIsDark}
                    target="_blank" rel="noreferrer noopener"
                    href="https://github.com/Bartosz201"
                >
                    <StyledGithubIcon />
                </Link>
                <Link
                    themeIsDark={themeIsDark}
                    target="_blank" rel="noreferrer noopener"
                    href="https://www.linkedin.com/in/bartoszbarc"
                >
                    <StyledLinkedINIcon />
                </Link>
            </SocialMedia>
        </StyledFooter>
    );
};

export default Footer;