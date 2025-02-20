import { Tabs } from "expo-router";


export default function OptionsTabsLayout() { 
    return (
        <Tabs>
            <Tabs.Screen 
            name="index"
                options={{
                    title: 'Options',
                 // tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                     // tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
                }}
            />
        </Tabs>
    )
}