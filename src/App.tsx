import React, { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import workAreaImg from './quandale.jpeg';
import './App.css';

interface LoginPageProps {
  onLogin: () => void;
}

const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  return (
    <ReactMarkdown>{content}</ReactMarkdown>
  );
};

const HoverButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const handleMouseOver = () => setIsHover(true);
  const handleMouseOut = () => setIsHover(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsClick(true);
    setTimeout(() => setIsClick(false), 200); // Reset isClick after 200ms

    if (props.onClick) {
      props.onClick(event);
    }
  };

  return (
    <button
      {...props}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      style={{
        ...props.style,
        backgroundColor: isClick ? 'skyblue' : (isHover ? '#0056b3' : '#007bff'),
        color: isClick ? 'black' : 'white',
        borderStyle: isClick ? 'solid' : 'none',
        borderWidth: '2px',
      }}
    >
      {props.children}
    </button>
  );
};

const Navbar: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void }> = ({ activeTab, setActiveTab }) => {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        Shwipe
      </div>
      <ul style={tabListStyle}>
        <li><HoverButton style={tabItemStyle(activeTab === 'Swipe')} onClick={() => setActiveTab('Swipe')}>Swipe</HoverButton></li>
        <li><HoverButton style={tabItemStyle(activeTab === 'Decisions')} onClick={() => setActiveTab('Decisions')}>Decisions</HoverButton></li>
        <li><HoverButton style={tabItemStyle(activeTab === 'Files')} onClick={() => setActiveTab('Files')}>Files</HoverButton></li>
      </ul> 
    </nav>
  );
};  

interface LoginPageProps {
  onLogin: () => void;
}
interface LogoutProps {
  onLogout: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Simple validation
    if (username === 'user' && password === 'password') {
      onLogin();
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="app">
      <head>
        <link href='https://fonts.googleapis.com/css?family=Spinnaker' rel='stylesheet'/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className="loginHeader"> 
        <div className = "loginbkg">
        <p className = "loginTitle">
          LOGIN
        </p>

        <p className = "loginText">
              <i className="fa-solid fa-user"></i>
              <input 
              type="text" 
              className="inputText"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              /> 
        </p>
        <p className = "loginText">
              <i className="fa-solid fa-lock"></i>
              <input 
              type="password" 
              className="inputText"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              /> 
        </p>
        <br></br>
        <button className = "loginButton" onClick={handleLoginClick}>Login</button>
        <br></br>
        <br></br>
        <p className = "loginFonts">
          Need An Account? 
        <a  
          className="loginLink"
          onClick={handleSignupClick}
        >
          Sign Up
        </a>
        </p>
        </div>

      </body>
    </div>
  );
};

const SignupPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSignupClick = () => {
    // Simple validation
    if (username && password) {
      onLogin(); // Assume signup is successful
      navigate('/');
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className="app">
      <head>
        <link href='https://fonts.googleapis.com/css?family=Spinnaker' rel='stylesheet'/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className = "login"> 
        <div className = "loginbkg">
        <p className = "loginTitle">
          SIGN UP
        </p>

        <p className = "loginText">
              <i className="fa-solid fa-user"></i>
              <input 
              type="text" 
              className="inputText"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              /> 
        </p>
        <p className = "loginText">
              <i className="fa-solid fa-lock"></i>
              <input 
              type="password" 
              className="inputText"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              /> 
        </p>
        <br></br>
        <button className = "loginButton" onClick={handleSignupClick}>Sign Up</button>
        <br></br>
        </div>

      </body>
    </div>
  );
};

const AppContent: React.FC<LogoutProps> = ({onLogout}) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div>
      <HoverButton onClick={handleLogoutClick}>
        Log out
      </HoverButton>

      <div className = "mainBackground">
        <div className = "mainWorkArea"> 
          
        </div>
        <button className = "mainButton">m-AI-ke!</button>
      </div>
    </div>
  );
}

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        {isAuthenticated ? (
          <Route path="*" element={<AppContent onLogout={handleLogout} />} />
        ) : (
          <>
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignupPage onLogin={handleLogin} />} />
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export { LoginPage, App };


const styleSheet = document.styleSheets[0];
const keyframes =
  `@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);


const navStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
};

const logoStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#007bff',
};

const tabListStyle: React.CSSProperties = {
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const tabItemStyle = (isActive: boolean): React.CSSProperties => ({
  margin: '0 1rem',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  borderRadius: '4px',
  borderStyle: 'none',
  backgroundColor: isActive ? '#e6f2ff' : 'transparent',
  color: isActive ? '#007bff' : '#333',
  transition: 'all 0.3s',
});

export default App;