# Niche Candidates — pesquisa Keyword Planner (2026-07-17)

Inventário de nichos pesquisados para um eventual 2º site (Fase 4/5), gerado a partir
de 6 CSVs do Google Keyword Planner colados pelo Arthur. Analisado e passado pelo
conselho (skill llm-council) em 2026-07-17/18. Ver `CLAUDE.md` para as regras de fase —
nenhum destes deve virar site antes do portão da Fase 4 (haul-calc passar ou morrer).

## Veredito resumido
Nenhum nicho abaixo justificou abrir um 2º site na data da pesquisa. Guardado aqui
como inventário pronto para a Fase 4, para não perder o trabalho já feito.

## 1. Vending machines — REPROVADO (intenção errada)
- ~769 mil de volume bruto somado, mas ~95% é intenção de comprar/vender equipamento
  ("for sale", "near me", "franchise", "routes for sale").
- Só 1 termo real de calculadora: "vending machine profit calculator" (~50/mês).
- Conclusão: mercado de e-commerce de equipamento, não cluster de calculadoras.
- Ângulo levantado pelo conselho (Expansionist) e não testado: uma calculadora de
  ROI/lucro por rota, posicionada *antes* da compra (upstream), poderia capturar
  esse público com bolso ($3-10k por máquina) — não testado, ficaria para uma
  eventual re-pesquisa com sementes diferentes.

## 2. Airbnb / short-term rental — REPROVADO (saturado, confirmado no SERP)
- ~3,25 mil de volume somado, único cluster real de calculadora encontrado (airbnb
  profit calculator, cleaning fee calculator, STR calculator, free airbnb profit
  calculator, todos ~500/mês).
- Dominado por incumbentes fortes e bem promovidos: AirDNA, BiggerPockets, Mashvisor,
  Rabbu.
- **Confirmado manualmente por Arthur no Google (2026-07-21):** os resultados são de
  sites "acima do peso" de um dev solo — bem promovidos, com investimento em ads.
  Descarte confirmado, não é só suposição.

## 3. Dump truck — inconclusivo como site novo, mas adjacente ao haul-calc
- Volume baixo, informacional ("is dump truck profitable").
- Mesmo universo do caminhoneiro (haul-calc). Faz mais sentido como 1-2 páginas
  dentro do haul-calc na Fase 5 (expansão guiada por Search Console) do que como
  domínio novo.
- Ressalva do conselho: adicionar página nova sem dado de impressão pode furar a
  regra da Fase 3 ("só melhorar página que já mostra impressão") — não fazer agora.

## 4. Laundromat, Childcare, Salon/booth rent — SEM DADOS SUFICIENTES
- 3 a 6 keywords cada nos CSVs puxados — sementes de busca estreitas, não nicho vazio.
- Não julgados (nem aprovados nem reprovados). Se algum interessar no futuro,
  precisa re-puxar no Keyword Planner com sementes mais largas antes de qualquer
  veredito (ex.: laundromat → "coin laundry", "wash and fold pricing", "laundry
  pickup delivery pricing").

## 5. Arbitragem geo/idioma — países não-anglófonos (reconhecimento 2026-07-21)

Direção estratégica levantada pelo Arthur: mercados de alto poder aquisitivo em idioma
não-inglês têm muito menos concorrência de builders indie de calculadora (que brigam
todos em inglês), e o próprio idioma vira um moat contra os agregadores ingleses (Omni
Calculator, Calculator.net).

**Reconhecimento feito via WebSearch nos SERPs reais:**
- Calculadoras HORIZONTAIS de dinheiro/salário/imposto/taxa estão SATURADAS em todo país
  desenvolvido, mesmo em idioma local — confirmado em: Freelancer Stundensatz (DE),
  ZZP uurtarief (NL), cotisations auto-entrepreneur (FR, governo tem a oficial),
  Grenzgänger Lohn (CH). Motivo: SaaS de contabilidade usam a calc como isca + às vezes
  o governo publica a ferramenta. **O idioma NÃO salva nesses termos-cabeça.**
- A abertura é a mesma do haul-calc: VERTICAL profissional + cálculo OPERACIONAL
  específico do país (pedágio, custo/km, dosagem regulada), que as SaaS horizontais não
  localizam em ferramenta. Confirmado no transporte rodoviário alemão (Spedition/LKW):
  SERP é de artigos + cotação de corretora de frete, NÃO de cluster de ferramentas para
  o dono do caminhão calcular o próprio custo.

**Conclusão:** o eixo que decide é vertical+operacional, não o país. País só define
tamanho da carteira/volume. Ranking p/ a jogada (carteira alta + Google dominante +
idioma que barra concorrente inglês): 1) Alemão DACH (~100M falantes, maior mercado de
transporte rodoviário da Europa = reuso do template); 2) Holandês; 3) Francês;
4) Nórdicos. Evitar Coreia/Rússia/China (Naver/Yandex/Baidu dominam, quebram a tese).

