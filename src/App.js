/*-------------------------------------------------------------------
|  🐼 React FC App
|
|  🐯 Purpose: RENDERS REACT APP
|
|  🐸 Returns:  JSX
  Recreate something here to describe what this does etc for each page
*-------------------------------------------------------------------*/

//import logo from './logo.svg';//find a pawprint icon
import './styles/styles.scss';
import './styles/globalStyles.scss';
import FormValidation from './components/form';// imports form validation
import Header from './components/Header'; //imports the header

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="h1-welcome h1-border-background">Welcome</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            non nulla eget elit dapibus scelerisque. Quisque sit amet metus
            nec nunc euismod suscipit.
          </p>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <h2>Sign Up</h2>
          <p>
            <FormValidation />
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
