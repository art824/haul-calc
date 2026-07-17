# CLAUDE.md — Cluster de Ferramentas Gratuitas + Tier Pago (mercado global, inglês)

## O que é este documento
Este é o documento-mestre do projeto. Foi gerado após uma pesquisa de mercado com evidência graduada (jul/2026) e uma sessão de decisão. Ele separa explicitamente o que **JÁ ESTÁ DECIDIDO** (não rediscutir sem motivo forte) do que **AINDA ESTÁ ABERTO** (decidir na ordem indicada, nunca inventar certeza).

## Sobre o operador (leia com atenção)
- Arthur é dev web com experiência, mas **leigo em SEO, marketing e negócios digitais**. Você (Claude Code) fará quase todo o trabalho técnico e de decisão.
- **Toda decisão técnica ou de SEO deve ser explicada em linguagem simples** (1–3 frases, sem jargão, ou com o jargão traduzido) antes de executar.
- Decida com autonomia dentro do que está DECIDIDO abaixo. Peça ao Arthur apenas o que exige ação humana: comprar domínio, verificar Search Console, colar dados de keyword, criar contas.
- Se Arthur pedir algo que contradiz este documento (ex.: construir o tier pago antes de haver tráfego), aponte a contradição antes de obedecer.
- Comunicação em português; **todo o conteúdo do produto em inglês** (mercado global).

---

## CONTEXTO E TESE (decidido)

**O que estamos construindo:** um conjunto ("cluster") de 10 a 40 mini-ferramentas web gratuitas (calculadoras, conversores, geradores) dentro de UM único nicho profissional, num único domínio. Monetização futura: tier pago de US$5–15/mês (batch, API, sem limites). 

**Por que ferramentas e não conteúdo:** os AI Overviews do Google destruíram o tráfego de artigos (CTR da posição 1 cai ~58% quando há AI Overview; tráfego informacional −42% sem recuperação). Ferramentas interativas são o único formato SEO que resiste: a IA descreve o cálculo, mas não o executa — o usuário precisa entrar na página.

**Restrição inegociável do projeto:** manutenção pós-lançamento próxima de zero. O operador estará indisponível por períodos longos (intercâmbio em 2026/2). Nada de servidor para administrar, banco de dados para migrar, ou dependência que quebre sozinha.

**Alvo de referência (assumido, não validado):** R$5k/mês em 24–36 meses. Tratar como régua, não promessa.

**Risco central conhecido:** a ferramenta em si não é fosso — qualquer um com IA clona em horas. A vantagem é rankear primeiro e escolher nicho onde os resultados atuais do Google são artigos, não ferramentas. Se o cluster não rankear, o projeto morre barato (ver critérios de morte).

---

## DECIDIDO — não rediscutir sem motivo forte

1. **Modelo:** freemium. 100% grátis no lançamento; tier pago só na Fase 6, e só se houver tráfego real.
2. **Stack:** site estático (Astro preferencialmente; Next.js static export como alternativa). Toda ferramenta roda 100% no navegador (client-side JS). Zero backend no lançamento. Motivo: custo zero, nada quebra sozinho, carregamento rápido (o Google pontua velocidade).
3. **Hospedagem:** Cloudflare Pages ou Vercel (plano grátis). Deploy automático via GitHub.
4. **Domínio:** um domínio próprio novo, nome curto ligado ao nicho (único custo do projeto: ~US$10/ano). Arthur compra; você orienta a escolha.
5. **Um nicho só.** Proibido misturar nichos no mesmo domínio. Proibido "aproveitar e fazer também" ferramentas fora do nicho.
6. **SEO on-page desde a primeira página:** title/description únicos por página, schema.org (WebApplication/FAQPage quando couber), sitemap.xml, interlinking entre ferramentas do cluster, página respondendo a pergunta exata da busca acima da dobra (ferramenta visível sem rolar).
7. **Medição:** Google Search Console (obrigatório, verificado na semana 1) + um analytics leve e gratuito (ex.: Cloudflare Web Analytics). Nada de Google Analytics pesado.
8. **Critérios de morte (definidos ANTES, imutáveis):** com 10 páginas no ar — menos de **500 impressões orgânicas somadas em 60 dias** OU **nenhuma página no top 20 em 90 dias** ⇒ o NICHO morre. Resposta à morte: trocar de nicho reaproveitando o template (custo ~1 semana), não abandonar a tese nem "insistir mais um pouco".
9. **Proibições permanentes:** produção contínua de blog/social como canal; ads pagos; features que criem suporte a usuário leigo; login/conta de usuário antes da Fase 6; qualquer dependência de API paga de terceiro no free tier.
10. **Sequência com portão:** Fases 0→4 abaixo, nesta ordem. É proibido pular a Fase 0 ou começar a Fase 5/6 antes do portão da Fase 4.

---

## ABERTO — decidir nesta ordem, com dado, nunca por palpite

