import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import {styles} from '../styles/Styles';
import TodoView, {Todo} from './TodoView';

type TodoRendererProps = {
  item: Todo;
  index: number;
};

const TodoScreen = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string>('');
  const [editMode, setEditMode] = useState<boolean>(false);
  const [todoId, setTodoId] = useState<number>(0);

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

export default TodoScreen;
