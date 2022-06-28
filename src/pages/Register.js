import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Spinner } from "reactstrap";
import InputText from "../components/ui/InputText/InputText";
import { useSelector, useDispatch } from "react-redux";
import {
  showErrorToast,
  showSuccessAlert,
  setLoading,
  setProfile,
} from "../store/reducer/userSlice";

export default function Register() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLoading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
        navigate("/");

        dispatch(showSuccessAlert(`Success Login with ${email}`));
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
              <h2 className="mb-5">Register</h2>

              <form className="row g-3" onSubmit={submitForm}>
                <InputText
                  label="Email"
                  type="email"
                  onChange={(value) => setEmail(value)}
                />

                <InputText
                  label="Password"
                  type="password"
                  onChange={(value) => setPassword(value)}
                />

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
