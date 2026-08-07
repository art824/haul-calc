# CLAUDE.md — documento-mestre

## O que é este documento
Reescrito em **2026-08-06**. A versão anterior era o plano de uma aposta específica
("cluster de calculadoras grátis com tier pago") escrito em julho/2026, e as regras dela
continuaram governando depois que a tese caiu. Pior: somadas, aquelas proibições deixavam
**exatamente um movimento legal — site estático de SEO** — então toda vez que o Arthur
pedia alternativa, a resposta voltava sendo a mesma coisa. O documento estava funcionando
como escrito, e o escrito estava velho.

Agora ele separa três coisas que estavam misturadas: **o objetivo** (fixo), os
**aprendizados** (duráveis, valem pra qualquer aposta) e as **apostas** (substituíveis).
O histórico da tese antiga está no fim, marcado como histórico.

---

## O OBJETIVO — a única coisa fixa

Construir algo que **gere dinheiro** com **manutenção próxima de zero**.

- **US$100/mês já é lucro** para o Arthur (declarado por ele em 06/08). Mais é melhor,
  mas não use um número maior como régua — a régua antiga de R$5k/mês era suposição, nunca
  foi validada, e em 05/08 ela me fez argumentar que "a aritmética não fecha" quando com o
  número real ela fecha bem.
- **Manutenção quase zero é restrição inegociável**, não preferência. O Arthur fica
  indisponível por períodos longos (intercâmbio em 2026/2). Nada de servidor pra
  administrar, banco pra migrar, suporte a usuário, ou dependência que quebre sozinha.
- **Orçamento:** ~US$10-20 por aposta. Acima disso, precisa de justificativa explícita.

Tudo abaixo é meio. Se um meio parar de servir ao objetivo, troque o meio.

## Sobre o operador
- Arthur é dev web experiente, **leigo em SEO, marketing e negócios digitais**. Explique
  toda decisão técnica ou de negócio em linguagem simples antes de executar.
- Ele tem **capacidade de IA sobrando toda semana** e considera não usá-la o desperdício
  real. Contagem de páginas, de artefatos ou de tentativas **não é mais restrição de custo**.
- Peça a ele só o que exige ação humana: comprar domínio, criar conta, verificar
  propriedade, colar dado de ferramenta externa.
- Comunicação em português; **conteúdo de produto em inglês** (mercado global).
- Se ele pedir algo que contradiz este documento, aponte a contradição **uma vez** e
  explique o porquê. Se ele reafirmar, é decisão dele — execute.

---

## APRENDIZADOS DURÁVEIS

Custaram três semanas e dois sites. Valem para qualquer aposta, não só para sites.

### 1. Irredutibilidade decide se o Google manda tráfego
O que importa é **quantas incógnitas interdependentes precisam ser resolvidas antes de
existir resposta**:
- **Uma incógnita, fórmula única** → o AI Overview responde acima da dobra. Rankear não
  vira clique. Formato morto.
- **Várias incógnitas contingentes ao caso do usuário** → o Google não resume e entrega
  bloco de fórum, que é ele admitindo derrota. Formato que sobrevive **por enquanto**.

Medido em 7 consultas (05/08): AI Overview em **3/3** de calculadora, **0/4** de
diagnóstico. Em `truck driver cents per mile calculator` ele dá a fórmula, o exemplo
numérico e **oferece fazer a conta**.

### 2. Rankear bem e ser colhido viraram o mesmo evento
Impressão e posição medem se o Google te escolheu como **fonte** — e ele escolhe justamente
quem responde bem. O haul-calc bateu os dois critérios de morte produzindo **1 clique**.
Qualquer meta que não meça o resultado final (clique, venda, dinheiro) pode ser batida por
um fracasso.

### 3. Você não é dono da distribuição
Todo negócio precisa de produto, distribuição e cobrança. Produto nós temos. **Distribuição
é o buraco.** As opções: alugar do Google (o que fazíamos — e o dono está retomando o
prédio), alugar de outra plataforma com busca interna, comprar (sem orçamento), ou
construir audiência (exige trabalho contínuo que o Arthur não tem). Nunca assuma busca
orgânica como o único canal.

