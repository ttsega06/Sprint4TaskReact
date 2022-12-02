import "./App.css";

import { Container, Button, Form } from "react-bootstrap";

import Amplify from "aws-amplify";
import { API } from "aws-amplify";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

async function addContact() {
  const data = {
    body: {
      name: formState.name,
      email: formState.email,
      message: formState.message,
    },
  };

  console.log(data);
  const apiData = await API.post("apia6d5f50a", "/contact", data);
  console.log({ apiData });
  alert("Sent");
}

const formState = { name: "", email: "", message: "" };

function updateFormState(key, value) {
  formState[key] = value;
}

function App() {
  return (
    <Container>
      <div>
        <h3>Upload contact info to database</h3>
        <br />
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="Name"
              onChange={(e) => updateFormState("name", e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="Email"
              onChange={(e) => updateFormState("email", e.target.value)}
            />
          </Form.Group>
          <Button onClick={addContact}>Upload</Button>
        </Form>
      </div>
    </Container>
  );
}

export default App;
