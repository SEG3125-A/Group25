import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";
interface FormValues {
  name: string;
  email: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}
const validateForm = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  // Validate Name
  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  // Validate Book Title
  if (!values.email.trim()) {
    errors.email = "Email is required";
  }
  const isValidEmail = (email: string) => {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  if (!isValidEmail(values.email) && values.email.trim()) {
    errors.email = "Email is not valid";
  }

  return errors;
};

function Help() {
  const Navigate = useNavigate();
  const GoBack = () => {
    Navigate("/");
  };
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errorMessage = validateForm(formValues);
    if (Object.keys(errorMessage).length > 0) {
      const firstErrorKey = Object.keys(errorMessage)[0];
      alert(errorMessage[firstErrorKey]);
    } else {
      alert("Form submitted");
    }
  };

  return (
    <div className="Help">
      <NavigationBar />
      <div>
        <h2>Need help? Contact Us</h2>
        <div class="card w-75">
          <div class="card-body">
            <h5 class="card-title">Send an email</h5>
            <p class="card-text">
              <form
                style={{ maxWidth: "400px", marginLeft: "10px" }}
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="name"
                    style={{ display: "block", marginBottom: "5px" }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    style={{ display: "block", width: "100%" }}
                    placeholder="Enter name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{ display: "block", marginBottom: "5px" }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    style={{ display: "block", width: "100%" }}
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "5px" }}>
                    Message
                  </label>
                  <textarea style={{ display: "block", width: "100%" }} />
                </div>
                <button
                  className="btn btn-primary"
                  style={{ marginRight: "10px" }}
                  onClick={GoBack}
                >
                  Back
                </button>

                <button
                  className="btn btn-primary"
                  style={{ marginRight: "10px" }}
                  type="submit"
                >
                  Send
                </button>
              </form>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
