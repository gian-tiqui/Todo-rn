import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/Styles';
export interface Todo {
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

const TodoView = ({todo, index, onDelete, onEdit, editMode}: TodoViewProps) => {
  const truncatedTodo =
    todo.todo.length > 15 ? `${todo.todo.slice(0, 15)}...` : todo.todo;

  return (
    <View style={styles.todoContainer} key={index}>
      <Text style={styles.todoContainerText}>
        {index + 1}. {truncatedTodo}
      </Text>
      {!editMode && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity>
            <Text style={styles.editText} onPress={() => onEdit(todo.id)}>
              Edit
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onDelete(index)}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default TodoView;
