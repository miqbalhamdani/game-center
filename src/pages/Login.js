import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = JSON.stringify(userCredential.user);
        localStorage.setItem("FbAuthUser", user);

        navigate("/");
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  return (
    <div>
      <div className="container" style={{ marginTop: "200px" }}>
        <div className="row">
          <div className="col-lg-6 col-sm-12 m-auto">
            <div className="card p-5">
              <h2 className="mb-5">Login</h2>

              <form className="row g-3" onSubmit={submitForm}>
                <div className="mb-3 row">
                  <label className="col-sm-4 col-form-label">Email</label>

                  <div className="col-sm-8">
                    <input
                      type="email"
                      className="form-control"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-3 row">
                  <label className="col-sm-4 col-form-label">Password</label>

                  <div className="col-sm-8">
                    <input
                      type="password"
                      className="form-control"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                </div>

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
