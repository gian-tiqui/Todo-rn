import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import axios from 'axios';
import {SetScoreContext} from '../navigation/Index';

type QuizProps = {
  navigation: NavigationProp<any>;
};

type Question = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

const Quiz = ({navigation}: QuizProps) => {
  const [questions, setQuestions] = React.useState([]);
  const [ques, setQues] = React.useState<number>(1);
  const [score, setScore] = React.useState<number>(0);
  const [answerMounted, setAnswerMounted] = React.useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = React.useState<Question>({
    type: '',
    difficulty: '',
    category: '',
    question: '',
    correct_answer: '',
    incorrect_answers: [],
  });

  const setScoreC = React.useContext(SetScoreContext);

  const checkAllAnswered = () => {
    if (setScoreC !== undefined) {
      setScoreC(score);
    }
    return ques === 10;
  };

  const navigateResult = () => {
    navigation.navigate('Result', {score});
  };

  const handlePressCorrect = () => {
    setAnswerMounted(false);
    Alert.alert('Correct');
    setScore(prevScore => prevScore + 1);
    setQues(prevQues => prevQues + 1);
    setCurrentQuestion(questions[ques - 1]);

    if (checkAllAnswered()) {
      navigateResult();
    }
  };

  const handlePressWrong = () => {
    setAnswerMounted(false);
    Alert.alert('Wrong');
    setQues(prevQues => prevQues + 1);
    setCurrentQuestion(questions[ques - 1]);

    if (checkAllAnswered()) {
      navigateResult();
    }
  };

  const generateRandomNum = () => {
    return Math.floor(Math.random() * 3);
  };

  React.useEffect(() => {
    const getQuiz = async () => {
      const API_URL =
        'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple';

      try {
        const res = await axios.get(API_URL);
        const q = res.data.results;
        setQuestions(q);
      } catch (err) {
        console.log(err);
      }
    };

    getQuiz();
  }, []);

  React.useEffect(() => {
    if (questions.length > 0) {
      setCurrentQuestion(questions[ques - 1]);
    }
  }, [questions, ques]);

  const handlePressEnd = () => {
    navigation.navigate('Result');
  };

  const handlePressBack = () => {
    navigation.navigate('Home');
  };

  const randomNum = generateRandomNum();

  return (
    <View style={styles.container}>
      {currentQuestion ? (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>Question {ques}</Text>
          </View>

          <View style={styles.next}>
            <Text style={styles.question2}>{currentQuestion.question}</Text>
          </View>

          <View style={styles.options}>
            {currentQuestion.incorrect_answers.map(
              (option: string, index: number) => (
                <>
                  <TouchableOpacity
                    key={index}
                    style={styles.optionButton}
                    onPress={handlePressWrong}>
                    <Text style={styles.option}>{option}</Text>
                  </TouchableOpacity>

                  {randomNum === index && !answerMounted && (
                    <TouchableOpacity
                      key={`correct_${index}`}
                      style={styles.optionButton}
                      onPress={handlePressCorrect}>
                      <Text style={styles.option}>
                        {currentQuestion.correct_answer}
                      </Text>
                    </TouchableOpacity>
                  )}
                </>
              ),
            )}
          </View>

          <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handlePressEnd}>
              <Text style={styles.buttonText}>END</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.buttonText}>
            No questions are available at the moment.
          </Text>
          <TouchableOpacity style={styles.button} onPress={handlePressBack}>
            <Text style={styles.buttonText}>Go back</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: '#21436b',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    marginTop: 60,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#1A759F',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  question: {
    fontSize: 28,
    color: '#50a0ff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  question2: {
    fontSize: 28,
    color: '#50a0ff',
    textAlign: 'center',
    fontWeight: '600',
  },
  option: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#50a0ff',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: '100%',
  },
  next: {
    borderColor: '#50a0ff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 30,
    backgroundColor: '#162c46',
  },
});
