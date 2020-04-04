import React from "react";
import useAsync from "../hooks/use-async";
import api from "../service/api";
import Layout from '../components/Layout'

const UseAsyncView = () => {
  const [execute, pending, value, error] = useAsync(myFunction, false);
  const [exec, pend, val, err] = useAsync(getUsers, false);

  return (
    <Layout>
      <section>
        <h1>UseAsync Githubs api</h1>
        {val && <div>{JSON.stringify(val.data)}</div>}
        {err && <div>{err}</div>}
        <button onClick={exec} disabled={pend}>
          {!pend ? "Click me" : "Loading..."}
        </button>
      </section>
      <hr />
      <section>
        <h1>UseAsync</h1>
        {value && <div>{value}</div>}
        {error && <div>{error}</div>}
        <button onClick={execute} disabled={pending}>
          {!pending ? "Click me" : "Loading..."}
        </button>
      </section>
      <hr />
    </Layout>
  );
};

const myFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      rnd <= 5
        ? resolve("Submitted successfully 🙌")
        : reject("Oh no there was an error 😞");
    }, 2000);
  });
};


const getUsers = async () => {
  return await api.get("/users/fziliotti");
};

export default UseAsyncView;
