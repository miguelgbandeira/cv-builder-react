import "./App.css";
import FormsSection from "./components/FormsSection.jsx";
import Header from "./components/Header.jsx";
import Resume from "./components/Resume.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="builder-container">
        <FormsSection />
        <Resume />
      </div>
    </>
  );
}

export default App;
