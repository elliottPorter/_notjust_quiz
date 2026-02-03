import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import QuestionCard from '../components/QuestionCard';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { questions } from '../questions';
const question = questions[0]

const QuizScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      {/* header */}
      <View style={{ paddingTop: insets.top }}>
        <Text style={styles.text}>Question 1/5</Text>
      </View>

      {/* body */}
      <View>
        <QuestionCard question={question} />
        <Text style={styles.time}>20 secs</Text>
      </View>

      {/* footer */}
      <Pressable
        onPress={() => {
          console.warn('Pressed');
        }}
        onLongPress={() => {
          console.warn('Pressing');
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Next</Text>
        <FontAwesome6
          name="arrow-right-long"
          size={16}
          color="white"
          style={styles.buttonIcon}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fdfef4',
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  text: {
    textAlign: 'center',
  },
  time: { textAlign: 'center', paddingTop: 15, fontWeight: 700 },
  button: {
    padding: 20,
    justifyContent: 'center',
    borderRadius: 50,
    alignItems: 'center',
    backgroundColor: '#005005',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 700,
    letterSpacing:1.5
  },
  buttonIcon: {
    paddingTop: 18,
    paddingBottom: 18,
    color: '#fff',
    fontSize: 18,
    position: 'absolute',
    right: 20,
  },
});

export default QuizScreen;
