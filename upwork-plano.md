# upwork-plano.md — auditoria da plataforma e plano de lances

Escrito em 2026-08-10, depois de auditoria direta na plataforma logada (não pesquisa
sobre ela) e três rodadas do llm-council. Substitui a seção "Connects" do
`upwork-perfil.md`, que estava baseada em suposição.

---

## O que foi verificado direto na plataforma

**Saldo:** 150 Connects (50 de crédito de novo membro + 100 comprados).
Recompra sai a ~US$15 por 100 — **a escassez é mole**, não é decisão de tiro único.

### Lado da oferta

| Busca | Freelancers | Observação |
|---|---|---|
| `landing page` | **10.000+** | os 10 primeiros têm **99-100% de Job Success Score** |
| `GEO AEO AI search optimization` | 2.513 | 4x menos denso |

**Arthur tem JSS zero, então não aparece na busca de talento.** Dar lance é o único caminho.

Os primeiros colocados em landing page **não são generalistas** — são especialistas de
plataforma: *"Kajabi Expert"* (14.800 horas, 500 projetos), *"Shopify Expert | Gempages,
Pagefly, CRO"*. Preços dos 10 primeiros: $10, $15, $18, $20, $20, $20, $30, $45, $55, $65.

Em GEO/AEO os concorrentes são **SEO barato com a sigla enfiada no título**: $7-10/h com
ganho vitalício de **$83 e $400**. Ninguém construiu prática ali.

### Lado da demanda

As vagas mais recentes de "landing page" pedem **WordPress, Wix Studio, Squarespace,
GoHighLevel, Lofty, WooCommerce**. Arthur constrói site estático em Astro — **quase
ninguém pede isso**.

Filtrando preço fechado + pagamento verificado + menos de 10 propostas, os orçamentos são
**$5, $5, $5, $10, $10, $15, $20, $100, $200**. As vagas de $200-1.000 têm **20-50 propostas**.

**1.170 vagas verificadas com menos de 10 propostas. Destas, 249 são de clientes que
nunca contrataram ninguém.**

> **CORREÇÃO (10/08):** esse número é de outro filtro e não serve como alvo. Refiltrando
> pelo que o Arthur de fato faria — Wix/Squarespace/WordPress + verificado + **menos de 5
> propostas** — dá **302 vagas, das quais 49 de cliente sem histórico de contratação.**
> Não 249. Repeti um número bruto sem filtrar por intenção, que é o aprendizado 6 do
> CLAUDE.md sendo violado de novo.

> **CORREÇÃO 2 (10/08): as vagas de US$5 não são golpe.** Eu tinha mandado pular, repetindo
> asserção de um conselheiro sem verificar. Olhando os clientes que postam a US$5:
> `$2K+ gastos, nota 5,0, pagamento verificado`. **O "$5" é o campo de orçamento preenchido
> no mínimo, não o preço real.** Regra correta: julgar pelo histórico de gasto do cliente e
> pelo texto da vaga, nunca pelo número postado.

> **CORREÇÃO 3 (10/08): existe vaga boa com poucas propostas.** Encontrei US$500 fixo,
> cliente verificado com US$6K gastos e nota 5,0, **menos de 5 propostas, postada há 1
> minuto**. Meu achado anterior ("vaga com poucas propostas é sempre US$5-20") era retrato
> de um instante, não padrão. O que decide não é o orçamento — é **quão recente é a vaga**.

### A vaga de GEO que parecia a melhor — e por que caiu

*"Creative GEO/AIO specialist — UK Psychotherapy Platform"*, cliente com $70K+ gastos,
nota 4,8, pagamento verificado. Parecia $500 fixo com 5-10 propostas.

**Lendo o texto completo: é US$500 POR MÊS, contrato mensal.** Pede "KPIs claros e
objetivos SMART alcançáveis em 3 meses", estratégia e não ajustes, nicho de saúde sensível
(terapia psicossexual), entendimento do mercado britânico. **Incompatível** — e é
exatamente o compromisso contínuo que o Arthur não quer.

**Velocidade:** a mesma vaga foi de 5-10 para **15-20 propostas em duas horas.**

**Não existe perfil especializado** disponível na conta — uma identidade só.

---

## A decisão (llm-council, rodada final)

### GEO sai do plano. Não adiado — fora.

O Contrarian identificou que **a Fase 3 não tinha destino**: as vagas boas de GEO são
retainers que o Arthur recusaria, e as disponíveis são moagem de $7-10/h, piores que as
vagas baratas da Fase 1. "Juntar JSS pra depois ir pro GEO" não leva a lugar nenhum.

E o mais importante — **era preferência minha, não dele**:

> *"O conselho fica importando uma ambição de GEO que o operador nunca declarou como
> urgente. Ele disse 'não quero um trabalho de US$200 agora', não 'me coloque em GEO'."*

### O que substitui

**JSS não é meio para um alvo — é o único ativo que compõe na plataforma.** Constrói por
opcionalidade. Isso bate com o objetivo declarado: US$10 agora, US$30 em algumas semanas.

