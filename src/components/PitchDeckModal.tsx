import React, { useState, useEffect } from 'react';
import { PITCH_SLIDES, PROJECT_METADATA } from '../data/bazicoProjectData';
import {
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
  ExternalLink,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';

interface PitchDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PitchDeckModal: React.FC<PitchDeckModalProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState<boolean>(true);
  const [showOriginalPdfPreview, setShowOriginalPdfPreview] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => Math.min(PITCH_SLIDES.length - 1, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const slide = PITCH_SLIDES[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 text-white flex flex-col justify-between overflow-y-auto">
      {/* Top Modal Header */}
      <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-slate-800 bg-slate-900">
        <div className="flex items-center gap-3">
          <img
            src={PROJECT_METADATA.logoUrl}
            alt="BAZICO"
            className="h-8 w-auto object-contain rounded bg-white p-0.5 shadow-2xs shrink-0"
          />
          <div>
            <span className="text-sm font-bold tracking-tight text-white block">
              BAZICO · Pitch Deck Executivo para Investidores
            </span>
            <span className="text-xs font-mono text-slate-400 block">
              Slide {currentIndex + 1} de {PITCH_SLIDES.length} · Use as setas ← → do teclado
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowOriginalPdfPreview(!showOriginalPdfPreview)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
              showOriginalPdfPreview
                ? 'bg-amber-600 text-white border-amber-500'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            {showOriginalPdfPreview ? 'Voltar ao Slide Remodelado' : 'Comparar c/ PDF Original'}
          </button>

          <button
            type="button"
            onClick={() => setShowSpeakerNotes(!showSpeakerNotes)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
              showSpeakerNotes
                ? 'bg-emerald-900/60 text-emerald-300 border-emerald-700'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Notas do Apresentador
          </button>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
            Fechar
          </button>
        </div>
      </div>

      {/* Main Slide Content */}
      <div className="flex-1 max-w-6xl w-full mx-auto px-6 py-10 flex flex-col justify-center">
        {showOriginalPdfPreview ? (
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 flex flex-col h-[70vh]">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white">
                  Documento Original Anexado (36 Páginas — Referência de Dados)
                </h3>
                <p className="text-xs text-slate-400">
                  Todos os dados originais foram preservados e reestruturados na apresentação interativa.
                </p>
              </div>
              <a
                href={PROJECT_METADATA.driveFolderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-emerald-700 text-white rounded-lg hover:bg-emerald-600"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Abrir Pasta Google Drive
              </a>
            </div>
            <iframe
              src={PROJECT_METADATA.pdfAssetPath}
              title="Documento PDF Original BAZICO"
              className="w-full flex-1 rounded-lg bg-white"
            />
          </div>
        ) : (
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 lg:p-12 shadow-2xl">
            <div className="flex items-center justify-between text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">
              <div className="flex items-center gap-2.5">
                <img
                  src={PROJECT_METADATA.logoUrl}
                  alt="BAZICO"
                  className="h-5 w-auto object-contain rounded bg-white p-0.5 shadow-2xs"
                />
                <span>{slide.sectionCode}</span>
              </div>
              <span className="text-slate-400">{slide.originalPages}</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {slide.title}
            </h2>
            <p className="mt-3 text-lg text-slate-300 max-w-3xl leading-relaxed">
              {slide.subtitle}
            </p>

            {/* Key KPI Strip on Slide */}
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {slide.metrics.map((m, i) => (
                <div key={i} className="bg-slate-950 p-5 rounded-xl border border-slate-800">
                  <div className="text-xs font-mono uppercase text-slate-400">{m.label}</div>
                  <div className="text-2xl font-bold font-mono tabular-nums text-emerald-400 mt-1">
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">{m.sub}</div>
                </div>
              ))}
            </div>

            {/* Key Bullets */}
            <div className="mt-8 space-y-3">
              {slide.bullets.map((b, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Executive Takeaway Banner */}
            <div className="mt-8 p-4 rounded-xl bg-emerald-950/80 border border-emerald-800/80 flex items-center justify-between">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-300">
                Conclusão Executiva
              </div>
              <div className="text-sm font-semibold text-white">{slide.keyTakeaway}</div>
            </div>

            {/* Speaker Notes for Lytton Medrado */}
            {showSpeakerNotes && (
              <div className="mt-6 pt-5 border-t border-slate-800 text-xs text-slate-400">
                <span className="font-mono uppercase text-amber-400 font-semibold mr-2">
                  Roteiro de Apresentação (CEO Lytton Medrado):
                </span>
                <span>{slide.speakerNotes}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Slide Navigation Bar */}
      <div className="px-6 py-4 border-t border-slate-800 bg-slate-900 flex items-center justify-between">
        <button
          type="button"
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-slate-800 text-white hover:bg-slate-700 disabled:opacity-40 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Slide Anterior
        </button>

        <div className="flex items-center gap-2">
          {PITCH_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`px-3 py-1 text-xs font-mono rounded-md transition-colors ${
                currentIndex === idx
                  ? 'bg-emerald-600 text-white font-bold'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              0{s.id}
            </button>
          ))}
        </div>

        <button
          type="button"
          disabled={currentIndex === PITCH_SLIDES.length - 1}
          onClick={() => setCurrentIndex((prev) => Math.min(PITCH_SLIDES.length - 1, prev + 1))}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-emerald-700 text-white hover:bg-emerald-600 disabled:opacity-40 transition-colors"
        >
          Próximo Slide
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
