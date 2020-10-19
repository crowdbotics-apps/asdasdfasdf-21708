import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn15149433Navigator from '../features/SignIn15149433/navigator';
import BlankScreen3149431Navigator from '../features/BlankScreen3149431/navigator';
import BlankScreen2149430Navigator from '../features/BlankScreen2149430/navigator';
import BlankScreen1149429Navigator from '../features/BlankScreen1149429/navigator';
import BlankScreen0149428Navigator from '../features/BlankScreen0149428/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn15149433: { screen: SignIn15149433Navigator },
BlankScreen3149431: { screen: BlankScreen3149431Navigator },
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
