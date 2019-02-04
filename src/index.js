import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Home from './screens/Home';
import Jornal from './screens/Jornal';
import KeyFactor from './screens/KeyFactor';
import ActionStrategy from './screens/ActionStrategy';
import Details from './screens/Details';
import { Text } from 'native-base';

const StackNavigator = createStackNavigator({
	MacroAxis: {
		screen: Home,
		navigationOptions: {
			headerTitle: 'Macro Eixo'
		}
	},
	KeyFactor: {
		screen: KeyFactor,
		navigationOptions: {
			headerTitle: 'Fator Chave'
		}
	},
	ActionStrategy: {
		screen: ActionStrategy,
		navigationOptions: {
			headerTitle: 'Ação Estrategica'
		}
	},
	Details: {
		screen: Details,
		navigationOptions: {
			headerTitle: 'Detalhes'
		}
	}
});

const TabNavigator = createBottomTabNavigator({
	Jornal: Jornal,
	Home: StackNavigator
});

export default { TabNavigator };
