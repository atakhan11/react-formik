import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Form.css';


const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Çox qısadır.!')
        .max(50, 'Çox uzundur.!')
        .required('Ad məcburidir.!'),
    email: Yup.string()
        .required('Mail məcburidir.!'),
    phone: Yup.string()
        .min(10, 'Ən az 10 rəqəm olmalıdır.!')
        .required('Telefon məcburidir.!'),
    companyName: Yup.string()
        .min(2, 'Çox qısadır.!')
        .required('Şirkət adı məcburidir.!'),
    subject: Yup.string()
        .min(10, 'Çox qısadır.!')
        .max(100, 'Çox uzundur.!')
        .required('Məzmun məcburidir.!'),
    message: Yup.string()
        .min(10, 'Mesaj çox qısadır.!')
        .required('Mesaj məcburidir.!'),
});

const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            companyName: '',
            subject: '',
            message: '',
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {

            axios.post('https://northwind.vercel.app/api/categories', values);
            resetForm();

        },
    });

    return (

        <form onSubmit={formik.handleSubmit} style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            padding: '2rem 0'
        }}>

            <div style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap : '2rem'

            }}>

                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ad/Soyad"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}

                    style={{
                        width: '47%',
                        padding: '1rem 2rem',
                        borderRadius: '10px',
                        fontSize: '1.5rem',
                        border: '1px solid'

                    }}
                />
                {formik.touched.name && formik.errors.name && (
                    <div className="error" style={{ color: 'red' }}>{formik.errors.name}</div>
                )}

                <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}

                    style={{
                        width: '47%',
                        padding: '1rem 2rem',
                        borderRadius: '10px',
                        fontSize: '1.5rem',
                        border: '1px solid'

                    }}
                />
                {formik.touched.email && formik.errors.email && (
                    <div className="error" style={{ color: 'red' }}>{formik.errors.email}</div>
                )}
            </div>

            <div style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap : '2rem'
            }}>
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Telefon"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}

                    style={{
                        width: '47%',
                        padding: '1rem 2rem',
                        borderRadius: '10px',
                        fontSize: '1.5rem',
                        border: '1px solid'

                    }}
                />
                {formik.touched.phone && formik.errors.phone && (
                    <div className="error" style={{ color: 'red' }}>{formik.errors.phone}</div>
                )}


                <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    placeholder="Şirkət Adı"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.companyName}

                    style={{
                        width: '47%',
                        padding: '1rem 2rem',
                        borderRadius: '10px',
                        fontSize: '1.5rem',
                        border: '1px solid'

                    }}
                />
                {formik.touched.companyName && formik.errors.companyName && (
                    <div className="error" style={{ color: 'red' }}>{formik.errors.companyName}</div>
                )}
            </div>
            <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Məzmun"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}

                style={
                    {
                        width: '92.7%',
                        padding: '1rem 2rem',
                        borderRadius: '10px',
                        fontSize: '1.5rem',
                        border: '1px solid'
                    }
                }
            />
            {formik.touched.subject && formik.errors.subject && (
                <div className="error" style={{ color: 'red' }}>{formik.errors.subject}</div>
            )}

            <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Mesajınız"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}

                style={
                    {
                        width: '92.7%',
                        padding: '1rem 2rem',
                        borderRadius: '10px',
                        fontSize: '1.5rem'
                    }
                }   
            />
            {formik.touched.message && formik.errors.message && (
                <div className="error" style={{ color: 'red' }}>{formik.errors.message}</div>
            )}

            <button type="submit" style={{
                padding: '1rem 2rem',
                borderRadius: '15px',
                fontSize: '1.5rem',
                backgroundColor: '#6266ea',
                color: 'white',
                cursor: 'pointer',
            }}>Send Message</button>
        </form>

    );
};

export default Form;
