import React, { useState } from 'react';
import {
  OPEX_SUMMARY_TABLE,
  LABOR_BREAKDOWN,
  UTILITIES_AND_MAINTENANCE_DETAIL,
  PROJECT_METADATA,
} from '../data/bazicoProjectData';
import { Download, Search, Users, Wrench, FileSpreadsheet } from 'lucide-react';

const formatBRL = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

export const OpexExplorerSection: React.FC = () => {
  const [activeView, setActiveView] = useState<'resumo' | 'mao-de-obra' | 'utilidades'>('resumo');
  const [laborFilter, setLaborFilter] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredLabor = LABOR_BREAKDOWN.filter((item) => {
    const matchesCategory = laborFilter === 'Todos' || item.category === laborFilter;
    const matchesQuery =
      item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const handleExportCsv = () => {
    const headers = ['Codigo,Descricao,Categoria,Custo_Hora_BRL,Custo_Dia_BRL,Custo_Mes_BRL,Custo_Ano_BRL'];
    const rows = OPEX_SUMMARY_TABLE.map(
      (r) =>
        `"${r.code}","${r.description}","${r.category}",${r.hour.toFixed(2)},${r.day.toFixed(
          2
        )},${r.month.toFixed(2)},${r.year.toFixed(2)}`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'BAZICO_OPEX_Detalhado_280t_dia.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="opex" className="py-20 bg-white border-b border-slate-200">
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
              <span>04. Auditoria Operacional (OPEX)</span>
              <span aria-hidden="true">·</span>
              <span>Seções 4.2, 4.3 e 4.4 (Páginas 25 a 27)</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Demonstrativo Analítico de Custos Operacionais
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl leading-relaxed">
              Transparência integral para due diligence: abertura completa dos R$ 10.759.240,20 anuais
              de OPEX, abrangendo 56 colaboradores diretos, insumos químicos, manutenção preventiva e
              frota abastecida 100% com biometano próprio.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => setActiveView('resumo')}
                className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  activeView === 'resumo'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Resumo OPEX (Item 10)
              </button>
              <button
                type="button"
                onClick={() => setActiveView('mao-de-obra')}
                className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  activeView === 'mao-de-obra'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Mão de Obra (56 Colab.)
              </button>
              <button
                type="button"
                onClick={() => setActiveView('utilidades')}
                className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  activeView === 'utilidades'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Combustível & Manutenção
              </button>
            </div>

            <button
              type="button"
              onClick={handleExportCsv}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              Exportar CSV
            </button>
          </div>
        </div>

        {/* VIEW 1: RESUMO DO OPEX DA PLANTA (Page 27 - Item 10) */}
        {activeView === 'resumo' && (
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-xs font-mono uppercase text-slate-500">Custo Operacional / Hora</div>
                <div className="text-xl font-bold font-mono tabular-nums text-slate-900 mt-1">
                  R$ 1.204,00
                </div>
                <div className="text-xs text-slate-500 mt-1">Operação ininterrupta 24h</div>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-xs font-mono uppercase text-slate-500">Custo Operacional / Dia</div>
                <div className="text-xl font-bold font-mono tabular-nums text-slate-900 mt-1">
                  R$ 28.895,95
                </div>
                <div className="text-xs text-slate-500 mt-1">R$ 103,20 por tonelada tratada</div>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-xs font-mono uppercase text-slate-500">Custo Operacional / Mês</div>
                <div className="text-xl font-bold font-mono tabular-nums text-slate-900 mt-1">
                  R$ 813.373,35
                </div>
                <div className="text-xs text-slate-500 mt-1">Folha + Energia + Manutenção</div>
              </div>
              <div className="p-5 bg-slate-900 text-white rounded-xl border border-slate-800">
                <div className="text-xs font-mono uppercase text-emerald-400">OPEX Consolidado / Ano</div>
                <div className="text-xl font-bold font-mono tabular-nums text-white mt-1">
                  R$ 10.759.240,20
                </div>
                <div className="text-xs text-slate-400 mt-1">Apenas 22,34% da Receita Bruta</div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-xs font-mono uppercase text-slate-500">
                      <th className="py-3.5 pl-6 pr-3">Item</th>
                      <th className="py-3.5 px-3">Discriminação do Centro de Custo</th>
                      <th className="py-3.5 px-3 text-right">Custo / Hora</th>
                      <th className="py-3.5 px-3 text-right">Custo / Dia</th>
                      <th className="py-3.5 px-3 text-right">Custo / Mês</th>
                      <th className="py-3.5 px-3 text-right">Custo / Ano</th>
                      <th className="py-3.5 pl-3 pr-6 text-right">% OPEX</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    {OPEX_SUMMARY_TABLE.map((row) => (
                      <tr key={row.code} className="hover:bg-slate-50">
                        <td className="py-3.5 pl-6 pr-3 font-mono text-xs font-semibold text-emerald-800">
                          {row.code}
                        </td>
                        <td className="py-3.5 px-3 font-medium text-slate-900">
                          <div>{row.description}</div>
                          <div className="text-xs text-slate-500">{row.category}</div>
                        </td>
                        <td className="py-3.5 px-3 text-right font-mono tabular-nums text-slate-600">
                          {formatBRL(row.hour)}
                        </td>
                        <td className="py-3.5 px-3 text-right font-mono tabular-nums text-slate-600">
                          {formatBRL(row.day)}
                        </td>
                        <td className="py-3.5 px-3 text-right font-mono tabular-nums text-slate-700">
                          {formatBRL(row.month)}
                        </td>
                        <td className="py-3.5 px-3 text-right font-mono font-semibold tabular-nums text-slate-900">
                          {formatBRL(row.year)}
                        </td>
                        <td className="py-3.5 pl-3 pr-6 text-right font-mono text-xs tabular-nums text-slate-600">
                          {row.sharePercent.toFixed(1)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-slate-900 text-white font-mono text-sm">
                    <tr>
                      <td colSpan={2} className="py-4 pl-6 pr-3 font-sans font-bold">
                        TOTAL OPEX CONSOLIDADO DA PLANTA (ITEM 10)
                      </td>
                      <td className="py-4 px-3 text-right tabular-nums">R$ 1.204,00</td>
                      <td className="py-4 px-3 text-right tabular-nums">R$ 28.895,95</td>
                      <td className="py-4 px-3 text-right tabular-nums">R$ 813.373,35</td>
                      <td className="py-4 px-3 text-right font-bold text-emerald-400 tabular-nums">
                        R$ 10.759.240,20
                      </td>
                      <td className="py-4 pl-3 pr-6 text-right tabular-nums">100,0%</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: QUADRO COMPLETO DE MÃO DE OBRA - 56 COLABORADORES (Page 25 - Items 12, 3, 4) */}
        {activeView === 'mao-de-obra' && (
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-xs font-mono uppercase text-slate-500">
                  Item 12 · Administração (17 Colab.)
                </div>
                <div className="text-xl font-bold font-mono tabular-nums text-slate-900 mt-1">
                  R$ 1.512.000,00 / ano
                </div>
                <div className="text-xs text-slate-500 mt-1 font-mono">
                  R$ 126.000,00/mês · R$ 4.200,00/dia
                </div>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-xs font-mono uppercase text-slate-500">
                  Item 3 · Produção Biogás/Biometano (17 Colab.)
                </div>
                <div className="text-xl font-bold font-mono tabular-nums text-slate-900 mt-1">
                  R$ 1.728.000,00 / ano
                </div>
                <div className="text-xs text-slate-500 mt-1 font-mono">
                  R$ 144.000,00/mês · R$ 4.800,00/dia
                </div>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-xs font-mono uppercase text-slate-500">
                  Item 4 · Coleta Seletiva (22 Colab.)
                </div>
                <div className="text-xl font-bold font-mono tabular-nums text-slate-900 mt-1">
                  R$ 1.656.000,00 / ano
                </div>
                <div className="text-xs text-slate-500 mt-1 font-mono">
                  R$ 138.000,00/mês · R$ 4.600,00/dia
                </div>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200">
                {['Todos', 'Administrativo', 'Produção Biogás/Biometano', 'Coleta Seletiva'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setLaborFilter(cat)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      laborFilter === cat
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filtrar cargo ou código..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-xs font-mono uppercase text-slate-500">
                      <th className="py-3 pl-6 pr-3">Item</th>
                      <th className="py-3 px-3">Cargo / Função (Salários + Encargos Sociais)</th>
                      <th className="py-3 px-3">Setor</th>
                      <th className="py-3 px-3 text-center">Vagas</th>
                      <th className="py-3 px-3 text-right">Custo / Dia</th>
                      <th className="py-3 px-3 text-right">Custo / Mês</th>
                      <th className="py-3 pl-3 pr-6 text-right">Custo / Ano</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    {filteredLabor.map((row) => (
                      <tr key={row.code} className="hover:bg-slate-50">
                        <td className="py-3 pl-6 pr-3 font-mono text-xs font-semibold text-emerald-800">
                          {row.code}
                        </td>
                        <td className="py-3 px-3 font-medium text-slate-900">{row.role}</td>
                        <td className="py-3 px-3 text-xs text-slate-500">{row.category}</td>
                        <td className="py-3 px-3 text-center font-mono tabular-nums font-semibold text-slate-800">
                          {row.quantity}
                        </td>
                        <td className="py-3 px-3 text-right font-mono tabular-nums text-slate-600">
                          {formatBRL(row.dailyCost)}
                        </td>
                        <td className="py-3 px-3 text-right font-mono tabular-nums text-slate-700">
                          {formatBRL(row.monthlyCost)}
                        </td>
                        <td className="py-3 pl-3 pr-6 text-right font-mono font-semibold tabular-nums text-slate-900">
                          {formatBRL(row.annualCost)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: UTILIDADES, COMBUSTÍVEL E MANUTENÇÃO PREVENTIVA (Page 26 - Items 5, 6, 7, 11) */}
        {activeView === 'utilidades' && (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {UTILITIES_AND_MAINTENANCE_DETAIL.map((sec) => (
              <div
                key={sec.sectionCode}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-emerald-800 pb-3 border-b border-slate-200">
                    <span className="font-semibold uppercase">{sec.sectionCode}</span>
                    <span>Total Anual: {formatBRL(sec.totalYear)}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-3">{sec.sectionTitle}</h3>

                  <div className="mt-4 space-y-2.5">
                    {sec.items.map((item) => (
                      <div
                        key={item.code}
                        className="bg-white p-3.5 rounded-lg border border-slate-200 flex items-center justify-between gap-4"
                      >
                        <div>
                          <div className="text-xs font-mono text-slate-400">
                            {item.code} · {item.unit}
                          </div>
                          <div className="text-sm font-medium text-slate-900">{item.name}</div>
                          <div className="text-xs text-emerald-800 mt-0.5">{item.note}</div>
                        </div>
                        <div className="text-right font-mono tabular-nums shrink-0">
                          <div className="text-sm font-bold text-slate-900">
                            {formatBRL(item.year)}/ano
                          </div>
                          <div className="text-xs text-slate-500">
                            {formatBRL(item.month)}/mês
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
