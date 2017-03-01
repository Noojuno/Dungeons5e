import React, {Component} from 'react';
import {AppRegistry, AsyncStorage} from 'react-native';

//NAVIGATION AND STATE MANAGEMENT
import {StackNavigator, addNavigationHelpers} from 'react-navigation';
import {createStore, combineReducers} from 'redux';
import {Provider, connect} from 'react-redux';
import {persistStore, autoRehydrate} from 'redux-persist';

//THEMEING AND COLOURS
import FEColors from './common/FEColors';

//PAGES
import {HomePage} from './common/pages/home/HomePage'
import {CharacterPage} from './common/pages/characterSheet/CharacterPage'

//DEVELOPMENT RELATED VARIABLES
if (!__DEV__) {
    console = {};
    console.log = () => {};
    console.error = () => {};
}
console.ignoredYellowBox = ['Behaviour of screenProps has changed'];

const StackNav = StackNavigator({
    Home: {
        screen: HomePage
    },
    Character: {
        screen: CharacterPage
    }
});

const navReducer = (state, action) => {
    const newState = StackNav.router.getStateForAction(action, state);
    return newState || state;
};

const appReducer = combineReducers({nav: navReducer});

class StackNavStateComp extends Component {
    render() {
        return (<StackNav navigation={addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.nav})}/>);
    }
}
const StackNavState = connect(state => ({nav: state.nav}))(StackNavStateComp);

export default class Dungeons5e extends Component {
    store = createStore(appReducer, undefined, autoRehydrate());

    componentDidMount() {
        persistStore(this.store, {storage: AsyncStorage});
    }

    render() {
        return (
            <Provider store={this.store}>
                <StackNavState/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('Dungeons5e', () => Dungeons5e);
