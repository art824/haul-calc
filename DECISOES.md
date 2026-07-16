# DECISOES.md — Log de decisões do projeto

Cada entrada: data, decisão, justificativa em 1 linha.

---

## 2026-07-16 — Ajuste no critério de seleção de nicho (Fase 0)

**Decisão:** trocar o filtro "não existe ferramenta para essa busca" por "nenhum concorrente cobre o nicho inteiro com um cluster de 20-30 ferramentas interligadas".

**Justificativa:** pesquisa em ~20 termos de calculadora espalhados por vários nichos (construção, elétrica, caminhoneiros, fotografia, e-commerce, casamento, limpeza, paisagismo) mostrou que quase todo termo-cabeça já tem ferramenta gratuita rankeando — vindas de dois tipos de concorrente que a tese original não considerou: (1) sites agregadores genéricos de calculadora (Omni Calculator, Calculator.net, Inch Calculator), que cobrem qualquer cálculo técnico óbvio; (2) empresas de software para prestador de serviço (Jobber, Housecall Pro, FreshBooks, Workiz) que criam calculadoras de precificação como isca de marketing gratuita para dezenas de profissões. A tese de "artigo domina, ferramenta é espaço livre" segue válida em nichos mais específicos, mas não em nenhum termo óbvio isolado.

**Efeito prático:** a vantagem competitiva do cluster passa a ser comprehensividade + interlinking (nenhum concorrente sozinho tem as 20-30 ferramentas que o cluster completo teria), não mais "ganhar um termo que ninguém tem". Critérios de morte da Fase 4 (seção "DECIDIDO" do CLAUDE.md) continuam os mesmos.

---

## 2026-07-16 — Candidatos de nicho propostos (Fase 0, aguardando volumes)

**Decisão:** propor 8 nichos candidatos ao Arthur; recomendar 3 como prioridade para checagem de volume no Google Keyword Planner.

**Recomendados (concorrência fragmentada, sem cluster, público paga por pro):**
1. Caminhoneiro autônomo (owner-operator trucking) — cost per mile, per diem, IFTA fuel tax, detention pay, load rate, hours of service
2. Gráfica de estamparia / print shop (screen printing, embroidery, DTG) — quote calculator, digitizing cost, setup fee, garment markup
3. Fotógrafo profissional (pricing) — day rate, package pricing, print size, licensing fee, retouching cost

**Alternativos (sinal mais fraco ou não testado ainda):** criador de conteúdo/rate card, agricultura, impressão 3D, locução/voice over, fornecedores de casamento não-DJ.

**Justificativa:** ver pesquisa de SERP registrada na sessão de 2026-07-16. Nenhum volume de busca real foi verificado ainda — isso é ação do Arthur no Google Keyword Planner, critério definido na seção "ABERTO — A" do CLAUDE.md.

**Próximo passo:** Arthur cola os volumes das keywords-amostra dos 3 recomendados (e dos outros, se quiser comparar) no Google Keyword Planner.

---

## 2026-07-16 — Nicho fechado: caminhoneiro autônomo (owner-operator trucking)

**Decisão:** o nicho do cluster é **caminhoneiro autônomo / owner-operator trucking**, mercado EUA, conteúdo em inglês.

**Justificativa (dados reais do Google Keyword Planner, EUA, via "Descobrir novas palavras-chave"):**
- **Caminhoneiro:** 140+ variações de busca em formato calculadora (ifta calculator, trucking cost per mile calculator, truck fuel cost calculator, truck driver hours calculator, ltl freight calculator, semi truck toll calculator, etc.), somando aproximadamente 20.000–28.000 buscas/mês nos EUA. Termo âncora: "ifta calculator" (~5.000/mês) — imposto trimestral obrigatório de combustível para autônomos, dor real e recorrente.
- **Fotógrafo (2º colocado):** só ~14 termos em formato calculadora, somando ~1.500 buscas/mês — muito abaixo do caminhoneiro, e parte do volume maior do nicho ("wedding photographer cost") é intenção de contratar (cliente), não de precificar (fotógrafo).
- **Gráfica/estamparia (eliminado):** de 1.189 termos relacionados, só 1 tinha formato calculadora e sem volume registrável — o nicho é dominado por gente pesquisando comprar máquina de bordado (ricoma, melco, brother), público de e-commerce de equipamento, não dono de gráfica precificando job.
- Concorrência no nicho vencedor é fragmentada (Rigbooks, TruckersReport, Trulos, AAOO — cada um com 1 calculadora solta), nenhum cobre o cluster inteiro. Público (donos do próprio caminhão) tem perfil financeiro/profissional real, calcula custo toda semana.

**Efeito prático:** critério "ABERTO — A" do CLAUDE.md está atendido. Próximo passo é a decisão B (nome/domínio).

---

## 2026-07-16 — Nome/domínio escolhido: haul-calc.com

**Decisão:** domínio do projeto é **haul-calc.com**.

