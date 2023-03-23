import { useDispatch, useSelector } from "react-redux";
import { selectDarkTheme, toggleTheme } from "../themeSlice";
import { Button, StyledBrightness, SwitchIcon, Text, Wraper } from "./styled";

const ModeSwitch = () => {
    const themeIsDark = useSelector(selectDarkTheme);
    const dispatch = useDispatch();

    return (
        <Wraper>
            <Text>DARK MODE OFF</Text>
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