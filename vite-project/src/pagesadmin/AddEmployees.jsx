import { Formik } from 'formik';
import * as Yup from 'yup';

function AddEmployees() {
 
  return (
    <Formik
    initialValues={{ firstName: '', lastName: '', email: '' }}
    validationSchema={Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    })} 
    onSubmit={(values, { setSubmitting }) => {
      async function addProduct() {
        const res = await fetch("https://fakestoreapi.com/products/",{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({values})});
        const data = await res.json();
      }
      addProduct()

    }}
  >
    {formik => (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          {...formik.getFieldProps('firstName')}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null} <br />

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          {...formik.getFieldProps('lastName')}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null} <br />

        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" {...formik.getFieldProps('email')} />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    )}
  </Formik>
  )
}

export default AddEmployees