**Candidato principal — Cluster A: transporte rodoviário alemão (Spedition/LKW).**
Reusa quase todo o haul-calc: Maut=toll, Dieselzuschlag=fuel surcharge, Lenkzeiten=hours
of service, Kosten pro Kilometer=cost per mile. Keyword Planner: Local=Alemanha (+AT+CH),
Idioma=Alemão. Sementes: LKW Maut Rechner, LKW Kosten pro Kilometer, Frachtkosten
berechnen, Transportkosten Rechner LKW, Dieselzuschlag berechnen, Spritkosten LKW Rechner,
Leerkilometer Kalkulation, Tourenkosten berechnen, Selbstkosten LKW pro Kilometer,
Frachtrate pro km berechnen, Lenkzeiten Rechner, Kilometerpauschale LKW, Speditionskosten
Kalkulation, Fahrzeugkosten LKW Rechner.

**Candidato secundário — Cluster B: agricultura alemã (carteira menos certa, mas
regulação forte tipo IFTA).** Sementes: Düngebedarf berechnen, Düngerbedarf Rechner,
Aussaatstärke berechnen, Saatgutbedarf Rechner, Hektarertrag berechnen, Pflanzenschutz-
mittel Dosierung, Güllemenge berechnen, Düngeverordnung Rechner, Futterbedarf berechnen
Rinder, Stickstoffbedarf berechnen.

**RESULTADO Keyword Planner (2026-07-22, Local=Alemanha, Idioma=Alemão):**
- Cluster A (trucking): 636 termos, ~21,6 mil só em formato calculadora (bate com os
  EUA, 20-28k), 80% concorrência BAIXA (510/636). Encaixe quase total no template
  haul-calc: berechnung maut (5.000), lenkzeiten lkw (5.000, = Hours of Service),
  dieselzuschlag berechnen (500, = Fuel Surcharge), lkw kosten pro km (500, = Cost per
  Mile), frachtkosten berechnen (500, = Load/Rate). **Candidato mais forte já achado.**
  Alerta: termo puro "Maut Rechner" provavelmente é do operador oficial (Toll Collect
  DE / ASFINAG AT) — não brigar por ele, ganhar o cluster ao redor (custo/km,
  Dieselzuschlag, Lenkzeiten, Frachtrate), igual ao IFTA nos EUA.
- Cluster B (agricultura): 59 termos, ~9,2 mil, concorrência baixíssima, formato
  calculadora (Aussaatstärke por cultura). Menor, mais pulverizado, carteira incerta.
  Plano B.

**CHECAGEM DE SERP feita por Claude via WebSearch (2026-07-22)** — correção do
otimismo inicial, resultado real por termo:

| Cálculo | Alemanha | França | Holanda |
|---|---|---|---|
| Custo por km | Misto (2 ferramentas reais: kamenski-logistik, wirtschaftsweitblick + artigos) | Só artigo/blog (aberto) | Lotado (bedrijfsrekenen.nl, teleroute.com, detransporters.nl) |
| Horas de condução (= Hours of Service) | **OCUPADO** — lenkzeitrechner.de, domínio dedicado, "kostenlos berechnen" | Só artigo/blog (aberto) | Só artigo (aberto) |
| Pedágio | não testado | Lotado (impargo.de, tripcostcalc.com) | Muito lotado (tollguru, tlnplanner, vrachtwagenheffingberekenen.nl) |
| Adicional de diesel (= Fuel Surcharge) | Quase só artigo (1 ferramenta B2B duvidosa: persofleet) | não testado | Ocupado (stichtingvern.nl/tools/dieseltoeslag) |
| **Imposto de diesel recuperável (= nosso IFTA)** | não se aplica | ~~TICPE — só artigo/guia, ZERO calculadora~~ **ERRADO, ver correção em §6** | não se aplica |

**Correção importante:** a Alemanha NÃO é a abertura limpa que pareceu antes de checar o
SERP — já existe concorrente forte e dedicado (lenkzeitrechner.de) pro equivalente do
Hours of Service. A Holanda é a mais lotada das três (cultura de logística madura, já
tem ferramenta pra quase tudo). **A França é a surpresa: 3 termos testados (custo/km,
tempo de condução, TICPE) voltaram só artigo, nenhuma ferramenta dedicada.** TICPE é
especialmente valioso — imposto trimestral sobre diesel profissional recuperável,
mesma dor exata do IFTA que foi âncora do haul-calc nos EUA.

