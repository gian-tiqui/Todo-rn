import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {createContext} from 'react';
import {NavigationProp} from '@react-navigation/native';
import axios from 'axios';

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

export const ScoreContext = createContext<number | undefined>(undefined);

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

  const getQuiz = async () => {
    const API_URL =
      'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple';

    await axios
      .get(API_URL)
      .then(res => {
        const q = res.data.results;
        setQuestions(q);
        setCurrentQuestion(questions[ques - 1]);
        console.log(q);
      })
      .catch(err => console.log(err));
  };

  const checkAllAnswered = () => {
    console.log(score);
    return ques === 10;
  };

  const handlePressCorrect = () => {
    setAnswerMounted(false);
    Alert.alert('Correct');
    setScore(prevScore => prevScore + 1);
    setQues(prevQues => prevQues + 1);
    setCurrentQuestion(questions[ques - 1]);

    if (checkAllAnswered()) {
      navigation.navigate('Result');
    }
  };

  const handlePressWrong = () => {
    setAnswerMounted(false);
    Alert.alert('Wrong');
    setQues(prevQues => prevQues + 1);
    setCurrentQuestion(questions[ques - 1]);

    if (checkAllAnswered()) {
      navigation.navigate('Result');
    }
  };

  const generateRandomNum = () => {
    return Math.floor(Math.random() * 3);
  };

  React.useEffect(() => {
    getQuiz();
  }, []);

  const handlePressEnd = () => {
    navigation.navigate('Result');
  };

  const randomNum = generateRandomNum();

  return (
    <ScoreContext.Provider value={score}>
      <View style={styles.container}>
        {currentQuestion ? (
          <View style={styles.parent}>
            <View style={styles.top}>
              <Text style={styles.question}>
                Q{ques}. {currentQuestion.question}
              </Text>
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
                        style={styles.optionButton}
                        onPress={handlePressCorrect}>
                        <Text style={styles.option}>
                          {currentQuestion.correct_answer} correct
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

              <Text>{score}</Text>

              <TouchableOpacity style={styles.button} onPress={handlePressEnd}>
                <Text style={styles.buttonText}>END</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <Text>no question</Text>
        )}
      </View>
    </ScoreContext.Provider>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
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
    fontWeight: '600',
    color: 'white',
  },
  question: {
    fontSize: 28,
    color: 'black',
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#34A0A4',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: '100%',
  },
});
