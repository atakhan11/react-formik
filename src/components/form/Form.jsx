import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "./Form.module.css";

const validationSchema = Yup.object({
  ad: Yup.string()
    .min(2, "Ad ")
    .required("Ad tələb olunur"),
  email: Yup.string()
    .min(2, "Email")
    .required("Email tələb olunur"),
  phone: Yup.string()
    .matches("")
    .required("telefon tələb olunur"),
    companyname: Yup.string()
    .min(2, "Şirkət adı")
    .required("Şirkət adı tələb olunur"),
    subject: Yup.string()
    .min(2, "Mövzu")
    .required("Mövzu tələb olunur"),
    message: Yup.string()
    .min(2, "Mesaj")
    .required("Mesaj tələb olunur"),
});

const Form = () => {
  const formik = useFormik({
    initialValues: {
      ad: "",
      email: "",
      phone: "",
        companyname: "",
        subject: "",
        message: "",
    
    },
    validationSchema,
    onSubmit: values => {
        axios.post("https://northwind.vercel.app/api/categories", values)
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="ad">Ad</label>
        <input
          id="ad"
          name="ad"
          type="text"
          onChange={formik.handleChange}
        />
        {formik.touched.ad && formik.errors.ad ? (
          <div className={styles.error}>{formik.errors.ad}</div>
        ) : null}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className={styles.error}>{formik.errors.email}</div>
        ) : null}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className={styles.error}>{formik.errors.phone}</div>
        ) : null}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="companyname">Company Name</label>
        <input
          id="companyname"
          name="companyname"
          type="text"
          onChange={formik.handleChange}
        />
        {formik.touched.companyname && formik.errors.companyname ? (
          <div className={styles.error}>{formik.errors.companyname}</div>
        ) : null}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          onChange={formik.handleChange}
        />
        {formik.touched.subject && formik.errors.subject ? (
          <div className={styles.error}>{formik.errors.subject}</div>
        ) : null}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <input
          id="message"
          name="message"
          type="text"
          onChange={formik.handleChange}
        />
        {formik.touched.message && formik.errors.message ? (
          <div className={styles.error}>{formik.errors.message}</div>
        ) : null}
      </div>

      <button type="submit" className={styles.submitButton}>
        Send Message
      </button>
    </form>
  );
};

export default Form;