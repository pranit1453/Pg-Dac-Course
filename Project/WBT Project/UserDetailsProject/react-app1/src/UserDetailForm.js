import { useState } from "react";
import GraduateComponent from './GraduateComponent';
import PGComponent from './PGComponent';
import UGComponent from './UGComponent';
import './UserForm.css';

const UserDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    education: '',
    degree: '',
    year: '',
    score: '',
    univ: '',
    pgScore: '',
    pgyear: '',
    thesis: '',
    ssc: '',
    hsc: ''
  });

  /*
    The spread syntax (...) is used to create a shallow copy of the prev (previous) state object. 
    This ensures the update is immutable; you're not modifying the old state directly, but creating a new object 
    with the desired changes.
    [name]: value	This uses computed property names. The name variable (which typically holds the name attribute of a 
    form input, e.g., "email" or "password") is used as the key in the new object, and the value variable (which holds 
    the new input value) is set as the corresponding value.
  */
  const handleClick = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default form submission
    try {
      const response = await fetch('http://localhost:8080/save-user-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.text();
      alert(result);
    } catch (error) {
      alert('Failed to save data');
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>User Details Form</h2>

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleClick}
            required
          />
        </label><br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleClick}
            required
          />
        </label><br />

        <label>
          Education Level:
          <select
            name="education"
            value={formData.education}
            onChange={handleClick}
            required
          >
            <option value="">Select</option>
            <option value="Graduate">Graduate</option>
            <option value="PostGraduate">Post Graduate</option>
            <option value="UnderGraduate">Under Graduate</option>
          </select>
        </label><br />

        {/* Conditional Rendering */}
        {formData.education === 'Graduate' && (
          <GraduateComponent onChange={handleClick} data={formData} />
        )}
        {formData.education === 'PostGraduate' && (
          <PGComponent onChange={handleClick} data={formData} />
        )}
        {formData.education === 'UnderGraduate' && (
          <UGComponent onChange={handleClick} data={formData} />
        )}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserDetailsForm;
