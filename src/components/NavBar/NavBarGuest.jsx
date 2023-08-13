import { Link } from "react-router-dom";

export default function NavBarGuest() {
  return (
    <nav>
      <span> Exercise Co</span>
      <Link to="/signup">Enter</Link>
    </nav>
  );
}