**A. Qual nicho (Fase 0 — decide tudo).** Critérios de seleção:
   - Existe um cluster de 30+ buscas "em formato ferramenta" no nicho (padrões: "X calculator", "X converter", "X generator", "how many/much X" calculável), com volume somado relevante (referência mínima: alguns milhares de buscas/mês somadas — abaixo disso o teto de renda não fecha com o alvo);
   - Os resultados atuais do Google para essas buscas são majoritariamente **artigos longos, não ferramentas** (= espaço);
   - O público tem contexto profissional/financeiro (alguém que pagaria pelo pro), não só curiosidade casual;
   - Nenhum incumbente com ferramenta boa e gratuita dominando o cluster inteiro (checar top 3 de 10 buscas-amostra).
   - **Processo:** você propõe 5–8 candidatos de nicho com as keywords-amostra; Arthur cola os volumes do Google Keyword Planner (ação humana); a decisão sai do número. Documente a decisão e os números neste arquivo.
   
**B. Nome/domínio** — só depois do nicho.
**C. Quais 10 ferramentas primeiro** — as de maior volume × menor concorrência do cluster; documentar a lista e o porquê.
**D. Preço e conteúdo do tier pago** — decisão da Fase 6, com dado de uso real. Proibido decidir agora.
**E. Ordem de expansão (Fase 5)** — guiada pelo Search Console (expandir o que mostra impressão), não por gosto.

---

## PLANO DE FASES (dias de trabalho, não corridos)

**Fase 0 — Escolha do nicho (1–2 dias).** Só pesquisa e decisão. Nenhum código além de scripts descartáveis de apoio. Entregável: nicho escolhido + tabela de keywords/volumes colada neste arquivo.

**Fase 1 — Pipeline de template (5–7 dias).** Repo, Astro, layout único de página-ferramenta, componentes compartilhados, SEO on-page, sitemap, deploy automático, Search Console verificado, analytics. Entregável: 1 ferramenta-exemplo no ar no domínio final.

**Fase 2 — 10 páginas (7–10 dias).** As 10 ferramentas da decisão C, cada uma numa URL própria, interligadas. Entregável: 10 páginas indexáveis no ar + sitemap submetido.

**Fase 3 — Espera medida (60–90 dias corridos, ~1h/semana).** NÃO é fase de construção. Trabalho: checar Search Console 1×/semana e registrar impressões/posições num log simples no repo. Permitido: consertar bugs, melhorar páginas que já mostram impressões. Proibido: adicionar ferramentas novas em massa, redesign, tier pago.

**Fase 4 — Portão (1 dia).** Comparar números com os critérios de morte. Passou ⇒ Fase 5. Morreu ⇒ voltar à Fase 0 com outro nicho, reaproveitando todo o template.

**Fase 5 — Expansão (15–20 dias).** De 10 para 30–40 páginas, priorizadas pelo Search Console. Reforçar interlinking.

**Fase 6 — Tier pago (10–15 dias).** Só com tráfego real e sinal de demanda. Stripe, limites no free, recurso pro. Primeira vez que o projeto ganha backend — mantê-lo mínimo (serverless).

Total estimado: 35–50 dias de trabalho ativo em 4–6 meses de calendário.

---

## COMO TRABALHAR (instruções operacionais para Claude Code)

- Commits pequenos e frequentes; o repo é a memória do projeto.
- Mantenha um arquivo `DECISOES.md` no repo: toda decisão relevante (nicho, keywords, stack detalhada, nomes) com data e justificativa de 1 linha.
- Ao fim de cada sessão de trabalho, atualize uma seção "STATUS ATUAL" no fim deste arquivo: fase atual, o que foi feito, próximo passo. A próxima sessão começa lendo isso.
- Performance é feature de SEO: páginas devem carregar quase instantaneamente (site estático ajuda; não adicione libs pesadas).
- Acessibilidade e mobile: a maioria do tráfego de busca é mobile; toda ferramenta deve funcionar bem em tela pequena.
- Se algo neste documento se provar errado com dado real, proponha a mudança explicitamente ao Arthur, explique em linguagem simples, e registre em `DECISOES.md`. Não mude silenciosamente.

## STATUS ATUAL
- Fase: 3 (espera medida) — iniciada em 2026-07-17. Site no ar, nada mais a construir por enquanto.
- Nicho: **caminhoneiro autônomo / owner-operator trucking** (EUA, inglês). Domínio: **haul-calc.com** (comprado e ativo). Ver `DECISOES.md`.
- Feito: site completo com 10 ferramentas, identidade visual "asphalt & diesel", SEO on-page completo, interlinking automático, IFTA com tabela Q2 2026 embutida. Deploy: GitHub → Cloudflare Pages → domínio customizado. Search Console verificado + sitemap processado + Cloudflare Web Analytics ativado. Checklist completo em `DECISOES.md` (2026-07-17).
- Trabalho permitido agora (regra da Fase 3): consertar bugs, melhorar página que já mostra impressão no Search Console. **Proibido:** adicionar ferramentas novas em massa, redesign, tier pago.
- Cadência: lembrete semanal no Google Calendar (segundas, até início de nov/2026) pra checar Search Console e reportar números numa sessão — aí registro no log. Critérios de morte em 60 e 90 dias, ver seção DECIDIDO acima.
