import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@screens/Home'
import { NewRef } from '@screens/NewRef'
import { NewRefFailure } from '@screens/NewRefFailure'
import { NewRefSuccess } from '@screens/NewRefSuccess'

const {Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator>
            <Screen 
                name='Home'
                component={Home}
            />
            <Screen 
                name='NewRef'
                component={NewRef}
            />
            <Screen 
                name='NewRefFailure'
                component={NewRefFailure}
            />
            <Screen 
                name='NewRefSuccess'
                component={NewRefSuccess}
            />
        </Navigator>
    )
}