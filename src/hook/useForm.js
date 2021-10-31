import React, {useState, useEffect} from 'react'

export default function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErorrs] = useState({});

    const handleChange = (evt) => {
        const {value, name} = evt.target;

        setValues((values) => ({
            ...values, [name]: value,
        }));
    }

    const handleBlur = (evt) => {
        const {value, name} = evt.target;

        if (!value) {
            setErorrs((errors) => ({
                ...errors, [name]: "This feild is requied"
            }));
        }
    }
    return {values, errors, handleChange, handleBlur};
}
