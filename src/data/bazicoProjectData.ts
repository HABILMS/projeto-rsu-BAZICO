export interface PremiseRow {
  id: string;
  description: string;
  unit: string;
  hour: string;
  day: string;
  month: string;
  harvestYear: string;
  highlight?: boolean;
  note?: string;
}

export interface RevenueRow {
  id: string;
  description: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  totalAnnual: number;
  sharePercent: number;
  details: string;
}

export interface LaborRow {
  code: string;
  role: string;
  category: 'Administrativo' | 'Produção Biogás/Biometano' | 'Coleta Seletiva';
  quantity: number;
  hourlyCost?: number;
  dailyCost: number;
  monthlyCost: number;
  annualCost: number;
}

export interface OpexSummaryRow {
  code: string;
  description: string;
  category: 'Insumos & Energia' | 'Mão de Obra' | 'Frota & Combustível' | 'Manutenção' | 'Administrativo';
  hour: number;
  day: number;
  month: number;
  year: number;
  sharePercent: number;
}

export interface ProcessStage {
  step: number;
  title: string;
  subtitle: string;
  keyMetric: string;
  description: string;
  equipment: string;
  outputSpec: string;
}

export interface PlantZone {
  id: string;
  code: string;
  name: string;
  category: 'Recepção' | 'Biodigestão' | 'Gás & Biometano' | 'Fertilizantes' | 'Utilidades';
  coordinates: { x: number; y: number; w: number; h: number };
  capacity: string;
  technologyPartner: string;
  description: string;
  specs: string[];
}

export interface PitchSlide {
  id: number;
  sectionCode: string;
  title: string;
  subtitle: string;
  keyTakeaway: string;
  speakerNotes: string;
  metrics: { label: string; value: string; sub: string }[];
  bullets: string[];
  originalPages: string;
}

export const PROJECT_METADATA = {
  company: 'BAZICO TECNOLOGIA E CONSULTORIA LTDA',
  projectTitle: 'Implantação de Planta de Tratamento de Resíduos Orgânicos — Produção de Biogás, Biometano e Fertilizantes Classe "A"',
  capacityLabel: '280 Toneladas / Dia',
  ceo: 'Lytton Medrado',
  role: 'CEO',
  date: 'Outubro / 2026',
  phone: '+55 11 99343-5812',
  email: 'Lytton.medrado@bazico.com.br',
  driveFolderUrl: 'https://drive.google.com/drive/u/1/folders/1Lbn43ilvN6k3KbpFB72iQaTAZ6tUumS6',
  pdfAssetPath: '/assets/aistudio/APRESENTA__O_BAZICO_BIOG_S_BIOMETANO_FERTILIZANTES_19.09.2026_62c580c1.pdf',
  corePartners: ['MM ENVIRO Projects Pvt. Ltd.', 'JG Sette', 'ISGEC Heavy Engineering', 'GALILEO Technologies', 'TIETJEN', 'ARCIPLUG', 'SepraTek', 'Korea UTC Environment'],
};

export const EXECUTIVE_KPIS = {
  capex: 131897989.09,
  annualRevenue: 48148415.00,
  annualOpex: 10759240.20,
  annualEbitda: 37390174.80,
  ebitdaMargin: 77.66,
  tir: 34.07,
  vpl: 299601946.67,
  tma: 12.0,
  paybackYears: 3,
  paybackMonths: 2,
  operationPeriodYears: 25,
  dailyTons: 280,
  annualTons: 102200,
  biomethaneDailyNm3: 14952,
  biomethaneAnnualNm3: 5457480,
  biomethaneCommercializedNm3: 5112720,
  fertilizerDailyTons: 47.0,
  fertilizerAnnualTons: 16920,
  cbiosAnnualUnits: 11742,
};

export const GLOBAL_TRACK_RECORD = [
  {
    metric: '30 Anos',
    label: 'Experiência Acumulada',
    detail: '27 anos de aperfeiçoamento contínuo na tecnologia proprietária de biodigestão anaeróbica BAZICO com garantia de performance.',
  },
  {
    metric: '350+',
    label: 'Reatores Anaeróbicos',
    detail: 'Liderança consolidada na implantação de biodigestores CSTR verticais de alta eficiência, inigualável no Sudeste Asiático.',
  },
  {
    metric: '500+',
    label: 'Projetos & Comissionamentos',
    detail: 'Plantas industriais completas entregues em mais de 25 setores industriais e mais de 100 usinas de açúcar e etanol.',
  },
  {
    metric: '22 Países',
    label: 'Presença Internacional',
    detail: 'Operações globais com laboratório próprio, planta piloto, estudos de viabilidade, certificação ISO e Star Export House.',
  },
];

