import React, { useState } from 'react';
import {
  PROJECT_METADATA,
  GLOBAL_TRACK_RECORD,
  WASTE_GENERATORS,
  REFERENCE_CASES,
  TECH_PARTNERS_ECOSYSTEM,
  SATISFIED_CLIENTS,
} from './data/bazicoProjectData';
import { InteractivePlantBlueprint } from './components/InteractivePlantBlueprint';
import { FinancialSimulatorSection } from './components/FinancialSimulatorSection';
import { OpexExplorerSection } from './components/OpexExplorerSection';
import { PitchDeckModal } from './components/PitchDeckModal';
import { CommercialPresentationModal } from './components/CommercialPresentationModal';
import {
  Presentation,
  ArrowUpRight,
  FileText,
  FileDown,
  Printer,
  CheckCircle2,
  Building2,
  Phone,
  Mail,
  Globe,
} from 'lucide-react';

export function App() {
  const [isPitchModeOpen, setIsPitchModeOpen] = useState<boolean>(false);
  const [isCommercialDeckOpen, setIsCommercialDeckOpen] = useState<boolean>(false);
  const [selectedSector, setSelectedSector] = useState<string>('Todos');

  const generatorSectors = [
    'Todos',
    'Varejo & Food Service',
    'Infraestrutura & Indústria',
    'Urbano & Institucional',
  ];

  const filteredGenerators = WASTE_GENERATORS.filter((g) => {
    if (selectedSector === 'Todos') return true;
    if (selectedSector === 'Varejo & Food Service') {
      return ['Comercial & Varejo', 'Food Service', 'Hospitalidade', 'Varejo Alimentar', 'Abastecimento Urbano', 'Entrepostos Atacadistas'].includes(
        g.sector
      );
    }
    if (selectedSector === 'Infraestrutura & Indústria') {
      return ['Agroindústria', 'Infraestrutura Crítica'].includes(g.sector);
    }
    return ['Institucional', 'Urbano Domiciliar', 'Gestão Municipal'].includes(g.sector);
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* STRICT 3-ZONE TOP BAR CONTRACT */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-slate-200 no-print">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
          {/* Zone 1: Brand Title with Official Logo */}
          <a
            href="#topo"
            className="flex items-center gap-3 text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 group"
          >
            <img
              src={PROJECT_METADATA.logoUrl}
              alt="BAZICO Tecnologia"
              className="h-9 w-auto object-contain rounded-md shadow-2xs group-hover:scale-105 transition-transform"
            />
            <span className="font-display">BAZICO Tecnologia</span>
          </a>

          {/* Zone 2: 5 Single-Line Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a
              href="#tese"
              className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Visão Executiva
            </a>
            <a
              href="#mercado"
              className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Matéria-Prima
            </a>
            <a
              href="#engenharia"
              className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Engenharia CSTR
            </a>
            <a
              href="#financeiro"
              className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Viabilidade Financeira
            </a>
            <a
              href="#credenciais"
              className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Track Record
            </a>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => setIsCommercialDeckOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-700 rounded-lg hover:bg-emerald-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
              title="Apresentação Comercial da empresa e tecnologia (sem dados financeiros)"
            >
              <FileDown className="w-4 h-4 text-emerald-200" />
              <span>Apresentação Comercial (PDF)</span>
            </button>

            <button
              type="button"
              onClick={() => setIsPitchModeOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Presentation className="w-4 h-4 text-emerald-400" />
              <span>Pitch Deck</span>
            </button>
          </div>
        </div>
      </header>

      <main id="topo" className="flex-1">
        {/* HERO SECTION — INVESTOR MEMORANDUM & EXECUTIVE VIABILITY STUDY */}
        <section id="tese" className="py-16 lg:py-24 bg-slate-950 text-white border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            {/* Unboxed Metadata Bar with Typographic Separators & Official Logo */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-8 pb-4 border-b border-slate-800/80">
              <img
                src={PROJECT_METADATA.logoUrl}
                alt="Logo BAZICO"
                className="h-10 w-auto object-contain rounded-md bg-white p-1 shadow-sm"
              />
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-emerald-400 font-semibold">MEMORANDO DE VIABILIDADE ECONÔMICA</span>
                <span aria-hidden="true">·</span>
                <span>BAZICO TECNOLOGIA E CONSULTORIA LTDA</span>
                <span aria-hidden="true">·</span>
                <span>MM ENVIRO PROJECTS PVT. LTD.</span>
                <span aria-hidden="true">·</span>
                <span>JG SETTE</span>
                <span aria-hidden="true">·</span>
                <span>OUTUBRO 2026</span>
              </div>
            </div>

            {/* 2-Column Split with items-stretch */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              {/* Left 7 Cols: Thesis & Core Value Proposition */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                    Implantação de Planta Industrial de Biogás, Biometano e Fertilizantes Orgânicos
                  </h1>

                  <p className="mt-6 text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
                    Estudo de viabilidade econômica para construção de uma planta completa com{' '}
                    <strong className="text-white">3 Biodigestores CSTR Verticais</strong> dedicada ao
                    tratamento de <strong className="text-emerald-400">280 toneladas/dia</strong> de resíduos
                    orgânicos, produzindo Biometano comprimido a 250 bar (Padrão ANP 685) e Fertilizantes
                    Orgânicos Classificação &quot;A&quot;.
                  </p>

                  {/* Strategic Highlights */}
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="text-xs font-mono uppercase text-emerald-400">
                        Autossuficiência Operacional
                      </div>
                      <div className="text-sm font-medium text-slate-200 mt-1 leading-snug">
                        100% da energia elétrica, térmica e combustível da frota de coleta supridos pela
                        própria planta.
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="text-xs font-mono uppercase text-amber-400">
                        Garantia de Performance
                      </div>
                      <div className="text-sm font-medium text-slate-200 mt-1 leading-snug">
                        30 anos de experiência com telemetria físico-química em tempo real (AVTR) e controle
                        SCADA.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Workspace Toolbar & Action Controls */}
                <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-3 no-print">
                  <button
                    type="button"
                    onClick={() => setIsCommercialDeckOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-md"
                    title="Abre a Apresentação Comercial completa sem dados financeiros pronta para gerar PDF"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Gerar Apresentação Comercial em PDF</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsPitchModeOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-white bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <Presentation className="w-4 h-4 text-emerald-400" />
                    Pitch Deck (Investidores)
                  </button>

                  <a
                    href="#financeiro"
                    className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 bg-slate-900/80 border border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap shrink-0"
                  >
                    Simulador Financeiro
                  </a>

                  <a
                    href={PROJECT_METADATA.driveFolderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-mono text-slate-300 bg-slate-900/60 border border-slate-800 rounded-lg hover:text-white hover:border-slate-700 transition-colors whitespace-nowrap shrink-0"
                  >
                    Data Room (Google Drive)
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setIsCommercialDeckOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-3 text-xs font-mono text-slate-400 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    title="Exportar Apresentação Comercial completa em PDF"
                  >
                    <Printer className="w-3.5 h-3.5 text-emerald-400" />
                    Apresentação em PDF
                  </button>
                </div>
              </div>

              {/* Right 5 Cols: Institutional Valuation & Financial Highlights Card */}
              <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-7 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={PROJECT_METADATA.logoUrl}
                        alt="BAZICO"
                        className="h-6 w-auto object-contain rounded bg-white p-0.5 shadow-2xs"
                      />
                      <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                        Quadro Resumo de Viabilidade
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">25 Anos</span>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-5">
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800/90">
                      <div className="text-xs font-mono text-slate-400 uppercase">
                        TIR (Taxa Interna)
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold font-mono tabular-nums text-emerald-400 mt-1">
                        34,07% <span className="text-xs font-normal text-slate-400">a.a.</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-1 font-mono">
                        TMA de Referência: 12,00%
                      </div>
                    </div>

                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800/90">
                      <div className="text-xs font-mono text-slate-400 uppercase">
                        Payback Descontado
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold font-mono tabular-nums text-amber-400 mt-1">
                        3a 02m
                      </div>
                      <div className="text-xs text-slate-500 mt-1 font-mono">
                        Retorno rápido do capital
                      </div>
                    </div>
                  </div>

                  <dl className="mt-6 space-y-3.5 text-sm">
                    <div className="flex items-center justify-between py-2 border-b border-slate-800">
                      <dt className="text-slate-400">Valor Presente Líquido (VPL)</dt>
                      <dd className="font-mono font-bold tabular-nums text-white text-base">
                        R$ 299.601.946,67
                      </dd>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-800">
                      <dt className="text-slate-400">Investimento Total (CAPEX)</dt>
                      <dd className="font-mono font-semibold tabular-nums text-slate-200">
                        R$ 131.897.989,09
                      </dd>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-800">
                      <dt className="text-slate-400">Previsão de Receitas Brutas / Ano</dt>
                      <dd className="font-mono font-semibold tabular-nums text-slate-200">
                        R$ 48.148.415,00
                      </dd>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-800">
                      <dt className="text-slate-400">(-) Despesas Operacionais (OPEX / Ano)</dt>
                      <dd className="font-mono tabular-nums text-rose-400">
                        - R$ 10.759.240,20
                      </dd>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <dt className="font-semibold text-emerald-400">EBITDA Anual Consolidado</dt>
                      <dd className="font-mono font-bold tabular-nums text-emerald-400 text-lg">
                        R$ 37.390.174,80
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Responsável: Lytton Medrado (CEO)</span>
                  <span className="font-mono text-emerald-400">Margem EBITDA: 77,66%</span>
                </div>
              </div>
            </div>

            {/* Full-Width 4-Column Physical Production Strip Below Hero Split */}
            <div className="mt-10 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="text-xs font-mono uppercase text-slate-400">
                  1. Resíduos Orgânicos Tratados
                </div>
                <div className="text-2xl font-bold font-mono tabular-nums text-white mt-1">
                  280 Ton/dia · 102.200 t/ano
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  11,67 ton/hora · Receita de coleta: R$ 16,13 Mi/ano
                </div>
              </div>

              <div>
                <div className="text-xs font-mono uppercase text-slate-400">
                  2. Produção de Biometano (98–99% CH4)
                </div>
                <div className="text-2xl font-bold font-mono tabular-nums text-emerald-400 mt-1">
                  14.952 Nm³/dia · 5,46 Mi Nm³/ano
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Padrão ANP 685 a 250 bar · Receita: R$ 18,16 Mi/ano
                </div>
              </div>

              <div>
                <div className="text-xs font-mono uppercase text-slate-400">
                  3. Fertilizante Orgânico Classe &quot;A&quot;
                </div>
                <div className="text-2xl font-bold font-mono tabular-nums text-amber-400 mt-1">
                  47,0 Ton/dia · 16.920 t/ano
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Sacos 15 kg e Big Bags 1.000 kg · Receita: R$ 12,69 Mi/ano
                </div>
              </div>

              <div>
                <div className="text-xs font-mono uppercase text-slate-400">
                  4. Créditos de Descarbonização
                </div>
                <div className="text-2xl font-bold font-mono tabular-nums text-sky-400 mt-1">
                  11.742 CBIOs / ano
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Mitigação de metano e diesel · Receita: R$ 1,17 Mi/ano
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 01: TESE DE MERCADO, SUSTENTABILIDADE E 12 POLOS GERADORES (Pages 4–11 & 22) */}
        <section id="mercado" className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-14 border-b border-slate-200">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-800 mb-3">
                  <span>01. Fundamentos de Mercado & ESG</span>
                  <span aria-hidden="true">·</span>
                  <span>Economia Circular Definitiva</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                  O &quot;Lixo&quot; são Resíduos de Alto Valor Agregado
                </h2>
                <p className="mt-4 text-base text-slate-600 leading-relaxed">
                  Um terço (1/3) de tudo o que é produzido no mundo é transformado em resíduo. Modelos
                  convencionais como lixões, aterros controlados, aterros sanitários ou compostagem aberta
                  são soluções provisórias que perpetuam passivos ambientais, emissões de gases de efeito
                  estufa e custos crescentes para municípios e grandes geradores.
                </p>

                <blockquote className="mt-6 py-4 border-y border-slate-200 font-serif italic text-lg text-slate-800">
                  &ldquo;A sustentabilidade é um conceito relacionado com três pilares: Social, Ambiental e
                  Econômico. Juntos eles asseguram o desenvolvimento sustentável convertendo passivo
                  ambiental em lucro com Resíduo Zero no final do processo.&rdquo;
                </blockquote>
              </div>

              {/* Comparison: Provisional Landfills vs. BAZICO Definitive Solution (Page 5 & 6) */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <div className="text-xs font-mono uppercase text-rose-700 font-semibold">
                    Modelo Convencional (Passivo)
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    Aterro Sanitário & Lixões
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                    <li>• Solução provisória com risco ambiental perpétuo</li>
                    <li>• Geração descontrolada de chorume e metano (CH4)</li>
                    <li>• Proliferação de pragas, odores e passivos de saúde pública</li>
                    <li>• Desperdício integral de matéria orgânica e nutrientes</li>
                    <li>• Custo logístico crescente sem retorno financeiro</li>
                  </ul>
                </div>

                <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xs font-mono uppercase text-emerald-400 font-semibold">
                      Solução Definitiva BAZICO
                    </div>
                    <img
                      src={PROJECT_METADATA.logoUrl}
                      alt="BAZICO"
                      className="h-6 w-auto object-contain rounded bg-white p-0.5 shadow-2xs"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Biodigestão Anaeróbia CSTR
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                    <li>• Segregação na origem com 95% a 97,5% de eficiência</li>
                    <li>• Acondicionamento hermético sem odores ou vetores</li>
                    <li>• Conversão em Biometano (99% CH4) para frota e indústria</li>
                    <li>• Produção de Fertilizante Orgânico Classe &quot;A&quot; com enxofre</li>
                    <li>• Balanço &ldquo;Resíduo Zero&rdquo; e alta rentabilidade (TIR 34,07%)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 12 POTENCIAIS GERADORES DE RESÍDUOS (Pages 8, 9, 10) */}
            <div className="mt-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold">
                    Seção 1 & 1.1 · Suprimento Garantido na Fonte
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    12 Polos Geradores de Resíduos Orgânicos Mapeados
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Durante a implantação é realizado o Programa de Visita aos Domicílios e Grandes Geradores
                    unindo <strong>Tecnologia, Educação e Iniciativa</strong>.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-lg border border-slate-200">
                  {generatorSectors.map((sec) => (
                    <button
                      key={sec}
                      type="button"
                      onClick={() => setSelectedSector(sec)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                        selectedSector === sec
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {sec}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredGenerators.map((gen, idx) => (
                  <article
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between group hover:border-slate-300 transition-colors"
                  >
                    <div>
                      {/* Realistic Photographic Header with Zero-Broken-Image Fallback */}
                      <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                        <img
                          src={gen.image}
                          alt={`${gen.name} — Polo Gerador de Resíduos Orgânicos`}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between gap-2 text-white">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300">
                            {gen.sector}
                          </span>
                          <span className="text-xs font-mono font-semibold tabular-nums text-white">
                            Pureza {gen.purityPotential}
                          </span>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-5">
                        <h4 className="text-base font-bold text-slate-900 leading-snug">
                          {gen.name}
                        </h4>
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                          {gen.note}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span>{gen.tippingPotential}</span>
                      <span className="text-emerald-800 font-semibold">R$ 160/t Base</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: INTERACTIVE PLANT BLUEPRINT & CSTR ENGINEERING */}
        <InteractivePlantBlueprint />

        {/* SECTION 03: FINANCIAL SIMULATOR, PREMISES & TAX INCENTIVES */}
        <FinancialSimulatorSection />

        {/* SECTION 04: OPEX, LABOR & UTILITIES AUDIT */}
        <OpexExplorerSection />

        {/* SECTION 05: GLOBAL TRACK RECORD, REFERENCE PLANTS & PARTNER ECOSYSTEM (Pages 3, 31–35) */}
        <section id="credenciais" className="py-20 bg-slate-900 text-white border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="pb-10 border-b border-slate-800">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
                <img
                  src={PROJECT_METADATA.logoUrl}
                  alt="BAZICO"
                  className="h-6 w-auto object-contain rounded bg-white p-0.5 shadow-2xs"
                />
                <span>05. Track Record Global & Certificados</span>
                <span aria-hidden="true">·</span>
                <span>Operação Comprovada em 22 Países</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
                30 Anos de Experiência & Plantas em Operação
              </h2>
              <p className="mt-3 text-base text-slate-300 max-w-2xl leading-relaxed">
                Capacidade técnica atestada por líderes industriais globais, combinando mais de 350 reatores
                anaeróbicos instalados, laboratório próprio, planta piloto e garantia contratual de performance.
              </p>
            </div>

            {/* 4 Global Track Record KPIs (Page 3) */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {GLOBAL_TRACK_RECORD.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-3xl font-bold font-mono tabular-nums text-emerald-400">
                      {item.metric}
                    </div>
                    <div className="text-base font-bold text-white mt-2">{item.label}</div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 3 Reference Cases: Indore 550 t/d Plant + Petrobras Suape + Gerdau 15 MW (Pages 32 & 33) */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-6">
                Plantas de Referência e Atestados de Capacidade Técnica (Brasil & Exterior)
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {REFERENCE_CASES.map((ref, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-950 rounded-xl p-6 border border-slate-800 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs font-mono text-emerald-400 uppercase">{ref.client}</div>
                      <h4 className="text-lg font-bold text-white mt-1">{ref.title}</h4>
                      <div className="text-xs text-slate-400 mt-1">{ref.location}</div>

                      <div className="mt-4 p-3 bg-slate-900 rounded-lg border border-slate-800 font-mono text-xs text-amber-300 font-semibold">
                        Escopo: {ref.capacity}
                      </div>

                      <ul className="mt-4 space-y-2 text-xs text-slate-300">
                        {ref.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Partners Grid (Page 34) */}
            <div className="mt-14 pt-10 border-t border-slate-800">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                    Alianças Tecnológicas de Primeira Linha (Página 34)
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Consórcio Internacional de Fornecedores e Engenharia
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {TECH_PARTNERS_ECOSYSTEM.map((p, idx) => (
                  <div key={idx} className="p-4 bg-slate-950/70 rounded-lg border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="text-white font-bold text-sm font-sans">{p.name}</span>
                      <span>{p.country}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{p.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Satisfied Blue-Chip Clients (Page 35) */}
            <div className="mt-12 pt-8 border-t border-slate-800">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                Clientes Corporativos Satisfeitos (Certificados Emitidos — Página 35)
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {SATISFIED_CLIENTS.map((client, idx) => (
                  <div
                    key={idx}
                    className="py-3 px-4 bg-slate-950/50 border border-slate-800/80 rounded-lg text-center text-xs font-mono font-semibold text-slate-300"
                  >
                    {client}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* INSTITUTIONAL FOOTER & DATA ROOM ACCESS (Page 36) */}
      <footer className="bg-slate-950 text-slate-400 py-14 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={PROJECT_METADATA.logoUrl}
                  alt="BAZICO"
                  className="h-12 w-auto object-contain rounded-lg bg-white p-1 shadow-md"
                />
                <div>
                  <div className="text-xl font-bold text-white tracking-tight">
                    {PROJECT_METADATA.company}
                  </div>
                  <div className="text-xs text-emerald-400 font-mono">
                    Engenharia, Biotecnologia & Transição Energética
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-400 mt-2 max-w-md leading-relaxed">
                Proposta Executiva para Implantação de Planta de Tratamento de Resíduos Orgânicos (280
                Toneladas/Dia) — Produção de Biogás, Biometano (250 bar) e Fertilizantes Orgânicos Classe
                &quot;A&quot;.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
                <span>Parceiros: MM ENVIRO Projects Pvt. Ltd.</span>
                <span aria-hidden="true">·</span>
                <span>JG Sette</span>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-2 text-sm">
              <div className="text-xs font-mono uppercase text-emerald-400 font-semibold mb-2">
                Contato Direto da Diretoria
              </div>
              <div className="text-white font-semibold">
                {PROJECT_METADATA.ceo} — {PROJECT_METADATA.role}
              </div>
              <div className="flex items-center gap-2 text-slate-300 font-mono text-xs">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href="tel:+5511993435812" className="hover:text-white">
                  {PROJECT_METADATA.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300 font-mono text-xs">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`mailto:${PROJECT_METADATA.email}`} className="hover:text-white">
                  {PROJECT_METADATA.email}
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col justify-between">
              <div className="text-xs font-mono uppercase text-emerald-400 font-semibold mb-2">
                Arquivos & Auditoria
              </div>
              <div className="space-y-2 no-print">
                <button
                  type="button"
                  onClick={() => setIsCommercialDeckOpen(true)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-800 rounded-lg hover:bg-emerald-900 transition-colors cursor-pointer text-left shadow-xs"
                >
                  <span>Apresentação Comercial em PDF (Institucional)</span>
                  <FileDown className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                </button>

                <a
                  href={PROJECT_METADATA.driveFolderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-medium text-white bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
                >
                  <span>Pasta Google Drive do Projeto</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </a>
                <a
                  href={PROJECT_METADATA.pdfAssetPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-medium text-slate-300 bg-slate-900/50 border border-slate-800 rounded-lg hover:text-white transition-colors"
                >
                  <span>Abrir PDF Original (36 Págs.)</span>
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} {PROJECT_METADATA.company}. Todos os direitos reservados.
            </div>
            <div className="font-mono">
              Referência Documental: Outubro / 2026 · Estudo Preliminar de Viabilidade Econômica
            </div>
          </div>
        </div>
      </footer>

      {/* FULL-SCREEN INTERACTIVE PITCH DECK MODAL (COM DADOS FINANCEIROS) */}
      <PitchDeckModal isOpen={isPitchModeOpen} onClose={() => setIsPitchModeOpen(false)} />

      {/* FULL-SCREEN COMMERCIAL PRESENTATION MODAL & PDF GENERATOR (SEM DADOS FINANCEIROS / SEM PREÇO) */}
      <CommercialPresentationModal
        isOpen={isCommercialDeckOpen}
        onClose={() => setIsCommercialDeckOpen(false)}
      />
    </div>
  );
}

export default App;
