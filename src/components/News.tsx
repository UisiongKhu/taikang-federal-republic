import React from 'react';
import { useTranslation } from 'react-i18next';

export interface Article {
  date: string;
  tag: string;
  title: string;
  excerpt: string;
  content: string;
  read_more: string;
}

interface NewsProps {
  articles?: Article[];
  onArticleClick?: (article: Article) => void;
  showTitle?: boolean;
}

const News: React.FC<NewsProps> = ({ articles, onArticleClick, showTitle = true }) => {
  const { t } = useTranslation();
  
  const displayArticles = articles || (t('news.articles', { returnObjects: true }) as Article[]);

  return (
    <div className="md:col-span-2">
      {showTitle && (
        <h3 className="text-3xl font-bold mb-8 sand-cut uppercase italic text-navy">
          {t('news.title')}
        </h3>
      )}

      <div className="space-y-12">
        {displayArticles.map((article, index) => (
          <article className="group" key={index}>
            <div className="flex items-baseline space-x-4 mb-2">
              <span className="text-brass font-bold serif text-xl">{article.date}</span>
              <span className={`text-xs px-2 py-1 uppercase ${index % 2 === 0 ? 'bg-navy text-white' : 'bg-gray-200 text-navy'}`}>
                {article.tag}
              </span>
            </div>
            <h4 
              className="text-3xl font-bold mb-3 text-navy group-hover:text-brass transition-colors cursor-pointer article-title"
              onClick={() => onArticleClick?.(article)}
            >
              {article.title}
            </h4>
            <p className="text-gray-600 leading-relaxed mb-4 iansui-regular">
              {article.excerpt}
            </p>
            <button 
              onClick={() => onArticleClick?.(article)}
              className="text-navy font-bold border-b-2 border-brass pb-1 hover:text-brass iansui-regular bg-transparent border-t-0 border-x-0 cursor-pointer"
            >
              {article.read_more}
            </button>
          </article>
        ))}
        {displayArticles.length === 0 && (
          <p className="text-gray-500 iansui-regular italic">無符合遮个標籤个文章 / No articles matching this tag.</p>
        )}
      </div>
    </div>
  );
};

export default News;
