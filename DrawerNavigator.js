import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Food from '../screens/Food.js';
import Recipes from '../screens/Recipes'

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {

  render() {
    return (
      <Drawer.Navigator>

        <Drawer.Screen
          name="Food"
          component={Food}
          options={{ unmountOnBlur: true }}
        />

        <Drawer.Screen
          name="Profile"
          component={Recipes}
          options={{ unmountOnBlur: true }}
        />
        
      </Drawer.Navigator>
    );
  }
}
