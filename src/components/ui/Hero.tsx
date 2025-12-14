import React from 'react';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  image?: string;
  size?: 'small' | 'medium' | 'large';
  centered?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  image,
  size = 'large',
  centered = true,
}) => {
  const sizes = {
    small: 'py-12 md:py-16',
    medium: 'py-16 md:py-24',
    large: 'py-20 md:py-32 lg:py-40',
  };

  return (
    <div className={`relative ${sizes[size]} overflow-hidden`}>
      <div className="absolute inset-0 gradient-soft -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className={`grid ${image ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-12 items-center`}>
          <div className={centered && !image ? 'text-center mx-auto max-w-4xl' : ''}>
            {subtitle && (
              <p className="text-tech-blue font-medium mb-4 text-sm md:text-base uppercase tracking-wide">
                {subtitle}
              </p>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              {title}
            </h1>

            {description && (
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                {description}
              </p>
            )}

            {(primaryCTA || secondaryCTA) && (
              <div className={`flex flex-col sm:flex-row gap-4 ${centered && !image ? 'justify-center' : ''}`}>
                {primaryCTA && (
                  <Button href={primaryCTA.href} variant="primary" size="lg">
                    {primaryCTA.text}
                  </Button>
                )}
                {secondaryCTA && (
                  <Button href={secondaryCTA.href} variant="outline" size="lg">
                    {secondaryCTA.text}
                  </Button>
                )}
              </div>
            )}
          </div>

          {image && (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/20 to-violet-neon/20 rounded-3xl blur-3xl"></div>
              <img
                src={image}
                alt={title}
                className="relative rounded-2xl shadow-soft-lg w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
