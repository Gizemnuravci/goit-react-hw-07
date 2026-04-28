import { useDispatch } from "react-redux";
import { addContact } from "../../Redux/contacts0ps";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
    number: Yup.string().min(3, "Too short!").required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    
    >
      <Form className={css.form}>
        <label>Name</label>
        <Field type="text" name="name" className={css.input} />
        <ErrorMessage name="name" component="span" />
        
        <label>Number</label>
        <Field type="text" name="number" className={css.input} />
        <ErrorMessage name="number" component="span" />
        

        <button type="submit" className={css.buton}>Add contact</button>

      </Form>
    </Formik>
  );
};

export default ContactForm;