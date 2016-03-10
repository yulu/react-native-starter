/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {
    AppRegistry,
    Component,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

var MOCKED_MOVIES_DATA = [
    {title: 'Title', year: '2015', posters: {thumnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

class AwesomeProject extends Component {
    render() {
        var movie = MOCKED_MOVIES_DATA[0];
        return (
            <View style={styles.container}>
                <Text>{movie.title}</Text>
                <Text>{movie.year}</Text>
                <Image source={{uri: movie.posters.thumnail}} style={styles.thumnail} />
            </View>
        );
    }
}
    
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    thumnail: {
        width: 53,
        height: 81,
    }
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
