# DECISOES.md — Log de decisões do projeto

Cada entrada: data, decisão, justificativa em 1 linha.

---

## 2026-08-04 — Site 2 construído (terraplanagem) + a régua de nicho muda de novo

**Decisão A — a proibição de pesquisa de nicho até 15/09 (decidida ontem) foi revogada
pelo Arthur, com argumento que eu aceito.** A disciplina de "uma aposta por vez" foi
calibrada quando construir um site custava 12-17 dias de trabalho. O template já existe;
site 2 é fork + conteúdo. **A regra estava precificando um custo que não existe mais.**
Resultado de SEO é distribuição de cauda longa: com custo por tentativa perto de zero
(~US$10/ano + cota de IA ociosa), número de tentativas vale mais que otimizar qualquer
tentativa isolada. Registro que resisti duas vezes e que a resistência estava errada.

**Decisão B — a régua "o nicho está ocupado?" está MORTA, refutada pelo nosso próprio
site.** 22 buscas, 2 idiomas, 5 formatos (calculadora, gerador de documento, otimizador,
consulta, referência), 22 nichos: **21 de 22 ocupados** por 6-12 ferramentas grátis e sem
gate. Português igual inglês. Regulação nova (tarifas 2025-26, CBAM de jan/2026, reforma
tributária brasileira) é farmeada em menos de 12 meses. E os mesmos domínios aparecem em
nichos sem relação nenhuma — `toolgrit.com`, `infinitycalculator.com`, `usecalcpro.com`,
`calcshed.com`, `toolblocks.app`, `solvebility.com`, `sparkshift.app`, `voltcalc.app`,
`intrysys.com`: **fazendas de calculadora multi-nicho — a nossa estratégia,
industrializada por builders com IA.** O toolgrit já tem cost-per-mile e trucking
startup cost, ou seja, concorrente direto do haul-calc.

**Mas o haul-calc rankeia em 10,89 com 17 dias, e o nicho dele TAMBÉM estava ocupado**
(ver entrada de 16/07: "quase todo termo-cabeça já tem ferramenta grátis rankeando").
Ocupação não prevê fracasso — passei 3 semanas medindo uma variável que o nosso próprio
experimento refuta. Corolário: "sem email gate, rápido, mobile" **não é mais
diferencial**, é o padrão de todo entrante novo. Eu tinha vendido isso como fosso.

**Decisão C — a régua nova: a versão rasa de uma fazenda seria visivelmente errada pra
quem é do ramo?** Fórmula única = a fazenda já tem, não se ganha. Dado por jurisdição,
atualização periódica ou lógica de várias etapas = não dá pra fakear. E um teste barato
que passa a ser obrigatório: **checar se os termos de cauda longa têm SERP própria** —
se devolvem a mesma página dos termos-cabeça, não existe cauda longa, existem 4 keywords
e 39 enfeites.

**Decisão D — site 2 = terraplanagem/earthwork (EUA, inglês), repo `cutfill-calc`.**
Keyword Planner (EUA/inglês): 44 termos, ~8.950/mês, mas `gravel tonnage calculator`
sozinho é 5.000 (56%) e é intenção de dono de casa. Núcleo profissional: **~3.950/mês**,
1/5 a 1/7 do cluster de caminhoneiro — passa raspando no piso do CLAUDE.md.
**O que decidiu foi o teste de SERP da cauda:** `cut and fill calculations excel` devolve
PDF de universidade, Chegg, Scribd, tutorial de Excel e 3 vídeos de YouTube —
**zero calculadoras.** Melhor abertura em 22 buscas, e é a tese fundadora do projeto ao
pé da letra. Por isso o site é **estreito e fundo em cut & fill**, não amplo em
"calculadoras de terraplanagem": a âncora tem SERP vazia, o cluster genérico não.

**Objeção do conselho que NÃO foi derrubada, fica registrada:** teto de cliques.
39 termos × 50/mês × 20% de CTR na posição 1 em todos = **390 cliques/mês no teto
absoluto**. Pior: clique é limiar, não proporção — o haul-calc tem 502 impressões e
1 clique porque posição ~11 gera impressão sem clique, e um nicho com 1/5 do volume
repetindo posição 10 pode produzir zero. **Este site é experimento, não aposta de
negócio.** Se morrer no portão, morre barato e ensina.

**Decisão E — mitigação de footprint, não-negociável.** Três revisores do conselho
apontaram, independentemente, que vários sites templatizados do mesmo dono em infra
compartilhada **têm a assinatura estrutural das próprias fazendas** que identificamos
como ameaça, e podem ser classificados como rede de doorway. Portanto: identidade visual
completamente diferente (feito — "blueprint & survey", corte vermelho / aterro azul,
contra o "asphalt & diesel"), **zero links entre os dois sites**, propriedade separada no
Search Console, analytics separado.

