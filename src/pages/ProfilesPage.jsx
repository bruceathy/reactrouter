import { NavLink, Outlet } from "react-router-dom";

export default function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div>
      <div>
        {profiles.map((profile) => (
          <NavLink
            key={profile}
            to={`/profiles/${profile}`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Profile {profile}
          </NavLink>
        ))}
        <Outlet />
      </div>
    </div>
  );
}
