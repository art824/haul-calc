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
