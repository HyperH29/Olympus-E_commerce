import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo1 from './logo1.svg';
import './form.css';
function CreateForm() {
    return (
        <div  className="signin-card bg-light">
            <img width={150} className= "sign-logo" src={logo1} alt={logo1}/>
            <Form>
            <Form.Label>Sign In</Form.Label>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" xs={4}/>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Save Password" />
            </Form.Group>
            <Button variant="dark" type="submit">
                Sign In</Button>
        {/*Once sign is press button will load and hold for a few seconds then enter the main product page */}
        {/*        If the user enters the wrong details they will be asked to resubmit. */}
        </Form>
        </div>
    );
}

// If user signs in successfully, redirect to the home page
// else display error message
export default CreateForm;