export const WASTE_GENERATORS = [
  {
    name: 'Shopping Centers',
    sector: 'Comercial & Varejo',
    purityPotential: '96%',
    image: '/assets/generators/obj_645.jpg',
    tippingPotential: 'Contratos Privados Dedicados',
    note: 'Praças de alimentação com alta concentração de orgânicos limpos e coleta diária.',
  },
  {
    name: 'Restaurantes & Gastronomia',
    sector: 'Food Service',
    purityPotential: '97,5%',
    image: '/assets/generators/obj_646.jpg',
    tippingPotential: 'Alta Densidade Energética',
    note: 'Resíduos pré e pós-preparo de alto poder calorífico e rápida hidrólise.',
  },
  {
    name: 'Redes Hoteleiras',
    sector: 'Hospitalidade',
    purityPotential: '96%',
    image: '/assets/generators/obj_648.jpg',
    tippingPotential: 'Certificação Hoteleira ESG',
    note: 'Geração previsível em cozinhas industriais e programas internos de segregação na origem.',
  },
  {
    name: 'Feiras Livres Municipais',
    sector: 'Abastecimento Urbano',
    purityPotential: '97%',
    image: '/assets/generators/obj_649.jpg',
    tippingPotential: 'Parcerias Público-Privadas',
    note: 'Restos vegetais, frutas e hortaliças frescas de excelente relação Carbono/Nitrogênio.',
  },
  {
    name: 'Centrais de Distribuição (CEAGESP)',
    sector: 'Entrepostos Atacadistas',
    purityPotential: '97,5%',
    image: '/assets/generators/obj_650.jpg',
    tippingPotential: 'Alto Volume Concentrado',
    note: 'Grandes volumes diários concentrados em único ponto logístico de fácil carregamento.',
  },
  {
    name: 'Supermercados & Hipermercados',
    sector: 'Varejo Alimentar',
    purityPotential: '95%',
    image: '/assets/generators/obj_651.jpg',
    tippingPotential: 'Recorrência Contratual',
    note: 'Quebras operacionais de FLV (frutas, legumes e verduras) e panificação.',
  },
  {
    name: 'Escolas e Universidades',
    sector: 'Institucional',
    purityPotential: '95%',
    image: '/assets/generators/obj_707.jpg',
    tippingPotential: 'Programas Institucionais',
    note: 'Refeitórios universitários e escolares combinados com educação ambiental.',
  },
  {
    name: 'Condomínios Residenciais',
    sector: 'Urbano Domiciliar',
    purityPotential: '95%',
    image: '/assets/generators/obj_708.jpg',
    tippingPotential: 'Coleta Porta a Porta',
    note: 'Programa de visita domiciliar, entrega de bombonas herméticas e coleta dedicada.',
  },
  {
    name: 'Indústrias de Alimentos',
    sector: 'Agroindústria',
    purityPotential: '98%',
    image: '/assets/generators/obj_709.jpg',
    tippingPotential: 'Tipping Fee Industrial Premium',
    note: 'Lodos e descartes de processamento com composição físico-química homogênea.',
  },
  {
    name: 'Portos Marítimos',
    sector: 'Infraestrutura Crítica',
    purityPotential: '95%',
    image: '/assets/generators/obj_710.jpg',
    tippingPotential: 'Conformidade ANVISA / MAPA',
    note: 'Atendimento a exigências fitossanitárias portuárias e destinação certificada.',
  },
  {
    name: 'Aeroportos Internacionais',
    sector: 'Infraestrutura Crítica',
    purityPotential: '95%',
    image: '/assets/generators/obj_711.jpg',
    tippingPotential: 'Catering Aéreo & Terminais',
    note: 'Catering aéreo e terminais de passageiros com exigência de rastreabilidade ESG.',
  },
  {
    name: 'Reciclagem Urbana Seletiva',
    sector: 'Gestão Municipal',
    purityPotential: '95%',
    image: '/assets/generators/obj_712.jpg',
    tippingPotential: 'Desvio de Aterro Sanitário',
    note: 'Separação na fonte evitando formação de chorume, pragas e metano fugitivo.',
  },
];

export const PRODUCTION_PREMISES: PremiseRow[] = [
  {
    id: 'waste-vol',
    description: 'Volume de Resíduos Tratados',
    unit: 'Ton',
    hour: '11,67',
    day: '280',
    month: '8.400',
    harvestYear: '102.200',
    highlight: true,
    note: 'Base de recebimento contínuo 24h/dia, 365 dias/ano',
  },
  {
    id: 'total-solids',
    description: 'Sólidos Totais Assumidos (ST)',
    unit: '%',
    hour: '24',
    day: '24%',
    month: '24%',
    harvestYear: '24%',
    note: 'Fração sólida presente na massa orgânica recebida',
  },
  {
    id: 'moisture',
    description: 'Teor de Umidade',
    unit: '%',
    hour: '76',
    day: '76%',
    month: '76%',
    harvestYear: '76%',
    note: 'Balanço hídrico natural dos resíduos de alimentos e vegetais',
  },
  {
    id: 'volatile-solids',
    description: 'Sólidos Voláteis de Sólidos Totais (SV/ST)',
    unit: '%',
    hour: '90',
    day: '90%',
    month: '90%',
    harvestYear: '90%',
    note: 'Fração efetivamente biodegradável convertida pelas bactérias',
  },
  {
    id: 'biogas-m3',
    description: 'Produção Bruta de Biogás',
    unit: 'm³',
    hour: '1.167,0',
    day: '28.000',
    month: '840.000',
    harvestYear: '10.220.000',
    note: 'Teor médio de 60% (+/- 5%) de Metano (CH4) antes da purificação',
  },
  {
    id: 'biogas-nm3',
    description: 'Produção de Biogás Normalizado',
    unit: 'Nm³',
    hour: '1.038,6',
    day: '24.926',
    month: '747.792',
    harvestYear: '9.096.000',
    note: 'Volume normalizado em condições padrão de temperatura e pressão',
  },
  {
    id: 'biomethane-m3',
    description: 'Produção de Biometano',
    unit: 'm³',
    hour: '700',
    day: '16.800',
    month: '504.000',
    harvestYear: '6.132.000',
    note: 'Gás purificado pós-sistema de membranas e dessulfurização',
  },
  {
    id: 'biomethane-nm3',
    description: 'Produção de Biometano (98% a 99% Metano · Zero H2S)',
    unit: 'Nm³',
    hour: '623',
    day: '14.952',
    month: '448.560',
    harvestYear: '5.457.480',
    highlight: true,
    note: 'Especificação ANP 685 comprimido a 250 bar para frota e venda',
  },
  {
    id: 'fertilizer-a',
    description: 'Produção de Fertilizantes Orgânicos Classificação "A"',
    unit: 'Ton',
    hour: '1,97',
    day: '47,0',
    month: '1.410',
    harvestYear: '16.920',
    highlight: true,
    note: 'Comercializado em embalagens de 15 kg e Big Bags de 1.000 kg',
  },
];

export const REVENUE_STREAMS: RevenueRow[] = [
  {
    id: 'rev-biomethane',
    description: 'Receita com Comercialização do Biometano',
    unit: 'Nm³',
    quantity: 5112720,
    unitPrice: 3.50,
    totalAnnual: 18156180.00,
    sharePercent: 37.71,
    details: 'Volume comercializado líquido (após abastecimento da própria frota de coleta a 250 bar). Pureza 98–99% CH4 padrão ANP 685.',
  },
  {
    id: 'rev-collection',
    description: 'Receita com a Coleta e Tratamento de Resíduos (Tipping Fee)',
    unit: 'Ton.',
    quantity: 100800,
    unitPrice: 160.00,
    totalAnnual: 16128000.00,
    sharePercent: 33.50,
    details: 'Taxa de recebimento e destinação ambientalmente certificada paga por grandes geradores privados e contratos públicos.',
  },
  {
    id: 'rev-fertilizer',
    description: 'Receita com Comercialização do Fertilizante Orgânico Classe "A"',
    unit: 'Ton.',
    quantity: 16920,
    unitPrice: 750.00,
    totalAnnual: 12690000.00,
    sharePercent: 26.36,
    details: 'Fertilizante orgânico de alto valor agronômico (Classificação "A"), seco termicamente e ensacado em 15 kg e 1.000 kg.',
  },
  {
    id: 'rev-cbio',
    description: '(+) Receitas com Certificados de Descarbonização (CBIOs)',
    unit: 'Un',
    quantity: 11742,
    unitPrice: 100.00,
    totalAnnual: 1174235.00,
    sharePercent: 2.44,
    details: 'Créditos de descarbonização gerados pela substituição de combustíveis fósseis e mitigação de emissões de metano.',
  },
];

