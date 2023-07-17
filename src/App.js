import { ContactContextProvider } from "./Context/Provider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import ContactsList from "./components/ContactsList/ContactsList";
import AddContact from "./components/AddContact/AddContact";
import About from "./components/About/About";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <ContactContextProvider>
      <BrowserRouter>
        <div className='App'>
          <Header branding={"Contact Manager"} />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={ContactsList} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact/add' component={AddContact} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </ContactContextProvider>
  );
};

export default App;
