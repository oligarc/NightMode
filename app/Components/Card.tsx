import React from "react";

type CardProps = {
  title: string;         
  content?: string;      
  list?: string[];       
  color: string;        
};

const Card: React.FC<CardProps> = ({ title, content, list, color }) => {
  return (
    <div 
      
      className={`${color} bg-card-bg-light dark:bg-green-400 p-4 rounded-lg text-card-paragraph-light dark:text-card-paragraph-dark text-size-p`}
    >
      <h2 className="text-xl font-bold text-card-h2-light dark:text-card-h2-dark">
        {title}
      </h2>

      {content && <p>{content}</p>}

      {list && (
        <ul>
          {list.map((item, index) => (
            <li 
              key={index} 
              className="before:content-['-'] before:text-card-list-bullet-light dark:before:text-card-list-bullet-dark text-size-p"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Card;