export const LABOR_BREAKDOWN: LaborRow[] = [
  // 12. Administração (17 colaboradores)
  { code: '12.1', role: 'Secretária Executiva', category: 'Administrativo', quantity: 1, dailyCost: 266.67, monthlyCost: 8000, annualCost: 96000 },
  { code: '12.2', role: 'Gerente de RH', category: 'Administrativo', quantity: 1, dailyCost: 333.33, monthlyCost: 10000, annualCost: 120000 },
  { code: '12.3', role: 'Gerente de Vendas', category: 'Administrativo', quantity: 1, dailyCost: 466.67, monthlyCost: 14000, annualCost: 168000 },
  { code: '12.4', role: 'Assistente de Vendas', category: 'Administrativo', quantity: 1, dailyCost: 233.33, monthlyCost: 7000, annualCost: 84000 },
  { code: '12.5', role: 'Recepcionista', category: 'Administrativo', quantity: 2, dailyCost: 400.00, monthlyCost: 12000, annualCost: 144000 },
  { code: '12.6', role: 'Técnico de Segurança do Trabalho', category: 'Administrativo', quantity: 1, dailyCost: 333.33, monthlyCost: 10000, annualCost: 120000 },
  { code: '12.7', role: 'Vigilantes Patrimoniais', category: 'Administrativo', quantity: 3, dailyCost: 600.00, monthlyCost: 18000, annualCost: 216000 },
  { code: '12.8', role: 'Auxiliar de Limpeza', category: 'Administrativo', quantity: 2, dailyCost: 333.33, monthlyCost: 10000, annualCost: 120000 },
  { code: '12.9', role: 'Auxiliar de Almoxarifado', category: 'Administrativo', quantity: 3, dailyCost: 700.00, monthlyCost: 21000, annualCost: 252000 },
  { code: '12.10', role: 'Auxiliar de Faturamento', category: 'Administrativo', quantity: 2, dailyCost: 533.33, monthlyCost: 16000, annualCost: 192000 },

  // 3. Produção Biogás / Biometano (17 colaboradores)
  { code: '3.1', role: 'Operadores de Planta CSTR', category: 'Produção Biogás/Biometano', quantity: 6, hourlyCost: 29.17, dailyCost: 1400.00, monthlyCost: 42000, annualCost: 504000 },
  { code: '3.2', role: 'Químico Responsável (AVTR)', category: 'Produção Biogás/Biometano', quantity: 1, hourlyCost: 41.67, dailyCost: 333.33, monthlyCost: 10000, annualCost: 120000 },
  { code: '3.3', role: 'Ajudantes de Operação', category: 'Produção Biogás/Biometano', quantity: 6, hourlyCost: 20.83, dailyCost: 1000.00, monthlyCost: 30000, annualCost: 360000 },
  { code: '3.4', role: 'Eletricista de Manutenção/Automação', category: 'Produção Biogás/Biometano', quantity: 1, hourlyCost: 41.67, dailyCost: 333.33, monthlyCost: 10000, annualCost: 120000 },
  { code: '3.5', role: 'Supervisor de Turno Industrial', category: 'Produção Biogás/Biometano', quantity: 2, hourlyCost: 66.67, dailyCost: 1066.67, monthlyCost: 32000, annualCost: 384000 },
  { code: '3.6', role: 'Gerente Industrial de Planta', category: 'Produção Biogás/Biometano', quantity: 1, hourlyCost: 83.33, dailyCost: 666.67, monthlyCost: 20000, annualCost: 240000 },

  // 4. Coleta Seletiva (22 colaboradores)
  { code: '4.1', role: 'Motoristas de Coleta Dedicada', category: 'Coleta Seletiva', quantity: 10, hourlyCost: 33.33, dailyCost: 2666.67, monthlyCost: 80000, annualCost: 960000 },
  { code: '4.2', role: 'Ajudantes de Coleta na Origem', category: 'Coleta Seletiva', quantity: 10, hourlyCost: 20.83, dailyCost: 1666.67, monthlyCost: 50000, annualCost: 600000 },
  { code: '4.3', role: 'Supervisor de Logística e Frota', category: 'Coleta Seletiva', quantity: 2, hourlyCost: 16.67, dailyCost: 266.67, monthlyCost: 8000, annualCost: 96000 },
];

