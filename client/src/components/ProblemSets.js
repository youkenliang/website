import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/contact.css";

const ProblemSet = () => {
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState('');

    // Use environment variable for password - more secure
    const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD || 'admin123';
    console.log('Environment variable loaded:', !!process.env.REACT_APP_ADMIN_PASSWORD);
    console.log('Password length:', ADMIN_PASSWORD ? ADMIN_PASSWORD.length : 0);
    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login attempt with password length:', password.length);
        console.log('Expected password length:', ADMIN_PASSWORD.length);
        console.log('Password match:', password === ADMIN_PASSWORD);
        
        if (password === ADMIN_PASSWORD) {
            console.log('Login successful!');
            setIsAuthenticated(true);
            setAuthError('');
            fetchAllProblems();
        } else {
            console.log('Login failed - incorrect password');
            setAuthError('Incorrect password');
        }
    };

    useEffect(() => {
        // Only fetch problems if authenticated
        if (isAuthenticated) {
            fetchAllProblems();
        }
    }, [isAuthenticated]);

    const fetchAllProblems = async () => {
        try {
            setLoading(true);
            // Use the same Google Apps Script URL with action=getProblems
            const response = await fetch('https://script.google.com/macros/s/AKfycby2Xi-GkA79NcsD1f7OM8wTeg9gqn09ljOlNCRjkYh_qbzO1AHU5dv8itzpQhgHh_Ei/exec?action=getProblems');
            
            if (response.ok) {
                const result = await response.json();
                if (result.success) {
                    setProblems(result.problems || []);
                    setError(null);
                } else {
                    throw new Error(result.error || 'Failed to fetch problems');
                }
            } else {
                throw new Error('Failed to fetch problems');
            }
        } catch (err) {
            console.error('Error fetching problems:', err);
            setError('Unable to load problems. Please check your Google Sheet directly.');
            setProblems([]);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (timestamp) => {
        if (!timestamp) return 'Unknown';
        try {
            return new Date(timestamp).toLocaleString();
        } catch (e) {
            return timestamp;
        }
    };

    // Show login form if not authenticated
    if (!isAuthenticated) {
        return (
            <div className="contactPage">
                <div className="problemForm">
                    <h2>🔒 Admin Access Required</h2>
                    <form onSubmit={handleLogin}>
                        <div style={{ marginBottom: '20px' }}>
                            <input 
                                type="password" 
                                placeholder="Enter admin password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px',
                                    fontSize: '16px'
                                }}
                            />
                        </div>
                        {authError && (
                            <p style={{ color: 'red', marginBottom: '10px' }}>{authError}</p>
                        )}
                        <button 
                            className="formButton" 
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <Link to="/contact" style={{ color: '#007bff', textDecoration: 'none' }}>
                            ← Back to Contact
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="contactPage">
                <div className="problemForm">
                    <h2>Loading Problems...</h2>
                    <p>Please wait while we fetch the submitted problems.</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="contactPage">
                <div className="problemForm">
                    <h2>Problem Sets</h2>
                    <div style={{ padding: '20px', textAlign: 'center' }}>
                        <p style={{ color: '#666', marginBottom: '20px' }}>{error}</p>
                        <button 
                            className="formButton"
                            onClick={() => window.open('https://docs.google.com/spreadsheets/d/1mx5TPOkmoQU7LXi5wmlrR7wc7RBMS0Gj5kdYD829KgQ/edit#gid=0', '_blank')}
                        >
                            View in Google Sheet 📊
                        </button>
                        <br/><br/>
                        <Link to="/contact" style={{ color: '#007bff', textDecoration: 'none' }}>
                            ← Back to Submit Problem
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="contactPage">
            <div className="problemForm">
                <h2>Submitted Problems ({problems.length})</h2>
                {problems.length === 0 ? (
                    <div style={{ padding: '20px', textAlign: 'center' }}>
                        <p>No problems found. Be the first to submit one!</p>
                        <Link to="/contact" style={{ color: '#007bff', textDecoration: 'none' }}>
                            Submit a new problem
                        </Link>
                    </div>
                ) : (
                    <div className='problems'>
                        {problems.map(problem => (
                            <div className="problem" key={problem.id}>
                                <h3>Problem Statement:</h3>
                                <p>{problem.statement}</p>
                                <h4>Submitted by:</h4>
                                <p>Name: {problem.name || 'Anonymous'}</p>
                                <p>Email: {problem.email || 'Not provided'}</p>
                                <p>Submitted: {formatDate(problem.timestamp)}</p>
                </div>
            ))}
                    </div>
                )}
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/contact" style={{ color: '#007bff', textDecoration: 'none' }}>
                        ← Back to Submit Problem
                    </Link>
                </div>
        </div> 
    </div>
    );
};

export default ProblemSet;