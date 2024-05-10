import React from "react";
import useFetch from "./useFetch";

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  console.log(data);

  return (
    <>
      <div></div>
      <div>
        {data ? (
          data.map((item) => <div key={item.id}>{item.title}</div>)
        ) : (
          <div>Loading</div>
        )}
      </div>
    </>
  );
};

export default Home;
