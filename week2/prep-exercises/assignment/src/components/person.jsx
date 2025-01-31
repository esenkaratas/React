import PropTypes from "prop-types";

const Person = ({ person }) => {
  if (!person) return null;

  return (
    <div className="p-4 border rounded-lg shadow-md max-w-sm">
      <img
        src={person.picture}
        alt="Profile"
        className="rounded-full w-20 h-20 mx-auto"
      />
      <h2 className="text-lg font-bold text-center mt-2">
        {person.firstName} {person.lastName}
      </h2>
      <p className="text-center text-gray-600">{person.email}</p>
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    picture: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default Person;
