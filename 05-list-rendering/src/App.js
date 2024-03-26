import MallDirectory from './MallDirectory';
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {

  const jsx = [
    <li>Burger King</li>,
    <li>Hang Ten</li>,
    <li>Popular Book Store</li>
  ]
  return (
    <div className="container">
      <MallDirectory/>
    </div>
  );
}

