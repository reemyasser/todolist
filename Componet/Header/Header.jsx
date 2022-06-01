import { View ,Text} from "react-native";
import {style}from "./HeaderCSS"

export default function Header() {

    return (
        <View style={style.veiw}> 
            <Text style={style.text}>
                Home
            </Text>
        </View>
    )
}