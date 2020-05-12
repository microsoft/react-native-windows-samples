import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import * as rssParser from 'react-native-rss-parser';

import Card from '../components/Card';
import ActionBar from '../components/ActionBar';

function Item({ id, title, published, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: '#ffffff' },
      ]}
    >
      <Text style={styles.date}>{published}</Text>
      <Text style={styles.title}>{title}</Text>

    </TouchableOpacity>
  );
}

const FeedScreen: () => React$Node = (props) => {

  useEffect(() => {
    async function fetchData() {
      await getRssFeed();
    }
    fetchData();
  }, []);


  const [rssItems, setRssItems] = useState();

  const getRssFeed = async () => {
    var response = await fetch('https://blogs.windows.com/feed/');
    var data = await response.text();
    var rss = await rssParser.parse(data);
    setRssItems(rss.items);
  }
  
  const [selected, setSelected] = useState('');

  const onSelect = (id) => {
    props.getUrlCallback(id);
  }


  return (
    <View style={styles.body}>
      <View style={styles.toolBar}>
        <Text style={styles.barTitle}>
          Windows Blog
        </Text>
      </View>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <FlatList
          data={rssItems}
          renderItem={({ item }) => (
            <Card>
              <Item
                id={item.id}
                title={item.title}
                published={item.published}
                selected={item.id}
                onSelect={onSelect}
              />
            </Card>
          )}
          keyExtractor={item => item.title}
          extraData={selected}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  toolBar: {
    flexDirection: 'row',
    height: 55,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  barTitle: {
    fontWeight: "bold",
    fontSize: 28,
    marginLeft: 22,
    color: '#00ADEF',
    justifyContent: 'flex-start',
    fontFamily: "arial"
  },
  body: {
    flex: 1,
    width: 300,
    backgroundColor: '#f0f0f0',
    maxWidth: 350
  },
  item: {
    backgroundColor: '#ff7675',
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 4,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, heigh: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    color: '#2d3436',
    marginVertical: 8,
    fontFamily: "arial"
  },
  date: {
    fontSize: 10,
    color: '#00ADEF',
  },

});

export default FeedScreen;
