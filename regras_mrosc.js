/**
 * PRISMA • Matriz Normativa e Motor de Regras MROSC
 * Base Legal Primária:
 * - Lei Federal nº 13.019/2014 (compilada com Leis 13.204/15 e 14.309/22)
 * - Decreto Municipal nº 5.730/2025 de Horizontina/RS (Manual das Parcerias - 3ª Edição)
 * - Lei Municipal nº 4.114/2022 (Processo Administrativo Sancionatório e Recursos)
 */

export const NORMATIVA_METADADOS = {
    municipio: "Horizontina",
    estado: "RS",
    decreto_municipal: "5.730/2025",
    data_decreto: "07/11/2025",
    manual_edicao: "3ª Edição",
    lei_federal_base: "13.019/2014",
    lei_processo_adm: "4.114/2022",
    portal_protocolo_oficial: "https://horizontina.atende.net/autoatendimento/servicos/consulta-de-processo-digital/detalhar/1"
};

export const PRAZOS_E_REGRAS_PROCESSUAIS = {
    protocolo: {
        formato_obrigatorio: "PDF com assinatura eletrônica (.GOV ou equivalente)",
        meio_exclusivo: "Processo Digital individual Atende.Net",
        guarda_documental_anos: 10 // Art. 68, parágrafo único da Lei 13.019/14
    },
    respostas_e_diligencias: {
        prazo_geral_dias_corridos: 15, // Item 3.1.2 do Decreto 5.730/25
        consequencia_inercia: "Revelia expressa com prosseguimento do feito à revelia da OSC"
    },
    pesquisa_precos: {
        minimo_orcamentos: 3, // Item 3.4.4 do Decreto 5.730/25
        excecao_singular: "Admite-se 1 orçamento para item singular com justificativa formal aprovada pela Comissão de Seleção"
    },
    prestacao_contas: {
        prazo_envio_osc_dias_corridos: 90, // Item 3.5 do Decreto 5.730/25 e Art. 69
        prorrogacao_envio_maxima_dias: 30, // Art. 69, § 4º
        prazo_analise_administracao_dias: 90, // Item 3.5 do Decreto 5.730/25 (prorrogável por 90d)
        prazo_saneamento_irregularidades_dias: 45 // Art. 70 da Lei 13.019/14
    },
    processo_sancionatorio_pas: {
        comissao_servidores_qtd: 3, // Art. 112, parágrafo único da Lei 4.114/2022
        defesa_previa_dias_uteis: 10, // Item 4.2.1 do Decreto 5.730/25
        prorrogacao_defesa_dias_uteis: 10, // Pedido único justificado antes do término
        recurso_1a_instancia_dias: 10, // Art. 96 Lei 4.114/2022 (Julgamento pelo Gestor)
        recurso_2a_instancia_autoridade: "Secretário Municipal competente (Art. 94, II Lei 4.114/22)",
        recurso_3a_instancia_autoridade: "Prefeito Municipal - Decisão final e irrecorrível (Art. 102, § 2º)"
    }
};

