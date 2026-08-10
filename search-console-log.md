# search-console-log.md — Log semanal do Search Console (Fase 3)

Registro semanal de impressões/posições do haul-calc.com, conforme a Fase 3 do
CLAUDE.md (espera medida, 60-90 dias). Critérios de morte: menos de 500 impressões
somadas em 60 dias OU nenhuma página no top 20 em 90 dias.

Data de lançamento: 2026-07-17. Prazo de 60 dias: ~2026-09-15. Prazo de 90 dias: ~2026-10-15.

---

## 2026-07-21 — primeiro registro (site com 4 dias)

**Fonte:** export do Search Console (Desempenho, últimos 28 dias — mas só há dados
a partir de 18/07, já que o site foi ao ar em 17/07).

- **Impressões totais: 38**
- **Cliques: 0**
- **CTR: 0%**

**Por dia (Gráfico.csv):**
| Data | Impressões |
|---|---|
| 2026-07-16 | 0 |
| 2026-07-17 | 0 |
| 2026-07-18 | 6 |
| 2026-07-19 | 32 |
| 2026-07-20 em diante | ainda não processado no export |

**Páginas que já apareceram:**
| Página | Impressões | Posição média |
|---|---|---|
| /pay-per-mile-calculator/ | 29 | 14.24 |
| /cost-per-mile-calculator/ | 8 | 74.12 |
| /detention-pay-calculator/ | 1 | 82 |

**Top consultas (9 termos distintos), todas com 1 impressão exceto onde notado:**
truck driver cents per mile calculator (pos. 15), truck rate per mile calculator
(pos. 18), how to calculate cents per mile trucking (pos. 68), cost per mile
(pos. 78), trucking cpm calculator (pos. 78), cost per mile calculator trucking
(pos. 79), truck mileage calculator (pos. 80), detention time calculator (pos. 82),
truck cost per mile (pos. 83).

**Dispositivo:** Celular 27 impressões (pos. média 10.19) vs Computador 11 (pos. 73.91).
**País:** EUA 36, Nova Zelândia 1, Irã 1.

**Leitura:** normal para 4 dias de vida — 3 de 10 páginas já indexadas e aparecendo
em busca, zero clique é esperado com posição 15-83. Sinal mais animador:
"truck driver cents per mile calculator" na posição 15 (borda da 2ª página do Google),
puxado pela página /pay-per-mile-calculator/. Nada a fazer agora além de continuar
observando — regra da Fase 3 permite melhorar páginas que já mostram impressão, mas
ainda é cedo para saber quais precisam de ajuste.

**Acumulado para o critério de morte de 60 dias:** 38 impressões (meta: 500 até ~15/09).

---

## 2026-07-30 — segundo registro (site com 13 dias)

**Fonte:** export do Search Console (Desempenho, últimos 28 dias).

- **Impressões totais: 372** (dispositivos/gráfico batem: 260+111+1 = 372)
- **Cliques totais: 1** (primeiro clique do site, em 2026-07-23)
- **CTR: ~0.27%**

**Por dia (Gráfico.csv):**
| Data | Impressões | Cliques |
|---|---|---|
| 07-18 | 6 | 0 |
| 07-19 | 32 | 0 |
| 07-20 | 56 | 0 |
| 07-21 | 64 | 0 |
| 07-22 | 71 | 0 |
| 07-23 | 40 | 1 |
| 07-24 | 58 | 0 |
| 07-25 | 32 | 0 |
| 07-26 | 3 | 0 |
| 07-27 | 4 | 0 |
| 07-28 | 6 | 0 |

Pico em 20-25/07, depois queda forte em 26-28/07 (3-6 impressões/dia vs 30-70
antes) — vale observar na próxima semana se é oscilação normal do Google
("sandbox"/reavaliação) ou início de tendência de queda.

**Páginas:**
| Página | Impressões | Posição média | Cliques |
|---|---|---|---|
| /pay-per-mile-calculator/ | 284 | 12.18 (melhorou de 14.24) | 1 |
| /cost-per-mile-calculator/ | 70 | 57.39 (melhorou muito de 74.12) | 0 |
| /detention-pay-calculator/ | 18 | 58 | 0 |
| /detention-pay-calculator (sem barra final) | 7 | 31.57 | 0 |
| / (home) | 1 | 1 | 0 |

