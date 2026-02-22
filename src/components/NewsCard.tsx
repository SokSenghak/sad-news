import React from 'react';
import { NewsItem } from '../types';

interface NewsCardProps {
  item: NewsItem;
  onClick: (item: NewsItem) => void;
  variant?: 'large' | 'medium' | 'small' | 'horizontal' | 'list';
}

export const NewsCard: React.FC<NewsCardProps> = ({ item, onClick, variant = 'medium' }) => {
  if (variant === 'list') {
    return (
      <div 
        className="flex gap-4 cursor-pointer group py-4 border-b border-gray-100 last:border-0"
        onClick={() => onClick(item)}
      >
        <div className="w-48 h-32 flex-shrink-0 overflow-hidden rounded">
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold leading-tight group-hover:text-sabay-red transition-colors line-clamp-2 mb-1">
            {item.title}
          </h3>
          <p className="text-[10px] text-gray-400 mb-2">{item.date}</p>
          <p className="text-sm text-gray-600 line-clamp-2">
            {item.excerpt || 'ខ្លឹមសារអត្ថបទកំពុងត្រូវបានរៀបចំសម្រាប់លោកអ្នកអាន...'}
          </p>
        </div>
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div 
        className="flex gap-3 cursor-pointer group py-3 border-b border-gray-100 last:border-0"
        onClick={() => onClick(item)}
      >
        <div className="w-24 h-16 flex-shrink-0 overflow-hidden rounded">
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-sm font-bold leading-tight line-clamp-2 group-hover:text-sabay-red transition-colors">
            {item.title}
          </h4>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`cursor-pointer group relative overflow-hidden bg-white ${variant === 'large' ? 'col-span-2 row-span-2' : ''}`}
      onClick={() => onClick(item)}
    >
      <div className={`relative overflow-hidden ${variant === 'large' ? 'h-[400px]' : 'h-48'}`}>
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-0 left-0 bg-sabay-red text-white text-[10px] font-bold px-2 py-0.5">
          {item.category}
        </div>
        {variant === 'large' && (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
            <h2 className="text-2xl font-bold leading-tight mb-2">{item.title}</h2>
            <p className="text-xs opacity-80">{item.date}</p>
          </div>
        )}
      </div>
      
      {variant !== 'large' && (
        <div className="p-3">
          <h3 className={`font-bold leading-tight group-hover:text-sabay-red transition-colors ${variant === 'medium' ? 'text-base' : 'text-sm'} line-clamp-2`}>
            {item.title}
          </h3>
          <p className="text-[10px] text-gray-500 mt-2">{item.date}</p>
        </div>
      )}
    </div>
  );
};
