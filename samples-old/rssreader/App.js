import React, { Fragment, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import FeedScreen from './screens/FeedScreen';
import ContentScreen from './screens/ContentScreen';

const App: () => React$Node = () => {

  const[url, setUrl] = useState('https://devblogs.microsoft.com/surface-duo');

  getUrlFromItem = (data) => {
    setUrl(data);
  }

    return(
      <View style={styles.container}>
          <View style={styles.parent}>

            <FeedScreen getUrlCallback={getUrlFromItem} />

            <Fragment>
              <ContentScreen url={url} />
            </Fragment>

          </View>
      </View>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }

});

export default App;
