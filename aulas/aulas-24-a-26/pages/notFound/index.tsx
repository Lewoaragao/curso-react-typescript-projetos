import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <h1>Ops essa página não existe!!</h1>
      <Link to="/">Acessar página home</Link>
    </div>
  );
}
