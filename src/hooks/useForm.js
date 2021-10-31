import React, {useState} from 'react'

// Customer hook: Giúp làm việc với Form
// Const {} = useForm({username: "", email: ""})
export default function useForm(initialValues) {

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (evt) => {
        const {value, name} = evt.target;

        setValues((values) => ({
            ...values, [name]: value,
        }));
    };

    const handleBlur = (evt) => {
        const {value, name} = evt.target;

        if (!value) {
            setErrors((errors) => ({
                ...errors,
                [name]: "This field is requied"
            }));
        }
    }
    return {values, errors, handleChange, handleBlur};
}
