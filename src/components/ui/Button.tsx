type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline";
   disabled?: boolean;
};

export const Button = ({ children, onClick, variant = "primary", disabled = false }: ButtonProps) => {
  const base = "px-4 py-2 rounded-lg";
  const style =
    variant === "primary"
      ? "bg-green-600 text-white hover:bg-green-700"
      : "border hover:bg-gray-100";

  return (
    <button onClick={onClick} className={`${base} ${style}`} disabled={disabled}>
      {children}
    </button>
  );
};