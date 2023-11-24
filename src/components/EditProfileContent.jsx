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

      <div className="p-4 rounded-top " style={{backgroundColor:'#432818', color:'#ffff'}}>
              <h3 className='my-auto'>Edit Profile</h3>

      </div>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          name: 'Muhammad Ali',
          email: 'Ali@mail.com',
          tanggal_lahir: '',
          telepon: '',
          alamat: '',
          file: null,
          terms: false,
          bio:'',

        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit} className='p-3'>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik101"
                className="position-relative"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isValid={touched.name && !errors.name}
                />
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik102"
                className="position-relative"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                />

                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormiktanggallahir">
                <Form.Label>Tanggal Lahir</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="date"
                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    name="tanggal_lahir"
                    value={values.tanggal_lahir}
                    onChange={handleChange}
                    isInvalid={!!errors.tanggal_lahir}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.tanggal_lahir}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik103"
                className="position-relative"
              >
                <Form.Label>Nomomr Telepon</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="phone"
                  name="telepon"
                  value={values.telepon}
                  onChange={handleChange}
                  isInvalid={!!errors.telepon}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.telepon}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik104"
                className="position-relative"
              >
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="gender"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  isInvalid={!!errors.gender}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.gender}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik105"
                className="position-relative"
              >
                <Form.Label>Favorite</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="favorite"
                  name="favorite"
                  value={values.favorite}
                  onChange={handleChange}
                  isInvalid={!!errors.favorite}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.favorite}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="position-relative mb-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                required
                name="bio"
                onChange={handleChange}
                isInvalid={!!errors.bio}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.bio}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="position-relative mb-3">
              <Form.Label>Alamat</Form.Label>
              <Form.Control
                as="textarea"
                required
                name="alamat"
                onChange={handleChange}
                isInvalid={!!errors.alamat}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.alamat}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="position-relative mb-3">
              <Form.Label>File Foto</Form.Label>
              <Form.Control
                type="file"
                required
                name="file"
                onChange={handleChange}
                isInvalid={!!errors.file}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.file}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="position-relative mb-3">
              <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik106"
                feedbackTooltip
              />
            </Form.Group>
            
            <Button type="submit" className='btn-save'>Simpan</Button>
          </Form>
        )}
      </Formik>
    </Fade>
    </>
  );
}

export default FormExample;