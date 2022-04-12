import { useReducer, useRef } from 'react';
import './App.css';
import './Checkmark.css';
import './CloseButton.css';
import Form from './Components/Form';
import Input from './Components/Input';
import ButtonContainer from './Components/ButtonContainer';
import Button from './Components/Button';
import TaskList from './Components/TaskList';
import Task from './Components/Task';

const initState = {
  input: '',
  tasks: [],
};

const SET_INPUT = 'set_input';
const ADD_TASK = 'add_task';
const DELETE_TASK = 'delete_task';
const RESET_TASK = 'reset_task';

const setInput = (payload) => {
  return {
    type: SET_INPUT,
    payload,
  };
};

const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};

const deleteTask = (payload) => {
  return {
    type: DELETE_TASK,
    payload,
  };
};

const resetTask = () => {
  return {
    type: RESET_TASK,
  };
};

const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case SET_INPUT:
      newState = {
        ...state,
        input: action.payload,
      };
      break;
    case ADD_TASK:
      newState = {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      break;
    case DELETE_TASK:
      const newTasks = [...state.tasks];
      newTasks.splice(action.payload, 1);

      newState = {
        ...state,
        tasks: newTasks
      };
      break;
    case RESET_TASK:
      newState = {
        ...state,
        tasks: [],
      };
      break;
    default:
      throw new Error(`Invalid action ${action.type}`);
  }
  return newState;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { input, tasks } = state;
  
  const inputRef = useRef();

  const handleSubmit = () => {
    if (state.input !== '') {
      dispatch(addTask(input));
      dispatch(setInput(''));
    }
    inputRef.current.focus();
  };

  const handleReset = () => {
    dispatch(resetTask());
  };

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  return (
    <Form>
      <Input
        forwardedRef={inputRef}
        value={input}
        onChange={(e) => {
          dispatch(setInput(e.target.value));
        }}
      />
      <ButtonContainer>
        <Button
          type='submit'
          className='add'
          onClick={handleSubmit}
          text='Add'
        />
        <Button className='reset' onClick={handleReset} text='Reset' />
      </ButtonContainer>
      {state.tasks.length === 0 ? null : (
        <TaskList>
          {tasks.map((task, index) => (
            <Task
              key={index}
              text={task}
              handleDelete={() => handleDelete(index)}
            />
          ))}
        </TaskList>
      )}
    </Form>
  );
}

export default App;
