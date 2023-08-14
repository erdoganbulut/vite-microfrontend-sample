import logo from "/nesine-logo.png";
import "./HeaderBar.css";

function App() {
  return (
    <header>
      <div className="container">
        <div className="header-columns">
          <a href="/" className="header-logo">
            <img src={logo} alt="Nesine.com" />
          </a>
          <div className="header-content">
            <a href="javascript:;">Yardım</a>
            <form action="/">
              <input type="text" placeholder="Üye No/TC No/YKN/Kullanıcı Adı" />
              <input type="password" placeholder="Şifre" />
              <label>
                <input type="checkbox" /> Beni Hatırla
              </label>
              <button type="submit">Giriş</button>
            </form>
            <a href="javascript:;">Hemen Üye Ol</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
