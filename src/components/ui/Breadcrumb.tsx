
import { useNavigate } from "react-router-dom";

type BreadcrumbItem = {
  label: string;
  path?: string; 
};

type Props = {
  items: BreadcrumbItem[];
};

export const Breadcrumb = ({ items }: Props) => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-5">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} className="flex items-center gap-2">
            {isLast ? (              
              <span className="text-gray-700">{item.label}</span>
            ) : (
              <span
                className="hover:text-green-600 cursor-pointer transition-colors"
                onClick={() => item.path && navigate(item.path)}
              >
                {item.label}
              </span>
            )}
            {!isLast && <span>›</span>}
          </span>
        );
      })}
    </nav>
  );
};