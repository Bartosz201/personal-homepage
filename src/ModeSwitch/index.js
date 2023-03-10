import { ImportantText } from "../ImportantText";
import { Button, Image, SwitchIcon, Wraper } from "./styled";
import brightness from "../images/brightness.png"


const ModeSwitch = () => {
    return (
        <Wraper>
            <ImportantText>DARK MODE OFF</ImportantText>
            <Button>
                <SwitchIcon>
                    <Image src={brightness}/>
                </SwitchIcon>
            </Button>
        </Wraper>
    )
};

export default ModeSwitch;