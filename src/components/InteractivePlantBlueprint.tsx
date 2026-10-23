import React, { useState } from 'react';
import {
  PLANT_ZONES,
  PROCESS_STAGES,
  FILTER_PRESS_CYCLE,
  PlantZone,
  PROJECT_METADATA,
} from '../data/bazicoProjectData';
import { Layers, Cpu, CheckCircle2, ArrowRight, Gauge, ShieldCheck } from 'lucide-react';

export const InteractivePlantBlueprint: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'maquete' | 'cstr' | 'digestato' | 'rotas'>('maquete');
  const [selectedZone, setSelectedZone] = useState<PlantZone>(PLANT_ZONES[1]); // Default to 3 Reatores CSTR
  const [activeStageStep, setActiveStageStep] = useState<number>(2);

  return (
    <section id="engenharia" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-emerald-800 mb-3">
              <img
                src={PROJECT_METADATA.logoUrl}
                alt="BAZICO"
                className="h-6 w-auto object-contain rounded bg-white p-0.5 border border-slate-200 shadow-2xs"
              />
              <span>02. Engenharia & Arquitetura Industrial</span>
              <span aria-hidden="true">·</span>
              <span>Tecnologia Proprietária AVTR & SCADA</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Planta Completa CSTR Vertical & Fluxo Resíduo Zero
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl leading-relaxed">
              Substituímos os esquemas estáticos de baixa resolução por diagramas técnicos interativos.
              Explore a implantação física da planta de 280 ton/dia, o funcionamento interno dos 3 reatores
              CSTR verticais e o circuito fechado de autossuficiência energética.
            </p>
          </div>

          {/* Interactive View Switcher (Functional Segmented Control) */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('maquete')}
              className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'maquete'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Maquete Interativa (Layout)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('cstr')}
              className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'cstr'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Reator CSTR (LESAR)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('digestato')}
              className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'digestato'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Filtro-Prensa (8 Etapas)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('rotas')}
              className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'rotas'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Comparativo Rota 1 vs. Rota 2
            </button>
          </div>
        </div>

        {/* TAB 1: MAQUETE INTERATIVA DA PLANTA (Replaces low-res 3D screenshots on Pages 2, 29, 30) */}
        {activeTab === 'maquete' && (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 7 cols: Architectural SVG Blueprint */}
            <div className="lg:col-span-7 bg-slate-900 rounded-xl p-6 text-white flex flex-col justify-between border border-slate-800">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                    Planta Industrial · 280 Ton/Dia · 3 Biodigestores CSTR
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-0.5">
                    Implantação Geral & Zonas Operacionais (Clique para Inspecionar)
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400 whitespace-nowrap shrink-0">
                  Escala esquemática · 5 Zonas
                </span>
              </div>

              {/* Interactive SVG Plant Map inspired by Pages 29 & 30 */}
              <div className="relative w-full aspect-16/10 bg-slate-950 rounded-lg border border-slate-800 overflow-hidden">
                <svg
                  viewBox="0 0 800 450"
                  className="w-full h-full select-none"
                  role="img"
                  aria-label="Mapa arquitetônico interativo da planta BAZICO de biogás e biometano"
                >
                  <defs>
                    <pattern id="blueprintGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="rgba(148, 163, 184, 0.08)"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>

                  {/* Background Grid & Perimeter Fence */}
                  <rect width="800" height="450" fill="url(#blueprintGrid)" />
                  <rect
                    x="30"
                    y="25"
                    width="740"
                    height="400"
                    rx="8"
                    fill="none"
                    stroke="rgba(148, 163, 184, 0.25)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                  />

                  {/* Internal Paved Roads */}
                  <path
                    d="M 30 245 L 395 245 L 395 425 M 290 95 L 290 245"
                    stroke="rgba(71, 85, 105, 0.45)"
                    strokeWidth="26"
                    fill="none"
                  />

                  {/* Process Pipelines Connecting Zones */}
                  <path
                    d="M 275 160 L 440 160"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                    fill="none"
                  />
                  <path
                    d="M 460 190 L 360 190"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                    fill="none"
                  />
                  <path
                    d="M 580 265 L 580 300"
                    stroke="#38bdf8"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                    fill="none"
                  />

                  {/* ZONA 01: Recepção, Balança e Caminhões (Pages 2, 29, 30) */}
                  <g
                    onClick={() => setSelectedZone(PLANT_ZONES[0])}
                    className="cursor-pointer transition-opacity hover:opacity-95"
                  >
                    <rect
                      x="55"
                      y="65"
                      width="220"
                      height="155"
                      rx="6"
                      fill={selectedZone.id === 'recepcao' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(30, 41, 59, 0.85)'}
                      stroke={selectedZone.id === 'recepcao' ? '#10b981' : '#475569'}
                      strokeWidth={selectedZone.id === 'recepcao' ? '2.5' : '1.5'}
                    />
                    {/* Weighbridge & Gatehouse */}
                    <rect x="68" y="78" width="60" height="28" rx="3" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
                    <text x="98" y="96" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontFamily="monospace">
                      PORTARIA
                    </text>
                    {/* Reception Shed + 3 Collection Trucks */}
                    <rect x="145" y="78" width="115" height="90" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
                    <rect x="157" y="140" width="22" height="36" rx="2" fill="#e2e8f0" />
                    <rect x="191" y="140" width="22" height="36" rx="2" fill="#e2e8f0" />
                    <rect x="225" y="140" width="22" height="36" rx="2" fill="#e2e8f0" />
                    <text x="202" y="102" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">
                      DOCAS 280t/d
                    </text>
                    <text x="202" y="118" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold">
                      3 CAMINHÕES
                    </text>
                    <text x="165" y="206" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">
                      ZONA 01 · Recepção & Hidrólise
                    </text>
                  </g>

                  {/* ZONA 02: 3 Biodigestores CSTR Verticais (The iconic yellow & white domes from pages 29 & 30) */}
                  <g
                    onClick={() => setSelectedZone(PLANT_ZONES[1])}
                    className="cursor-pointer transition-opacity hover:opacity-95"
                  >
                    <rect
                      x="430"
                      y="48"
                      width="320"
                      height="218"
                      rx="8"
                      fill={selectedZone.id === 'reatores-cstr' ? 'rgba(245, 158, 11, 0.16)' : 'rgba(30, 41, 59, 0.85)'}
                      stroke={selectedZone.id === 'reatores-cstr' ? '#f59e0b' : '#475569'}
                      strokeWidth={selectedZone.id === 'reatores-cstr' ? '2.5' : '1.5'}
                    />
                    {/* Main Large CSTR Reactor 1 */}
                    <circle cx="635" cy="128" r="64" fill="#d97706" stroke="#fde68a" strokeWidth="2" />
                    <circle cx="635" cy="128" r="46" fill="none" stroke="rgba(254, 243, 199, 0.4)" strokeDasharray="4 4" />
                    <text x="635" y="124" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">
                      CSTR #01
                    </text>
                    <text x="635" y="139" textAnchor="middle" fill="#fef3c7" fontSize="9" fontFamily="monospace">
                      LESAR VERTICAL
                    </text>

                    {/* CSTR Reactor 2 */}
                    <circle cx="515" cy="202" r="42" fill="#d97706" stroke="#fde68a" strokeWidth="2" />
                    <text x="515" y="200" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
                      CSTR #02
                    </text>
                    <text x="515" y="213" textAnchor="middle" fill="#fef3c7" fontSize="8" fontFamily="monospace">
                      AVTR ONLINE
                    </text>

                    {/* CSTR Reactor 3 / Sludge Tank */}
                    <circle cx="665" cy="218" r="38" fill="#cbd5e1" stroke="#f8fafc" strokeWidth="2" />
                    <text x="665" y="216" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold">
                      CSTR #03
                    </text>
                    <text x="665" y="228" textAnchor="middle" fill="#334155" fontSize="8" fontFamily="monospace">
                      LODO / CLARIF.
                    </text>

                    {/* Equalizer / Hydrolysis Tank */}
                    <circle cx="585" cy="212" r="16" fill="#f59e0b" stroke="#fef3c7" strokeWidth="1.5" />

                    <text x="540" y="72" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">
                      ZONA 02 · 3 Biodigestores CSTR
                    </text>
                  </g>

                  {/* ZONA 03: Gasômetro, Dessulfurização e Compressão 250 bar */}
                  <g
                    onClick={() => setSelectedZone(PLANT_ZONES[2])}
                    className="cursor-pointer transition-opacity hover:opacity-95"
                  >
                    <rect
                      x="295"
                      y="65"
                      width="120"
                      height="155"
                      rx="6"
                      fill={selectedZone.id === 'purificacao-gas' ? 'rgba(16, 185, 129, 0.22)' : 'rgba(30, 41, 59, 0.85)'}
                      stroke={selectedZone.id === 'purificacao-gas' ? '#10b981' : '#475569'}
                      strokeWidth={selectedZone.id === 'purificacao-gas' ? '2.5' : '1.5'}
                    />
                    <circle cx="355" cy="118" r="34" fill="#e2e8f0" stroke="#10b981" strokeWidth="2" />
                    <text x="355" y="115" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="bold">
                      GASÔMETRO
                    </text>
                    <text x="355" y="127" textAnchor="middle" fill="#047857" fontSize="8" fontFamily="monospace">
                      99% CH4
                    </text>
                    <rect x="312" y="162" width="86" height="28" rx="3" fill="#065f46" stroke="#34d399" strokeWidth="1" />
                    <text x="355" y="179" textAnchor="middle" fill="#ecfdf5" fontSize="8.5" fontFamily="monospace">
                      250 BAR · ANP 685
                    </text>
                    <text x="355" y="208" fill="#f8fafc" fontSize="10" fontWeight="bold" textAnchor="middle">
                      ZONA 03 · Biometano
                    </text>
                  </g>

                  {/* ZONA 04: Gestão do Digestato, Secagem e Embalagem de Fertilizante Classe A */}
                  <g
                    onClick={() => setSelectedZone(PLANT_ZONES[3])}
                    className="cursor-pointer transition-opacity hover:opacity-95"
                  >
                    <rect
                      x="430"
                      y="282"
                      width="320"
                      height="128"
                      rx="6"
                      fill={selectedZone.id === 'fertilizantes' ? 'rgba(56, 189, 248, 0.2)' : 'rgba(30, 41, 59, 0.85)'}
                      stroke={selectedZone.id === 'fertilizantes' ? '#38bdf8' : '#475569'}
                      strokeWidth={selectedZone.id === 'fertilizantes' ? '2.5' : '1.5'}
                    />
                    {/* Industrial Roof Ribbing like Page 29 bottom right */}
                    <rect x="448" y="302" width="284" height="72" rx="4" fill="#b45309" stroke="#fcd34d" strokeWidth="1.5" />
                    <line x1="490" y1="302" x2="490" y2="374" stroke="rgba(254, 243, 199, 0.25)" strokeWidth="2" />
                    <line x1="535" y1="302" x2="535" y2="374" stroke="rgba(254, 243, 199, 0.25)" strokeWidth="2" />
                    <line x1="580" y1="302" x2="580" y2="374" stroke="rgba(254, 243, 199, 0.25)" strokeWidth="2" />
                    <line x1="625" y1="302" x2="625" y2="374" stroke="rgba(254, 243, 199, 0.25)" strokeWidth="2" />
                    <line x1="670" y1="302" x2="670" y2="374" stroke="rgba(254, 243, 199, 0.25)" strokeWidth="2" />
                    <text x="590" y="335" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">
                      FILTRO-PRENSA + SECADOR ROTATIVO + ENSACADEIRA
                    </text>
                    <text x="590" y="353" textAnchor="middle" fill="#fef3c7" fontSize="9.5" fontFamily="monospace">
                      47 TON/DIA · 16.920 TON/ANO · FERTILIZANTE CLASSE &quot;A&quot;
                    </text>
                    <text x="590" y="397" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">
                      ZONA 04 · Unidade de Fertilizantes Orgânicos (15 kg / 1.000 kg)
                    </text>
                  </g>

                  {/* ZONA 05: Autossuficiência Energética (Solar + Motogerador CAT + Caldeira 5 TPH) */}
                  <g
                    onClick={() => setSelectedZone(PLANT_ZONES[4])}
                    className="cursor-pointer transition-opacity hover:opacity-95"
                  >
                    <rect
                      x="55"
                      y="282"
                      width="320"
                      height="128"
                      rx="6"
                      fill={selectedZone.id === 'utilidades' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(30, 41, 59, 0.85)'}
                      stroke={selectedZone.id === 'utilidades' ? '#10b981' : '#475569'}
                      strokeWidth={selectedZone.id === 'utilidades' ? '2.5' : '1.5'}
                    />
                    <rect x="75" y="302" width="135" height="68" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
                    <text x="142" y="332" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">
                      USINA SOLAR + CAT
                    </text>
                    <text x="142" y="348" textAnchor="middle" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">
                      GERAÇÃO ELÉTRICA
                    </text>

                    <rect x="222" y="302" width="135" height="68" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
                    <text x="290" y="332" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">
                      CALDEIRA 5 TPH
                    </text>
                    <text x="290" y="348" textAnchor="middle" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">
                      CAVACO PODA / VAPOR
                    </text>

                    <text x="215" y="397" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">
                      ZONA 05 · Matriz 100% Autossuficiente (Elétrica + Térmica)
                    </text>
                  </g>
                </svg>
              </div>

              {/* Zone Quick Selector Buttons */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-2">
                {PLANT_ZONES.map((zone) => (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => setSelectedZone(zone)}
                    className={`px-3 py-2 rounded-lg text-left transition-colors border ${
                      selectedZone.id === zone.id
                        ? 'bg-emerald-900/50 border-emerald-500 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <div className="text-[11px] font-mono text-emerald-400">{zone.code}</div>
                    <div className="text-xs font-medium truncate mt-0.5">{zone.category}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right 5 cols: Active Zone Technical Inspector */}
            <div className="lg:col-span-5 bg-slate-50 rounded-xl p-7 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-200">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold">
                    {selectedZone.code} · {selectedZone.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    Parceiro: {selectedZone.technologyPartner}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-5">
                  {selectedZone.name}
                </h3>

                <div className="mt-4 p-4 bg-white rounded-lg border border-slate-200">
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-mono">
                    Capacidade Nominal de Projeto
                  </div>
                  <div className="text-xl font-bold font-mono tabular-nums text-emerald-800 mt-1">
                    {selectedZone.capacity}
                  </div>
                </div>

                <p className="mt-5 text-sm text-slate-600 leading-relaxed">
                  {selectedZone.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
                    Especificações de Engenharia & Garantias
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedZone.specs.map((spec, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-slate-700 bg-white p-3 rounded-lg border border-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Balanço de Massa: Zero Resíduo no Final</span>
                <span className="font-mono text-slate-700">Disponibilidade: 365 dias/ano</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: REATOR CSTR VERTICAL (LESAR) & TELEMETRIA AVTR (Pages 12 & 13) */}
        {activeTab === 'cstr' && (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 bg-slate-900 text-white rounded-xl p-7 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  Esquema Técnico de Processo · Seção 1.3 (LESAR Reactor)
                </div>
                <h3 className="text-xl font-bold mt-1">
                  Biodigestor Vertical do Tipo &quot;CSTR&quot; com Eixo Central
                </h3>
              </div>

              {/* Clean Engineering Schematic of LESAR CSTR Reactor (Replaces blurry image on Page 13) */}
              <div className="my-6 bg-slate-950 rounded-lg p-5 border border-slate-800">
                <svg viewBox="0 0 560 320" className="w-full h-auto" role="img" aria-label="Diagrama esquemático do reator CSTR vertical LESAR">
                  {/* Raw Effluent & Recycled Sludge Top Feed */}
                  <path d="M 40 45 L 220 45 L 220 185" stroke="#10b981" strokeWidth="4" fill="none" />
                  <circle cx="110" cy="45" r="7" fill="#10b981" />
                  <text x="40" y="30" fill="#34d399" fontSize="11" fontFamily="monospace" fontWeight="bold">
                    ENTRADA EFLUENTE BRUTO + LODO RECICLADO (TOPO)
                  </text>

                  {/* Main CSTR Tank Body */}
                  <rect x="115" y="95" width="210" height="175" rx="6" fill="rgba(217, 119, 6, 0.22)" stroke="#f59e0b" strokeWidth="2.5" />
                  {/* Gas Dome Roof */}
                  <path d="M 115 95 Q 220 45 325 95" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" strokeWidth="2.5" />
                  <text x="220" y="83" textAnchor="middle" fill="#a7f3d0" fontSize="10" fontFamily="monospace">
                    CÚPULA DE BIOGÁS (60% CH4)
                  </text>

                  {/* Central Downcomer Shaft & Agitator */}
                  <rect x="208" y="75" width="24" height="165" fill="rgba(15, 23, 42, 0.85)" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="220" y1="62" x2="220" y2="235" stroke="#38bdf8" strokeWidth="2.5" />
                  {/* Downward Flow Arrows to Tank Bottom */}
                  <path d="M 205 245 L 175 255 M 235 245 L 265 255" stroke="#38bdf8" strokeWidth="2.5" />

                  {/* Equidistant Circumferential Agitators */}
                  <line x1="155" y1="100" x2="155" y2="230" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 3" />
                  <ellipse cx="155" cy="195" rx="16" ry="6" fill="none" stroke="#fbbf24" strokeWidth="2" />
                  <line x1="285" y1="100" x2="285" y2="230" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 3" />
                  <ellipse cx="285" cy="195" rx="16" ry="6" fill="none" stroke="#fbbf24" strokeWidth="2" />

                  <text x="220" y="155" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
                    EIXO CENTRAL DE MISTURA
                  </text>
                  <text x="220" y="290" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">
                    REATOR CSTR VERTICAL (LESAR)
                  </text>

                  {/* Biogas Line to Gas Holder */}
                  <path d="M 290 72 L 455 72 L 455 115" stroke="#10b981" strokeWidth="3" fill="none" />
                  <rect x="415" y="115" width="85" height="55" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                  <text x="457" y="140" textAnchor="middle" fill="#ecfdf5" fontSize="10" fontWeight="bold">
                    GAS HOLDER
                  </text>
                  <text x="457" y="154" textAnchor="middle" fill="#6ee7b7" fontSize="8.5" fontFamily="monospace">
                    28.000 m³/dia
                  </text>

                  {/* Degasifier & Lamella Clarifier */}
                  <path d="M 325 140 L 415 215" stroke="#94a3b8" strokeWidth="2.5" fill="none" />
                  <rect x="415" y="195" width="95" height="65" rx="6" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" strokeWidth="2" />
                  <text x="462" y="222" textAnchor="middle" fill="#e0f2fe" fontSize="9.5" fontWeight="bold">
                    DEGASIFIER &amp;
                  </text>
                  <text x="462" y="236" textAnchor="middle" fill="#e0f2fe" fontSize="9.5" fontWeight="bold">
                    LAMELLA CLARIFIER
                  </text>
                </svg>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block">Maturidade BAZICO</span>
                  <span className="font-mono font-semibold text-white text-sm">27 a 30 Anos</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Teor de Metano Bruto</span>
                  <span className="font-mono font-semibold text-emerald-400 text-sm">60% (±5%) CH4</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Biometano Purificado</span>
                  <span className="font-mono font-semibold text-amber-400 text-sm">98–99% CH4 · 0 H2S</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-50 rounded-xl p-7 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold">
                  Princípio Hidrodinâmico & Biotecnológico
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">
                  Por que o CSTR Vertical com Telemetria AVTR supera digestores convencionais?
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-slate-200">
                    <h4 className="text-sm font-bold text-slate-900">
                      1. Alimentação Superior pelo Eixo Central com Reciclo de Lodo
                    </h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      No reator CSTR, tanto o efluente bruto quanto o lodo biológico reciclado são introduzidos pelo
                      topo. O licor misto desce pelo eixo central equipado com agitador mecânico, promovendo mistura
                      íntima imediata e entrando no reator próximo ao fundo do tanque.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-slate-200">
                    <h4 className="text-sm font-bold text-slate-900">
                      2. Agitadores Circunferenciais Equidistantes (Zero Zonas Mortas)
                    </h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      O conteúdo fora do eixo central é mantido em homogeneização contínua por um conjunto de
                      agitadores instalados equidistantes ao longo da circunferência do reator, mantendo as colônias
                      bacterianas em suspensão ativa para digerir 90% dos sólidos voláteis.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-slate-200">
                    <h4 className="text-sm font-bold text-slate-900">
                      3. Tecnologia Proprietária AVTR + SCADA Online
                    </h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      O controle através de <strong>Análises Físico-Químicas dos Resíduos em Tempo Real (AVTR)</strong>{' '}
                      corrige instantaneamente parâmetros de alcalinidade, ácidos graxos voláteis, pH e temperatura,
                      assegurando plantas compactas, modulares e de baixo custo de operação e manutenção.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-emerald-950 text-white rounded-lg flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                    Autossuficiência Energética da Planta (Seção 1.4)
                  </div>
                  <div className="text-sm font-medium mt-1">
                    Motogerador CAT a Biogás + Energia Solar + Caldeira 5 TPH (Cavaco de Poda) = 100% da demanda suprida internamente.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: GESTÃO DO DIGESTATO E FILTRO-PRENSA (Pages 20 & 21) */}
        {activeTab === 'digestato' && (
          <div className="mt-10">
            <div className="bg-slate-900 text-white rounded-xl p-7 border border-slate-800">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                    Seção 3 & 3.1 · Korea UTC Environment · Produção de Fertilizante Orgânico Classe &quot;A&quot;
                  </span>
                  <h3 className="text-2xl font-bold mt-1">
                    Ciclo Automatizado de Filtro-Prensa de Placas e Membranas (50–60 min / Batelada)
                  </h3>
                </div>
                <div className="text-right font-mono">
                  <div className="text-xs text-slate-400">Frequência de Limpeza Ajustável</div>
                  <div className="text-sm font-semibold text-amber-400">3 Bateladas / Limpeza · 47,0 Ton/Dia</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {FILTER_PRESS_CYCLE.map((item) => (
                  <div
                    key={item.step}
                    className="bg-slate-950/90 border border-slate-800 rounded-lg p-4 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono mb-2">
                        <span className="text-emerald-400 font-semibold">ETAPA 0{item.step}</span>
                        <span className="text-amber-300 tabular-nums">{item.duration}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: COMPARATIVO ROTA 1 (CSTR NA ORIGEM) VS ROTA 2 (ARCIPLUG + TIETJEN NO DESTINO - Pages 17, 18, 19) */}
        {activeTab === 'rotas' && (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-xl p-7 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold">
                  Rota Tecnológica 01 · Caso Base do Estudo Financeiro
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">
                  Segregação na Origem (95% a 97,5%) + Biodigestão CSTR Com Diluição Controlada
                </h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  Voltada para coleta dedicada junto a grandes geradores (CEAGESP, supermercados, restaurantes,
                  indústrias de alimentos e condomínios) através de programa educativo e bombonas padronizadas.
                </p>

                <dl className="mt-6 space-y-3 text-sm border-t border-slate-200 pt-4">
                  <div className="flex justify-between py-1.5 border-b border-slate-200/70">
                    <dt className="text-slate-500">Eficiência de Segregação na Fonte</dt>
                    <dd className="font-mono font-semibold text-slate-900">95,0% a 97,5%</dd>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200/70">
                    <dt className="text-slate-500">Reatores Principais</dt>
                    <dd className="font-mono font-semibold text-slate-900">3 × CSTR Vertical (LESAR)</dd>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200/70">
                    <dt className="text-slate-500">Classificação do Fertilizante</dt>
                    <dd className="font-mono font-semibold text-emerald-800">Fertilizante Orgânico Classe &quot;A&quot;</dd>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <dt className="text-slate-500">Valor Comercial do Fertilizante</dt>
                    <dd className="font-mono font-semibold text-slate-900">R$ 750,00 / Tonelada</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-7 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-600 font-semibold">
                  Rota Tecnológica 02 · Flexibilidade Operacional (Seção 2.1 e 2.2)
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">
                  Biodigestão Sem Diluição &quot;Plug &amp; Play — ARCIPLUG&quot; + Separação TIETJEN
                </h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  Solução modular compacta automatizada para resíduos coletados na origem ou separados mecanicamente
                  no destino que apresentem até <strong>20% de contaminantes</strong> (RSU misturado).
                </p>

                <dl className="mt-6 space-y-3 text-sm border-t border-slate-200 pt-4">
                  <div className="flex justify-between py-1.5 border-b border-slate-200/70">
                    <dt className="text-slate-500">Tolerância a Contaminantes</dt>
                    <dd className="font-mono font-semibold text-slate-900">Até 20% de Impropriedades</dd>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200/70">
                    <dt className="text-slate-500">Pré-Tratamento Mecânico</dt>
                    <dd className="font-mono font-semibold text-slate-900">Sistema Modular TIETJEN (Alemanha)</dd>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200/70">
                    <dt className="text-slate-500">Classificação do Fertilizante</dt>
                    <dd className="font-mono font-semibold text-slate-900">Fertilizante Orgânico Classe &quot;C&quot;</dd>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <dt className="text-slate-500">Automação e Controle</dt>
                    <dd className="font-mono font-semibold text-slate-900">Monitoramento Online AVTR &amp; SCADA</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        )}

        {/* 6-STAGE INTERACTIVE PIPELINE STEPPER (Pages 14, 15, 16) */}
        <div className="mt-14 pt-12 border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Cadeia Produtiva Integrada · Seções 1.4 e 1.5
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Fluxograma Interativo de Transformação e Balanço de Massa
              </h3>
            </div>
            <span className="text-xs text-slate-500">
              Selecione uma etapa abaixo para inspecionar equipamentos e especificações de saída
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {PROCESS_STAGES.map((stage) => {
              const isSelected = activeStageStep === stage.step;
              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStageStep(stage.step)}
                  className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className={isSelected ? 'text-emerald-400' : 'text-emerald-800'}>
                        ETAPA 0{stage.step}
                      </span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-400' : 'text-slate-400'}`} />
                    </div>
                    <div className="text-sm font-bold leading-snug">{stage.title}</div>
                  </div>
                  <div
                    className={`mt-3 pt-2 border-t text-xs font-mono tabular-nums ${
                      isSelected ? 'border-slate-800 text-amber-300' : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    {stage.keyMetric}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Banner */}
          {PROCESS_STAGES.filter((s) => s.step === activeStageStep).map((stage) => (
            <div
              key={stage.step}
              className="mt-4 p-6 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-6">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold">
                  Etapa 0{stage.step} · {stage.subtitle}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mt-1">{stage.title}</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{stage.description}</p>
              </div>
              <div className="lg:col-span-3 p-4 bg-white rounded-lg border border-slate-200">
                <div className="text-xs font-mono uppercase text-slate-400">Equipamentos Principais</div>
                <div className="text-xs font-medium text-slate-800 mt-1 leading-relaxed">{stage.equipment}</div>
              </div>
              <div className="lg:col-span-3 p-4 bg-white rounded-lg border border-slate-200">
                <div className="text-xs font-mono uppercase text-slate-400">Especificação de Saída</div>
                <div className="text-xs font-mono font-semibold text-emerald-800 mt-1 leading-relaxed">
                  {stage.outputSpec}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
