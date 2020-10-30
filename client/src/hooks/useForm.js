// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (initialValue) => {
    const [values, setValue] = useState(initialValue);

    const handleChanges = (e) => {
        setValue({ ...values, [e.target.name]: e.target.value });
    };

    return([values, handleChanges]);
}