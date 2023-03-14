import { useDispatch, useSelector } from "react-redux";
import { ImportantText } from "../ImportantText";
import { selectDarkTheme, toggleTheme } from "../themeSlice";
import { Button, StyledBrightness, SwitchIcon, Wraper } from "./styled";



const ModeSwitch = () => {
    const darkTheme = useSelector(selectDarkTheme)
    const dispatch = useDispatch();
    
    return (
        <Wraper>
            <ImportantText>DARK MODE OFF</ImportantText>
            <Button onClick={() => dispatch(toggleTheme())}>
                <SwitchIcon>
                    <StyledBrightness/>
                </SwitchIcon>
            </Button>
        </Wraper>
    )
};

export default ModeSwitch;