### 4. Ocupação não prevê fracasso
O haul-calc rankeou num nicho que já tinha ferramenta grátis em quase todo termo. Três
semanas foram gastas descartando candidatos por uma variável que o nosso próprio dado
mostra que não decide.

### 5. A estratégia de ferramenta grátis foi industrializada
18 de 19 nichos testados já tinham 6-12 ferramentas grátis, com as mesmas fazendas
multi-nicho recorrendo em verticais sem relação (`toolgrit`, `infinitycalculator`,
`usecalcpro`, `calcshed`, `workshopcalc`, `sparkshift`...). Regulação nova é farmeada em
~12 meses. **Onde o dado é livre e acessível por API, elas já estão lá.**

### 6. Volume bruto mente
Sempre deduplique permutações e separe por intenção antes de acreditar num total. Casos
reais: 56% do cluster de terraplanagem era um termo de dono de casa; 46% de uma rodada de
impressão 3D era compra de produto; o de espresso estava inflado por ordem de palavras e
por um aparelho diferente.

### 7. "Concorrência" do Keyword Planner é métrica de leilão de anúncio
Não é dificuldade orgânica. Já usei errado uma vez como ponto a favor.

---

## COMO AVALIAR UMA APOSTA NOVA

Portões na ordem, do mais barato ao mais caro. Reprovou num, para — não passe para o
seguinte procurando motivo para aprovar.

1. **Serve ao objetivo?** Caminho plausível até US$100/mês e manutenção quase zero depois
   de pronto. Se exige suporte a usuário ou trabalho semanal indefinido, morreu aqui.
2. **De quem é a distribuição, e qual o incentivo dele?** Google ganha respondendo ele
   mesmo. Marketplace ganha por comissão, então **precisa** te mandar comprador. Prefira
   donos cujo incentivo esteja alinhado com o seu.
3. **Se o canal for busca do Google: tem AI Overview na consulta-cabeça?** 30 segundos no
   google.com. Teria reprovado 2 dos nossos 3 sites. Se ele responde acima da dobra,
   posição nenhuma gera clique.
4. **Olhe o artefato real**, não proxy. Abra a plataforma, veja o que os primeiros
   colocados de fato entregam. CSV e resumo descrevem; só o artefato mostra o mecanismo.
5. **Encaixe do operador.** Idioma e habilidade que o Arthur tem de fato. Nicho que exige
   habilidade ausente não está disponível.
6. **Tamanho.** Deduplicado e separado por intenção, o mercado comporta o objetivo?
7. **A vantagem é acerto ou volume?** O ativo real do Arthur é **capacidade de IA para
   produzir coisa correta e profunda de forma consistente** — não "gerar muita coisa
   barato", que hoje todo mundo tem. Prefira onde estar certo é difícil e valorizado.

**Critérios de morte, definidos ANTES de construir, imutáveis.** Precisam incluir um piso
do **resultado final** (clique, venda, receita) — não só de métricas intermediárias.

---

## APOSTAS ATIVAS

Todas são sites estáticos de SEO. Isso é histórico, não obrigação: foi o que as regras
antigas permitiam. Apostas novas não precisam ter essa forma.

| Aposta | Estado | Formato | Prognóstico |
|---|---|---|---|
| **haul-calc.com** | dia 19 · 502 impressões · 1 clique · pos. 10,89 | calculadora | formato consumido pelo AI Overview. **Deixar rodando, não investir.** |
| **cutfillcalc.com** | lançado 04/08 | calculadora | idem, e cluster pequeno (~390 cliques/mês de teto) |
| **printdefect.com** | lançado 06/08 | **diagnóstico** | única no formato que o Google ainda não sintetiza |

Critérios de morte e racional de cada uma ficam no README do respectivo repo — não
duplicar aqui. Repos: `projeto automatic money` (haul-calc), `cutfill-calc`, `print-fixer`.

