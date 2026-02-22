import React, { useState } from 'react';
import { Header } from './components/Header';
import { NewsCard } from './components/NewsCard';
import { Sidebar } from './components/Sidebar';
import { MOCK_NEWS, NewsItem, CATEGORIES } from './types';
import { ChevronRight, Play, Share2, MessageCircle, Facebook, Twitter, LayoutGrid, List } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type View = 'home' | 'category' | 'article';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const handleHomeClick = () => {
    setView('home');
    window.scrollTo(0, 0);
  };

  const handleCategoryClick = (id: string) => {
    setSelectedCategory(id);
    setView('category');
    window.scrollTo(0, 0);
  };

  const handleArticleClick = (item: NewsItem) => {
    setSelectedArticle(item);
    setView('article');
    window.scrollTo(0, 0);
  };

  const renderHome = () => (
    <div className="space-y-8">
      {/* Hero Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
        <NewsCard item={MOCK_NEWS[0]} onClick={handleArticleClick} variant="large" />
        <div className="md:col-span-2 grid grid-cols-2 gap-1">
          <NewsCard item={MOCK_NEWS[1]} onClick={handleArticleClick} />
          <NewsCard item={MOCK_NEWS[2]} onClick={handleArticleClick} />
          <NewsCard item={MOCK_NEWS[3]} onClick={handleArticleClick} />
          <NewsCard item={MOCK_NEWS[4]} onClick={handleArticleClick} />
        </div>
      </div>

      {/* Video Section */}
      <section>
        <div className="flex items-center gap-2 bg-sabay-red text-white px-4 py-2 mb-4">
          <Play size={18} fill="currentColor" />
          <span className="font-bold">វីដេអូ</span>
          <ChevronRight size={18} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {MOCK_NEWS.slice(5, 8).map(item => (
            <NewsCard key={item.id} item={item} onClick={handleArticleClick} />
          ))}
        </div>
      </section>

      {/* Entertainment Section */}
      <section>
        <div className="flex items-center gap-2 bg-sabay-red text-white px-4 py-2 mb-4">
          <span className="font-bold">កម្សាន្ត</span>
          <ChevronRight size={18} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {MOCK_NEWS.map(item => (
            <NewsCard key={item.id} item={item} onClick={handleArticleClick} variant="small" />
          ))}
        </div>
      </section>
    </div>
  );

  const renderCategory = () => {
    const category = CATEGORIES.find(c => c.id === selectedCategory);
    const news = MOCK_NEWS.filter(n => n.category === category?.name || !selectedCategory);
    
    // For tech category, we use the specific layout from the image
    const isTech = selectedCategory === 'tech';

    return (
      <div className="space-y-6">
        <div className={`flex items-center justify-between ${isTech ? 'bg-blue-600' : 'bg-sabay-red'} text-white px-4 py-2`}>
          <div className="flex items-center gap-2">
            <span className="font-bold">{category?.name || 'ទាំងអស់'}</span>
            <ChevronRight size={18} />
          </div>
          <div className="flex items-center gap-3">
            <button className="hover:text-gray-200"><List size={18} /></button>
            <button className="hover:text-gray-200 opacity-50"><LayoutGrid size={18} /></button>
          </div>
        </div>

        {isTech ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {news.slice(0, 2).map(item => (
                <NewsCard key={item.id} item={item} onClick={handleArticleClick} />
              ))}
            </div>
            <div className="flex flex-col">
              {news.slice(2).map(item => (
                <NewsCard key={item.id} item={item} onClick={handleArticleClick} variant="list" />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {news.map(item => (
              <NewsCard key={item.id} item={item} onClick={handleArticleClick} />
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderArticle = () => {
    if (!selectedArticle) return null;
    return (
      <article className="bg-white p-6 shadow-sm rounded-sm">
        <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
          {selectedArticle.title}
        </h1>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-6 border-b border-gray-100 pb-4">
          <div className="flex items-center gap-4">
            <span>{selectedArticle.date}</span>
            <span className="flex items-center gap-1"><MessageCircle size={14} /> 0</span>
            <span className="flex items-center gap-1"><Share2 size={14} /> 0</span>
          </div>
          <div className="flex gap-2">
            <button className="p-1 hover:text-blue-600"><Facebook size={18} /></button>
            <button className="p-1 hover:text-blue-400"><Twitter size={18} /></button>
          </div>
        </div>

        <div className="mb-6">
          <img 
            src={selectedArticle.imageUrl} 
            alt={selectedArticle.title} 
            className="w-full h-auto rounded"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="prose prose-sabay max-w-none text-gray-800 leading-relaxed space-y-4">
          <p>{selectedArticle.excerpt || 'ខ្លឹមសារអត្ថបទកំពុងត្រូវបានរៀបចំ...'}</p>
          <p>
            ការប្រកួត UEFA Champions League យប់មិញនេះ ក្នុងវគ្គសន្សំពិន្ទុ Real Madrid និង Dortmund ស៊ុតគ្នាស្ទើរតែបែកបាល់។ 
            Vinicius Junior រកបាន Hat-Trick (បីគ្រាប់ម្នាក់ឯង) នាំឱ្យក្រុមស៊ុតបានជ័យជម្នះយ៉ាងអស្ចារ្យ។
          </p>
          <div className="my-6">
             <img 
              src="https://picsum.photos/seed/football2/800/600" 
              alt="Action" 
              className="w-full h-auto rounded"
              referrerPolicy="no-referrer"
            />
          </div>
          <p>
            ក្នុងវគ្គទីពីរ Real Madrid បានធ្វើការវាយបកយ៉ាងខ្លាំងក្លា បន្ទាប់ពីត្រូវ Dortmund នាំមុខ ២-០ កាលពីវគ្គទីមួយ។ 
            គ្រាប់បាល់របស់ Vinicius បានធ្វើឱ្យអ្នកគាំទ្រនៅកីឡដ្ឋាន Santiago Bernabeu ផ្ទុះការអបអរសាទរយ៉ាងខ្លាំង។
          </p>
        </div>
      </article>
    );
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header 
        onHomeClick={handleHomeClick} 
        onCategoryClick={handleCategoryClick} 
      />

      <main className="flex-grow max-w-7xl mx-auto px-4 py-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={view + (selectedCategory || '') + (selectedArticle?.id || '')}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {view === 'home' && renderHome()}
                {view === 'category' && renderCategory()}
                {view === 'article' && renderArticle()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <Sidebar onNewsClick={handleArticleClick} />
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-sabay-red text-white p-2 rounded-full font-black text-xl italic">
                SAD
              </div>
              <span className="font-bold text-2xl">NEWS</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Sad News គឺជាគេហទំព័រកម្សាន្តឈានមុខគេនៅកម្ពុជា ដែលផ្តល់ជូនព័ត៌មានថ្មីៗបំផុតអំពី កម្សាន្ត បច្ចេកវិទ្យា ជីវិតនិងសង្គម និងកីឡា។
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 border-b border-gray-700 pb-2">ប្រភេទព័ត៌មាន</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              {CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <button onClick={() => handleCategoryClick(cat.id)} className="hover:text-sabay-red">
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 border-b border-gray-700 pb-2">ទំនាក់ទំនង</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Email: info@sabay.com</li>
              <li>Phone: +855 12 345 678</li>
              <li>Address: Phnom Penh, Cambodia</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Sad News Digital Corporation. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
