import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer'
import Routes from './routes/RootRoutes'
import Drawer from '../components/Drawer/index'
const config = {
    contentComponent: Drawer,
}

export default createDrawerNavigator(Routes,config);