import React from "react";
import UserInfo from "./Userinfo";
import Card from "./Card";
import ThemeToggle from "./ThemeToggle";

const UserPersona: React.FC = () => {
  return (
    <div className="p-6 bg-body-bg-light dark:bg-body-bg-dark min-h-screen text-main-header-light dark:text-main-header-dark text-size-p">
      <div className="flex items-center justify-between p-6">
        <div className="flex flex-col">
          <h1 className="text-size-titulo font-bold text-primary-light dark:text-green-400 mb-1">
            Currículo
          </h1>
          <hr className="w-40 border-t-4 border-primary-light dark:border-green-400 mb-4" />
        </div>

        <div className="flex items-center justify-center">
          <ThemeToggle />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 p-4 rounded-card">
        <div className="sm:col-span-2 lg:col-span-1">
          <UserInfo />
        </div>

        <div className="sm:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-ft-card">
          <Card
            title="Bio"
            content="Hi I'm María and I wanna talk about myself and kjdjksjjsdkjdkjsjjdskjdkjksjdkdjkjdskjsdkjskjdsjkdsjk"
            color="bg-card-bg-light dark:bg-card-bg-dark text-card-paragraph-light dark:text-card-paragraph-dark"
          />
          <Card
            title="Personality"
            list={["Angrygirl", "Smart (sometimes)", "Expressive (a lot)", "Thoughtful"]}
            color="bg-card-bg-light dark:bg-card-bg-dark"
          />
          <Card
            title="Pain Points"
            list={["Me enfado mucho", "Lo mismo pero otra vez", "Igual", "También"]}
            color="bg-card-bg-light dark:bg-card-bg-dark"
          />
          <Card
            title="Goals"
            list={["Que Carla deje de odiarme", "Trabajar en CMM", "FRAAAAAAAAN", "Ay mi hija"]}
            color="bg-card-bg-light dark:bg-card-bg-dark"
          />
        </div>
      </div>
    </div>
  );
};

export default UserPersona;
