import dayjs from "dayjs";
import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmitHanlder = (e) => {
    e.preventDefault();
    if (title.trim() === "") return alert("제목을 입력해주세요!");
    if (content.trim() === "") return alert("내용을 입력해주세요!");
    const newTodo = {
      id: uuidv4(),
      title,
      content,
      date: dayjs(Date.now()).format("YYYY년 MM년 DD일 HH:mm:ss"),
    };
    setTodos([...todos, newTodo]);
    alert("등록되었습니다!");
  };

  return (
    <STForm onSubmit={onSubmitHanlder}>
      <STInput
        type="text"
        placeholder="제목을 입력해주세요"
        maxLength={30}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <STInput
        type="text"
        placeholder="할일을 입력해주세요"
        maxLength={150}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <STButton type="submit">등록</STButton>
    </STForm>
  );
};

export default TodoForm;

const STForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid skyblue;
  border-radius: 5px;
  margin: 20px auto;
  padding: 10px;
  width: 500px;
  height: 100px;
`;

const STInput = styled.input`
  padding: 10px;
  margin-right: 20px;
  border: 1px solid skyblue;
  border-radius: 10px;
`;

const STButton = styled.button`
  background-color: skyblue;
  border: none;
  border-radius: 10px;
  padding: 10px;
  width: 100px;
  cursor: pointer;
`;