// ANEXO VIII DO DECRETO 5.730/2025: AVALIAÇÃO DO PLANO DE TRABALHO (22 ITENS)
export const CRITERIOS_PLANO_TRABALHO_ANEXO_VIII = [
    { id: "2.1", rotulo: "Avaliação de capacidade técnica", descricao: "A entidade demonstrou possuir condições e expertise para executar a parceria?", peso_maximo: 2 },
    { id: "2.2", rotulo: "Realidade e Nexo", descricao: "Situação-alvo clara e vínculo com ações.", peso_maximo: 2 },
    { id: "2.3", rotulo: "Alinhamento com Políticas Públicas", descricao: "A proposta se alinha com programas e políticas públicas municipais existentes (PPA)?", peso_maximo: 2 },
    { id: "2.4", rotulo: "Definição do Público-Alvo", descricao: "O público-alvo está claramente definido, quantificado e universal (vedada restrição a sócios)?", peso_maximo: 2 },
    { id: "2.5", rotulo: "Metas", descricao: "Metas específicas, mensuráveis, atingíveis, relevantes e temporais.", peso_maximo: 2 },
    { id: "2.6", rotulo: "Atividades / Projetos", descricao: "Descrição detalhada de cada ação ou projeto.", peso_maximo: 2 },
    { id: "2.7", rotulo: "Plano de Aplicação de Recursos", descricao: "Fluxo de liberação, fontes, marcos de desembolso e controles internos.", peso_maximo: 2 },
    { id: "2.8", rotulo: "Orçamento e Enquadramento", descricao: "Receitas e despesas discriminadas e classificadas (Lei 4.320/64).", peso_maximo: 2 },
    { id: "2.9", rotulo: "Cronograma Detalhado", descricao: "Fases, marcos, prazos e responsáveis mês a mês.", peso_maximo: 2 },
    { id: "2.10", rotulo: "Forma de Execução", descricao: "Métodos, equipe, parcerias e atribuições.", peso_maximo: 2 },
    { id: "2.11", rotulo: "Indicadores de Desempenho", descricao: "Indicadores qualitativos e quantitativos com metas e fontes.", peso_maximo: 2 },
    { id: "2.12", rotulo: "Plano de Monitoramento", descricao: "Procedimentos para acompanhar execução e prazos de relatórios.", peso_maximo: 2 },
    { id: "2.13", rotulo: "Plano de Avaliação e Aferição", descricao: "Ferramentas, frequência e responsáveis pela avaliação.", peso_maximo: 2 },
    { id: "2.14", rotulo: "Gestão de Riscos", descricao: "Identificação de riscos e planos de mitigação.", peso_maximo: 2 },
    { id: "2.15", rotulo: "Ações de Transparência Ativa", descricao: "Previsão de divulgação no portal, redes sociais, murais e rádio local.", peso_maximo: 2 },
    { id: "2.16", rotulo: "Canais de Controle Social", descricao: "Canais de contato claros para a comunidade (dúvidas, feedback, denúncias).", peso_maximo: 2 },
    { id: "2.17", rotulo: "Comunicação e Engajamento", descricao: "Estratégias para mobilizar beneficiários e agentes envolvidos.", peso_maximo: 2 },
    { id: "2.18", rotulo: "Sustentabilidade da Parceria", descricao: "Planos para continuidade das ações após o término dos repasses.", peso_maximo: 2 },
    { id: "2.19", rotulo: "Consistência e Coerência", descricao: "Coerência interna entre o diagnóstico descrito e os meios propostos.", peso_maximo: 2 },
    { id: "2.20", rotulo: "Remuneração da Equipe de Trabalho", descricao: "Se aplicável, compatibilidade dos valores de remuneração com o mercado.", peso_maximo: 2 },
    { id: "2.21", rotulo: "Destinação de Bens Remanescentes", descricao: "Destinação clara e justificada dos bens ao final da parceria (doação ou permanência).", peso_maximo: 2 },
    { id: "2.22", rotulo: "Prestação de Contas", descricao: "Modo, periodicidade, formato eletrônico e cronograma de relatórios.", peso_maximo: 2 }
];

