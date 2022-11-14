import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Community, ToDo, MyPage } from "../screens";

const TabIcons = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};
const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Community"
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => {
          let name = "";
          if (route.name == "Community") name = "dog";
          else if (route.name == "Map") name = "map-marker-multiple";
          else if (route.name == "ToDo") name = "calendar-check";
          else name = "account";
          return TabIcons({ ...props, name });
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Community"
        component={Community}
        options={{ tabBarLabel: "Community", headerShown: false }}
      />
      {/* <Tab.Screen
        name="Map"
        component={Map}
        options={{ tabBarLabel: "Map", headerShown: false }}
      /> */}
      <Tab.Screen
        name="ToDo"
        component={ToDo}
        options={{ tabBarLabel: "ToDo", headerShown: false }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{ tabBarLabel: "Account", headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
