import React, { useState } from 'react';
import "../css/contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({ statement: "", name: "", email: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.statement.trim()) {
            alert('Please enter a problem statement');
            return;
        }
        
        setIsSubmitting(true);
        
        try {
            // Send data as URL-encoded form data to match Google Apps Script expectations
            const formDataToSend = new URLSearchParams();
            formDataToSend.append('data', JSON.stringify(formData));

            const response = await fetch('https://script.google.com/macros/s/AKfycby2Xi-GkA79NcsD1f7OM8wTeg9gqn09ljOlNCRjkYh_qbzO1AHU5dv8itzpQhgHh_Ei/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formDataToSend
            });
            
            if (response.ok) {
                const result = await response.json();
                if (result.success) {
                    setFormData({ statement: "", name: "", email: "" });
                    setShowSuccessModal(true);
                    setTimeout(() => setShowSuccessModal(false), 4000);
                } else {
                    throw new Error(result.error || 'Submission failed');
                }
            } else {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
        } catch (err) {
            console.error('Submission error:', err);
            alert(`Error: ${err.message}. Please try again.`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='contactPage'>
            <div className='problemForm'>
                <h2>What problems do you want to solve or see solved?</h2>
                <form onSubmit={handleSubmit}>
                    <div className='formStatement'>
                        <textarea 
                            placeholder="Please state the problem" 
                            name="statement" 
                            value={formData.statement} 
                            onChange={handleChange} 
                            maxLength="60000" 
                            required 
                        />
                    </div>
                    <div className='formName'>
                        <input 
                            type="text" 
                            placeholder="Name (Optional)" 
                            name="name" 
                            value={formData.name} 
                            maxLength="400" 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className='formEmail'>
                        <input 
                            type="email" 
                            placeholder="Email (Optional)" 
                            name="email" 
                            value={formData.email} 
                            maxLength="400" 
                            onChange={handleChange} 
                        />
                    </div>
                    <button 
                        className="formButton" 
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
                <h3>PS. No Problem is too small</h3>
                
                {/* Removed link to problems page for privacy */}
            </div>

            {showSuccessModal && (
                <div className="successModal">
                    <div className="modalContent">
                        <div className="modalIcon">🚀</div>
                        <h2 className="modalTitle">BOOM! Problem Launched! 🌟</h2>
                        <p className="modalMessage">
                            Your problem has been launched into the universe!<br/>
                            You're officially part of the solution revolution.<br/>
                            Keep being awesome! 💪
                        </p>
                        <button 
                            className="modalButton"
                            onClick={() => setShowSuccessModal(false)}
                        >
                            Awesome! ✨
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