// ANEXO VIII DO DECRETO 5.730/2025: HABILITAÇÃO DOCUMENTAL DA OSC (12 ITENS)
export const CRITERIOS_HABILITACAO_ANEXO_VIII = [
    { id: "3.1", rotulo: "Estatuto Social Registrado", base: "Art. 33 da Lei 13.019/14", descricao: "Normas estatutárias com objetivos sociais de relevância pública e destinação de patrimônio líquido em caso de dissolução.", peso_maximo: 2 },
    { id: "3.2", rotulo: "Direção e Representação", base: "Art. 34, V e VI", descricao: "Ata de eleição da diretoria atual registrada e relação nominal dos dirigentes com CPF/RG/endereço.", peso_maximo: 2 },
    { id: "3.3", rotulo: "Certidões Fiscais e Trabalhistas", base: "Art. 34, II", descricao: "Provas de regularidade Federal (RFB/PGFN), Estadual, Municipal, FGTS e Trabalhista (CNDT).", peso_maximo: 2 },
    { id: "3.4", rotulo: "Existência e Domicílio da OSC", base: "Art. 33, V, 'a' e Art. 34, VII", descricao: "CNPJ ativo há no mínimo 1 ano (âmbito municipal) e comprovação de funcionamento no endereço declarado.", peso_maximo: 2 },
    { id: "3.5", rotulo: "Alvarás de Funcionamento", base: "Decreto 5.730/25", descricao: "Alvará de funcionamento, sanitário e PPCI (Prevenção de Incêndio), conforme a atividade exercida.", peso_maximo: 2 },
    { id: "3.6", rotulo: "Experiência Prévia", base: "Art. 33, V, 'b'", descricao: "Comprovação documental de capacidade prévia na realização com efetividade do objeto ou natureza semelhante.", peso_maximo: 2 },
    { id: "3.7", rotulo: "Capacidade Técnica e Operacional", base: "Art. 33, V, 'c'", descricao: "Instalações físicas, condições materiais e equipe apta ao desenvolvimento das atividades.", peso_maximo: 2 },
    { id: "3.8", rotulo: "Declaração de Não Impedimento", base: "Art. 39 da Lei 13.019/14", descricao: "Declaração formal de não incorrer nas vedações legais (sem agentes públicos dirigentes, sem contas julgadas irregulares pelo TCE).", peso_maximo: 2 },
    { id: "3.9", rotulo: "Inexistência de Pendências", base: "Art. 39, II", descricao: "Comprovação de regularidade quanto a prestações de contas de parcerias públicas anteriores.", peso_maximo: 2 },
    { id: "3.10", rotulo: "Inscrição em Conselho Setorial", base: "Políticas Setoriais", descricao: "Registro ativo no Conselho Municipal correspondente (CMDCA, CMAS, CMS, etc.), quando exigido por lei.", peso_maximo: 2 },
    { id: "3.11", rotulo: "Certificado de Treinamento Municipal", base: "Item 3.1.4 do Decreto", descricao: "Participação em programas de capacitação sobre o MROSC instituídos pelo Município de Horizontina.", peso_maximo: 2 },
    { id: "3.12", rotulo: "Outras Qualificações", base: "Legislação Específica", descricao: "Certificações pertinentes ao objeto (CEBAS, Título de Utilidade Pública, etc., se aplicável).", peso_maximo: 2 }
];

// ANEXO IX DO DECRETO 5.730/2025: PARECER DO ÓRGÃO TÉCNICO (ART. 35, INCISO V)
export const ESTRUTURA_PARECER_TECNICO_ANEXO_IX = {
    artigo_base: "Art. 35, Inciso V da Lei Federal 13.019/2014",
    alineas_obrigatorias: [
        { chave: "alinea_a", titulo: "Mérito da Proposta", descricao: "Avaliação da conformidade com a modalidade adotada (Termo de Fomento ou Colaboração)." },
        { chave: "alinea_b", titulo: "Identidade e Reciprocidade de Interesses", descricao: "Aferição da mútua cooperação e interesse público compartilhado." },
        { chave: "alinea_c", titulo: "Viabilidade de Execução", descricao: "Análise técnica dos recursos, cronograma físico, prazos e capacidade técnica instalada." },
        { chave: "alinea_d", titulo: "Cronograma de Desembolso", descricao: "Verificação da coerência dos marcos de desembolso com o plano de trabalho pactuado." },
        { chave: "alinea_e", titulo: "Meios e Procedimentos de Fiscalização", descricao: "Definição dos instrumentos de controle físico e financeiro a serem aplicados pela pasta." },
        { chave: "alinea_g", titulo: "Designação do Gestor da Parceria", descricao: "Indicação do servidor público municipal responsável pelo acompanhamento e fiscalização contínua." },
        { chave: "alinea_h", titulo: "Designação da Comissão de Monitoramento e Avaliação", descricao: "Identificação dos membros da comissão colegiada designada por ato oficial." }
    ],
    conclusoes_possiveis: ["Favorável", "Favorável com Ressalvas", "Desfavorável"]
};

