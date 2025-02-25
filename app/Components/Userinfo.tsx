import React from "react";

const UserInfo: React.FC = () => {
  return (
    <div className="bg-card-bg-userinfo dark:bg-green-400 p-4 rounded-lg lg:text-left md:text-center sm:text-center text-center text-size-p">
      <img
        src="../img/imagen.jpeg"
        alt="User"
        className="w-full md:w-100 sm:w-100 lg:w-100 h-100 mx-auto rounded-ft-card"
      />
      
      <h2 className="pt-5 text-card-h2-light dark:text-card-h2-dark">
        <strong>Name:</strong> María
      </h2>
      <h2 className="pt-10 text-card-h2-light dark:text-card-h2-dark">
        <strong>Age:</strong> 27
      </h2>
      <h2 className="pt-10 text-card-h2-light dark:text-card-h2-dark">
        <strong>Education:</strong> University of Cuenca
      </h2>
      <h2 className="pt-10 text-card-h2-light dark:text-card-h2-dark">
        <strong>Location:</strong> Rijelves
      </h2>
      <h2 className="pt-10 text-card-h2-light dark:text-card-h2-dark">
        <strong>Job:</strong> Assistant
      </h2>
      <h2 className="pt-10 text-card-h2-light dark:text-card-h2-dark">
        <strong>Hobbies:</strong> Nothing
      </h2>
    </div>
  );
};

export default UserInfo;
