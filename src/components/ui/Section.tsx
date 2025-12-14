import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient';
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  id
}) => {
  const backgrounds = {
    white: 'bg-white-soft',
    gray: 'bg-gray-50',
    gradient: 'gradient-soft',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export default Section;

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
