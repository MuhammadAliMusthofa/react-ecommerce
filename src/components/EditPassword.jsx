import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import Fade  from 'react-reveal/Fade';


function FormExample() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup.string().required(),
    
    email: yup.string().required(),
    tanggal_lahir: yup.date().required(),
    telepon: yup.string().required(),
    alamat: yup.string().required(),
    bio: yup.string().required(),
    file: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
  });

  return (
    <>

    <Fade right>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          
          password:'',

        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit} className='p-3'>
            
            <Row className="mb-3">
              
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik105"
                className="position-relative"
              >
                <Form.Label>Password Lama</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="input password lama"
                  name="favorite"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.favorite}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik105"
                className="position-relative"
              >
                <Form.Label>Password Baru</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="input password baru"
                  name="newPassword"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.favorite}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik105"
                className="position-relative"
              >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="konfirmasi password"
                  name="confirmPassword"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.favorite}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            
            
            <Button type="submit" className='btn-save'>Simpan</Button>
          </Form>
        )}
      </Formik>
    </Fade>
    </>
  );
}

export default FormExample;