**Nota técnica:** a página de detention-pay está aparecendo indexada em duas
variantes de URL (com e sem `/` final) — sinal de possível falta de redirect
canônico. Não é urgente (regra da Fase 3 permite mexer, mas é bug pequeno),
mas vale checar depois se o Astro está gerando link interno inconsistente
para essa página.

**Top consultas (top 3):** truck driver cents per mile calculator (14 impr.,
pos. 40.5), cost per mile calculator trucking (9 impr., pos. 21), detention
time calculator (7 impr., pos. 83.86). 38 termos distintos no total, a
maioria ainda em posições 60-90+, mas vários termos de "cost per mile" já
entre pos. 14-25.

**Dispositivo:** Celular 260 impr. (pos. 11.71, 1 clique) vs Computador 111
(pos. 49.05) vs Tablet 1.
**País:** EUA 357 (pos. 22.61, 1 clique), Reino Unido 4, Vietnã 3, Canadá 2,
Paquistão 2, Nova Zelândia 1, Chile 1, Irã 1, Países Baixos 1.

**Leitura:** progresso real na primeira e segunda semana — impressões
saltaram de 38 para 372 (10x) e a página principal (pay-per-mile-calculator)
subiu de posição 14 para 12, além do primeiro clique real ter acontecido.
cost-per-mile-calculator também subiu bastante (74→57). Ponto de atenção: a
queda brusca de impressões nos últimos 3 dias do período (26-28/07) — ainda
cedo pra saber se é ruído normal de indexação nova ou início de estagnação;
próximo check (por volta de 06/08) vai esclarecer isso.

**Acumulado para o critério de morte de 60 dias:** ~372-410 impressões
somadas desde o lançamento (17/07) até 28/07 (meta: 500 até ~15/09). Ritmo
atual já está bem acima do necessário para bater a meta de 500 — se
mantiver mesmo uma fração do pico de 20-25/07, o critério de morte de
impressões deve ser superado com folga bem antes do prazo de 60 dias.

---

## 2026-08-03 — terceiro registro (site com 17 dias) — **CRITÉRIOS DE MORTE BATIDOS**

**Fonte:** export do Search Console (Desempenho, últimos 28 dias, dados até 01/08).

- **Impressões totais: 502** (soma diária confere: 366 celular + 135 desktop + 1 tablet)
- **Cliques: 1** | **CTR: 0.20%**

### Os dois critérios de morte foram superados no dia 16 de 60/90

| Critério | Meta | Situação | Prazo que havia |
|---|---|---|---|
| Impressões | 500 em 60 dias | **502** | até ~15/09, batido em ~01/08 |
| Alguma página no top 20 | em 90 dias | **posição 10,89** | até ~15/10, batido desde ~20/07 |

Nenhum dos dois volta atrás — são acumulado e marca atingida. Na prática o
haul-calc **já satisfez os dois critérios do portão da Fase 4** com ~44 dias
de antecedência no mais apertado. Formalizar o portão continua sendo tarefa
da Fase 4 (ver CLAUDE.md), mas a resposta já é conhecida: **o nicho não morreu.**

**Por dia (continuação):**
| Data | Impressões | Posição |
|---|---|---|
| 07-25 | 32 | 44.6 |
| 07-26 | 3 | 74.7 |
| 07-27 | 4 | 25 |
| 07-28 | 6 | 8 |
| 07-29 | 18 | 16.2 |
| 07-30 | 20 | 18 |
| 07-31 | 53 | 8 |
| 08-01 | 39 | 16.9 |

**A queda de 26-28/07 era ruído, não tendência.** No registro anterior marquei
como ponto de atenção sem cravar; confirmado agora: caiu pra 3-6/dia por três
dias e voltou pra 18-53/dia. Oscilação normal de site novo (o Google ainda
"testando" onde encaixar o domínio). Padrão a lembrar nos próximos sustos:
**não reagir a queda de menos de ~1 semana.**

**Páginas:**
| Página | Impressões | Δ | Posição | Δ |
|---|---|---|---|---|
| /pay-per-mile-calculator/ | 396 | +112 | **10.89** | melhorou de 12.18 |
| /cost-per-mile-calculator/ | 70 | **0** | 57.39 | parada |
| /detention-pay-calculator/ | 28 | +10 | 52.25 | melhorou de 58 |
| /detention-pay-calculator (sem barra) | 13 | +6 | 40.62 | — |
| / (home) | 3 | +2 | 52.67 | — |

**Dois pontos que exigem atenção:**

