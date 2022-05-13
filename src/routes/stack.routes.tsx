import React from "react";

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from "../screens/Home"
//import {} from "../screens/CreatePost"
import {EditYourPost} from "../screens/EditYourPost"
import {User} from "../screens/User"
import {ViewPost} from "../screens/ViewPost"

const {Navigator, Screen} = createNativeStackNavigator()

export function StackRoutes() {
    return(
        <Navigator>
            <Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />
            <Screen
                name="EditYourPost"
                component={EditYourPost}
                options={{headerShown: false}}
            />
            <Screen
                name="User"
                component={User}
                options={{headerShown: false}}
            />
            <Screen
                name="ViewPost"
                component={ViewPost}
                options={{headerShown: false}}
            />
        </Navigator>
    )
}