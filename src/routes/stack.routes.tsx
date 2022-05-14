import React from "react";

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from "../screens/Home"
import {CreatePost} from "../screens/CreatePost"
import {EditYourPost} from "../screens/EditYourPost"
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
                name="ViewPost"
                component={ViewPost}
                options={{headerShown: false}}
            />
            <Screen
                name="CreatePost"
                component={CreatePost}
                options={{headerShown: false}}
            />
        </Navigator>
    )
}