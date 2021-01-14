import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import "./App.css";
import Login from './Components/Login/Login.jsx'
import FormRegister from './Components/FormRegister/FormRegister.jsx'
import BrandButton from './Components/BrandButton/BrandButton.jsx'
import MainPage from './UI/Pages/MainPage.jsx';
import Routes from './Routes.jsx';
import BannerPropaganda from './Components/Banner/BannerPropaganda'
// todo : to make a component call routers and make to render here
function App() {
    return (

        <Routes/>
    );
}

export default App;