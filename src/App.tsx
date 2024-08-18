import React, { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import backgroundImg from './wooden.png';
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
      <body className="App-header"> 
        <div className = "loginbkg">
        <p className = "App-title">
          LOGIN
        </p>

        <p className = "App-text">
              <i className="fa-solid fa-user"></i>
              <input 
              type="text" 
              className="inputText"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              /> 
        </p>
        <p className = "App-text">
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
        <p className = "App-fonts">
          Need An Account? 
        <a
          className="App-link"
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
      <body className="App-header"> 
        <div className = "loginbkg">
        <p className = "App-title">
          SIGN UP
        </p>

        <p className = "App-text">
              <i className="fa-solid fa-user"></i>
              <input 
              type="text" 
              className="inputText"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              /> 
        </p>
        <p className = "App-text">
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


const spinnerStyle: React.CSSProperties = {
  width: '50px',
  height: '50px',
  border: '5px solid lightgray',
  borderTop: '5px solid #007bff',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
};

// Keyframes for spinner animation
const styleSheet = document.styleSheets[0];
const keyframes =
  `@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);


const logoImageStyle: React.CSSProperties = {
  width: '3rem',
  height: '3rem',
  marginRight: '0.5rem',
};

const appContainerStyle: React.CSSProperties = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  userSelect: 'none',
  overflow: 'hidden',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
};

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

const contentStyle: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  overflow: 'hidden',
};

const cardAreaStyle: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
};

const backgroundImageStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '1000px',
  height: '700px',
  zIndex: 0,

};

const overlayStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 10,
  pointerEvents: 'none',
  transition: 'background-color 0.5s ease',
};

const sideImageStyle: React.CSSProperties = {
  position: 'absolute',
  transition: 'width 0.5s ease',
};

const decisionsViewStyle: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  height: '100%',
  backgroundColor: '#f5f5f5',
};

const columnStyle: React.CSSProperties = {
  flex: 1,
  padding: '1rem',
  overflowY: 'auto',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  boxShadow: 'inset 1px 20px 50px -30px rgba(0,0,0,0.4)',
};

const columnHeaderStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '1rem',
  color: '#007bff',
};

const decisionCardStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '1rem',
  marginBottom: '1rem',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const filesViewStyle: React.CSSProperties = {
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  width: '100%',
  height: '100%',
  boxShadow: 'inset 1px 8px 20px 0px rgba(0,0,0,0.2)',
  //backgroundColor: 'red',
};

const fileUploadBoxStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '2rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '400px',
};

const fileUploadTitleStyle: React.CSSProperties = {
  color: '#007bff',
  marginBottom: '1.5rem',
};

const fileInputStyle: React.CSSProperties = {
  display: 'none',
};

const fileInputLabelStyle: React.CSSProperties = {
  backgroundColor: '#e6f2ff',
  color: '#007bff',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
  marginBottom: '1rem',
  transition: 'background-color 0.3s',
};

const uploadButtonStyle = {
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
  margin: '0 1rem',
  color: 'white',
  backgroundColor: '#007bff',
  transition: 'background-color 0.3s',
};

const selectedFileTextStyle: React.CSSProperties = {
  marginTop: '1rem',
  color: '#666',
};

export default App;