export const UTILITIES_AND_MAINTENANCE_DETAIL = [
  {
    sectionCode: 'Item 5',
    sectionTitle: 'Consumo de Combustível / Biometano (Valor Ref. R$ 2,50/Nm³)',
    totalDay: 2008.33,
    totalMonth: 59450.00,
    totalYear: 713400.00,
    items: [
      { code: '5.2', name: 'Consumo de Diesel (5 Caminhões · 100 km/dia cada)', unit: 'Litros', day: 0, month: 0, year: 0, note: '100% substituído por Biometano próprio' },
      { code: '5.3', name: 'Lubrificantes de Frota', unit: 'Litros', day: 133.33, month: 3200.00, year: 38400.00, note: 'Manutenção de motores a gás' },
      { code: '5.4', name: 'Consumo de Biometano (750 Nm³/dia)', unit: 'Nm³/dia', day: 1875.00, month: 56250.00, year: 675000.00, note: 'Abastecimento interno a 250 bar' },
    ],
  },
  {
    sectionCode: 'Item 6',
    sectionTitle: 'Manutenção Preventiva — Produção de Biogás / Biometano',
    totalDay: 2100.00,
    totalMonth: 63000.00,
    totalYear: 756000.00,
    items: [
      { code: '6.1', name: 'Produção de Biogás / Tratamento / Armazenamento / Compressão', unit: 'Verba', day: 1200.00, month: 36000.00, year: 432000.00, note: 'Reatores CSTR, membranas e compressores' },
      { code: '6.2', name: 'Recepção e Preparo de Resíduos', unit: 'Verba', day: 500.00, month: 15000.00, year: 180000.00, note: 'Moagem, hidrólise e bombeamento' },
      { code: '6.3', name: 'Sistema de Gestão do Digestato / Produção de Fertilizantes', unit: 'Verba', day: 400.00, month: 12000.00, year: 144000.00, note: 'Filtro-prensa de placas, secador e ensacadeira' },
    ],
  },
  {
    sectionCode: 'Item 7',
    sectionTitle: 'Manutenção Preventiva — Coleta Seletiva',
    totalDay: 1000.00,
    totalMonth: 30000.00,
    totalYear: 360000.00,
    items: [
      { code: '7.1', name: 'Manutenção de Veículos e Peças de Reposição', unit: 'Horas', day: 1000.00, month: 30000.00, year: 360000.00, note: 'Frota de caminhões coletores compactadores' },
    ],
  },
  {
    sectionCode: 'Item 11',
    sectionTitle: 'Despesas Administrativas Gerais',
    totalDay: 350.00,
    totalMonth: 10500.00,
    totalYear: 126000.00,
    items: [
      { code: '11.1', name: 'Consultoria Contábil e Fiscal (R$ 6,94/h)', unit: 'Serviço', day: 166.67, month: 5000.00, year: 60000.00, note: 'Gestão fiscal REIDI, ICMS e PIS/COFINS' },
      { code: '11.2', name: 'Serviços de Internet e Telemetria SCADA/AVTR (R$ 0,69/h)', unit: 'Link', day: 16.67, month: 500.00, year: 6000.00, note: 'Monitoramento remoto contínuo' },
      { code: '11.3', name: 'Despesas Administrativas Diversas (R$ 6,94/h)', unit: 'Verba', day: 166.67, month: 5000.00, year: 60000.00, note: 'Suprimentos e apoio operacional' },
    ],
  },
];

export const OPEX_SUMMARY_TABLE: OpexSummaryRow[] = [
  {
    code: '10.2',
    description: 'Custos com Energia Elétrica da Planta',
    category: 'Insumos & Energia',
    hour: 312.17,
    day: 7492.11,
    month: 224763.35,
    year: 2697160.20,
    sharePercent: 25.07,
  },
  {
    code: '10.3',
    description: 'Mão de Obra — Produção de Biogás e Biometano (17 colab.)',
    category: 'Mão de Obra',
    hour: 200.00,
    day: 4800.00,
    month: 144000.00,
    year: 1728000.00,
    sharePercent: 16.06,
  },
  {
    code: '10.4',
    description: 'Mão de Obra — Coleta Seletiva Dedicada (22 colab.)',
    category: 'Mão de Obra',
    hour: 191.67,
    day: 4600.00,
    month: 138000.00,
    year: 1656000.00,
    sharePercent: 15.39,
  },
  {
    code: '9.10',
    description: 'Despesas Administrativas (Folha Adm 17 colab. + Contábil/Geral)',
    category: 'Administrativo',
    hour: 189.58,
    day: 4550.00,
    month: 136500.00,
    year: 1638000.00,
    sharePercent: 15.22,
  },
  {
    code: '10.1',
    description: 'Consumo de Produtos Químicos (PAM, Biofloculante, Dessulfurização)',
    category: 'Insumos & Energia',
    hour: 140.13,
    day: 3363.00,
    month: 100890.00,
    year: 1210680.00,
    sharePercent: 11.25,
  },
  {
    code: '10.6',
    description: 'Manutenção Preventiva — Planta de Produção de Biogás',
    category: 'Manutenção',
    hour: 87.50,
    day: 2100.00,
    month: 63000.00,
    year: 756000.00,
    sharePercent: 7.03,
  },
  {
    code: '10.5',
    description: 'Custos de Consumo com Combustível (Biometano Frota + Lubrificantes)',
    category: 'Frota & Combustível',
    hour: 41.28,
    day: 990.83,
    month: 23780.00,
    year: 713400.00,
    sharePercent: 6.63,
  },
  {
    code: '10.7',
    description: 'Manutenção Preventiva — Frota de Coleta Seletiva',
    category: 'Manutenção',
    hour: 41.67,
    day: 1000.00,
    month: 30000.00,
    year: 360000.00,
    sharePercent: 3.35,
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: 1,
    title: 'Segregação na Origem & Hidrólise',
    subtitle: 'Eficiência de 95% a 97,5% na Coleta',
    keyMetric: '280 t/dia · 24% ST',
    description: 'Programa estruturado de visita aos geradores e domicílios com acondicionamento em bombonas herméticas. Na planta, o resíduo passa pelo Clarifier Tank de hidrólise para homogeneização.',
    equipment: 'Bombonas dedicadas + Caminhões Coletores a Biometano + Tanque de Hidrólise',
    outputSpec: 'Licor orgânico homogeneizado (76% umidade, 90% SV/ST)',
  },
  {
    step: 2,
    title: 'Biodigestão Anaeróbica CSTR Vertical',
    subtitle: '3 Reatores Verticais LESAR com Telemetria AVTR',
    keyMetric: '28.000 m³/dia Biogás',
    description: 'O efluente bruto e o lodo reciclado entram pelo topo do reator CSTR através do eixo central com agitador. Agitadores equidistantes na circunferência mantêm as bactérias em suspensão ativa contínua.',
    equipment: '3 Biodigestores CSTR Verticais + Degasifier + Lamella Clarifier + Sistema AVTR/SCADA',
    outputSpec: 'Biogás bruto com 60% (+/- 5%) de CH4 + Digestato estabilizado',
  },
  {
    step: 3,
    title: 'Gasômetro & Dessulfurização',
    subtitle: 'Armazenamento Pressurizado e Remoção de H2S',
    keyMetric: 'Zero H2S + Enxofre',
    description: 'O biogás é armazenado em gasômetro de dupla membrana sobre tanque metálico e segue para o sistema de dessulfurização biológica/química, removendo integralmente o H2S e recuperando enxofre elementar para o fertilizante.',
    equipment: 'Gasômetro Dupla Membrana + Torre de Dessulfurização com Recuperação de Enxofre',
    outputSpec: 'Biogás doce livre de H2S + Enxofre recuperado (Mix Fertilizante)',
  },
  {
    step: 4,
    title: 'Purificação por Membranas & Compressão',
    subtitle: 'Upgrade para Biometano ANP 685 a 250 bar',
    keyMetric: '14.952 Nm³/dia (99% CH4)',
    description: 'Separação seletiva de CO2 via membranas poliméricas SepraTek, elevando a concentração de metano para 98%–99% CH4. Compressão Galileo a 250 bar para carretas feixe e posto de abastecimento veicular.',
    equipment: 'Skid de Purificação SepraTek + Compressores de Alta Pressão Galileo (250 bar)',
    outputSpec: 'Biometano padrão ANP 685 (623 Nm³/h · 5.457.480 Nm³/ano)',
  },
  {
    step: 5,
    title: 'Condicionamento & Filtro-Prensa Automatizado',
    subtitle: 'Desaguamento de Alta Eficiência (50–60 min/batelada)',
    keyMetric: 'Ciclo 8 Etapas UTC',
    description: 'O digestato recebe dosagem de PAM ou biofloculante em 2 tanques de batelada e alimenta o filtro-prensa de placas e membranas com fechamento hidráulico, sopro reverso de núcleo e lavagem automática a cada 3 bateladas.',
    equipment: '2 Tanques de Condicionamento + Bomba Parafuso c/ Inversor + Filtro-Prensa Korea UTC',
    outputSpec: 'Torta sólida desaguada de alta concentração + Filtrado recirculado',
  },
  {
    step: 6,
    title: 'Secagem Térmica, Enriquecimento & Embalagem',
    subtitle: 'Fertilizante Orgânico Classificação "A" & Resíduo Zero',
    keyMetric: '47 Ton/dia · 16.920 t/ano',
    description: 'A torta desaguada é enriquecida com o enxofre recuperado, seca em secador rotativo alimentado pelo vapor da caldeira de 5 TPH (cavaco de poda) e embalada automaticamente em sacos de 15 kg e Big Bags de 1.000 kg.',
    equipment: 'Caldeira 5 TPH a Cavaco + Secador Rotativo + Ensacadeira Automática (15 kg / 1.000 kg)',
    outputSpec: 'Fertilizante Orgânico Classe "A" pronto para comercialização agrícola',
  },
];

