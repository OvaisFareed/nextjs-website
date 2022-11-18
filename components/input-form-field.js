export const InputFormField = ({
  label,
  fieldName,
  type,
  placeholder,
  validationMessage,
  value,
  isRequired,
}) => {
  const handleChange = () => {
    // Do Something
  };

  return (
    <div className="form-group">
      <label>
        {label} {isRequired ? <span className="fc-orange">*</span> : null}
      </label>
      <input
        className="form-control "
        data-val="true"
        data-val-required={validationMessage}
        id={fieldName}
        name={fieldName}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleChange}
      />
      <span
        className="field-validation-valid errormessage"
        data-valmsg-for={fieldName}
        data-valmsg-replace="true"
      ></span>
    </div>
  );
};
