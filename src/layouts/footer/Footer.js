import logo from '../../logo.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
        <div class="Footer-logo-container">
        <a href="/"><img src={logo} className="Footer-logo" alt="logo" />
        </a>
        <span class="Footer-logo-text"><b>No Copyright &nbsp;&nbsp;©</b>&nbsp;Naveen Kumar</span>
        </div>
      </footer>
  );
}

export default Footer;