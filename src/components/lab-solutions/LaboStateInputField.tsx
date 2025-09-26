
import React, {useState} from 'react';

const ContactForm = () => {
    const [input, setInput] = useState('');

    return (
        <>
            <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
            <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
            <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
            <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
            <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
        </>
    );
};

export default ContactForm;