export const FILTER_PRESS_CYCLE = [
  { step: 1, name: 'Fechamento de Placas (Plate Closing)', duration: '3 min', detail: 'Sistema hidráulico mantém vedação hermética das placas durante a filtração.' },
  { step: 2, name: 'Alimentação (Feeding)', duration: '15–20 min', detail: 'Bomba de parafuso com inversor de frequência alimenta até atingir a pressão alvo.' },
  { step: 3, name: 'Prensagem por Membrana (Compressing)', duration: '20–25 min', detail: 'Eleva o teor de sólidos da torta e reduz drasticamente a umidade residual.' },
  { step: 4, name: 'Sopro Reverso (Blowback & Vacuum)', duration: '4 min', detail: 'Center Pipe Blowback + Diaphragm Blowback desobstruem o canal de alimentação.' },
  { step: 5, name: 'Abertura de Placas (Plate Opening)', duration: '2 min', detail: 'Abertura automatizada sequencial das placas filtrantes.' },
  { step: 6, name: 'Filtração de Placa (Plate Filtration)', duration: '2 min', detail: 'Drenagem final do filtrado límpido para a rede interna da planta.' },
  { step: 7, name: 'Descarga da Torta (Cake Drop)', duration: '1 min', detail: 'Movimentação das telas descarrega a torta para tremonha e rosca dupla.' },
  { step: 8, name: 'Lavagem de Telas (Cloth Wash)', duration: '2–3 min', detail: 'Executada a cada 3 bateladas para restaurar 100% da permeabilidade das telas.' },
];

export const PLANT_ZONES: PlantZone[] = [
  {
    id: 'recepcao',
    code: 'ZONA 01',
    name: 'Pátio de Recepção, Balança & Triagem',
    category: 'Recepção',
    coordinates: { x: 60, y: 95, w: 220, h: 140 },
    capacity: '280 Toneladas/dia (11,67 t/h)',
    technologyPartner: 'BAZICO / TIETJEN',
    description: 'Docas de descarga para caminhões coletores movidos a biometano, pesagem rodoviária automatizada, recepção hermética sem odores e tanque de hidrólise inicial.',
    specs: [
      '3 baias simultâneas para caminhões compactadores',
      'Eficiência de segregação na origem de 95% a 97,5%',
      'Opção modular Tietjen/Arciplug para RSU com até 20% de contaminantes',
    ],
  },
  {
    id: 'reatores-cstr',
    code: 'ZONA 02',
    name: 'Complexo de Biodigestão — 3 Reatores CSTR Verticais',
    category: 'Biodigestão',
    coordinates: { x: 430, y: 55, w: 310, h: 215 },
    capacity: '28.000 m³/dia de Biogás Bruto',
    technologyPartner: 'BAZICO / MM ENVIRO (LESAR Reactor)',
    description: 'Três biodigestores anaeróbicos verticais tipo CSTR com introdução superior pelo eixo central, recirculação de lodo, agitadores circunferenciais equidistantes e monitoramento AVTR.',
    specs: [
      'Análises Físico-Químicas em Tempo Real (AVTR) + Supervisório SCADA',
      '60% (+/- 5%) de concentração de Metano (CH4) no biogás bruto',
      'Degasifier e Lamella Clarifier integrados ao circuito de lodo',
    ],
  },
  {
    id: 'purificacao-gas',
    code: 'ZONA 03',
    name: 'Gasômetro, Dessulfurização & Upgrade Biometano',
    category: 'Gás & Biometano',
    coordinates: { x: 300, y: 120, w: 115, h: 140 },
    capacity: '14.952 Nm³/dia de Biometano (250 bar)',
    technologyPartner: 'SepraTek / GALILEO Technologies',
    description: 'Gasômetro de dupla membrana, remoção total de H2S com recuperação de enxofre agrícola, separação por membranas SepraTek e compressão Galileo a 250 bar.',
    specs: [
      'Pureza final de 98% a 99% de CH4 e Zero H2S (Padrão ANP 685)',
      'Posto de abastecimento interno para frota + carregamento de carretas',
      '5.112.720 Nm³/ano comercializados a R$ 3,50/Nm³',
    ],
  },
  {
    id: 'fertilizantes',
    code: 'ZONA 04',
    name: 'Galpão de Desaguamento, Secagem & Ensacamento',
    category: 'Fertilizantes',
    coordinates: { x: 415, y: 290, w: 325, h: 115 },
    capacity: '47,0 Ton/dia · 16.920 Ton/ano Classe "A"',
    technologyPartner: 'Korea UTC Environment / BAZICO',
    description: 'Sistema de filtro-prensa automatizado de placas e membranas (50–60 min/batch), secador rotativo térmico e linha robotizada de embalagem.',
    specs: [
      'Dosagem automatizada de PAM / biofloculante em batelada',
      'Enriquecimento mineral com o enxofre recuperado do biogás',
      'Embalagens comerciais de 15 kg (varejo/hortifruti) e Big Bags de 1.000 kg',
    ],
  },
  {
    id: 'utilidades',
    code: 'ZONA 05',
    name: 'Ilha de Autossuficiência Energética (Solar + Biogás + Caldeira)',
    category: 'Utilidades',
    coordinates: { x: 140, y: 275, w: 250, h: 130 },
    capacity: '100% da Demanda Elétrica e Térmica Suprida',
    technologyPartner: 'Sotreq CAT / DAMA Caldeiraria / JG Sette',
    description: 'Matriz híbrida combinando motogerador Caterpillar a biogás, usina solar fotovoltaica nas coberturas e caldeira de 5 TPH alimentada com cavaco de poda urbana.',
    specs: [
      'Motogerador CAT a biogás + Usina Solar Fotovoltaica integrada',
      'Caldeira 5 TPH a cavaco de madeira gerando vapor para secagem do fertilizante',
      'Balanço "Resíduo Zero": 100% da matéria-prima convertida em energia e insumos',
    ],
  },
];

