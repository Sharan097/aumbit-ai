import { CardProps } from '@/lib/types';


export default function Card({
  icon: Icon,
  title,
  description,
  className = '',
}: CardProps) {
  return (
    <div
      className={`group bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-700 shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {Icon && (
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
          <Icon size={24} strokeWidth={2} className="sm:w-7 sm:h-7" />
        </div>
      )}
      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
