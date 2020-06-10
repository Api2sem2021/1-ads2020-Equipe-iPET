import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import Home from '../view/HomeScreen';
import First from '../view/FirstScreen/first';
import Login from '../view/Login';
import Registro from '../view/Registro';
import Form from '../view/Form';
import Profile from '../view/Profile';
import Vacinas from '../view/Vacinas';
import CadVacina from '../view/CadastroVacina';
import Parasitario from '../view/Parasitario';
import CadParasitario from '../view/CadastroParasitario';
import Vermifugo from '../view/Vermifugos'
import CadVermifugo from '../view/CadastroVermifugo';

const Routes = createAppContainer(
    createStackNavigator({
        First: {
            screen: First,
            navigationOptions: 
            {
                headerShown: false,
            }
        },
        Login: {
            screen: Login,
            navigationOptions: 
            {
                headerShown: false,
            }
        },
        Registro: {
            screen: Registro,
            navigationOptions: 
            {
                headerShown: false,
            }
        },
        Home: {
            screen: Home,
            navigationOptions: 
            {
                headerShown: false,
            }
        },
        Form: {
            screen: Form,
            navigationOptions: 
            {
                headerShown: true,
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: 
            {
                headerShown: true
            }
        },
        Vacinas: {
            screen: Vacinas,
            navigationOptions: 
            {
                headerShown: true,
            }
        },
        CadVacina: {
            screen: CadVacina,
            navigationOptions: 
            {
                headerShown: true,
            }
        },
        Parasitario: {
            screen: Parasitario,
            navigationOptions:
            {
                headerShown: true,
            },
        },
        CadParasitario: {
            screen: CadParasitario,
            navigationOptions:
            {
                headerShown: true,
            }
        },
        Vermifugo: {
            screen: Vermifugo,
            navigationOptions:
            {
                headerShown: true,
            }
        },
        CadVermifugo: {
            screen: CadVermifugo,
            navigationOptions:
            {
                headerShown: true,
            }
        }
    })
);

export default Routes;