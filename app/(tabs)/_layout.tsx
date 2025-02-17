import { Tabs } from "expo-router";

export default function TabsLayout () {
    return (
        <Tabs>
            <Tabs.Screen 
            name="index"
                    options={{
                      title: 'Home',
                     // tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
                    }}
            />
            <Tabs.Screen
                    name="options"
                    options={{
                      title: 'Options',
                     // tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
                    }}
                  />
        </Tabs>
    )
}