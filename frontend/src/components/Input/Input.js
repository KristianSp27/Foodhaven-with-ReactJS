import React from 'react'

export default function Input({label, type, defaultValue, onChange, onBlur, name, error}, ref) {

const getErrorMessage = () => {
    if (!error) return;
    if (error.message) return error.message;
    //default
    switch (error.type) {
        case 'required':
            return 'This field is required';
        case 'minLength':
            return 'Input is too short';
        default:
            return '*';
    }
}

  return (
    <div>Input</div>
  )
}

export default React.forwardRef(Input)
