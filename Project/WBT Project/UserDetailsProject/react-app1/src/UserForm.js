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
    const [errors, setErrors] = useState({});
    const handleClick = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    /*
        It pauses the execution of the async function until the Promise it's waiting on is resolved or rejected.
        When await is used with a Promise, the function execution pauses until the Promise settles. If the Promise 
        resolves, the await expression evaluates to the resolved value. If the Promise rejects, the await expression 
        throws the rejected value as an error. 
    */
    const handleSubmit = async () => {
        const newErrors = {};

        // Basic validations
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.education) newErrors.education = 'Please select education level';

        // Conditional validations
        if (formData.education === 'Graduate') {
            if (!formData.degree) newErrors.degree = 'Degree is required';
            if (!formData.year) newErrors.year = 'Year is required';
            if (!formData.score) newErrors.score = 'Score is required';
            if (!formData.univ) newErrors.univ = 'University is required';
        }

        if (formData.education === 'PostGraduate') {
            if (!formData.pgScore) newErrors.pgScore = 'PG Score is required';
            if (!formData.pgyear) newErrors.pgyear = 'PG Year is required';
            if (!formData.thesis) newErrors.thesis = 'Thesis topic is required';
        }

        if (formData.education === 'UnderGraduate') {
            if (!formData.ssc) newErrors.ssc = 'SSC score is required';
            if (!formData.hsc) newErrors.hsc = 'HSC score is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
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
                <label>Name: <input type="text" name="name" value={formData.name} onChange={handleClick}></input></label>
                {errors.name && <span className="error">{errors.name}</span>}<br />
                <label>Email: <input type="email" name="email" value={formData.email} onChange={handleClick}></input></label>
                {errors.email && <span className="error">{errors.email}</span>}<br />
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
                    <GraduateComponent onChange={handleClick} data={formData} errors={errors} />
                )}
                {formData.education === 'PostGraduate' && (
                    <PGComponent onChange={handleClick} data={formData} errors={errors}/>
                )}
                {formData.education === 'UnderGraduate' && (
                    <UGComponent onChange={handleClick} data={formData} errors={errors} />
                )}
                <button onClick={handleSubmit}>Submit</button>

            </div>
        </>
    )
}

export default UserDetailsForm;