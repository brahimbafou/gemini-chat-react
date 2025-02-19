# Chat App with Markdown Support

A real-time chat application built with React, featuring **Markdown rendering** and **syntax highlighting** for code blocks. This app allows multiple users to communicate seamlessly within the same network.

## Features

✅ **Real-time Messaging** - Chat updates instantly without requiring a page refresh.
✅ **Markdown Support** - Messages can be formatted using Markdown.
✅ **Code Highlighting** - Syntax-highlighted code blocks using `react-syntax-highlighter`.
✅ **Lightweight & Fast** - Optimized for performance with minimal dependencies.

## Tech Stack

- **React** (useState, useEffect, useRef...)
- **React Markdown** for rendering Markdown messages
- **react-syntax-highlighter** for code formatting
- **CSS** for styling (custom utility classes, no external frameworks)

## Installation

1. **Clone the Repository:**
```bash
git clone http://github.com/brahimbafou/gemini-chat-react.git
cd chat-app-md
```

2. **Install Dependencies:**
```bash
npm install
```

3. **Run the App:**
```bash
npm start
```

## Project Structure

```
chat-app-md/
│── public/
│   ├── favicon.svg
│── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Chat.jsx
│   ├── theme/
│   │   ├── base.css
│   │   ├── color.css
│   │   ├── effects.css
│   │   ├── responsive.css
│   │   ├── typo.css
│   ├── App.jsx
│   ├── main.jsx
│── index.html
│── package.json
│── package-lock.json
│── README.md
```

## Usage

1. Open the app and navigate to the **Inscription** page.
2. Enter a username and join the chat.
3. Send Markdown-formatted messages.
4. Messages with code blocks are automatically highlighted.

## Screenshots

![Home page]()
:--:
Figure 1: Home page


![Chat page with Markdown]()
:--:
Figure 2: Chat page with Markdown support

## How It Works

- **Markdown Rendering**: Uses `react-markdown` to parse and display Markdown.
- **Syntax Highlighting**: Code blocks are styled with `react-syntax-highlighter`.
- **WebRTC Messaging**: Users connect directly for a seamless chat experience.
- **Auto Scroll**: The chat window scrolls automatically when new messages arrive.
- **Navigation**: Uses `react-router-dom` to switch between pages.

## Future Improvements

🚀 Add support for inline images and embedded media.
🚀 Implement user avatars and rich text editing.
🚀 Enhance UI with animations and improved styling.

## License

This project is licensed under the MIT License.

