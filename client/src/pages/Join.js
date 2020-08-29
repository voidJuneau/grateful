import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../utils/AuthContext";
import CenterContainer from "../components/shared/CenterContainer";
import Card from "../components/shared/Card";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";

const Join = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setLoginMode] = useState(true);
  const [idValue, setIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const switchMode = () => {
    setLoginMode((prevMode) => !prevMode);
    setError(null);
  };

  const submit = (e) => {
    e.preventDefault();
    if (isLoginMode) {
      axios
        .post("http://localhost:5000/api/user/login", {
          userid: idValue,
          password: passwordValue,
        })
        .then((res) => {
          console.log(res.data);
          auth.login(res.data.user._id, res.data.user.userid, res.data.token);
          history.push("/all");
        })
        .catch((res) => setError(res.response.data.error));
    } else {
      axios
        .post("http://localhost:5000/api/user/signin", {
          userid: idValue,
          name: nameValue,
          password: passwordValue,
        })
        .then((res) => {
          console.log(res.data);
          auth.login(res.data.user._id, res.data.user.userid, res.data.token);
          history.push("/all");
        })
        .catch((res) => setError(res.response.data.error.split("Path ")[1]));
    }
  };

  return (
    <CenterContainer>
      <Card>
        <h2>{isLoginMode ? "Log In" : "Sign In"}</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <hr />
        <form>
          <Input
            label="ID"
            type="text"
            value={idValue}
            onChange={(e) => setIdValue(e.target.value)}
            minlength={4}
            required
          />
          {!isLoginMode && (
            <Input
              label="Name"
              type="text"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              minlength={2}
              required
            />
          )}
          <Input
            label="Password"
            type="password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            minlength={6}
            required
          />
          <Button type="submit" onClick={submit}>
            {isLoginMode ? "Login" : "Signin"}
          </Button>
        </form>
        <Button onClick={switchMode}>
          Switch to {isLoginMode ? "Sign in" : "Log in"}
        </Button>
      </Card>
    </CenterContainer>
  );
};

export default Join;