export const TAX_AND_FINANCING_INCENTIVES = [
  {
    code: 'i',
    title: 'Financiamento FINEP Inovação',
    highlight: 'Juros de 3% a 5% a.a. · 3 Anos de Carência + 16 Anos de Amortização',
    description: 'Considerando as características tecnológicas do projeto (telemetria proprietária AVTR, rota biotecnológica CSTR e descarbonização), o projeto é elegível à linha FINEP Inovação com condições de longo prazo que alavancam expressivamente o retorno sobre o capital próprio (ROE).',
    impactMetric: 'Prazo Total: 19 Anos',
  },
  {
    code: 'ii',
    title: 'Isenção de PIS e COFINS na Aquisição de Equipamentos (REIDI / CONFAZ)',
    highlight: 'Redução Direta de CAPEX (~9,25% sobre equipamentos elegíveis)',
    description: 'Obtenção de isenção de PIS e COFINS na aquisição de máquinas, aparelhos, instrumentos e equipamentos novos através de protocolo no CONFAZ e enquadramento no Regime Especial de Incentivos para o Desenvolvimento da Infraestrutura (REIDI).',
    impactMetric: 'Economia Direta no CAPEX',
  },
  {
    code: 'iii',
    title: 'Recuperação de Impostos Incidentes (ICMS, PIS e COFINS)',
    highlight: 'Aproveitamento Integral de Créditos Tributários Operacionais',
    description: 'Estruturação fiscal dedicada para recuperação dos impostos incidentes como ICMS, PIS e COFINS ao longo da implantação e operação, independentemente da obtenção do REIDI.',
    impactMetric: 'Eficiência Fiscal Recorrente',
  },
  {
    code: 'iv',
    title: 'Emissão de Certificados de Crédito de Descarbonização (CBIOs)',
    highlight: '11.742 Unidades/Ano · R$ 1.174.235,00 em Receita Adicional',
    description: 'Monetização ambiental contínua através da emissão de certificados de créditos de descarbonização (RenovaBio / mercado voluntário e regulado de carbono), auditáveis via telemetria SCADA.',
    impactMetric: '+R$ 1,17 Mi / Ano',
  },
];

export const REFERENCE_CASES = [
  {
    title: 'Planta Gobar Dhan — Indore, Índia',
    location: 'Indore, Madhya Pradesh — Índia (Inaugurada em Fev/2022)',
    client: 'Gobar Dhan Plant (Municipal Solid Waste)',
    capacity: '550 Ton/dia de Resíduos Orgânicos',
    highlights: [
      '4 Biodigestores CSTR Verticais em operação contínua 365 dias/ano',
      'Produção de 24.000 Nm³/dia de Biometano comprimido a 250 bar',
      'Produção de 100 Toneladas/dia de Fertilizantes Orgânicos',
      'Taxa de segregação de 90% de resíduos orgânicos municipais',
    ],
  },
  {
    title: 'Petrobras — PetroquímicaSuape (Brasil)',
    location: 'Complexo Industrial de Suape, Pernambuco — Brasil',
    client: 'PETROBRAS / PetroquímicaSuape',
    capacity: '2 Caldeiras de Alta Pressão — 100 Ton Vapor/hora',
    highlights: [
      'Fornecimento, montagem e comissionamento de 2 caldeiras de alta pressão (Óleo e Gás)',
      'Atestado de capacidade técnica emitido e assinado pela PetroquímicaSuape',
      'Padrão rigoroso de engenharia QSMS e confiabilidade operacional',
    ],
  },
  {
    title: 'Gerdau — Planta EPC de Recuperação de Gases',
    location: 'Operação Siderúrgica Industrial',
    client: 'GERDAU S.A.',
    capacity: 'Geração de 15 MW de Energia Elétrica',
    highlights: [
      'Implantação de Planta Completa em regime EPC (Engineering, Procurement and Construction)',
      'Recuperação energética de gases de Alto Forno para geração limpa de 15 MW',
      'Certificado formal de performance e satisfação emitido pela Gerdau',
    ],
  },
];

