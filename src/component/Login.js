import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Center } from 'react-containers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Entry=() =>{
    const notify = () => toast.success("Login Successful!!🦄");
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="save my password" />
      </Form.Group>
      <Center><Button variant="primary"   onClick={notify}>
        Login
      </Button></Center>
      <ToastContainer/>
    </Form>
  );
}

export default Entry;