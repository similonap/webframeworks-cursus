import React from "react";

interface Message {
    id: number;
    name: string;
    message: string;
}

const ChatBox = () => {
    const [name, setName] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [messages, setMessages] = React.useState<Message[]>([]);

    const send = () => {
        setMessages([...messages, { id: messages.length, name, message }]);
        setMessage("");
    }

    const deleteMessage = (index: number) => {
        setMessages(messages.filter((message, i) => i !== index));
    }


    return (
        <div>
            <div>
                <label>Naam: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/></label>
                <label style={{marginLeft: 10}}>Bericht: <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/></label>
                <button style={{marginLeft: 10}} onClick={send}>Verstuur</button>
            </div>
            <div>
                {messages.map((message,index) => (
                    <div key={message.id} style={{display: "grid", gridTemplateColumns: "30px 30px 120px 1fr", gridGap: 5}}>
                        <button onClick={() => deleteMessage(index)}>X</button>
                        <span>[{message.id}]</span>
                        <span style={{fontWeight: "bold"}}>{message.name}</span>
                        <span>{message.message}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

const App = () => {
    return (
        <div>
        <ChatBox />
        </div>
    );
};

export default App;