// ANEXO X DO DECRETO 5.730/2025: RELATÓRIO TÉCNICO DE MONITORAMENTO E AVALIAÇÃO (ART. 59)
export const ESTRUTURA_MONITORAMENTO_ANEXO_X = {
    artigo_base: "Art. 59 da Lei Federal 13.019/2014 e Seção 3.2.5 do Decreto 5.730/2025",
    secoes_obrigatorias: [
        { id: 1, nome: "Identificação da Parceria e Partícipes" },
        { id: 2, nome: "Descrição Sumária das Atividades Realizadas e Metas Fixadas (Art. 59, I)" },
        { id: 3, nome: "Análise dos Resultados, Benefícios Sociais e Grau de Satisfação (Art. 59, II, III e IV)" },
        { id: 4, nome: "Comprovação da Divulgação e Transparência Ativa (Art. 11 da Lei 13.019/14)" },
        { id: 5, nome: "Demonstrativo dos Valores Efetivamente Transferidos (Art. 59, III)" },
        { id: 6, nome: "Análise de Documentos Comprobatórios de Despesas em Caso de Descumprimento (Art. 59, V)" },
        { id: 7, nome: "Auditorias Internas/Externas Realizadas e Providências Sanitárias (Art. 59, VI)" },
        { id: 8, nome: "Conclusão e Voto do Relator da Comissão" },
        { id: 9, nome: "Homologação Colegiada (Homologado em todos os termos / Com ressalvas / Não homologado)" }
    ]
};

// ANEXO XI DO DECRETO 5.730/2025: PARECER TÉCNICO CONCLUSIVO DO GESTOR (ART. 67)
export const ESTRUTURA_PRESTACAO_CONTAS_ANEXO_XI = {
    artigo_base: "Art. 67, § 4º da Lei 13.019/2014 (com redação da Lei 13.204/2015) e Item 3.5 do Decreto 5.730/2025",
    pilares_efetividade: [
        { item: "I", rotulo: "Resultados Alcançados e Benefícios", descricao: "Demonstração do cumprimento físico das metas propostas e do ganho social obtido." },
        { item: "II", rotulo: "Impactos Econômicos e Sociais", descricao: "Aferição da modificação positiva na realidade dos munícipes beneficiados." },
        { item: "III", rotulo: "Grau de Satisfação do Público-Alvo", descricao: "Instrumento formal utilizado (pesquisas, listas de presença) e percentual de satisfação registrado." },
        { item: "IV", rotulo: "Sustentabilidade das Ações", descricao: "Plano de continuidade e preservação dos efeitos públicos após o término dos repasses municipais." }
    ],
    controle_financeiro: {
        analise_nexo_causal: true,
        apuracao_glosas: "Identificação precisa de despesas fora do plano de trabalho para retenção/devolução",
        conciliacao_bancaria_regime_caixa: true,
        destinacao_bens_permanentes: "Termo de doação assinado ou plano de uso contínuo aprovado (Anexo VII)"
    },
    julgamentos_possiveis: [
        { status: "Regulares", descricao: "Cumprimento integral dos objetivos e metas pactuados (Art. 72, I)" },
        { status: "Regulares com Ressalva", descricao: "Impropriedade formal de baixa gravidade sem dano ao erário (Art. 72, II)" },
        { status: "Irregulares", descricao: "Omissão de contas, descumprimento injustificado de metas ou dano ao erário com Tomada de Contas Especial (Art. 72, III)" }
    ]
};

