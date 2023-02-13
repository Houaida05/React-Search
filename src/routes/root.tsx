import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div>
        <Link to="/"> Home</Link>
        <Link to="/fruit"> Search</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
