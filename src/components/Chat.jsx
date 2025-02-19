import './Chat.css';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { AiFillHome } from 'react-icons/ai';
import { BiSolidSend } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/mono-blue.css";




const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;


const Chat = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages])

    useEffect(() => {
        const savedMessages = localStorage.getItem('chatMessages');
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }, [messages]);


    const [loading, setLoading] = useState(false);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const userMessage = { id: Date.now(), text: newMessage, sender: 'You' };
        setMessages((prev) => [...prev, userMessage]);
        setNewMessage('');
        setLoading(true);

        try {
            const response = await axios.post(
                `${GEMINI_API_URL}?key=${API_KEY}`,
                {
                    contents: [{ parts: [{ text: newMessage }] }]
                },
                { headers: { 'Content-Type': 'application/json' } }
            );
            const botMessage = { id: Date.now() + 1, text: response.data.candidates[0].content.parts[0].text, sender: 'Gemini' };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            setMessages((prev) => [...prev, { id: Date.now() + 2, text: 'Error fetching response', sender: 'Gemini' }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page margin-xl padding-xl padding-y-l radius-l display-column wide-50">
            <button className="button ghost icon xsmall radius-s display-row gap-s min-content-w" onClick={() => navigate('/')}>
                <AiFillHome size={16} color="white" /> Home
            </button>
            <div className="divider-h divider-700" />
            <h1 className="typo-h1">Chat Room</h1>
            <div ref={chatContainerRef} className="chat-box display-column padding grow auto-y-overflow">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message ${msg.sender === 'You' ? 'my-message' : 'other-message'}`}>
                        <div className="message-content typo-b-m text-500">
                            {/*<ReactMarkdown >{msg.text}</ReactMarkdown>*/}
                            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                                {msg.text}
                            </ReactMarkdown>
                        </div>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSendMessage} className="text-field-container padding-s display-row gap-s radius-l">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="transparent text-field wide"
                />
                <button id="submit-button" type="submit" className="button display-row aline-center justify-center" disabled={loading}>
                    {loading
                        ? <div className="loader"></div>
                        : <> Send <BiSolidSend /></>
                    }
                </button>

            </form>
        </div>
    );
};

export default Chat;
