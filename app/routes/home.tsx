// Home.tsx
import type { Route } from "./+types/home";
import ThemeToggle from "../Components/ThemeToggle";
import UserPersona from "~/Components/UserPerson";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Modo Noche con React Router" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
        
        <UserPersona></UserPersona>
        
    </div>
  );
}
