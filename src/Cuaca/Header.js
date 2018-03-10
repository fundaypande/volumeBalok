import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  return(
    <View style={styles.contHeader}>
      <Text style={styles.textHeader}>
        {props.judul}
      </Text>
    </View>
  );
}

const styles = {
  contHeader: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    position: 'relative',
    height: 60
  },

  textHeader: {
    color: '#ffffff',
    fontSize: 20
  }
};

export default Header;
