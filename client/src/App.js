import Navbar from './components/menu/navBar';
import FilterContent from './components/home/filterContent';
import Result from './components/home/results';

export default function App() {
  return (
    <div>
      <Navbar />
      <FilterContent />
      <Result/>
    </div>
  );
}
