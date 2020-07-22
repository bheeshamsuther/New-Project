import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Card from './../../Components/Cards/cards';

class Home extends React.Component {
  render() {
    // console.log(this.props.navigation, '=====>');
    return (
      <ScrollView>
        <View style={styles.Container}>
          <Card navigate={this.props} />
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
  },
});

export default Home;
