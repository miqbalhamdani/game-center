import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import InputText from "../components/ui/InputText/InputText";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // uid
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div>
      <div className="container" style={{ marginTop: "200px" }}>
        <div className="row">
          <div className="col-lg-6 col-sm-12 m-auto">
            <div className="card p-5">
              <h2 className="mb-5">Register</h2>

              <form className="row g-3" onSubmit={submitForm}>
                <InputText
                  label="Please Input Email"
                  type="email"
                  onChange={(value) => setEmail(value) }
                />

                <InputText
                  label="Please Input Password"
                  type="password"
                  onChange={(value) => setPassword(value) }
                />

                <div className="row m-auto">
                  <button
                    type="submit"
                    className="btn btn-primary text-right float-end mb-3"
                    style={{ width: "125px", marginRight: "20px" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
