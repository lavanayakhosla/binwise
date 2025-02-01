import React, { useState } from "react";
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createAccount } from '../Redux/Slices/ProductSlice';
import "./signup.css"; // Import the CSS file

const MunicipalityForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [signupState, setSignupState] = useState({
        name: '',
        photo: null,
        phone: '',
        email: '',
        state: '',
        district: '',
        password: '',
    });

    function handleInput(e) {
        const { name, value } = e.target;
        setSignupState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleFileChange(e) {
        const file = e.target.files[0];
        if (file) {
            setSignupState(prevState => ({
                ...prevState,
                photo: file
            }));
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("Signup state:", signupState);

        if (!signupState.phone || !signupState.name || !signupState.district || !signupState.email || !signupState.state || !signupState.password) {
            toast.error("Missing values from the form");
            return;
        }

        if (signupState.phone.length < 10) {
            toast.error("Mobile number should be at least 10 characters long");
            return;
        }

        // Password validation: at least 6 characters, one uppercase, one number, and one special character
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
        if (!passwordRegex.test(signupState.password)) {
            toast.error("Password must be at least 6 characters long, include one uppercase letter, one number, and one special character");
            return;
        }

        const formData = new FormData();
        formData.append("name", signupState.name);
        formData.append("email", signupState.email);
        formData.append("state", signupState.state);
        formData.append("district", signupState.district);
        formData.append("phone", signupState.phone);
        formData.append("password", signupState.password);
        formData.append("photo", signupState.photo); // Append file

        console.log("FormData:", formData);

        const apiResponse = await dispatch(createAccount(formData));
        if (apiResponse.payload.data.success) {
            navigate('/ScrapRates');
        }

        console.log("API response:", apiResponse);
    }

    return (
        <div className="continer">
            <form className="scrap-form" onSubmit={handleSubmit}>
                <h2 className="form-title">Register as Municipality</h2>

                <label>Name</label>
                <input type="text" name="name" onChange={handleInput} required placeholder="Enter your name" />

                <label>Phone Number</label>
                <input type="tel" name="phone" onChange={handleInput} required placeholder="Enter your Phone Number" />

                <label>Email</label>
                <input type="email" name="email" onChange={handleInput} required placeholder="Enter your Email Address" />

                <label>State</label>
                <input type="text" name="state" onChange={handleInput} required placeholder="Enter State" />

                <label>District</label>
                <input type="text" name="district" onChange={handleInput} required placeholder="Enter District" />

                <label>Upload Profile Pic</label>
                <input type="file" name="photo" onChange={handleFileChange} accept="image/*" required />

                <label>Password</label>
                <input type="password" name="password" onChange={handleInput} required placeholder="Enter Password" />

                <button type="submit" className="register-btn">Register</button>
            </form>
        </div>
    );
};

export default MunicipalityForm;
