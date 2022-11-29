import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";
import Layout from "../layouts/Layout";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  let userDetails = JSON.parse(localStorage.getItem('user')) || []

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    userDetails.push({"Name":name,"Email":email,"Password":password})
    console.log(userDetails)
    localStorage.setItem("user",JSON.stringify(userDetails))

    // await fetch("http://localhost:8000/api/register", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     password,
    //   }),
    // });

    await router.push('/login')
  };

  return (
    <Layout>
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please Register</h1>

        <input
          type="text"
          className="form-control"
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          className="form-control"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default register;
