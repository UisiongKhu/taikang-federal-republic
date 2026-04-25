import { useTranslation } from 'react-i18next';

const News = () => {
  const { t } = useTranslation();
  const articles = t('news.articles', { returnObjects: true }) as Array<{
    date: string;
    tag: string;
    title: string;
    excerpt: string;
    read_more: string;
  }>;

  return (
    <div className="md:col-span-2">
      <h3 className="text-3xl font-bold mb-8 sand-cut uppercase italic text-navy">{t('news.title')}</h3>

      <div className="space-y-12">
        {articles.map((article, index) => (
          <article className="group" key={index}>
            <div className="flex items-baseline space-x-4 mb-2">
              <span className="text-brass font-bold serif text-xl">{article.date}</span>
              <span className={`text-xs px-2 py-1 uppercase ${index % 2 === 0 ? 'bg-navy text-white' : 'bg-gray-200 text-navy'}`}>
                {article.tag}
              </span>
            </div>
            <h4 className="text-3xl font-bold mb-3 text-navy group-hover:text-brass transition-colors cursor-pointer article-title">
              {article.title}
            </h4>
            <p className="text-gray-600 leading-relaxed mb-4 iansui-regular">
              {article.excerpt}
            </p>
            <a href="#" className="text-navy font-bold border-b-2 border-brass pb-1 hover:text-brass iansui-regular">
              {article.read_more}
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default News;