**Justificativa:** `haulcalc.com` (sem hífen) estava registrado por terceiro e só disponível via broker por US$99,99 — fora do orçamento do projeto (~US$10/ano). A variante com hífen estava disponível por US$4,99 no primeiro ano. Nome curto, neutro, amplo o suficiente pra abrigar o cluster de 30+ ferramentas de caminhoneiro autônomo. Hífen não afeta SEO no Google, só é levemente pior para comunicação verbal/branding — aceitável dado o custo.

**Próximo passo:** Arthur finaliza a compra do domínio (ação humana — envolve pagamento). Depois disso, início da Fase 1 (repositório, Astro, pipeline de template, deploy).

---

## 2026-07-16 — Fase 1 iniciada: stack e primeira ferramenta

**Decisões técnicas:**
- **Astro 5** estático + `@astrojs/sitemap`, zero framework de UI — cada ferramenta é JS vanilla inline, roda 100% no navegador. Motivo: performance máxima (SEO), zero manutenção, nada quebra sozinho.
- **Template de página-ferramenta** (`src/layouts/ToolLayout.astro`): recebe metaTitle/description únicos, FAQs (renderizadas + schema FAQPage automático), links relacionados; gera schema WebApplication automático. Ferramenta sempre acima da dobra.
- **Primeira ferramenta = Cost Per Mile Calculator** (não a IFTA, apesar do volume maior). Motivo: é matemática pura sem dependência de dados externos — a IFTA exige tabela de alíquotas por estado atualizada trimestralmente, o que conflita com a restrição de manutenção zero. Decidir na Fase 2 como tratar a IFTA (provável: tabela embutida com nota "last updated" + atualização trimestral de ~15min, 4x/ano — custo aceitável pelo termo-âncora de ~5.000 buscas/mês).

**Verificado:** build estático ok (2 páginas + sitemap), cálculo conferido manualmente, reatividade testada no navegador, schemas WebApplication + FAQPage presentes no HTML.

---

## 2026-07-16 — Decisão C: as 10 primeiras ferramentas (construídas)

**Decisão:** Arthur pediu execução completa do site de uma vez (antecipando a Fase 2). As 10 ferramentas, escolhidas pelos dados de keyword coletados (volume × formato ferramenta):

1. `/cost-per-mile-calculator` — trucking cost per mile calculator (~500/mês) + truckers calculator
2. `/ifta-calculator` — **âncora**: ifta calculator + ifta tax calculator (~5.000/mês cada) + free ifta calculator, ifta mileage calculator (~500 cada)
3. `/load-profit-calculator` — trucking rate calculator (~500), truck load calculator (~500)
4. `/fuel-cost-calculator` — truck fuel cost calculator (~500), semi truck fuel/gas calculator (~500 cada)
5. `/per-diem-calculator` — trucking per diem calculator (cluster per diem; rates IRS 2026: $80/$86, 75% parcial, 80% dedutível)
6. `/truck-payment-calculator` — financiamento (amortização padrão)
7. `/pay-per-mile-calculator` — truck driver pay per mile calculator (~500), trucker pay calculator (~500)
8. `/detention-pay-calculator` — detention pay/time calculator (baixo volume, mas dor real e zero concorrência de ferramenta)
9. `/fuel-surcharge-calculator` — trucking fuel surcharge calculator
10. `/hours-of-service-calculator` — dot hours of service calculator (100–1.000), recap 70/8 e 60/7

**Descartado:** truck toll calculator (~500/mês) — exigiria API de rotas/pedágio paga, viola a proibição de dependência paga no free tier. Reavaliar na Fase 6 como recurso pro.

**IFTA — fonte de dados:** tabela diesel Q2 2026 embutida (48 estados + surcharges KY/VA), cruzada entre 2 fontes independentes (freeiftacalculator.com e fleetcollect.net; divergências pequenas em CO/CT/MS resolvidas pela fonte mais precisa + histórico; MS fixado em 0.180). Disclaimer visível na página apontando iftach.org. **Manutenção assumida: atualizar a tabela 4x/ano (~15 min) — única exceção consciente à regra de manutenção zero, justificada pelo termo-âncora.** Oregon = $0 (weight-mile, explicado na página). Províncias canadenses fora do v1.

**Design (identidade):** público é caminhoneiro autônomo americano, não usuário de SaaS — paleta "asphalt & diesel" (grafite #22262d, âmbar/laranja segurança #f5a623/#e87511, fundo creme quente), faixa hazard diagonal como assinatura visual, tipografia system bold (zero fontes externas = performance), inputs de 46px+ (uso com luva/polegar no celular), resultados em painel escuro com número grande âmbar. Logo SVG inline (caminhão estilizado) + favicon SVG data-URI. Zero imagens, zero libs.

**Verificação:** build 11 páginas ok; as 10 calculadoras testadas no navegador com casos calculados à mão — todas exatas (incl. IFTA com e sem surcharge, amortização, per diem, recap HOS). Zero erros de console.
