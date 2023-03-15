import { useDispatch, useSelector } from "react-redux";
import { ImportantText } from "../ImportantText";
import { selectDarkTheme, toggleTheme } from "../themeSlice";
import { Button, StyledBrightness, SwitchIcon, Wraper } from "./styled";

const ModeSwitch = () => {
    const themeIsDark = useSelector(selectDarkTheme);
    const dispatch = useDispatch();

    return (
        <Wraper>
            <ImportantText>DARK MODE OFF</ImportantText>
            <Button
                themeIsDark={themeIsDark}
                onClick={() => dispatch(toggleTheme())}>
                <SwitchIcon themeIsDark={themeIsDark}>
                    <StyledBrightness themeIsDark={themeIsDark} />
                </SwitchIcon>
            </Button>
        </Wraper>
    );
};

export default ModeSwitch;