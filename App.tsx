import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface Todo {
  id: number;
  todo: string;
}

const TodoView = ({todo, index}: {todo: Todo; index: number}) => {
  return (
    <View style={styles.todoContainer} key={index}>
      <Text style={styles.todoContainerText}>{todo.todo}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity>
          <Text style={styles.todoContainerText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.todoContainerText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TodoScreen = () => {
  const [todos, setTodos]: [Todo[], any] = React.useState([]);
  const [todo, setTodo]: [string, (str: string) => void] = React.useState('');

  const handleAddTodo = () => {
    const newTodo: Todo = {
      id: todo.length + 1,
      todo: todo,
    };

    setTodos([...todos, newTodo]);

    Alert.alert('Todo Added');
  };

  const renderTodos = ({item, index}: {item: Todo; index: number}) => {
    return <TodoView todo={item} index={index} />;
  };

  const handleChangeText = (str: string) => {
    setTodo(str);
  };

  React.useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{todo}</Text>
      <TextInput
        style={styles.input}
        placeholder="What do you want to do later?"
        defaultValue={todo}
        placeholderTextColor={'#808080'}
        onChangeText={handleChangeText}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <FlatList
        data={todos}
        renderItem={renderTodos}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const App = () => {
  return <TodoScreen />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.white,
    height: '100%',
    width: '100%',
  },
  input: {
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 10,
    color: '#000000',
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 25,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    marginBottom: 10,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 30,
  },
  todoContainer: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#555555',
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todoContainerText: {
    fontSize: 25,
    marginHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});