**Erro meu registrado:** apresentei "concorrência baixa em 90% dos termos" como ponto a
favor. É métrica de leilão de anúncio, não de dificuldade orgânica — e eu já tinha
documentado exatamente esse erro em 21/07 no arquivo de memória. Repeti mesmo assim.

---

## 2026-08-03 — Filtro de nicho por TIPO de concorrente + fim da busca de nicho até 15/09

**Decisão A — a busca por 2º nicho está ENCERRADA até 2026-09-15 (portão da Fase 4).**
Nenhuma pesquisa de nicho novo, nenhum Keyword Planner, nenhuma checagem de SERP de
outro mercado até lá. Único trabalho permitido: o da Fase 3 (checar Search Console
semanalmente, consertar bug, melhorar página que já mostra impressão).

**Justificativa:** o `CLAUDE.md` só destrava a Fase 0 se o haul-calc MORRER no portão.
Nas 2 semanas seguintes ao lançamento foram gastos ~10 dias pesquisando 6 nichos
candidatos — exatamente o comportamento que a Fase 3 existe pra impedir. Pior: o dado
do próprio site mostra que ele está **passando**, não morrendo (372 impressões contra
piso de 500 em 60 dias; melhor página na posição 12,18, ou seja, o critério de "top 20
em 90 dias" já está tecnicamente batido no dia 13). A correria estava respondendo a uma
crise que o dado não reportava. Passado pelo llm-council (5 conselheiros + peer review):
4 dos 5 apontaram o problema de timing independentemente.

**Decisão B — o critério de nicho passa a ser TIPO de concorrente, não presença de
concorrente — mas com 3 portões obrigatórios antes.** A régua binária ("existe
concorrente nesse termo? então descarta") era ruim: todo nicho que tem dinheiro atrai
algum concorrente, então ela matava o pool inteiro de candidatos. Substituída por:

*Classificação do concorrente (só o tipo 6 é bloqueio real):*
| Tipo | O que ele NÃO consegue consertar | Veredito |
|---|---|---|
| 1. SaaS usando calc como isca de lead | o gate de email É o modelo de negócio; a ferramenta tem que puxar pro produto dele | atacável |
| 2. Blog/mídia com plugin de calculadora | calculadora é acessório, sem cluster, página lenta | muito atacável |
| 3. Fabricante (semente, fertilizante, equipamento) | é enviesado por construção, nunca dirá "compre menos" | atacável via independência |
| 4. Governo / órgão oficial | serve a intenção "declarar", não "estimar/planejar"; nunca cobre o cluster ao redor | atacável só no ENTORNO, nunca no termo-cabeça |
| 5. Indie dedicado de 1 ferramenta | difícil no termo dele, mas não tem cluster | não brigar, cercar |
| 6. Ferramenta financiada com DADO PROPRIETÁRIO (AirDNA) | nada — o dado é o fosso | **bloqueio real** |

*Portões obrigatórios ANTES de aplicar a classificação (senão o filtro vira
racionalização):*
1. **Piso de volume** (passo 2 do processo de 7 passos). Teria matado vending machine
   em 1 hora — o problema lá nunca foi concorrência, era ~50 buscas/mês.
2. **O público aguenta pagar US$5-15/mês?** (passo 5). Gate de email prova que um time
   de vendas paga por aquele *lead* — não prova que o profissional assinaria. São dois
   motores econômicos diferentes.
3. **Encaixe do operador** (NOVO — 3º portão, não existia antes). Idioma e habilidade
   que o Arthur tem de fato. Nicho que exige habilidade ausente não está "disponível".

**Decisão C — "caçar calculadora com email gate" foi REBAIXADO de critério de caça
para critério de desempate.** Só se aplica entre candidatos que já passaram nos 3
portões acima. Motivo: confunde *atacável* com *rankeável* — tirar o gate melhora
conversão, não é sinal de ranking do Google. E "existe calculadora com gate?" quase
sempre volta "sim", o que é tão pouco informativo quanto uma regra que sempre volta "não".

**Decisão D — Alemanha (trucking) está MORTA, pelo 3º portão.** O Arthur não lê SERP
nem escreve copy em alemão, e o `CLAUDE.md` manda todo conteúdo do produto em inglês.
O `niche-candidates.md` terminava num passo que nunca aconteceu (Arthur abrir o
google.de pessoalmente) e que agora não pode acontecer. O filtro novo estava servindo
pra passar por cima desse buraco. **O fato de o filtro corrigido matar justamente o
nicho que ele tinha ressuscitado é a prova de que virou filtro e não racionalização.**

**Padrão registrado pra não repetir:** esta é a **terceira** vez que a régua de rejeição
é afrouxada logo depois de uma leva de rejeições (16/07, 22/07, agora 03/08). Se isso
acontecer uma 4ª vez, tratar como sinal de viés do processo, não como descoberta.

---

## 2026-07-22 — Processo maduro de descoberta de nicho (passa a valer daqui pra frente)

**Decisão:** adotar um processo formal de 7 passos pra avaliar qualquer nicho/país
candidato, substituindo a checagem ad-hoc usada até aqui:

1. **Brainstorm de candidatos** (Claude propõe 5-8, evitando verticais já provadas
   saturadas globalmente: transporte/logística, taxa-hora de freelancer, aluguel de
   curta temporada, fitness).
2. **Checagem de volume** (Arthur, Google Keyword Planner, país/idioma-alvo, sementes
   LARGAS — sementes estreitas mascaram volume real).
3. **Checagem de concorrente** (Claude, busca com a frase natural que um humano
   digitaria, não variação artificial). Classificar cada concorrente achado:
   órgão oficial de governo (bloqueio duro no termo) / hub comprehensivo já pronto
   (bloqueio duro no nicho) / SaaS financiada usando calculadora como isca (difícil
   mas batível) / artigo-blog-fórum solto (aberto).
4. **Veredito de viabilidade**: inviável / difícil mas possível / aberto.
5. **Checagem de rentabilização**: a renda e cultura de assinatura do país/público
   aguenta US$5-15/mês? Que prazo é realista?
6. **Plano do site** (só se passou 4 e 5): lista de 10-15 ferramentas, termo-âncora,
   reaproveitamento de template, prazo.
7. **Double-check final** de SERP antes de qualquer build.

**Justificativa:** sessão de 2026-07-21/22 expôs 3 erros de método que esse processo
corrige — (a) Airbnb foi descartado só depois que Arthur checou o SERP com os
próprios olhos, não bastou minha leitura; (b) busca com frase artificial ("berechnung
maut") escondeu concorrentes reais que a frase natural ("maut rechner") revelou;
(c) Brasil/caminhoneiro parecia promissor até achar que já existe hub comprehensivo
pronto (FreteLab) + calculadora oficial da ANTT — pior que qualquer coisa vista antes.
Ver `niche-candidates.md` para o histórico completo dessa sessão.

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

---

## 2026-07-17 — Site no ar: haul-calc.com lançado

**Decisão:** domínio `haul-calc.com` comprado via Cloudflare Registrar (~US$10,44/ano, preço de custo, sem markup) em vez de `haul-calc.net` — motivo: confiança do público (.com é o padrão reconhecido), evitar que usuário digite `.com` de cabeça e caia no domínio de terceiro `haulcalc.com` (parado, brokerado), e zero retrabalho já que todo o site já apontava pra `.com`.

**Pipeline de deploy:** GitHub (`github.com/art824/haul-calc`, branch `master`) → Cloudflare Pages (build `npm run build`, output `dist`) → domínio customizado conectado, DNS automático (mesma conta Cloudflare). Testado antes com o subdomínio grátis `haul-calc.pages.dev` sem custo nenhum — canonical tags já apontavam pra `haul-calc.com` desde o início, então esse teste não gerou nenhum resíduo de indexação errada.

**Checklist de lançamento — todos verificados em 2026-07-17:**
- Site no ar em `https://haul-calc.com`, HTTPS ativo, canonical/title/10 ferramentas corretos
- `robots.txt` e `sitemap-index.xml` respondendo 200
- Google Search Console: propriedade de domínio verificada (registro TXT), sitemap submetido e processado ("Índice de Sitemaps", status Processado)
- Cloudflare Web Analytics: RUM ativado globalmente (aguardando primeiras visitas pra popular dados — comportamento esperado, não é erro)

**Efeito prático: Fase 3 (espera medida, 60-90 dias) começa a contar oficialmente a partir de 2026-07-17.** Critérios de morte (imutáveis, definidos no CLAUDE.md): menos de 500 impressões orgânicas somadas em 60 dias, OU nenhuma página no top 20 em 90 dias ⇒ nicho morre, troca-se de nicho reaproveitando o template. Log semanal de impressões via lembrete no Google Calendar (toda segunda, configurado até início de novembro/2026).
