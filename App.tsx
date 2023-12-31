import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Title from './src/components/UI/Title/Title';
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from './src/components/UI/Typography';
import { styled } from 'styled-components/native';
import Hr from './src/components/UI/Hr/Hr';

interface HelloCompoProps {
  name: string;
}

const HelloCompo = ({ name }: HelloCompoProps) => {
  return (
    <Text>Hello {name}</Text>
  )
}

interface TodoType {
  id: number;
  title: string;
  done: boolean;
}

function App(): JSX.Element {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const onClick = (id: number) => {
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo))
  }
  useEffect(() => {
    setTodos(todoList);
  }, [])
  return (
    <SafeAreaView>
      <Title>Typography</Title>
      <TypoView>
        <Heading1>heading1</Heading1>
        <Heading2>heading2</Heading2>
        <Heading3>heading3</Heading3>
        <Heading4>heading4</Heading4>
        <Heading5>heading5</Heading5>
      </TypoView>
      <HelloCompo name='tono' />
      <HelloCompo name='tono2' />
      <Hr />
      <ScrollView>
        <Title>Todo-List</Title>
        {
          todos.map(
            todo => (
              <TodoBlock key={todo.id}>
                <TodoText done={todo.done}>{todo.title}</TodoText>
                <TodoDoneButton onPress={() => onClick(todo.id)} done={todo.done}>
                  <TodoDoneButtonText>{todo.done ? "O" : "X"}</TodoDoneButtonText>
                </TodoDoneButton>
              </TodoBlock>
            )
          )
        }
        <View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const todoList = [
  {
    id: 1,
    title: "react native is holy-moly fucking",
    done: false
  },
  {
    id: 2,
    title: "Todo make todo-list",
    done: false
  },
  {
    id: 3,
    title: "learn react native",
    done: false
  }
]

const TypoView = styled.View`
  padding: 8px;
  margin-top: -8px;
  margin-bottom: 8px;
  border-bottom-width: 1px;
  border-color: silver;
`

const TodoBlock = styled.View`
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-color: silver;
`

interface TodoTextProps {
  done: boolean;
}

const TodoText = styled.Text<TodoTextProps>`
  font-size: 18px;
  text-decoration: ${props => props.done && "line-through"};
`

interface TodoDoneButtonProps {
  done: boolean;
}

const TodoDoneButton = styled.Pressable<TodoDoneButtonProps>`
  padding: 4px 8px;
  background-color: ${props => props.done ? "#028A0f" : "#BF4F74"};
  border-width: 1px;
  border-radius: 8px;
  border-color: silver;
`
const TodoDoneButtonText = styled.Text`
  color: white;
`