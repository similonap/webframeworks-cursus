import React, { useState } from "react";

const ContactForm: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [confirmationText, setConfirmationText] = useState("");

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setConfirmationText(`Thanks ${firstName} ${lastName}! We will contact you at ${email}.`);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
    };

    const isValid = firstName && lastName && email && message;

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: 8,
                maxWidth: 480,
            }}
        >
            <label htmlFor="firstName">First name:</label>
            <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
            />
            <label htmlFor="lastName">Last name:</label>
            <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />
            <button type="submit" style={{ gridColumn: "1 / span 2" }} disabled={!isValid}>
                Send
            </button>
            {confirmationText && (
                <div style={{ gridColumn: "1 / span 2" }}>{confirmationText}</div>
            )}
        </form>
    );
};

const App: React.FC = () => {
    return <ContactForm />;
};

export default App;
