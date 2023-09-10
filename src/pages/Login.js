import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { Spinner } from "reactstrap";

import { useSelector, useDispatch } from "react-redux";
import {
  showErrorToast,
  showSuccessAlert,
  setLoading,
  setProfile,
} from "../store/reducer/userSlice";

export default function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLoading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { displayName, email, photoURL, uid } = userCredential.user;
        const profile = {
          name: displayName,
          email: email,
          photo: photoURL,
          id: uid,
        };
        dispatch(setProfile(profile));
        dispatch(setLoading(false));
        dispatch(showSuccessAlert(`Success Login with ${email}`));

        navigate("/");
      })
      .catch((error) => {
        dispatch(setLoading(false));
        dispatch(showErrorToast(error.code));
      });
  };

  const loading = () => {
    return (
      isLoading && (
        <Spinner size="sm" className="me-2">
          Loading...
        </Spinner>
      )
    );
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
                    {loading()}
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