export const TECH_PARTNERS_ECOSYSTEM = [
  { name: 'BAZICO Tecnologia', role: 'Engenharia Proprietária, Telemetria AVTR & Gestão Integral do Projeto', country: 'Brasil' },
  { name: 'MM ENVIRO Projects Pvt. Ltd.', role: 'Tecnologia de Reatores Anaeróbicos CSTR (350+ Reatores Instalados)', country: 'Índia' },
  { name: 'JG Sette', role: 'Desenvolvimento Executivo & Engenharia Associada', country: 'Brasil' },
  { name: 'ISGEC Heavy Engineering', role: 'Caldeiras de Alta Pressão, Vasos de Pressão & EPC Industrial', country: 'Índia / Global' },
  { name: 'GALILEO Technologies', role: 'Compressão de Biometano a 250 bar, Gasodutos Virtuais & Abastecimento', country: 'Global' },
  { name: 'TIETJEN — Das Original', role: 'Sistemas Modulares de Separação Mecânica e Trituração de RSU', country: 'Alemanha' },
  { name: 'ARCIPLUG', role: 'Tecnologia de Biodigestão Sem Diluição Plug & Play (Até 20% Contaminantes)', country: 'Finlândia / Europa' },
  { name: 'SepraTek Membrane System', role: 'Módulos de Membranas para Purificação de Biogás (99% CH4)', country: 'Coreia do Sul' },
  { name: 'Korea UTC Environment', role: 'Sistemas Automatizados de Filtro-Prensa de Placas e Membranas', country: 'Coreia do Sul' },
  { name: 'Metrohm & Anton Paar', role: 'Instrumentação Analítica Físico-Química em Tempo Real (AVTR)', country: 'Suíça / Áustria' },
  { name: 'Sotreq / Caterpillar (CAT)', role: 'Motogeradores a Biogás de Alta Eficiência Energética', country: 'Brasil / EUA' },
  { name: 'DAMA Caldeiraria e Serviços', role: 'Fabricação Metalmecânica, Tanques e Montagem Industrial', country: 'Brasil' },
];

export const SATISFIED_CLIENTS = [
  'PETROBRAS',
  'GERDAU',
  'AB InBev',
  'Coca-Cola',
  'PepsiCo',
  'Hindustan Unilever',
  'Renault Nissan',
  'Wipro',
  'Pioneer',
  'Hatsun Agro',
  'Union Paper Mills',
  'Brima Sagar',
  'Lokmangal Group',
  'CASSA',
  'Athani Sugars',
];

