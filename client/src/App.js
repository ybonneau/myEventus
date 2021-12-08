import Navbar from './components/menu/navBar';
import FilterContent from './components/home/filterContent';
import Result from './components/home/results';
import Footer from "./components/menu/footer";


export default function App() {
  return (
    <div>
      <Navbar />
      <FilterContent />
      <Result/>
      <Footer/>
    </div>
  );
}
