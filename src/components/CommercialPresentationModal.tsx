import React, { useState, useEffect } from 'react';
import { COMMERCIAL_DECK_SLIDES, PROJECT_METADATA } from '../data/bazicoProjectData';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Printer,
  FileDown,
  Layers,
  MessageSquare,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Phone,
  Mail,
  Flame,
  Sprout,
  Workflow,
  Factory,
} from 'lucide-react';

interface CommercialPresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommercialPresentationModal: React.FC<CommercialPresentationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showCommercialNotes, setShowCommercialNotes] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<'slide' | 'continuous'>('slide');

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => Math.min(COMMERCIAL_DECK_SLIDES.length - 1, prev + 1));
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

  const currentSlide = COMMERCIAL_DECK_SLIDES[currentIndex];

  const handlePrintPdf = () => {
    document.body.classList.add('printing-commercial');
    window.print();
    setTimeout(() => {
      document.body.classList.remove('printing-commercial');
    }, 1000);
  };

  return (
    <>
      {/* ON-SCREEN INTERACTIVE MODAL */}
      <div className="fixed inset-0 z-50 bg-slate-950/95 text-white flex flex-col justify-between overflow-y-auto no-print">
        {/* Top Sticky Header */}
        <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-slate-800 bg-slate-900 shadow-md">
          <div className="flex items-center gap-3">
            <img
              src={PROJECT_METADATA.logoUrl}
              alt="BAZICO"
              className="h-8 w-auto object-contain rounded bg-white p-0.5 shadow-2xs shrink-0"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold tracking-tight text-white">
                  BAZICO · Apresentação Comercial & Tecnológica
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Sem Dados Financeiros / Sem Preço
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400 block mt-0.5">
                {viewMode === 'slide'
                  ? `Slide ${currentIndex + 1} de ${COMMERCIAL_DECK_SLIDES.length} · Use setas ← → do teclado`
                  : 'Modo Documento Contínuo · Prévia de Impressão'}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Direct PDF / Print Generator */}
            <button
              type="button"
              onClick={handlePrintPdf}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              title="Abre o assistente para salvar a apresentação completa em PDF"
            >
              <FileDown className="w-4 h-4" />
              <span>Gerar Apresentação em PDF</span>
            </button>

            {/* View Mode Toggle */}
            <button
              type="button"
              onClick={() => setViewMode(viewMode === 'slide' ? 'continuous' : 'slide')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                viewMode === 'continuous'
                  ? 'bg-slate-800 text-white border-slate-600'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              {viewMode === 'continuous' ? 'Voltar para Slides' : 'Ver Todos os Slides'}
            </button>

            {/* Speaker Notes Toggle */}
            {viewMode === 'slide' && (
              <button
                type="button"
                onClick={() => setShowCommercialNotes(!showCommercialNotes)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                  showCommercialNotes
                    ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Argumentos de Venda
              </button>
            )}

            {/* Close Button */}
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

        {/* Content Area */}
        <div className="flex-1 max-w-6xl w-full mx-auto px-6 py-8 flex flex-col justify-center">
          {viewMode === 'slide' ? (
            /* SINGLE SLIDE VIEWER */
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 lg:p-12 shadow-2xl relative">
              {/* Category & Tagline Banner */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">
                <div className="flex items-center gap-2.5">
                  <img
                    src={PROJECT_METADATA.logoUrl}
                    alt="BAZICO"
                    className="h-5 w-auto object-contain rounded bg-white p-0.5 shadow-2xs"
                  />
                  <span>{currentSlide.category}</span>
                </div>
                <span className="text-slate-400 font-normal">{currentSlide.slideNumber}</span>
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                {currentSlide.title}
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl">
                {currentSlide.subtitle}
              </p>

              {/* Tagline Pill */}
              <div className="mt-4 inline-block px-3 py-1 rounded-md bg-emerald-950/80 border border-emerald-800 text-xs font-mono text-emerald-300">
                {currentSlide.tagline}
              </div>

              {/* Technical Highlights Strip (NO FINANCIAL PRICES) */}
              <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
                {currentSlide.highlights.map((h, i) => (
                  <div key={i} className="bg-slate-950 p-5 rounded-xl border border-slate-800">
                    <div className="text-xs font-mono uppercase text-slate-400">{h.label}</div>
                    <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">
                      {h.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 leading-snug">{h.desc}</div>
                  </div>
                ))}
              </div>

              {/* Core Commercial Bullet Cards */}
              <div className="mt-8 space-y-3">
                {currentSlide.keyPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {/* Executive Takeaway */}
              <div className="mt-8 p-4 rounded-xl bg-emerald-950/70 border border-emerald-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-300 shrink-0">
                  Diferencial Competitivo
                </div>
                <div className="text-sm font-semibold text-white leading-snug">
                  {currentSlide.takeaway}
                </div>
              </div>

              {/* Presenter Notes */}
              {showCommercialNotes && (
                <div className="mt-6 pt-5 border-t border-slate-800 text-xs text-slate-400">
                  <span className="font-mono uppercase text-amber-400 font-semibold mr-2">
                    Roteiro Comercial (Dica de Abordagem):
                  </span>
                  <span>{currentSlide.commercialNotes}</span>
                </div>
              )}
            </div>
          ) : (
            /* CONTINUOUS DOCUMENT PREVIEW */
            <div className="space-y-8">
              {COMMERCIAL_DECK_SLIDES.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 rounded-xl border border-slate-800 p-8 shadow-md"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={PROJECT_METADATA.logoUrl}
                        alt="BAZICO"
                        className="h-5 w-auto object-contain rounded bg-white p-0.5"
                      />
                      <span>{s.category}</span>
                    </div>
                    <span className="text-slate-400">{s.slideNumber}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mt-1">{s.title}</h3>
                  <p className="text-sm text-slate-300 mt-2">{s.subtitle}</p>

                  <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {s.highlights.map((h, i) => (
                      <div key={i} className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                        <div className="text-[11px] font-mono uppercase text-slate-400">{h.label}</div>
                        <div className="text-lg font-bold text-emerald-400 mt-0.5">{h.value}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{h.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-2">
                    {s.keyPoints.map((p, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Navigation Toolbar */}
        {viewMode === 'slide' && (
          <div className="sticky bottom-0 z-20 flex items-center justify-between gap-4 px-6 py-3 border-t border-slate-800 bg-slate-900/90 backdrop-blur-xs">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Slide Anterior
            </button>

            {/* Slide Navigation Thumbnails/Dots */}
            <div className="hidden sm:flex items-center gap-2">
              {COMMERCIAL_DECK_SLIDES.map((s, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`w-7 h-7 rounded-md text-xs font-mono font-medium transition-colors ${
                    currentIndex === index
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                  }`}
                  title={s.title}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              type="button"
              disabled={currentIndex === COMMERCIAL_DECK_SLIDES.length - 1}
              onClick={() =>
                setCurrentIndex((prev) => Math.min(COMMERCIAL_DECK_SLIDES.length - 1, prev + 1))
              }
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none transition-colors"
            >
              Próximo Slide
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* PRINT-ONLY CLEAN DECK (TARGET FOR WINDOW.PRINT -> SAVE AS PDF) */}
      <div className="commercial-print-deck hidden">
        {COMMERCIAL_DECK_SLIDES.map((slide, idx) => (
          <div key={idx} className="commercial-print-slide">
            {/* Slide Header */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-300">
                <div className="flex items-center gap-3">
                  <img
                    src={PROJECT_METADATA.logoUrl}
                    alt="BAZICO"
                    className="h-10 w-auto object-contain"
                  />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block font-sans">
                      BAZICO TECNOLOGIA E CONSULTORIA LTDA
                    </span>
                    <span className="text-[11px] font-mono text-emerald-800 block">
                      Apresentação Comercial & Institucional · {slide.category}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-slate-700 block">
                    {slide.slideNumber}
                  </span>
                  <span className="text-[10px] text-slate-500 block">
                    Uso Comercial / Não Contém Valores Financeiros
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                {slide.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-4xl">
                {slide.subtitle}
              </p>

              {/* Tagline */}
              <div className="mt-3 inline-block px-3 py-1 rounded bg-slate-100 text-slate-800 text-xs font-mono font-medium border border-slate-300">
                {slide.tagline}
              </div>

              {/* Highlights 4-col strip */}
              <div className="mt-6 grid grid-cols-4 gap-3">
                {slide.highlights.map((h, i) => (
                  <div key={i} className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="text-[10px] font-mono uppercase text-slate-500">{h.label}</div>
                    <div className="text-xl font-bold font-mono text-emerald-800 mt-0.5">
                      {h.value}
                    </div>
                    <div className="text-[10px] text-slate-600 mt-0.5 leading-tight">{h.desc}</div>
                  </div>
                ))}
              </div>

              {/* Key Commercial Points */}
              <div className="mt-6 space-y-2.5">
                {slide.keyPoints.map((pt, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 leading-relaxed"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Footer */}
            <div className="mt-6 pt-3 border-t border-slate-300">
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-900">
                  Diferencial Competitivo:
                </span>
                <span className="text-xs font-medium text-emerald-950">
                  {slide.takeaway}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>
                  Consórcio Internacional: BAZICO · MM ENVIRO Projects · JG Sette
                </span>
                <span>
                  Contato Comercial: {PROJECT_METADATA.ceo} ({PROJECT_METADATA.phone} · {PROJECT_METADATA.email})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
