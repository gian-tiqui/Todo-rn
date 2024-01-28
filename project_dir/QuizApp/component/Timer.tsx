import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

type TimerProps = {
  onTimerEnd: () => void;
};

const Timer = ({onTimerEnd}: TimerProps) => {
  const [count, setCount] = useState<number>(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount === 1) {
          clearInterval(interval);
          onTimerEnd();
          return 5;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      setCount(5);
    };
  }, [onTimerEnd]);

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerText}>{count}</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timerContainer: {
    alignItems: 'center',
    width: '18%',
    padding: 16,
    borderRadius: 360,
    borderWidth: 3,
    alignSelf: 'center',
    borderColor: '#162c46',
    backgroundColor: '#50a0ff',
  },
  timerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#162c46',
  },
});
