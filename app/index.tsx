import { Link } from "expo-router";
import { Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default  function MainScreen() {
    return (
        <SafeAreaView>
            <Text>This is the main screen</Text>
            <Link href="/(tabs)">View details</Link>
        </SafeAreaView>
    )
}