**RESULTADO Keyword Planner (2026-07-22, Local=França, Idioma=Francês): 124 termos,
14.000/mês somado.**
- TICPE (= nosso IFTA): 25 termos, 7.400/mês. **Termo "ticpe" sozinho = 5.000/mês,
  concorrência baixa (idx 3) — maior termo-âncora único de todos os países testados.**
  Confirmado no SERP: só artigo/guia, zero calculadora.
- Temps de conduite/repos (= Hours of Service): 83 termos, 5.950/mês, long-tail bem
  diversificado (bom sinal de busca real).
- Coût au km: só 7 termos, 300/mês — semente estreita, sub-representado, precisa nova
  tentativa (ex.: "prix transport routier km", "tarif transporteur km").

**DOUBLE-CHECK RIGOROSO (2026-07-22) — correção de padrão de julgamento:**

Erro identificado: eu estava aplicando "tem concorrente = descarta", mas essa NUNCA foi
a régua usada pra aprovar os EUA (ver DECISOES.md 2026-07-16 — quase todo termo isolado
lá também tinha concorrente: Omni Calculator, Jobber, etc.). A régua real é
**"ninguém tem o cluster INTEIRO (10-15 ferramentas interligadas) focado no autônomo"**.
Reaplicando essa régua correta:

- **França — TICPE tem concorrente único e mais grave que os outros: o próprio governo**
  (simulador oficial em impots.gouv.fr, um pra transportador e um pra taxista).
  Autoridade institucional que nenhuma ferramenta privada supera em confiança pra
  assunto de imposto — isso fura especificamente a âncora (TICPE = 53% do volume do
  cluster francês). Resto do cluster: Dashdoc (TMS pago usando calculadora como isca,
  mesmo tipo de concorrente já aceito nos EUA). Volume real de "ticpe" também é
  diluído entre transporte, agricultura, táxi e construção civil — não é 5.000/mês
  só de caminhoneiro.
- **Alemanha — sobrevive com a régua certa.** Cada concorrente achado (lenkzeitrechner.de,
  kamenski-logistik.de, persofleet) é ferramenta ISOLADA de uma empresa, não um cluster
  comprehensivo pro autônomo. Ninguém juntou Maut+Dieselzuschlag+Lenkzeiten+Kosten-por-
  km+Frachtrate num hub interligado — exatamente o espaço que o haul-calc ocupou nos EUA.
- **Agricultura alemã (Cluster B) — MORTA.** Pior que tudo já visto: fabricantes de
  semente/fertilizante (KWS, AGRAVIS, Saaten Union, K+S, YaraPlan) usam calculadora
  como isca de venda, MAIS o governo (Bayern LfL, NRW) com ferramenta oficial de
  conformidade. Duplamente ocupado.
- **Ângulo "autônomo/pessoa física" testado (FR e DE) — não abre porta.** As mesmas
  ferramentas (Kamenski-Logistik, simuladores TICPE) já atendem tanto frota quanto
  autônomo/auto-entrepreneur — não há segmento solo desprotegido.

**VEREDITO ATUALIZADO: Alemanha (trucking) é o candidato que sobra de pé.** França
perde força pela âncora ter concorrente oficial do governo. Agricultura descartada.
**Próximo passo real:** Arthur abrir o google.de pessoalmente e checar os termos-cabeça
alemães com os próprios olhos (mesmo método usado pra descartar Airbnb) — a pesquisa
remota (WebSearch por trecho) já foi até o limite do que dá pra confirmar sem isso.
Build continua sendo decisão da Fase 4. Ver [[niche-selection-strategy-debate]].

## 6. Revisão pelas 15 alavancas de diferenciação + conselho (2026-07-31) — BUSCA ENCERRADA

Última sessão de nicho antes do portão da Fase 4. Arthur pediu pra reler todas as
tentativas sob 15 lentes de diferenciação (mais barato / rápido / melhor / fácil /
bonito / premium / personalizado / conveniente / nicho específico / jeito totalmente
diferente / sem uma etapa obrigatória / automatizado / assinatura / sob demanda /
grátis monetizando de outra forma). Resultado passado pelo llm-council.

### Alavancas que são arma real pra este projeto
Sem a etapa obrigatória (**o email gate** — a mais forte); mais rápido (site estático
vs. WordPress/SaaS pesada, e o Google mede isso); mais fácil (resposta acima da dobra,
defaults preenchidos); mais conveniente no mobile (**70% das nossas impressões são
celular**, posição 11,7 no celular vs 49 no desktop — e ferramenta B2B/governo costuma
ser péssima no telefone); grátis monetizando diferente.