### Regras de lance

| Regra | Valor |
|---|---|
| Propostas nesta leva | **15**, e para em 15 |
| Teto de orçamento | **US$30** — escrito antes de ser tentado |
| Piso | pular as de **US$5** (teste descartável ou golpe, não constroem JSS) |
| Filtro | pagamento verificado · menos de 10 propostas · **cliente sem histórico de contratação** · postada na última hora |
| Preço proposto | sempre **abaixo** do teto declarado pelo cliente |
| Cadência | rajadas a cada 30-45 min, **não** vigília contínua nem tudo de uma vez |
| Alertas | salvar a busca com os filtros e ligar notificação |

**Por que rajada e não vigília:** vaga boa enche em 2 horas, mas ninguém vence isso
olhando a aba o dia inteiro. Vence com filtro estreito o suficiente pra só chegar alerta
que vale a pena.

### ~~O teste de duas molduras~~ — CANCELADO em 10/08

Eu tinha proposto alternar duas molduras em 8 propostas e decidir pelo que respondesse.
**Não funciona.** Com taxa de resposta de 5-15%, cada braço produz **0,2 a 0,6 resposta**.
Isso não distingue nada — é A/B decorativo, exatamente o "rigor de processo disfarçando
ausência de teste" da regra 5. Uma moldura só, nas 15.

### O que de fato bloqueia, descoberto olhando o perfil publicado (10/08)

Eu estava escrevendo texto de proposta com o perfil furado. O que está faltando vale mais
que qualquer escolha de moldura:

| Item | Estado | Peso |
|---|---|---|
| **Portfólio** | **VAZIO** | o próprio Upwork diz: *"talent are hired **9x** more often if they've published a portfolio"* |
| **Identidade verificada (IDV)** | **não verificada** | *"clients trust and hire freelancers who have a visible IDV Badge"* |
| GitHub / StackOverflow | não vinculados | o Upwork promove como aumento de chance, e ele tem 3 repos reais |
| Título, taxa, skills | ainda os antigos | US$35/h e sem WordPress/Wix/Squarespace |
| Erro de gramática na bio | *"UFMG, the strongest architecture schoolS"* | sinaliza descuido logo no parágrafo da formação |
| Data do histórico | "September 2025 – Present" | os sites são de julho/agosto de 2026 |
| "Brazil time" | sumiu da bio publicada | era a linha que atacava o medo nº1 do comprador |

**Ordem correta: consertar os sete acima ANTES de gastar o primeiro Connect.** São todos
grátis e o portfólio sozinho vale mais que qualquer refinamento de texto.

Descoberta lateral útil: o perfil já declara **francês e espanhol conversacionais** além de
inglês fluente e português nativo. Isso não estava sendo usado em lugar nenhum.

### Critério de resultado, escrito ANTES (o erro dos critérios de morte, corrigido)

Definido em 10/08, imutável. Depois de **15 propostas enviadas**:

| Observação | Diagnóstico | Resposta |
|---|---|---|
| Menos de 3 visualizações | o problema é o **perfil** | parar de propor, refazer perfil |
| 3+ visualizações, zero resposta | o problema é a **proposta** | reescrever, não comprar mais Connects |
| Zero visualização E zero resposta | a hipótese do Upwork **cai** | não é ajuste, é canal errado |
| 1+ resposta, mesmo sem contrato | o funil **funciona** | seguir, ajustar preço e alvo |

Isso mede **resultado**, não atividade. "15 propostas enviadas" não é sucesso — é custo.

---

## O que NÃO fazer

- **Zero Connects em GEO nesta leva.** Sem exceção, sem "só essa que encaixa bem".
- Não tocar em vaga acima de US$30 — mesmo quando a matemática parecer boa.
- Não mandar as 15 de uma vez nem escrever proposta genérica às 23h por cansaço. Um
  cliente escreveu literalmente *"proposta pensada, feita por humano, é preferida a
  proposta genérica de IA. E eu sei diferenciar!"*
- Não gastar o resto dos 150 Connects em mais propostas da Fase 1 se as 15 não derem
  resposta. **Sem resposta em 15 é diagnóstico, não motivo pra repetir o movimento.**

---

## O que fica guardado para depois (não agora)

A vaga de GEO recusada deixou uma coisa valiosa: **o comprador descreveu o entregável
com as próprias palavras** — *"validar lacunas de conteúdo com evidência real em vez de
achismo"*, *"mecânica de citação específica de motor de IA"*, *"ser honesto sobre o que dá
e o que não dá pra medir nesse espaço"*.

Isso é uma especificação de produto, e o Arthur tem o artefato que bate com ela (920
impressões, 1 clique, AI Overview testado em 7 consultas de 2 nichos). A versão viável
seria tirar a parte de retainer e vender só a produção de evidência como entregável
fechado e pequeno — possivelmente via Project Catalog, que é vitrine de preço fixo sem
negociação e encaixa na preferência por contato mínimo.

**Não é o movimento de agora.** Fica registrado para quando existir JSS.
