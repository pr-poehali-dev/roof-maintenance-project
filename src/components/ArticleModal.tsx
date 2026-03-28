import Icon from "@/components/ui/icon";
import { useEffect } from "react";

interface Article {
  tag: string;
  date: string;
  title: string;
  content: { heading?: string; text: string }[];
}

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export type { Article };

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  useEffect(() => {
    if (article) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [article]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-sm overflow-y-auto py-8 px-4"
      onClick={onClose}
    >
      <div
        className="bg-coal-light border border-white/10 rounded-2xl w-full max-w-3xl animate-fade-in-up relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-coal-light border-b border-white/8 rounded-t-2xl px-8 py-5 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="font-golos text-xs text-orange font-medium uppercase tracking-widest">{article.tag}</span>
            <span className="font-golos text-xs text-white/30">{article.date}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
          >
            <Icon name="X" size={16} className="text-white/60" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-8">
          <div className="w-12 h-1 bg-orange mb-6 rounded-full" />
          <h1 className="font-oswald text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            {article.title}
          </h1>

          <div className="space-y-6">
            {article.content.map((block, i) => (
              <div key={i}>
                {block.heading && (
                  <h2 className="font-oswald text-xl font-semibold text-orange mb-3">{block.heading}</h2>
                )}
                <p className="font-golos text-white/65 text-base leading-relaxed">{block.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-white/8 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/30">
              <Icon name="BookOpen" size={14} />
              <span className="font-golos text-xs">Krishidzen — экспертный блог</span>
            </div>
            <button
              onClick={onClose}
              className="btn-outline px-5 py-2 rounded-lg text-sm"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