**Metas do printdefect** (a única aposta com futuro real):
- **05/10/2026** — ≥500 impressões **e CTR acima de 1%**. O CTR é o que importa: se
  rankear e ainda ficar em 0,2% como o haul-calc, o formato diagnóstico não salva nada e a
  abordagem inteira morre.
- **dez/2026** — o primeiro dólar, qualquer valor. RPM real com ad-block é incógnita total.
  **Solicitar AdSense antes da viagem** — a conta exige verificação de identidade e não dá
  pra fazer de fora.
- **dez/2027** — US$100/mês, provavelmente exigindo duas propriedades funcionando.

**REGRA DE FOOTPRINT (não-negociável):** identidade visual genuinamente diferente, **zero
links entre os sites do Arthur**, Search Console e analytics separados. Vários sites
templatizados do mesmo dono em infra compartilhada têm a assinatura estrutural das fazendas
de calculadora e podem ser classificados como rede de doorway.

---

## COMO TRABALHAR

- Commits pequenos e frequentes; **o repo é a memória**.
- `DECISOES.md` neste repo: toda decisão relevante com data e justificativa de 1 linha.
- Ao fim de cada sessão, atualize **STATUS ATUAL** abaixo. A próxima sessão começa lendo.
- Critérios de morte e ressalvas honestas ficam **no README de cada aposta** — inclusive as
  ressalvas desfavoráveis. Não apagar quando incomodarem.
- Se algo aqui se provar errado com dado real, proponha a mudança explicitamente, explique
  em linguagem simples, registre em `DECISOES.md`. Não mude silenciosamente.
- As seis regras de método (verificar cadeia causal, premissa decidida ≠ verificada, olhar
  o artefato, anomalia tem prioridade, rigor ≠ teste de premissa, correção repetida = ponto
  cego) estão em `~/.claude/CLAUDE.md` e valem para todo projeto.

---

## STATUS ATUAL

**2026-08-06.** Três sites no ar. Sessão de hoje: revisão da tese fundadora (era falsa),
lançamento do printdefect, e este documento reescrito.

- **printdefect.com no ar** — 14 páginas, diagnóstico de defeito de impressão 3D com
  identificação visual em SVG. Repo `art824/print-fixer`. Cluster medido ~230 mil
  buscas/mês. **Conferir que a propriedade do Search Console é `printdefect.com` tipo
  Domínio** (foi criada antes da troca de nome).
- **cutfillcalc.com** — Search Console feito. www não resolve; Arthur decidiu ignorar.
- **haul-calc.com** — ponto aberto: `/cost-per-mile-calculator/` ficou com exatamente 70
  impressões e posição 57,39 em dois exports seguidos (zero impressão nova entre 29/07 e
  01/08) enquanto as outras cresciam. Se persistir, investigar.
- **Próximo passo declarado pelo Arthur (06/08):** procurar uma aposta que **não seja site**
  — outra plataforma, outro modelo de distribuição. Aplicar os portões acima desde o começo,
  e olhar o artefato antes de teorizar.
- Cadência: export semanal dos três sites, registro nos logs separados de cada repo.

---

## HISTÓRICO — a tese original (jul/2026), mantida como registro

A aposta inicial foi: cluster de 10-40 mini-ferramentas grátis num nicho profissional, um
domínio, monetização futura por tier pago de US$5-15/mês. A justificativa era *"os AI
Overviews destruíram o tráfego de artigo, mas ferramenta sobrevive porque a IA descreve o
cálculo e não o executa."*

**Essa premissa era falsa e custou dois sites.** Foi tratada como decidida e nunca testada
por três semanas — o teste custava 30 segundos no google.com. Ver aprendizados 1 e 2, o
commit `0c87f03`, e a memória `verify-the-causal-chain-first`.

Regras revogadas junto com ela: tier pago freemium, alvo de R$5k/mês, estrutura de Fases
0→6, e a lista de "proibições permanentes" (blog/social como canal, login, API paga) — que
somadas tornavam site estático de SEO a única jogada legal.
