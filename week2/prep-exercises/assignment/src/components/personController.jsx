import { useState, useEffect } from "react";
import Person from "./Person";

const PersonController = () => {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    try {
      const response = await fetch("https://randomuser.me/api?results=1");
      const data = await response.json();
      const user = data.results[0];

      // Extract only necessary details
      const formattedPerson = {
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        picture: user.picture.medium,
      };

      setPerson(formattedPerson);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Person person={person} />
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={getPerson}
      >
        Generate New Person
      </button>
    </div>
  );
};

export default PersonController;
