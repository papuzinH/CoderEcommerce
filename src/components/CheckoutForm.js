import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'react-bootstrap/esm/Button';



const CheckoutForm = ({ handleSubmit }) => {
    
    return (
        <>
            <Formik
                initialValues={{ email: '', name: '', phone: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Please enter your name';
                    }
                    if (!values.phone) {
                        errors.phone = 'Please tell us your phone';
                    }
                    if (!values.email) {
                        errors.email = 'We need to know your mail';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'mmm... this mail is not valid';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        handleSubmit(values)
                        setSubmitting(false);
                    }, 200);
                }}
            >
                {({ isSubmitting }) => (
                    <Form id='my-form' className='d-flex flex-column'>
                        <Field className="w-50 m-auto border-0 py-2 border-bottom border-dark mb-2" placeholder="Name" type="text" name="name" />
                        <ErrorMessage className="w-50 m-auto text-danger" name="name" component="span" />
                        <Field className="w-50 m-auto border-0 py-2 border-bottom border-dark mb-2" placeholder="Email" type="email" name="email" />
                        <ErrorMessage className="w-50 m-auto text-danger" name="email" component="span" />
                        <Field className="w-50 m-auto border-0 py-2 border-bottom border-dark" placeholder="Phone" type="text" name="phone" />
                        <ErrorMessage className="w-50 m-auto text-danger" name="phone" component="span" />
                        <Button className='w-50 m-auto mt-5' type="submit" disabled={isSubmitting}>Enviar orden</Button>
                    </Form>
                )}
            </Formik>
        </>);
};
export default CheckoutForm;