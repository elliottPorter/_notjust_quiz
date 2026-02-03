import { Text, View, StyleSheet } from 'react-native';

const Answer = () => {
  return (
    <View style={styles.answer}>
      <Text>Answer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  answer: {
    width: '100%',
    padding: 30,
    paddingVertical: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default Answer;
