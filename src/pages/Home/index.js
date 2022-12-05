import './home.css'
import { Social } from '../../Components/Logo/social';
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";


export default function Home(){

    return (
      <div className="home-container">
        <h1>Caleb de Franca</h1>
        <span>veja meus links 👇</span>

        <main className="links">
          <section className="link-area">
            <a href="#">
              <p className="link-text">Canal no Youtube</p>
            </a>
          </section>

          <section className="link-area">
            <a href="#">
              <p className="link-text">Canal no Youtube</p>
            </a>
          </section>

          <footer>
            <Social url="https://www.instagram.com/_calebdefranca/">
              <FaInstagram size={35} color="#FFF" />
            </Social>

            <Social url="https://github.com/CalebFranca">
              <FaGithub size={35} color="#FFF" />
            </Social>

            <Social url="https://www.facebook.com/ariel.caleb.35/">
              <FaFacebook size={35} color="#FFF" />
            </Social>
          </footer>
        </main>
      </div>
    );
}