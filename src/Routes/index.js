import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import First from '../view/FirstScreen/first';

const Routes = createAppContainer(
    createStackNavigator({
        First: {
            screen: First,
            navigationOptions: 
            {
                headerShown: false,
            }
        }
    })
);

export default Routes;