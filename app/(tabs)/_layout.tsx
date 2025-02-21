import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Header } from "react-native/Libraries/NewAppScreen";


export default function OptionsTabsLayout() { 
    return (
        <Tabs screenOptions={{
        
      }}>
            <Tabs.Screen 
            name="index"
                options={{
                    title: 'Options',
                    tabBarIcon: ({ color }) => <AntDesign name="tool" size={24} color={ color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={ color} />,
                }}
            />
        </Tabs>
    )
}