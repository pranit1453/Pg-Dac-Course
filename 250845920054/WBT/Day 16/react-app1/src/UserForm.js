import { useState } from "react"
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
    })

    const handleClick = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }
    /*
        It pauses the execution of the async function until the Promise it's waiting on is resolved or rejected.
        When await is used with a Promise, the function execution pauses until the Promise settles. If the Promise 
        resolves, the await expression evaluates to the resolved value. If the Promise rejects, the await expression 
        throws the rejected value as an error. 
    */
    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8080/save-user-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
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
            <div>
                <h2>User Details Form</h2>
                <label>Name: <input type="text" name="name" value={formData.name} onChange={handleClick}></input></label><br />
                <label>Email: <input type="email" name="email" value={formData.email} onChange={handleClick}></input></label><br />
                <label>Education Level:
                    <select name="education" value={formData.education} onChange={handleClick}>
                        <option value="">Select</option>
                        <option value="Graduate">Graduate</option>
                        <option value="PostGraduate">Post Graduate</option>
                        <option value="UnderGraduate">Under Graduate</option>
                    </select>

                </label>

                {/* conditional Rendering */}
                {formData.education === 'Graduate' && (
                    <GraduateComponent onChange={handleClick} data={formData} />
                )}
                {formData.education === 'PostGraduate' && (
                    <PGComponent onChange={handleClick} data={formData} />
                )}
                {formData.education === 'UnderGraduate' && (
                    <UGComponent onChange={handleClick} data={formData} />
                )}
                <button onClick={handleSubmit}>Submit</button>

            </div>
        </>
    )
}

export default UserDetailsForm;