### Alavancas que NÃO servem
Mais barato (já somos grátis, eles também — zero diferenciação); premium e assinatura
(contradizem a jogada de SEO grátis, são Fase 6); mais bonito (não afeta ranking);
personalizado e sob demanda (exigiriam conta/backend, proibido até a Fase 6); "melhor"
(vago demais, se decompõe nas outras).

### CORREÇÃO FACTUAL — França/TICPE
A tabela da §5 dizia "TICPE: só artigo/guia, ZERO calculadora encontrada". **Isso está
errado.** Checagem de 31/07 achou: simulador **oficial do governo**, público e sem
login, em `www3.impots.gouv.fr/simulateur/tinterc_remb/`, **mais** privados já rodando
(carburant.pro, lapauseinfo.fr). Pelo próprio filtro de tipo de concorrente, esse é o
pior caso possível: um órgão oficial cuja ferramenta **já é grátis e já é sem gate** —
não sobra nenhuma alavanca pra puxar. França confirmada morta, agora por motivo certo.

### Veredito final por nicho (todos encerrados até 15/09)
- **Alemanha (trucking)** — MORTA pelo portão de encaixe do operador: Arthur não lê SERP
  nem escreve copy em alemão, e o `CLAUDE.md` exige conteúdo em inglês. O passo prescrito
  na §5 (Arthur abrir o google.de pessoalmente) nunca aconteceu e agora não pode.
- **França/TICPE** — morta (ver correção acima).
- **Airbnb/STR** — morta. É o **único** caso de bloqueio real (tipo 6): o fosso da AirDNA/
  Mashvisor é o dado proprietário de aluguel por endereço, não a interface. Tirar o email
  gate deles não ajuda — sem o dado, nossa ferramenta fica pior, não melhor.
- **Vending machine** — morta, e nenhuma lente conserta: o problema nunca foi concorrência,
  foi volume (~50 buscas/mês em formato calculadora). Diferenciação não cria mercado.
- **Agricultura alemã** — fraca. O ângulo "independente, não sou fabricante" é real contra
  KWS/Yara, mas a âncora (Düngeverordnung) é conformidade legal obrigatória com ferramenta
  oficial. E cai no mesmo portão de idioma da Alemanha.

### O que o conselho pegou (llm-council, 5 conselheiros + peer review, 31/07)
- **4 dos 5 apontaram, sem combinar, que essa pesquisa não deveria estar acontecendo.**
  ~10 dos primeiros 13 dias de vida do site foram gastos caçando o 2º nicho, dentro de
  uma fase que proíbe exatamente isso.
- **O site está passando, não morrendo:** 372 impressões contra piso de 500 em 60 dias,
  e posição 12,18 já bate o critério de "top 20 em 90 dias". A correria respondia a uma
  crise que o dado não reportava.
- **A solução já estava escrita e foi abandonada:** o processo de 7 passos (DECISOES.md,
  22/07) já tinha o passo 2 de volume (mataria vending em 1h) e o passo 5 de "esse público
  aguenta pagar". Não faltava filtro novo — faltava usar o que já existia.
- **Terceira vez que a régua é afrouxada depois de uma leva de rejeições** (16/07, 22/07,
  31/07). Padrão registrado no DECISOES.md pra reconhecer se acontecer de novo.
- **Placar como sinal de viés:** 6 nichos testados, 5 seguiram mortos e exatamente 1
  ressuscitou — justo o mais recente em que havia tempo investido.
- **atacável ≠ rankeável:** tirar o email gate melhora conversão, não é sinal de ranking.
- **lead ≠ assinatura:** um gate prova que um time de vendas paga por aquele contato, não
  que o profissional assinaria US$5-15/mês.

**Decisão registrada no DECISOES.md (31/07):** filtro por tipo de concorrente adotado
**com 3 portões obrigatórios antes** (volume, capacidade de pagar, encaixe do operador);
"caçar email gate" rebaixado a critério de desempate; busca de nicho encerrada até 15/09.

---

## Pontos levantados pelo conselho (llm-council) que vale lembrar na Fase 4
- O gargalo real não é "qual nicho" — é que o haul-calc ainda não tinha dado nenhum
  quando isso foi analisado. Um 2º site antes de validar a tese é uma segunda aposta
  no escuro, não uma segunda fonte de renda.
- Risco identificado: domínio novo costuma levar 6-12 meses para sair do "sandbox"
  do Google — os critérios de morte de 60/90 dias podem ser cedo demais para
  condenar um nicho de fato viável. Vale reconsiderar essa janela se o haul-calc
  não mostrar nada aos 60 dias.
- A restrição mais importante e que nenhuma análise de nicho substitui: Arthur fica
  indisponível (intercâmbio 2026/2) — o modelo de manutenção quase-zero existe por
  causa disso, não é só preferência.
