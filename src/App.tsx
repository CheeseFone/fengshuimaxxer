import React, { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import hammerImg from './hammer.png';
import pencilImg from './pencil.png';
import scissorImg from './scissors.png';
import stickynoteImg from './stickynote.png';
import tapeImg from './tape.png';
import './App.css';
declare module '*.png';

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
    <nav className="navStyle">
      <ul className="tabListStyle">
      <li>
          <button
            className={`tabItem ${activeTab === 'Swipe' ? 'tabItemActive' : ''}`}
            onClick={() => setActiveTab('Swipe')}
          >
            SWIPE
          </button>
        </li>
        <li>
          <button
            className={`tabItem ${activeTab === 'Decisions' ? 'tabItemActive' : ''}`}
            onClick={() => setActiveTab('Decisions')}
          >
            DECISIONS
          </button>
        </li>
        <li>
          <button
            className={`tabItem ${activeTab === 'Files' ? 'tabItemActive' : ''}`}
            onClick={() => setActiveTab('Files')}
          >
            FILES
          </button>
        </li>
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
              className="loginInput"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              /> 
        </p>
        <p className = "loginText">
              <i className="fa-solid fa-lock"></i>
              <input 
              type="password" 
              className="loginInput"
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
      <body className="loginHeader"> 
        <div className = "loginbkg">
        <p className = "loginTitle">
          SIGN UP
        </p>

        <p className = "loginText">
              <i className="fa-solid fa-user"></i>
              <input 
              type="text" 
              className="loginInput"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              /> 
        </p>
        <p className = "loginText">
              <i className="fa-solid fa-lock"></i>
              <input 
              type="password" 
              className="loginInput"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              /> 
        </p>
        <br></br>
        <button className = "loginButton" onClick={handleSignupClick}>Sign up</button>
        <br></br>
        <br></br>
        </div>
      </body>
    </div>
  );
};

