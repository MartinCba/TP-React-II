import React from 'react';
import { jsPDF } from 'jspdf';
import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface DownloadPDFButtonProps {
  game: {
    name: string;
    background_image?: string;
    released?: string;
    rating?: number;
    metacritic?: number;
    genres?: { name: string }[];
    platforms?: { platform: { name: string } }[];
    developers?: { name: string }[];
    description_raw?: string;
  };
  size?: 'small' | 'normal' | 'tag';
}

const DownloadPDFButton: React.FC<DownloadPDFButtonProps> = ({ game, size = 'normal' }) => {
  const { t } = useTranslation();

  const handleDownload = () => {
    const doc = new jsPDF();
    let y = 15;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text(game.name, 10, y);
    y += 10;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    if (game.released) {
      doc.text(`${t('Lanzamiento')}: ${game.released}`, 10, y);
      y += 8;
    }
    if (game.rating) {
      doc.text(`${t('Rating')}: ${game.rating}`, 10, y);
      y += 8;
    }
    if (game.metacritic) {
      doc.text(`${t('Metacritic')}: ${game.metacritic}`, 10, y);
      y += 8;
    }
    if (game.genres && game.genres.length > 0) {
      doc.text(`${t('Géneros:')} ${game.genres.map(g => g.name).join(', ')}`, 10, y);
      y += 8;
    }
    if (game.platforms && game.platforms.length > 0) {
      doc.text(`${t('Plataformas')}: ${game.platforms.map(p => p.platform.name).join(', ')}`, 10, y);
      y += 8;
    }
    if (game.developers && game.developers.length > 0) {
      doc.text(`${t('Desarrolladores')}: ${game.developers.map(d => d.name).join(', ')}`, 10, y);
      y += 8;
    }
    if (game.description_raw) {
      y += 4;
      doc.setFont('helvetica', 'bold');
      doc.text(t('Descripción'), 10, y);
      y += 6;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text(doc.splitTextToSize(game.description_raw, 180), 10, y);
    }
    doc.save(`${game.name}.pdf`);
  };

  return (
    <button
      onClick={handleDownload}
      className={`flex items-center gap-2 rounded font-bold shadow transition cursor-pointer
        ${size === 'tag' ? 'bg-yellow-400 hover:bg-yellow-300 text-black px-2 py-1 text-xs h-7' : ''}
        ${size === 'small' ? 'bg-yellow-400 hover:bg-yellow-300 text-black px-2 py-1 text-sm' : ''}
        ${size === 'normal' ? 'bg-yellow-400 hover:bg-yellow-300 text-black px-3 py-2' : ''}
      `}
      title={t('Descargar PDF')}
      style={{ marginLeft: 0 }}
    >
      <Download className={size === 'tag' ? 'w-4 h-4' : size === 'small' ? 'w-4 h-4' : 'w-5 h-5'} />
      <span className="ml-1">PDF</span>
    </button>
  );
};

export default DownloadPDFButton; 