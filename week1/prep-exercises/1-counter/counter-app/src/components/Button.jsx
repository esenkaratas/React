import PropTypes from "prop-types";

const Button = ({ addOne }) => {
  return (
    <button onClick={addOne} style={{ fontSize: "18px", padding: "10px 20px" }}>
      Add 1!
    </button>
  );
};

Button.propTypes = {
  addOne: PropTypes.func.isRequired,
};

export default Button;
