import { Footer } from "./COMPONENTS/footer/footer";
import { Header } from "./COMPONENTS/header/header";
import { Category } from "./PAGES/category/category";

function App() {
  return (
    <div style={{height: '100vh'}}>
      < Header />
      < Category />
      < Footer />
    </div>
  );
}

export default App;