// VEDAÇÕES EXPRESSAS DO ART. 39 DA LEI FEDERAL 13.019/2014
export const VEDACOES_ARTIGO_39 = [
    { inciso: "I", regra: "Entidade não constituída regularmente ou estrangeira não autorizada no país." },
    { inciso: "II", regra: "Entidade omissa no dever de prestar contas de parceria pública anterior." },
    { inciso: "III", regra: "Dirigente que seja membro de Poder ou Ministério Público, ou agente público comissionado/chefia da mesma esfera governamental (e parentes até 2º grau)." },
    { inciso: "IV", regra: "Contas rejeitadas pela Administração Pública nos últimos 5 (cinco) anos, salvo quitação integral de débitos, revisão judicial/administrativa ou recurso suspensivo." },
    { inciso: "V", regra: "Sanção vigente de suspensão temporária ou declaração de inidoneidade para licitar/contratar com o poder público." },
    { inciso: "VI", regra: "Contas de parceria julgadas irregulares ou rejeitadas por Tribunal ou Conselho de Contas (TCE/TCU) nos últimos 8 (oito) anos." },
    { inciso: "VII", regra: "Dirigente condenado por ato de improbidade administrativa ou inabilitado para cargo de confiança." }
];

/**
 * Gerador de Prompt Sintético para a Inteligência Artificial (OpenRouter / Gemini)
 * Reduz a carga de leitura para ~400 tokens, mantendo 100% da precisão das normas de Horizontina.
 */
export function gerarPromptAuditoriaMROSC(tipoFormulario, dadosProcesso) {
    return `
Você é o Auditor Técnico da Comissão de Parcerias MROSC de Horizontina/RS.
Sua base normativa estrita é a Lei Federal 13.019/2014 e o Decreto Municipal 5.730/2025.

Diretrizes de Auditoria:
1. Universalidade de Acesso: É expressamente proibida qualquer parceria com benefício restrito a sócios ou grupos particulares (item 3.4.1).
2. Transparência Ativa: Exige-se comprovação prévia no portal, murais e rádio local (Art. 11 e item 3.3).
3. Pesquisa de Preços: Mínimo obrigatório de 3 orçamentos (item 3.4.4).
4. Prazos Fatais: Notificações exigem resposta em 15 dias corridos sob pena de revelia (item 3.1.2). Prestação de contas final em até 90 dias (item 3.5).
5. Vedações: Dirigentes que sejam agentes públicos municipais impedem a parceria (Art. 39, III).

Tipo de Formulário sob análise: ${tipoFormulario}
Dados do Processo:
- OSC: ${dadosProcesso.beneficiario || 'Não informada'}
- Objeto: ${dadosProcesso.objeto || 'Não especificado'}
- Valor: R$ ${dadosProcesso.valor || '0,00'}
- Secretaria: ${dadosProcesso.secretaria || 'Geral'}
- Modalidade: ${dadosProcesso.tipo_execucao || 'Indireta'}

Instruções: Retorne uma análise concisa (máximo 4 linhas), técnica e conclusiva, apontando se atende aos critérios formais de Horizontina, se há itens a ressalvar e a minuta de fundamentação jurídica recomendada.
`.trim();
}

// Compatibilidade universal para import em ES Modules ou inclusão via tag <script>
if (typeof window !== 'undefined') {
    window.REGRAS_MROSC = {
        NORMATIVA_METADADOS,
        PRAZOS_E_REGRAS_PROCESSUAIS,
        CRITERIOS_PLANO_TRABALHO_ANEXO_VIII,
        CRITERIOS_HABILITACAO_ANEXO_VIII,
        ESTRUTURA_PARECER_TECNICO_ANEXO_IX,
        ESTRUTURA_MONITORAMENTO_ANEXO_X,
        ESTRUTURA_PRESTACAO_CONTAS_ANEXO_XI,
        VEDACOES_ARTIGO_39,
        gerarPromptAuditoriaMROSC
    };
}