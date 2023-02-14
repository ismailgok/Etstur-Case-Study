import "./Alert.css";

const Alert = ({ message, className, variant,children }) => {
  return (
    <div className={`alert alert-${variant ?? "primary"} ${className ?? ""} `}>
      <div className="text-[32px] text-white">{children}</div>
      {message}
    </div>
  );
};

export default Alert;