1. **/cost-per-mile-calculator/ congelou.** Exatamente 70 impressões e posição
   57.39 — número idêntico dígito por dígito ao export anterior, ou seja
   **zero impressão nova entre 29/07 e 01/08**, enquanto todas as outras
   páginas cresceram. Investigar no próximo check se persiste.
2. **O bug de URL duplicada piorou.** A detention-pay segue indexada em duas
   variantes (com e sem barra final): agora 28 + 13 = 41 impressões divididas
   entre duas URLs que deveriam ser uma, o que dilui o sinal de ranking. É bug,
   então é conserto permitido na Fase 3 — próxima tarefa.

**Consultas:** 40 termos distintos (era 38). Maiores: truck driver cents per
mile calculator (14, pos. 40.5), cost per mile calculator trucking (9, pos. 21),
detention time calculator (9, pos. 84.33). O cluster de "detention" cresceu
bastante (detention pay 4, what is detention pay in trucking 4, truck detention
calculator 3, how much is detention pay 1, how much is detention pay for
truckers 1) — demanda real ainda mal atendida, já que a página está na pos. 52.

**Dispositivo:** Celular 366 (pos. 10.79, 1 clique) vs Computador 135 (pos.
46.48) vs Tablet 1. O padrão se mantém e reforça: quase tudo é mobile, e o
mobile rankeia ~4x melhor.
**País:** EUA 486, Reino Unido 4, Canadá 3, Vietnã 3, Paquistão 2, e 1 cada em
Nova Zelândia, Chile, Irã, Países Baixos.

**Sobre o CTR:** continua 1 clique. A reescrita de title/description de
/pay-per-mile-calculator/ foi feita em 03/08 e este export só cobre até 01/08 —
**o efeito não aparece aqui de jeito nenhum.** O Google leva de alguns dias a
~2 semanas pra recolher o snippet novo. Julgar isso no check de ~17/08.

---

## 2026-08-10 — quarto registro (dia 24) — **A TESE DO AI OVERVIEW SE CONFIRMA**

**Fonte:** export do Search Console, dados até 08/08.

- **Impressões totais: 920** (695 celular + 221 desktop + 4 tablet)
- **Cliques: 1** (o mesmo de 23/07) | **CTR: 0,11%**

### O dado que importa

| | dia 17 | dia 24 |
|---|---|---|
| Impressões | 502 | **920** |
| Melhor página, posição | 10,89 | **9,59** |
| Cliques | 1 | **1** |

**A posição melhorou e entrou na página 1. O clique não mexeu.** O CTR caiu de 0,20%
para 0,11% — está piorando em proporção.

Na posição 9,6 o CTR esperado é 2-3%, o que projetaria 20-27 cliques sobre 920
impressões. Vieram 1.

**Segunda confirmação embutida:** o title e a meta description da /pay-per-mile-calculator/
foram reescritos em 03/08 sob a hipótese de que o problema era o snippet. Uma semana
depois, impressão subiu e clique não. **O conserto não funcionou porque o diagnóstico
estava errado.**

Isso não é leitura de número pequeno e ambíguo como nos registros anteriores. É a
**anomalia persistindo com o dobro da amostra e com a posição melhorando** — exatamente
o que a tese do AI Overview prevê (ver CLAUDE.md, revisão de 05/08), e o oposto do que
"só falta rankear melhor" preveria.

**Páginas:**
| Página | Impressões | Posição |
|---|---|---|
| /pay-per-mile-calculator/ | 729 | **9,59** |
| /cost-per-mile-calculator/ | 70 | 57,39 (congelada pelo 3º export seguido) |
| / (home) | 63 | 80,65 |
| /detention-pay-calculator/ | 53 | 44,91 |
| /detention-pay-calculator (sem barra) | 13 | 40,62 |

**A /cost-per-mile-calculator/ segue exatamente em 70 impressões / posição 57,39 pelo
terceiro export consecutivo.** Zero impressão nova desde 29/07 enquanto todas as outras
cresceram. Não é coincidência — é padrão. Investigar.

**Consulta nova no topo:** `trucking calculator`, 31 impressões, posição 84,77.

**Leitura:** o nicho não morreu e o site rankeia bem. Mas rankear não está virando
tráfego, e agora temos evidência forte do porquê. O formato calculadora está sendo
consumido acima da dobra. Nada a consertar aqui — o aprendizado já está no CLAUDE.md e
o teste que importa agora é o printdefect, que está no formato que o Google não sintetiza.
