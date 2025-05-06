import React from 'react';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';

type FilterType = 'rating' | 'metacritic' | 'released' | 'popular';

interface FilterBarProps {
    value: FilterType;
    onChange: (value: FilterType) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ value, onChange }) => {
    const { t } = useTranslation();
    return (
        <div className="flex gap-4 mb-6 flex-wrap">
            <Button
                variant="filter"
                className={value === 'popular' ? 'bg-yellow-400 text-black font-bold hover:bg-yellow-400 hover:text-black' : ''}
                onClick={() => onChange('popular')}
            >
                {t('Populares')}
            </Button>
            <Button
                variant="filter"
                className={value === 'rating' ? 'bg-yellow-400 text-black font-bold hover:bg-yellow-400 hover:text-black' : ''}
                onClick={() => onChange('rating')}
            >
                {t('Top usuarios')}
            </Button>
            <Button
                variant="filter"
                className={value === 'metacritic' ? 'bg-yellow-400 text-black font-bold hover:bg-yellow-400 hover:text-black' : ''}
                onClick={() => onChange('metacritic')}
            >
                {t('Top crítica')}
            </Button>
            <Button
                variant="filter"
                className={value === 'released' ? 'bg-yellow-400 text-black font-bold hover:bg-yellow-400 hover:text-black' : ''}
                onClick={() => onChange('released')}
            >
                {t('Estrenos')}
            </Button>
        </div>
    );
};

export default FilterBar; 