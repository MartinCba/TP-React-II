import React from 'react';
import { useTranslation } from 'react-i18next';

type PaginationProps = {
  page: number;
  onPageChange: (page: number) => void;
  hasNext: boolean;
  hasPrev: boolean;
};

const Pagination: React.FC<PaginationProps> = ({ page, onPageChange, hasNext, hasPrev }) => {
  const { t } = useTranslation();
  return (
    <div className="flex gap-4 justify-center my-8">
      <button
        className="px-4 py-2 rounded bg-neutral-800 text-white disabled:opacity-50 cursor-pointer"
        onClick={() => hasPrev && onPageChange(page - 1)}
        disabled={!hasPrev}
      >
        {t('Anterior')}
      </button>
      <span className="text-yellow-400 font-bold text-lg">{t('Página')} {page}</span>
      <button
        className="px-4 py-2 rounded bg-neutral-800 text-white disabled:opacity-50 cursor-pointer"
        onClick={() => hasNext && onPageChange(page + 1)}
        disabled={!hasNext}
      >
        {t('Siguiente')}
      </button>
    </div>
  );
};

export default Pagination; 