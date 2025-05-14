// src/components/ui/card.jsx
import "./card.css"; // optional, for styling

export function Card({ children, className = "", ...props }) {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
}
