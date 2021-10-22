import React from 'react'
import PropTypes from 'prop-types'

const FormElements = (props) => {
  console.log(props)
  const { element, label, type, name, value, cb, error } = props
  let field = null
  switch (element) {
    case 'input':
      field = (
        <div className='mb-3'>
          <label className='form-label'>{label}</label>
          <input
            type={type}
            className={
              error && value === '' ? 'form-control is-invalid' : 'form-control'
            }
            name={name}
            value={value}
            onChange={cb}
          />
          <div className={`form-text ${value === '' ? 'validate' : 'hidden'} `}>
            {error}
          </div>
        </div>
      )

      break
    case 'textarea':
      field = (
        <div className='mb-3'>
          <label htmlFor={name} className='form-label'>
            {label}
          </label>
          <textarea
            className={
              error && value === '' ? 'form-control is-invalid' : 'form-control'
            }
            name={name}
            id={name}
            rows='3'
            value={value}
            onChange={cb}
          ></textarea>
          <div className={`form-text ${value === '' ? 'validate' : 'hidden'} `}>
            {error}
          </div>
        </div>
      )
      break
    default:
      field = null
      break
  }
  return field
}
FormElements.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  cb: PropTypes.func.isRequired,
}
FormElements.defaultProps = {
  type: 'text',
}
export default FormElements
