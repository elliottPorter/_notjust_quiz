import { View, Text, StyleSheet } from 'react-native';
import Answer from './AnswerOption';

const QuestionCard = (props) => {
  return (
    <View style={styles.questionCard}>
      <Text style={styles.question}>{ props.question.title }</Text>
      <Answer answer='Software' />
      <Answer answer='Chester' />
      <Answer answer='Kaedon' />
    </View>
  );
};

const styles = StyleSheet.create({
  questionCard: {
    backgroundColor: '#fff',
    padding: 20,
    paddingVertical: 40,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
  },
  question: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom:20
  },
});

export default QuestionCard;
