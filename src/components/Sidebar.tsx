import React from 'react';
import { MOCK_NEWS, NewsItem } from '../types';
import { NewsCard } from './NewsCard';

export const Sidebar: React.FC<{ onNewsClick: (item: NewsItem) => void }> = ({ onNewsClick }) => {
  const popular = MOCK_NEWS.slice(0, 5);
  const latest = MOCK_NEWS.slice(3, 8);

  return (
    <aside className="space-y-8">
      {/* Popular Section */}
      <section>
        <div className="border-b-2 border-sabay-red mb-4">
          <h3 className="bg-sabay-red text-white inline-block px-4 py-1 text-sm font-bold">
            អត្ថបទពេញនិយម
          </h3>
        </div>
        <div className="space-y-1">
          {popular.map((item) => (
            <NewsCard key={item.id} item={item} onClick={onNewsClick} variant="horizontal" />
          ))}
        </div>
      </section>

      {/* Latest Section */}
      <section>
        <div className="border-b-2 border-gray-800 mb-4">
          <h3 className="bg-gray-800 text-white inline-block px-4 py-1 text-sm font-bold">
            អត្ថបទថ្មី
          </h3>
        </div>
        <div className="space-y-1">
          {latest.map((item) => (
            <NewsCard key={item.id} item={item} onClick={onNewsClick} variant="horizontal" />
          ))}
        </div>
      </section>

      {/* Ad Placeholder */}
      <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-400 text-xs border border-dashed border-gray-300">
        ADVERTISEMENT
      </div>
    </aside>
  );
};
