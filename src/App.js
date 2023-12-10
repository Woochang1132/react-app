import { useState, useEffect } from "react";

function App() {
  console.log("i run all the time");
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("CALL THE API...  ");
  }, []);
  useEffect(() => {
    if (keyword !== "") {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
    // 2개의 keyword중 하나만 바뀌어도 해당 코드 실행될 수 있도록 설정
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search here"
      />
      <h3>{counter}</h3>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
