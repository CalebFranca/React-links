import './Home.css'

export default function Home(){

    return (
      <div className="home-container">
        <h1>Caleb de Franca</h1>
        <span>veja meus links 👇</span>

        <main className="links">
          <section className="link-are">
            <a href="#">
              <p className="link-text">canal no youtube</p>
            </a>
          </section>
        </main>
      </div>
    );
}