export const PITCH_SLIDES: PitchSlide[] = [
  {
    id: 1,
    sectionCode: '01 · Tese de Investimento',
    title: 'Planta Industrial de Biometano e Fertilizantes Orgânicos — 280 Ton/Dia',
    subtitle: 'Transformando passivos ambientais urbanos em ativos energéticos de alta margem e fluxo de caixa previsível por 25 anos.',
    keyTakeaway: 'TIR de 34,07% a.a. · VPL de R$ 299,60 Milhões · Payback Descontado de 3 Anos e 2 Meses.',
    speakerNotes: 'Apresentar a BAZICO Tecnologia e Consultoria Ltda (Lytton Medrado, CEO) em aliança com MM Enviro e JG Sette. Destacar que o projeto une 4 fontes de receita resilientes com tecnologia já validada em 22 países.',
    metrics: [
      { label: 'CAPEX Total', value: 'R$ 131,90 Mi', sub: 'Horizonte de 25 anos' },
      { label: 'EBITDA Anual', value: 'R$ 37,39 Mi', sub: 'Margem EBITDA de 77,66%' },
      { label: 'TIR Projetada', value: '34,07% a.a.', sub: 'Acima da TMA de 12,00%' },
      { label: 'Payback Descontado', value: '3a 02m', sub: 'VPL: R$ 299,60 Milhões' },
    ],
    bullets: [
      'Planta completa com 3 Biodigestores CSTR Verticais para processamento de 280 toneladas/dia (102.200 ton/ano).',
      'Produção de 14.952 Nm³/dia de Biometano (98–99% CH4, Zero H2S, padrão ANP 685 a 250 bar).',
      'Produção de 47 toneladas/dia (16.920 ton/ano) de Fertilizante Orgânico Classificação "A".',
    ],
    originalPages: 'Páginas 1, 2 e 27 do documento original',
  },
  {
    id: 2,
    sectionCode: '02 · Credenciais & Track Record',
    title: '30 Anos de Engenharia Comprovada em 22 Países',
    subtitle: 'Tecnologia amadurecida em mais de 350 reatores anaeróbicos e 500 projetos industriais com garantia de performance.',
    keyTakeaway: 'Consórcio tecnológico de classe mundial com certificação ISO e clientes blue-chip (Petrobras, Gerdau, AB InBev, Coca-Cola).',
    speakerNotes: 'Enfatizar que não se trata de tecnologia experimental: são 350+ reatores instalados, 100+ usinas de açúcar/etanol e monitoramento em tempo real via AVTR e SCADA.',
    metrics: [
      { label: 'Reatores Instalados', value: '350+', sub: 'Liderança no Sudeste Asiático' },
      { label: 'Projetos Executados', value: '500+', sub: 'Em 25+ tipos de indústrias' },
      { label: 'Presença Global', value: '22 Países', sub: 'Planta piloto e laboratório próprio' },
      { label: 'Usinas Sucroalcooleiras', value: '100+', sub: 'Açúcar, etanol e alimentos' },
    ],
    bullets: [
      'Telemetria proprietária AVTR (Análises Físico-Químicas em Tempo Real) integrada ao sistema SCADA.',
      'Parcerias estratégicas com líderes globais: MM Enviro, ISGEC, Galileo, Tietjen, Arciplug, SepraTek, Metrohm e CAT.',
      'Atestados técnicos emitidos por Petrobras (Suape) e Gerdau (Planta EPC 15 MW).',
    ],
    originalPages: 'Páginas 3, 31, 33, 34 e 35 do documento original',
  },
  {
    id: 3,
    sectionCode: '03 · Oportunidade de Mercado',
    title: 'Do Passivo Ambiental ao Ativo de Alto Valor Agregado',
    subtitle: 'Um terço de todos os alimentos produzidos no mundo torna-se resíduo. Aterros sanitários são soluções provisórias; a biodigestão anaeróbia é a solução definitiva.',
    keyTakeaway: 'Economia circular plena nos 3 pilares (Social, Ambiental e Econômico) com "Resíduo Zero" ao final do processo.',
    speakerNotes: 'Mostrar aos investidores que a pressão regulatória e o custo crescente de aterros criam uma oportunidade dupla: receber para tratar o resíduo (Tipping Fee) e vender energia renovável e fertilizantes.',
    metrics: [
      { label: 'Desperdício Global', value: '1/3', sub: 'De toda produção mundial de alimentos' },
      { label: 'Eficiência na Origem', value: '95%–97,5%', sub: 'Pureza na coleta segregada' },
      { label: 'Fontes Geradoras', value: '12 Setores', sub: 'Comércio, indústria e setor público' },
      { label: 'Passivo Residual', value: 'Zero', sub: '100% convertido em biogás e adubo' },
    ],
    bullets: [
      '12 grandes polos geradores mapeados: CEAGESP, supermercados, shoppings, hotéis, restaurantes, portos, aeroportos e indústrias.',
      'Programa de Educação, Tecnologia e Iniciativa com visitas técnicas e fornecimento de bombonas herméticas.',
      'Eliminação de odores, pragas, chorume e emissões fugitivas de metano.',
    ],
    originalPages: 'Páginas 4, 5, 6, 7, 8, 9, 10, 11 e 22 do documento original',
  },
  {
    id: 4,
    sectionCode: '04 · Engenharia & Rotas Tecnológicas',
    title: 'Reatores CSTR Verticais & Flexibilidade ARCIPLUG Sem Diluição',
    subtitle: 'Duas rotas complementares que garantem segurança operacional tanto para resíduos segregados na origem quanto para RSU misturado.',
    keyTakeaway: 'Tecnologia proprietária AVTR maximiza a conversão biológica para biometano com 98%–99% de CH4 e Zero H2S.',
    speakerNotes: 'Explicar a Rota 1 (3 Reatores CSTR Verticais para orgânicos com 95-97,5% pureza gerando Fertilizante Classe A) e a Rota 2 (Arciplug + Tietjen para resíduos com até 20% de contaminantes).',
    metrics: [
      { label: 'Metano no Biogás', value: '60% ±5%', sub: 'Antes do sistema de purificação' },
      { label: 'Pureza Biometano', value: '98%–99%', sub: 'Padrão ANP 685 · Zero H2S' },
      { label: 'Pressão de Entrega', value: '250 bar', sub: 'Compressão Galileo p/ frota e venda' },
      { label: 'Tolerância Rota 2', value: 'Até 20%', sub: 'Contaminantes no sistema Arciplug' },
    ],
    bullets: [
      'Reator CSTR Vertical (LESAR): alimentação superior pelo eixo central, mistura contínua por agitadores circunferenciais e reciclo de lodo.',
      'Dessulfurização com recuperação de enxofre elementar, incorporado ao fertilizante para elevar seu valor agronômico.',
      'Autossuficiência energética de 100%: Motogerador CAT a biogás + Energia Solar + Caldeira 5 TPH a cavaco de poda urbana.',
    ],
    originalPages: 'Páginas 12, 13, 14, 15, 16, 17, 18 e 19 do documento original',
  },
  {
    id: 5,
    sectionCode: '05 · Gestão do Digestato & Fertilizantes',
    title: 'Desaguamento Automatizado & Fertilizante Orgânico Classe "A"',
    subtitle: 'Ciclo industrial fechado de 50 a 60 minutos por batelada com filtro-prensa de placas e membranas de alta pressão.',
    keyTakeaway: 'Produção de 47 toneladas/dia (16.920 ton/ano) comercializadas em sacos de 15 kg e Big Bags de 1.000 kg.',
    speakerNotes: 'Detalhar as 8 etapas do processo de gestão do digestato (página 20 e 21), demonstrando o rigor de engenharia industrial que garante umidade controlada e qualidade Classe A.',
    metrics: [
      { label: 'Tempo por Batelada', value: '50–60 min', sub: 'Limpeza a cada 3 bateladas' },
      { label: 'Produção Diária', value: '47,0 Ton', sub: '1,97 tonelada por hora' },
      { label: 'Produção Anual', value: '16.920 Ton', sub: 'Fertilizante Classificação "A"' },
      { label: 'Preço de Venda', value: 'R$ 750/t', sub: 'Receita anual de R$ 12,69 Milhões' },
    ],
    bullets: [
      'Condicionamento em batelada com PAM ou biofloculante e alimentação por bombas de parafuso com inversor de frequência.',
      'Prensagem por membrana de alta pressão seguida de sopro reverso de núcleo (Center Pipe & Diaphragm Blowback).',
      'Lavagem automática das telas filtrantes e recirculação integral da água para a rede interna da planta.',
    ],
    originalPages: 'Páginas 20 e 21 do documento original',
  },
  {
    id: 6,
    sectionCode: '06 · Estrutura Financeira, OPEX & Incentivos',
    title: 'Geração de Caixa, Estrutura de Custos & Alavancagem FINEP',
    subtitle: 'Receita bruta anual de R$ 48,15 milhões contra um OPEX enxuto de R$ 10,76 milhões, gerando R$ 37,39 milhões de EBITDA anual.',
    keyTakeaway: 'Elegível a financiamento FINEP Inovação (3% a 5% a.a., 3 anos de carência + 16 anos) e isenção fiscal REIDI/CONFAZ.',
    speakerNotes: 'Apresentar a abertura transparente do OPEX (56 colaboradores totais, substituição de diesel por biometano próprio na frota) e os incentivos fiscais que blindam o fluxo de caixa do acionista.',
    metrics: [
      { label: 'Receita Bruta Anual', value: 'R$ 48,15 Mi', sub: '4 fontes descorrelacionadas' },
      { label: 'OPEX Total Anual', value: 'R$ 10,76 Mi', sub: 'R$ 813,37 mil / mês' },
      { label: 'Linha FINEP Inovação', value: '3% a 5% a.a.', sub: '3 anos carência + 16 anos' },
      { label: 'Caso Referência Índia', value: '550 Ton/dia', sub: 'Gobar Dhan em operação desde 2022' },
    ],
    bullets: [
      'Frota própria de coleta 100% abastecida com biometano produzido na planta (custo zero de diesel fóssil).',
      'Isenção de PIS/COFINS sobre equipamentos via REIDI/CONFAZ e recuperação tributária de ICMS, PIS e COFINS.',
      'Referência operacional direta: Planta de Indore (Índia) operando 550 ton/dia com 4 reatores CSTR e biometano a 250 bar.',
    ],
    originalPages: 'Páginas 23, 24, 25, 26, 27, 28, 32 e 36 do documento original',
  },
];
