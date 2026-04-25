import React from 'react';

interface ArticleContentProps {
  title: string;
  date: string;
  tag: string;
  content: string | React.ReactNode;
  onBack?: () => void;
  backText?: string;
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  title,
  date,
  tag,
  content,
  onBack,
  backText = "← Back",
}) => {
  return (
    <article className="max-w-3xl mx-auto py-12 px-4 md:px-0">
      {onBack && (
        <button 
          onClick={onBack}
          className="mb-8 text-navy font-bold border-b-2 border-transparent hover:border-brass hover:text-brass transition-colors iansui-regular"
        >
          {backText}
        </button>
      )}
      
      <div className="flex items-baseline space-x-4 mb-4">
        <span className="text-brass font-bold serif text-xl">{date}</span>
        <span className="text-sm px-2 py-1 uppercase bg-navy text-white">
          {tag}
        </span>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-navy article-title leading-tight">
        {title}
      </h1>
      
      <div className="prose max-w-none text-gray-800 leading-loose iansui-regular text-lg space-y-6">
        {typeof content === 'string' ? (
          content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        ) : (
          content
        )}
      </div>
    </article>
  );
};

export default ArticleContent;
