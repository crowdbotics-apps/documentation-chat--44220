import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, FlatList, Linking } from 'react-native';
const data = [{
  id: '1',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
  links: ['https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3']
}, {
  id: '2',
  text: 'Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
  links: ['https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3']
}, {
  id: '3',
  text: 'Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
  links: ['https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3']
}, {
  id: '4',
  text: 'Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.',
  links: ['https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3']
}, {
  id: '5',
  text: 'Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.',
  links: ['https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3']
}];

const SearchResultsScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
      {item.links.map((link, index) => <Text style={styles.link} onPress={() => Linking.openURL(link)} key={index}>
          Link {index + 1}
        </Text>)}
    </View>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
      <Text style={styles.question}>Did this answer your question?</Text>
      <View style={styles.buttons}>
        <Button title="Yes" onPress={() => {}} />
        <Button title="No" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    height: 700
  },
  item: {
    marginBottom: 20
  },
  text: {
    fontSize: 16
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline'
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
export default SearchResultsScreen;