import logo from '../../logo.svg';
import './Header.css';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="App-header-navbar">
        <div class="App-logo-container">
        <a href="/"><img src={logo} className="App-logo" alt="logo" />
        </a>
        <a href="/" class="App-logo-text"><span>Naveen Kumar</span></a>
        </div>
          <ul class="App-header-navbar-ul">
            <li><a href="#blog-container">Blog</a></li>
            <li><a href="#portfolio-container">Portfolio</a></li>
            <li><a href="#about-container">About Us</a></li>
            <li><a href="#contact-container">Contact Us</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