const AppContent: React.FC<LogoutProps> = ({onLogout}) => {
  const [activeTab, setActiveTab] = useState('Swipe');
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/login');
  };

  const handleMakeClick = () => {
    navigate('/description');
  }

  return (
    <div>

      <div className = "mainBackground">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className = "mainFrame">
          <div className = "mainWorkArea"></div>
          <HoverButton onClick={handleLogoutClick}>
          Log out
        </HoverButton>
          <button className = "mainButton" onClick={handleMakeClick}>m-AI-ke!</button>
        </div>

        <div className = "floater" id = "floaterH">
          <button className = "itemHolder">
            <img src = {hammerImg} alt = "loading"></img>
          </button>
        </div>
        <div className = "floater" id = "floaterP">
          <button className = "itemHolder">
            <img src = {pencilImg} alt = "loading"></img>
          </button>
        </div>
        <div className = "floater" id = "floaterS">
          <button className = "itemHolder">
            <img src = {stickynoteImg} alt = "loading"></img>
          </button>
        </div>
        <div className = "floater" id = "floaterT">
          <button className = "itemHolder">
            <img src = {scissorImg} alt = "loading"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

const DescriptionPage: React.FC = () => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate("/");
  }

  return (
    <div>
    <body className = "bodyBackground">
        <div className="container">
            <h1>Engineering Project for Kids: Build Your Own Mini Desk Organizer Using Household Items!</h1>
            
            <h2>Project Overview:</h2>
            <p>In this fun and educational project, you will create your own mini desk organizer using common household items. This project will help you understand basic engineering principles, like design, structure, and functionality. You’ll also learn some cool facts about engineering, science, and history along the way!</p>
            
            <h2>Materials You’ll Need:</h2>
            <ul>
                <li><strong>Cardboard Boxes or Empty Tissue Boxes:</strong> These will serve as the base for your organizer compartments.</li>
                <li><strong>Plastic Bottles or Containers:</strong> Use these to create smaller compartments for pens, pencils, or other small items.</li>
                <li><strong>Glue or Tape:</strong> To stick everything together securely.</li>
                <li><strong>Scissors or a Craft Knife:</strong> For cutting materials. (Ask an adult for help!)</li>
                <li><strong>Markers, Paint, or Decorative Paper:</strong> To decorate your organizer and make it unique.</li>
                <li><strong>Optional:</strong> Old magazines or paper rolls to create additional compartments or decorations.</li>
            </ul>
            
            <h2>Step-by-Step Instructions:</h2>
            
            <h3>Step 1: Prepare Your Base</h3>
            <p>Take a sturdy cardboard box and cut it down to a size that fits comfortably on your desk. This will be the base of your organizer. You can use the bottom of a cereal box or an empty shoe box.</p>
            <div className="fact">Interesting Fact: Did you know that cardboard is made from recycled paper? Recycling helps save trees and reduces waste!</div>
            
            <h3>Step 2: Create Compartments</h3>
            <p>Cut smaller boxes or plastic bottles to create compartments for your organizer. These compartments can hold different items like pens, markers, paper clips, and more. Arrange them on your base until you find a layout you like.</p>
            <div className="insight">Science Insight: Plastic bottles are made from a material called PET (polyethylene terephthalate). It’s lightweight and strong, making it perfect for reuse in projects like this!</div>
            
            <h3>Step 3: Secure Everything Together</h3>
            <p>Glue or tape the compartments to the base. Make sure they’re firmly attached so that your organizer is stable and won’t fall apart when you put items in it.</p>
            <div className="tip">Pro Tip: Use hot glue for a stronger hold, but be sure to get an adult's help!</div>
            
            <h3>Step 4: Add Additional Features</h3>
            <p>Create dividers inside your compartments using extra cardboard or folded paper. This will help you separate different types of items.</p>
            <div className="nugget">History Nugget: The idea of organizing tools and materials dates back to ancient times. Egyptians used specially designed containers to store tools for building pyramids!</div>
            
            <h3>Step 5: Decorate Your Organizer</h3>
            <p>Use markers, paint, or decorative paper to make your desk organizer unique. You can even label the compartments to know exactly where everything goes.</p>
            <div className="fun-fact">Fun Fact: Did you know that Leonardo da Vinci, the famous inventor, kept his workspace super organized? He believed that a tidy space led to a tidy mind, helping him think of new inventions!</div>
            
            <h3>Step 6: Test Your Organizer</h3>
            <p>Place your organizer on your desk and fill it with your supplies. Make sure it’s stable and holds everything you need.</p>
            <div className="challenge">Challenge: Can you create a special compartment just for your favorite item? Maybe a spot for your most-used pen or a secret drawer for notes!</div>
            
            <h2>Bonus: Learn While You Build!</h2>
            
            <h3>The Engineering Behind It:</h3>
            <ul>
                <li><strong>Structure:</strong> Your desk organizer uses principles of stability and strength. The cardboard and plastic materials work together to create a structure that can hold your items without collapsing.</li>
                <li><strong>Design:</strong> By arranging the compartments in a functional layout, you’re practicing design thinking, which engineers use to create buildings, machines, and even gadgets!</li>
                <li><strong>Functionality:</strong> This project teaches you how to think about the purpose of each component, just like engineers do when they design tools or products.</li>
            </ul>
            
            <div className="bonus">
                <strong>Cool Science Fact:</strong> By reusing materials like cardboard and plastic, you’re helping the environment. Recycling reduces the need to produce new materials, which saves energy and reduces pollution. Did you know that recycling one ton of paper saves about 17 trees?
            </div>
            
            <h2>What You Learned:</h2>
            <ul>
                <li>Basic Engineering Concepts: Structure, design, and functionality.</li>
                <li>Recycling and Sustainability: The importance of reusing materials to help the planet.</li>
                <li>Creativity in Engineering: How to design and build something useful out of everyday items.</li>
            </ul>
            
            <h2>Extension Ideas:</h2>
            <ul>
                <li>Add a Charging Station: Use an old phone case or box to create a special spot for charging your devices.</li>
                <li>Build a Bigger Organizer: Use more materials to create a larger organizer that can hold books, notebooks, or even small gadgets.</li>
                <li>Experiment with Other Materials: Try using different types of materials, like fabric or metal, to see how they change the stability and design of your organizer.</li>
            </ul>
            
            <div className="wrap-up">
                Congratulations! You’ve just completed an engineering project that helps organize your workspace and teaches you about materials, design, and recycling. Keep experimenting with different designs and materials, and who knows—you might just invent the next big thing!
            </div>

            <button onClick = {handleExit}>Exit</button>
        </div>
    </body>
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
          <>
            <Route path="*" element={<AppContent onLogout={handleLogout} />} />
            <Route path="/description" element={<DescriptionPage />} />
          </>
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

export default App;