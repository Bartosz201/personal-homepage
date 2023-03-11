import { ImportantText } from "../ImportantText";
import { Button, SwitchIcon, Wraper } from "./styled";
import { ReactComponent as Brightness } from "../images/brightness.svg"


const ModeSwitch = () => {
    return (
        <Wraper>
            <ImportantText>DARK MODE OFF</ImportantText>
            <Button>
                <SwitchIcon>
                    <Brightness/>
                </SwitchIcon>
            </Button>
        </Wraper>
    )
};

export default ModeSwitch;