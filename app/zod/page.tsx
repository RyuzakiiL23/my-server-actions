"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { z } from "zod";

// Define a Zod schema for form validation
const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters").refine(s => !s.includes(' '),'Username must not contain spaces'),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "password must be at least 6 characters"),
});

// Define types for form data and form errors
type FormData = {
  username: string;
  email: string;
  password: string;
};

type FormErrors = {
  [key in keyof FormData]?: string;
};

function App() {
  // State to hold form values
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  // State to hold form errors
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  // Handler for form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormErrors({});

    try {
      // Validate form data against the schema
      schema.parse(formData);
      console.log("Form data is valid:", formData);
      // Clear any previous errors
      setFormErrors({});
    } catch (error) {
      console.error(error);
      // Set form errors based on validation error messages
      if (error instanceof z.ZodError) {
        const validationErrors = error.errors.map((err) => {
          if (err.path.length > 0) {
            setFormErrors((prevFormErrors) => ({
              ...prevFormErrors,
              [err.path[0]]: err.message,
            }));
            return { field: err.path[0], message: err.message };
          }
          return { field: "general", message: err.message };
        });
        console.error(validationErrors);
        // Here you can set the formErrors state based on the validationErrors array
      }
    }
  };
  // Handler for form input changes
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {formErrors.username && <span>{formErrors.username}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <span>{formErrors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="string"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {formErrors.password && <span>{formErrors.password}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;