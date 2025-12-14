import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true, onClick }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-soft overflow-hidden ${hover ? 'hover-lift' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  readTime?: string;
  onClick?: () => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  category,
  date,
  image,
  readTime,
  onClick,
}) => {
  return (
    <Card hover className="cursor-pointer" onClick={onClick}>
      <div className="aspect-[16/9] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 bg-tech-blue/10 text-tech-blue text-xs font-medium rounded-full">
            {category}
          </span>
          {readTime && (
            <span className="text-xs text-gray-500">{readTime}</span>
          )}
        </div>
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{excerpt}</p>
        <time className="text-xs text-gray-400">{new Date(date).toLocaleDateString('fr-FR')}</time>
      </div>
    </Card>
  );
};

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  onClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
  category,
  inStock,
  onClick,
}) => {
  return (
    <Card hover className="cursor-pointer group" onClick={onClick}>
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1">{category}</p>
        <h3 className="font-semibold mb-2 line-clamp-2 min-h-[3rem]">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-tech-blue">{price.toFixed(2)} €</span>
          {!inStock && (
            <span className="text-xs text-red-500 font-medium">Rupture</span>
          )}
        </div>
      </div>
    </Card>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  category,
  image,
  onClick,
}) => {
  return (
    <Card hover className="cursor-pointer" onClick={onClick}>
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="p-6">
        <span className="px-3 py-1 bg-violet-neon/10 text-violet-neon text-xs font-medium rounded-full">
          {category}
        </span>
        <h3 className="text-xl font-semibold mt-3 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      </div>
    </Card>
  );
};
