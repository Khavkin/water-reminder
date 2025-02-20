import { Link } from "expo-router";
import { Text, View } from "react-native";

export default  function MainScreen() {
    return (
        <View>
            <Text>This is the main screen</Text>
            <Link href="/(tabs)">View details</Link>
        </View>
    )
}