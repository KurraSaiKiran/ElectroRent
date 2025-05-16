import { Link } from 'react-router-dom';
import { Category } from '../types';
import { Calculator, Camera, Disc, Gamepad2, Headphones, House, Laptop, Monitor, Printer, Smartphone, Speaker, Tablet, Tv, Watch, Wifi } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  const getIcon = (iconName: string) => {
    const props = { className: "h-8 w-8 text-indigo-600 mb-3" };
    
    switch (iconName) {
      case 'laptop': return <Laptop {...props} />;
      case 'camera': return <Camera {...props} />;
      case 'headphones': return <Headphones {...props} />;
      case 'gamepad-2': return <Gamepad2 {...props} />;
      case 'home': return <House {...props} />;
      case 'monitor': return <Monitor {...props} />;
      case 'smartphone': return <Smartphone {...props} />;
      case 'tablet': return <Tablet {...props} />;
      case 'tv': return <Tv {...props} />;
      case 'watch': return <Watch {...props} />;
      case 'wifi': return <Wifi {...props} />;
      case 'speaker': return <Speaker {...props} />;
      case 'printer': return <Printer {...props} />;
      case 'calculator': return <Calculator {...props} />;
      default: return <Disc {...props} />;
    }
  };

  return (
    <Link to={`/category/${category.id}`} className="group block">
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
        {getIcon(category.icon)}
        <h3 className="text-lg font-medium text-gray-800 group-hover:text-indigo-600 transition-colors">
          {category.name}
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          {category.description}
        </p>
      </div>
    </Link>
  );
};
