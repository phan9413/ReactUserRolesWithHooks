const Button = ({ isDisabled, children }) => {
  const props = isDisabled ? { disabled: true } : {};
  return (
    <button {...props} style={{ width: "210px" }}>
      {children}
    </button>
  );
};
export default Button;
