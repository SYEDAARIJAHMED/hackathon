export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Avion. All Rights Reserved.</p>
          <ul className="footer-links">
            <li><a href="/about">About</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
      </footer>
    );
  }
  