import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import News from '../components/News';
import ArticleContent from '../components/ArticleContent';

interface Article {
  date: string;
  tag: string;
  title: string;
  excerpt: string;
  content: string;
  read_more: string;
}

const NewsPage = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const allArticles = t('news.articles', { returnObjects: true }) as Article[];

  // Handle article passed from homepage
  useEffect(() => {
    if (location.state && location.state.article) {
      const stateArticle = location.state.article as Article;
      // Try to find the same article in the current language by date or index
      // Since titles change with language, we can't easily match by title
      // For now, let's just use the passed article directly
      setSelectedArticle(stateArticle);
      
      // Clear location state so refresh doesn't keep opening it (optional)
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // If language changes, we might want to update the selectedArticle if it's set
  // This is tricky without IDs. Let's just keep it simple for now.

  const tags = ['新聞', '公告', '文學', '歷史'];

  const filteredArticles = selectedTag 
    ? allArticles.filter(article => article.tag === selectedTag)
    : allArticles;

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-sand text-navy">
      <Header />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="bg-white p-8 md:p-12 shadow-sm border-t-4 border-navy retro-border">
          {!selectedArticle ? (
            <>
              <h2 className="text-4xl font-bold text-navy mb-8 tracking-widest uppercase header-main-title border-brass border-b-2 pb-4">
                {t('header.nav.news')}
              </h2>

              {/* Tag Filters */}
              <div className="flex flex-wrap gap-4 mb-12 border-b border-gray-100 pb-8">
                <button 
                  onClick={() => setSelectedTag(null)}
                  className={`px-6 py-2 iansui-regular font-bold transition-all ${
                    selectedTag === null 
                      ? 'bg-navy text-white' 
                      : 'bg-gray-100 text-navy hover:bg-brass hover:text-white'
                  }`}
                >
                  全部 / ALL
                </button>
                {tags.map(tag => (
                  <button 
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-6 py-2 iansui-regular font-bold transition-all ${
                      selectedTag === tag 
                        ? 'bg-navy text-white' 
                        : 'bg-gray-100 text-navy hover:bg-brass hover:text-white'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <News 
                articles={filteredArticles} 
                onArticleClick={(article) => setSelectedArticle(article)}
                showTitle={false}
              />
            </>
          ) : (
            <ArticleContent 
              title={selectedArticle.title}
              date={selectedArticle.date}
              tag={selectedArticle.tag}
              content={selectedArticle.content}
              onBack={handleBackToList}
              backText="← 返去列表 / Back to List"
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsPage;
