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

type TodoViewProps = {
  todo: Todo;
  index: number;
  onDelete: (index: number) => void;
  onEdit: (id: number) => void;
  editMode: boolean;
};

type TodoRendererProps = {
  item: Todo;
  index: number;
};

const TodoView = ({todo, index, onDelete, onEdit, editMode}: TodoViewProps) => {
  const truncatedTodo =
    todo.todo.length > 25 ? `${todo.todo.slice(0, 19)}...` : todo.todo;

  return (
    <View style={styles.todoContainer} key={index}>
      <Text style={styles.todoContainerText}>
        {index + 1}. {truncatedTodo}
      </Text>
      {!editMode && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity>
            <Text
              style={styles.todoContainerText}
              onPress={() => onEdit(todo.id)}>
              Edit
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onDelete(index)}>
            <Text style={styles.todoContainerText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const TodoScreen = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [todo, setTodo] = React.useState<string>('');
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [todoId, setTodoId] = React.useState<number>(0);

  const handleAddTodo = () => {
    if (!todo) {
      Alert.alert('Please enter something');
      return;
    }

    const newTodo: Todo = {
      id: todos.length + 1,
      todo: todo,
    };

    setTodos([...todos, newTodo]);
    setTodo('');

    Alert.alert('Todo Added');
  };

  const handleChangeText = (str: string) => {
    setTodo(str);
  };

  const handleDelete = (index: number): void => {
    setTodos((prevTodos: Todo[]) => prevTodos.filter((_, i) => i !== index));
  };

  const handleEdit = (id: number): void => {
    setEditMode(prevMode => {
      const existingTodo = todos.find(mTodo => mTodo.id === id);

      if (existingTodo) {
        setTodo(existingTodo.todo.toString());
        setTodoId(existingTodo.id);
        return !prevMode;
      }

      return prevMode;
    });
  };

  const handleEditTodo = (): void => {
    const editedTodo: Todo = {
      id: todoId,
      todo: todo,
    };

    const newTodos: Todo[] = todos.filter(mTodo => mTodo.id !== todoId);

    newTodos.push(editedTodo);

    setTodos(newTodos);
    setEditMode(prevMode => !prevMode);
    setTodo('');
  };

  const renderTodos = ({item, index}: TodoRendererProps) => {
    return (
      <TodoView
        todo={item}
        index={index}
        onDelete={handleDelete}
        onEdit={handleEdit}
        editMode={editMode}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="What do you want to do later?"
        defaultValue={todo}
        placeholderTextColor={'#808080'}
        onChangeText={handleChangeText}
      />

      {!editMode ? (
        <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleEditTodo}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      )}

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
    padding: 25,
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
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
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
    color: Colors.white,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});
