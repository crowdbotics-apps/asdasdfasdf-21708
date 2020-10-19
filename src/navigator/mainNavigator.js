import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2149430Navigator from '../features/BlankScreen2149430/navigator';
import BlankScreen1149429Navigator from '../features/BlankScreen1149429/navigator';
import BlankScreen0149428Navigator from '../features/BlankScreen0149428/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2149430: { screen: BlankScreen2149430Navigator },
BlankScreen1149429: { screen: BlankScreen1149429Navigator },
BlankScreen0149428: { screen: BlankScreen0149428Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
