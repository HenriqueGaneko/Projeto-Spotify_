import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Search from "./screens/Search";
import MusicDetails from "./screens/MusicDetails";
import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={MusicDetails}/>
        </Stack.Navigator>
    );
}

export default function Routes() {
    return(
        <Tab.Navigator screenOptions={{
        headerShown:false, 
        tabBarShowLabel:false,
        tabBarActiveTintColor: "#FFF", 
        tabBarInactiveTintColor: "lightgray",
        tabBarStyle: {backgroundColor: "#212121"}
        }}>
            <Tab.Screen name="HomeStack" component={HomeStackScreen}options={{title: "Home",tabBarIcon: ({color}) => (<MaterialCommunityIcons name="home-variant" size={33} color={color}/>)}}/>
            <Tab.Screen name="Search" component={Search} options={{title: "Pesquisar",tabBarIcon: ({color}) => (<MaterialIcons name="search" size={33} color={color}/>)}}/>
        </Tab.Navigator>
    );
}