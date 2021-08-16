import React from 'react'

function Label({ label, isRequired }) {
  return (
    <label className="label">
      {label}
      {isRequired && <span style={{ color: 'red' }}>*</span>}
    </label>
  )
}

function Error({ touched, error }) {
  return (
    <div>
      <div className="error">{touched && error}</div>
    </div>
  )
}

export default function Input({
    label,
    name,
    value,
    placeholder,
    onChange,
    onBlur,
    isRequired,
    touched,
    errors,
    ...props
    }) {

    const commonProps = {
        name,
        placeholder,
        onChange,
        onBlur,
        value,
        className: errors[name] ? 'input-error' : ''
    }

    return (
        <div class="form-item">
            <Label label={label} isRequired={isRequired} />
            <div>
                <input type="text" {...commonProps} />
                <Error touched={touched[name]} error={errors[name]} />
            </div>
        </div>
    )
}