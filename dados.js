/* ============================================================
   CATÁLOGO ARKE — CONTEÚDO
   Tudo o que aparece no catálogo sai deste arquivo.
   Para atualizar: mudar textos/preços aqui e adicionar fotos na
   lista "fotos" de cada linha (arquivo dentro da pasta fotos/).
   Cada foto: { arquivo, legenda, selo } — "selo" é a etiqueta
   opcional que aparece sobre a foto (ex.: o nível N1, N2...).
   ============================================================ */
window.CATALOGO = {
  contato: {
    // Só números, com DDI e DDD. Ex.: "5551999998888". Vazio = botões de orçamento ficam ocultos.
    whatsapp: "5541987768486",
    instagram: "" // ex.: "arke.trofeus" (sem @). Vazio = não aparece.
  },

  /* ABA "COMPARE OS DETALHES"
     Cada grupo tem opções que o cliente clica para ver a diferença.
     Em cada opção: "foto" é o arquivo em fotos/ (vazio = só o desenho),
     "linhas" são os ids das linhas onde a opção aparece.
     O "id" de cada opção liga ao desenho animado — não mudar. */
  detalhes: [
    {
      id: "base", nome: "Base", inicial: "pedra",
      opcoes: [
        { id: "simples", nome: "Reta simples", descricao: "Uma chapa reta e fina, mais larga que o corpo, onde o troféu encaixa. Discreta, deixa o corpo em primeiro plano.", linhas: ["essencial"], foto: "" },
        { id: "dupla", nome: "Reta dupla", descricao: "A base reta com mais uma camada por cima, em degrau. Ganha altura e peso visual.", linhas: ["essencial"], foto: "" },
        { id: "pedra", nome: "Mármore", descricao: "Mármore preto São Gabriel: um bloco espesso de pedra escura, que dá peso e presença de peça nobre ao troféu. A etiqueta fica em pé, na frente do corpo.", linhas: ["especial"], foto: "" },
        { id: "pedra-frente", nome: "Mármore com etiqueta na base", descricao: "O mesmo mármore preto São Gabriel, com uma etiqueta menor aplicada na frente da pedra.", linhas: ["especial"], foto: "" },
        { id: "mdf-revestido", nome: "MDF revestido", descricao: "MDF revestido em preto brilhante, usinado e polido. Mais espesso que a base reta, pode levar um filete dourado na borda.", linhas: ["especial"], foto: "" },
        { id: "caixa", nome: "Caixa simples", descricao: "Base alta em formato de caixa, que eleva o troféu.", linhas: ["especial"], foto: "" },
        { id: "caixa-elemento", nome: "Caixa com friso", descricao: "Caixa com elemento: um friso metalizado corre pela parte de baixo da base.", linhas: ["especial", "premium"], foto: "" },
        { id: "caixa-sobrebase", nome: "Caixa com sobrebase", descricao: "Caixa com elemento: uma sobrebase fina vai por cima da caixa, na cor do troféu.", linhas: ["especial", "premium"], foto: "" },
        { id: "caixa-dupla", nome: "Caixa dupla", descricao: "Duas caixas sobrepostas em degrau. A de cima, mais estreita, leva a etiqueta na frente.", linhas: ["premium"], foto: "" },
        { id: "caixa-dupla-elemento", nome: "Caixa dupla com elemento", descricao: "A caixa dupla com frisos metalizados: um entre as duas caixas e outro na parte de baixo.", linhas: ["premium"], foto: "" },
        { id: "pedestal", nome: "Pedestal", descricao: "Um bloco maior embaixo, um vão discreto e uma chapa por cima, que parece flutuar sobre a base. A etiqueta fica em pé, na frente do corpo.", linhas: ["premium"], foto: "" },
        { id: "pedestal-frente", nome: "Pedestal com etiqueta na base", descricao: "A mesma base pedestal, com a etiqueta aplicada na frente do bloco maior.", linhas: ["premium"], foto: "" },
        { id: "sextavada", nome: "Sextavada", descricao: "Base de seis faces.", linhas: ["premium"], foto: "" },
        { id: "trapezoidal", nome: "Trapezoidal", descricao: "Laterais inclinadas, mais larga embaixo.", linhas: ["premium"], foto: "" }
      ]
    },
    {
      id: "corpo", nome: "Corpo", inicial: "1",
      opcoes: [
        { id: "1", nome: "1 lâmina", descricao: "Uma chapa de acrílico ou MDF recortada no contorno da arte.", linhas: ["essencial", "especial"], foto: "" },
        { id: "2", nome: "2 lâminas", descricao: "Duas chapas de acrílico em planos diferentes. O troféu ganha volume e profundidade.", linhas: ["especial", "premium"], foto: "" },
        { id: "3", nome: "3 lâminas", descricao: "Cerca de três chapas de acrílico mais espesso. É a composição das peças mais altas.", linhas: ["premium", "diamond"], foto: "" }
      ]
    },
    {
      id: "detalhe", nome: "Aplicação", inicial: "destaque",
      opcoes: [
        { id: "direto", nome: "Arte no corpo", descricao: "A arte vai aplicada diretamente no corpo do troféu.", linhas: ["essencial"], foto: "" },
        { id: "relevo", nome: "Relevo", descricao: "Uma peça colada diretamente sobre o corpo, o logo ou a base. Cria camadas.", linhas: ["especial", "premium", "diamond"], foto: "" },
        { id: "destaque", nome: "Destaque", descricao: "Uma peça afastada do corpo por um espaçador. Parece flutuar e projeta sombra.", linhas: ["especial", "premium", "diamond"], foto: "" }
      ]
    },
    {
      id: "acabamento", nome: "Acabamento", inicial: "polido",
      opcoes: [
        { id: "sem", nome: "Sem polimento", descricao: "As bordas ficam com o acabamento natural do corte.", linhas: ["essencial"], foto: "" },
        { id: "polido", nome: "Polimento completo", descricao: "Bordas da base e do corpo lisas e brilhantes, que refletem a luz.", linhas: ["especial", "premium", "diamond"], foto: "" }
      ]
    }
  ],

  /* ABAS DE PRODUTO (fora das linhas de troféus)
     Cada item vira uma aba no menu. Campos iguais aos das linhas.
     "semPreco: true" esconde o bloco de preço enquanto não houver valor.
     "cor" é a cor de destaque da aba. */
  produtos: [
    {
      id: "protect-cards",
      nome: "Protect Cards",
      rotulo: "Produto ARKE",
      cor: "#7CF0FF",
      chamada: "A peça que fica sobre as suas cartas, com a arte do seu evento.",
      descricao: "Peça compacta em acrílico, de 5 a 7 cm, com base também em acrílico e arte em DTF-UV. Um produto à parte das linhas de troféus.",
      preco: { de: "35,90" },
      precoRotulo: "Preço por unidade",
      precoNota: "",
      altura: "5 a 7 cm",
      ficha: [
        ["Corpo", "Acrílico 5 mm"],
        ["Base", "Acrílico"],
        ["Arte", "DTF-UV"],
        ["Embalagem", "Padrão"]
      ],
      niveis: [],
      semFotoTexto: "As fotos dos Protect Cards entram aqui em breve.",
      botao: "Orçar Protect Cards",
      fotos: [
        { arquivo: "fotos/protect-cards-55.jpg", legenda: "Protect Cards" },
        { arquivo: "fotos/protect-cards-56.jpg", legenda: "Protect Cards" },
        { arquivo: "fotos/protect-cards-57.jpg", legenda: "Protect Cards" },
        { arquivo: "fotos/protect-cards-58.jpg", legenda: "Protect Cards" },
        { arquivo: "fotos/protect-cards-59.jpg", legenda: "Protect Cards" },
        { arquivo: "fotos/protect-cards-60.jpg", legenda: "Protect Cards" }
      ]
    },
    {
      id: "medalhas", nome: "Medalhas", rotulo: "Produto ARKE", cor: "#E6BE5A",
      chamada: "Medalhas personalizadas para o seu evento.",
      descricao: "Medalhas em acrílico ou MDF, com relevos e impressão da arte do seu evento. Cada uma acompanha fita de cetim.",
      preco: { de: "16,90", ate: "55,90" }, precoRotulo: "Faixa de preço por medalha", precoNota: "", altura: "",
      ficha: [
        ["Material", "Acrílico ou MDF"],
        ["Tamanho", "6 a 12 cm de diâmetro"],
        ["Arte", "Relevos e impressão"],
        ["Fita", "Cetim, em cor única. Não fazemos fita personalizada"]
      ], niveis: [],
      semFotoTexto: "Modelos, medidas e fotos das medalhas entram aqui em breve.",
      botao: "Orçar medalhas", fotos: [
        { arquivo: "fotos/medalhas-37.jpg", legenda: "Medalhas" },
        { arquivo: "fotos/medalhas-38.jpg", legenda: "Medalhas" },
        { arquivo: "fotos/medalhas-39.jpg", legenda: "Medalhas" },
        { arquivo: "fotos/medalhas-40.jpg", legenda: "Medalhas" },
        { arquivo: "fotos/medalhas-41.jpg", legenda: "Medalhas" },
        { arquivo: "fotos/medalhas-42.jpg", legenda: "Medalhas" }
      ]
    },
    {
      id: "quadros", nome: "Quadros", rotulo: "Produto ARKE", cor: "#4FB2FF",
      chamada: "Quadros personalizados para o seu evento.",
      descricao: "Quadros de 30 x 20 cm, com relevos em acrílico e a arte do seu evento. Disponíveis com ou sem estojo personalizado.",
      preco: { de: "575" }, precoRotulo: "Quadro com estojo personalizado", precoNota: "Sem estojo, R$ 485.", altura: "",
      ficha: [["Tamanho", "30 x 20 cm"], ["Arte", "Relevos em acrílico"], ["Com estojo personalizado", "R$ 575"], ["Sem estojo", "R$ 485 (R$ 90 a menos)"]], niveis: [],
      aviso: "Precisa de outro tamanho? Fazemos quadros em outras medidas, sob consulta.",
      semFotoTexto: "Modelos, medidas e fotos dos quadros entram aqui em breve.",
      botao: "Orçar quadros", fotos: [
        { arquivo: "fotos/quadros-49.jpg", legenda: "Quadro" },
        { arquivo: "fotos/quadros-50.jpg", legenda: "Quadro" },
        { arquivo: "fotos/quadros-51.jpg", legenda: "Quadro" },
        { arquivo: "fotos/quadros-52.jpg", legenda: "Quadro" },
        { arquivo: "fotos/quadros-53.jpg", legenda: "Quadro" },
        { arquivo: "fotos/quadros-54.jpg", legenda: "Quadro" }
      ]
    },
    {
      id: "placas", nome: "Placas de homenagem", rotulo: "Produto ARKE", cor: "#BCC6DE",
      chamada: "Placas de homenagem personalizadas.",
      descricao: "Placa de homenagem em acrílico personalizada, entregue em estojo de veludo no tamanho padrão de 24 x 18 cm.",
      preco: { de: "290" }, precoRotulo: "Placa com estojo de veludo", precoNota: "No tamanho padrão de 24 x 18 cm.", altura: "",
      ficha: [["Placa", "Acrílico personalizado"], ["Estojo", "Veludo"], ["Tamanho padrão", "24 x 18 cm"]], niveis: [],
      aviso: "Precisa de outro tamanho? Fazemos placas de homenagem em outras medidas, sob consulta.",
      semFotoTexto: "Modelos, medidas e fotos das placas entram aqui em breve.",
      botao: "Orçar placas de homenagem", fotos: [
        { arquivo: "fotos/placas-43.jpg", legenda: "Placa de homenagem" },
        { arquivo: "fotos/placas-44.jpg", legenda: "Placa de homenagem" },
        { arquivo: "fotos/placas-45.jpg", legenda: "Placa de homenagem" },
        { arquivo: "fotos/placas-46.jpg", legenda: "Placa de homenagem" },
        { arquivo: "fotos/placas-47.jpg", legenda: "Placa de homenagem" },
        { arquivo: "fotos/placas-48.jpg", legenda: "Placa de homenagem" }
      ]
    },
    {
      id: "projetos-especiais", nome: "Projetos Especiais", rotulo: "Sob medida", cor: "#9C86FF",
      chamada: "Peças fora do catálogo, desenhadas sob medida.",
      descricao: "Demais tipos de projeto em acrílico, sob consulta e conforme a disponibilidade de agenda da produção.",
      preco: null, precoNota: "Cada projeto é orçado individualmente, conforme a agenda da produção.", altura: "",
      ficha: [["Material", "Acrílico"], ["Exemplos", "Displays de QR Code, placas de identificação, chaveiros, apliques e peças para mesa de poker"], ["Prazo", "Sob disponibilidade de agenda da produção"]], niveis: [],
      semFotoTexto: "Os projetos especiais entram aqui em breve.",
      botao: "Orçar um projeto especial", fotos: [
        { arquivo: "fotos/projetos-especiais-01.jpg", legenda: "Placas de identificação em acrílico" },
        { arquivo: "fotos/projetos-especiais-02.jpg", legenda: "Apliques recortados em acrílico" },
        { arquivo: "fotos/projetos-especiais-03.jpg", legenda: "Chaveiros em acrílico" },
        { arquivo: "fotos/projetos-especiais-04.jpg", legenda: "Chaveiro com relevo" },
        { arquivo: "fotos/projetos-especiais-05.jpg", legenda: "Placas de identificação em acrílico" },
        { arquivo: "fotos/projetos-especiais-06.jpg", legenda: "Peças para mesa de poker" },
        { arquivo: "fotos/projetos-especiais-07.jpg", legenda: "Display de QR Code" },
        { arquivo: "fotos/projetos-especiais-08.jpg", legenda: "Display de QR Code" },
        { arquivo: "fotos/projetos-especiais-09.jpg", legenda: "Placas de identificação em acrílico" },
        { arquivo: "fotos/projetos-especiais-10.jpg", legenda: "Displays de QR Code" },
        { arquivo: "fotos/projetos-especiais-11.jpg", legenda: "Placas de identificação em acrílico" },
        { arquivo: "fotos/projetos-especiais-12.jpg", legenda: "Displays de QR Code" }
      ]
    }
  ],

  linhas: [
    {
      id: "essencial",
      nome: "Essencial",
      chamada: "A porta de entrada. Troféu limpo, bem acabado e direto ao ponto.",
      descricao: "Para torneios regulares, ligas e premiações em volume. Corpo em MDF ou acrílico com a arte do seu evento, em um formato compacto que cabe em qualquer orçamento.",
      preco: { de: "110", ate: "215" },
      precoNota: "",
      altura: "12 a 25 cm",
      alturaCm: [12, 25],
      ficha: [
        ["Corpo", "MDF 6 mm ou acrílico de até 5 mm"],
        ["Base", "MDF ou acrílico, simples ou em dupla camada"],
        ["Arte", "Adesivo, impressão UV ou DTF"],
        ["Embalagem", "Padrão"]
      ],
      niveis: [
        ["N1", "12 a 16 cm", "MDF 6 mm", "MDF simples"],
        ["N2", "15 a 20 cm", "MDF 6 mm ou acrílico até 5 mm", "MDF ou acrílico simples"],
        ["N3", "18 a 25 cm", "MDF 6 mm ou acrílico até 5 mm", "MDF ou acrílico em dupla camada"]
      ],
      fotos: [
        { arquivo: "fotos/essencial-01.jpg", legenda: "Troféu da linha Essencial, nível N1", selo: "N1" },
        { arquivo: "fotos/essencial-02.jpg", legenda: "Troféu da linha Essencial, nível N1", selo: "N1" },
        { arquivo: "fotos/essencial-03.jpg", legenda: "Troféu da linha Essencial, nível N2", selo: "N2" },
        { arquivo: "fotos/essencial-04.jpg", legenda: "Troféu da linha Essencial, nível N2", selo: "N2" },
        { arquivo: "fotos/essencial-05.jpg", legenda: "Troféu da linha Essencial, nível N3", selo: "N3" },
        { arquivo: "fotos/essencial-06.jpg", legenda: "Troféu da linha Essencial, nível N3", selo: "N3" }
      ]
    },
    {
      id: "especial",
      nome: "Especial",
      chamada: "A mais pedida. Acrílico com destaques, base de presença e brilho de vitrine.",
      descricao: "O troféu que a maioria dos torneios escolhe. O corpo em acrílico ganha peças em destaque e relevo, a base sobe de nível e o polimento deixa as bordas lisas e brilhantes.",
      preco: { de: "250", ate: "590" },
      precoNota: "",
      altura: "25 a 40 cm",
      alturaCm: [25, 40],
      ficha: [
        ["Corpo", "Acrílico de 5 a 8 mm com destaques em 2 mm; até 2 lâminas no N3"],
        ["Base", "Mármore, MDF revestido ou caixa"],
        ["Arte", "Impressão UV e/ou DTF, aplicada nos destaques"],
        ["Polimento", "Nas bases (N1) ou completo, em base e corpo (N2 e N3)"],
        ["Embalagem", "Padrão"]
      ],
      niveis: [
        ["N1", "25 a 30 cm", "Acrílico 5 ou 6 mm + destaques", "Mármore ou MDF revestido"],
        ["N2", "28 a 34 cm", "Acrílico 6 mm + destaques", "Mármore, MDF revestido ou caixa simples"],
        ["N3", "32 a 40 cm", "Acrílico 6 ou 8 mm, até 2 lâminas + destaques", "Mármore, MDF revestido, caixa com elemento ou revestida"]
      ],
      fotos: [
        { arquivo: "fotos/especial-07.jpg", legenda: "Troféu da linha Especial, nível N1", selo: "N1" },
        { arquivo: "fotos/especial-08.jpg", legenda: "Troféu da linha Especial, nível N1", selo: "N1" },
        { arquivo: "fotos/especial-09.jpg", legenda: "Troféu da linha Especial, nível N2", selo: "N2" },
        { arquivo: "fotos/especial-10.jpg", legenda: "Troféu da linha Especial, nível N2", selo: "N2" },
        { arquivo: "fotos/especial-11.jpg", legenda: "Troféu da linha Especial, nível N3", selo: "N3" },
        { arquivo: "fotos/especial-12.jpg", legenda: "Troféu da linha Especial, nível N3", selo: "N3" }
      ]
    },
    {
      id: "premium",
      nome: "Premium",
      chamada: "Para o lugar mais alto do pódio. Várias lâminas, logo em relevo e polimento em tudo.",
      descricao: "Peças altas e robustas para o evento principal. Acrílico mais espesso em várias lâminas, bases elaboradas, logos com relevo além da impressão e espaço para impressão 3D e elementos interativos.",
      preco: { de: "675", ate: "1.400" },
      precoNota: "Faixa dos níveis N1 a N3. Peças N4, acima de 50 cm, sob consulta.",
      altura: "35 a 52 cm, ou mais",
      alturaCm: [35, 52],
      ficha: [
        ["Corpo", "Acrílico de 6 a 10 mm em 2 a 3 lâminas, com totens usinados ou MDF revestido"],
        ["Base", "Caixa revestida ou dupla, pedestal, trapezoidal ou sextavada"],
        ["Arte", "Impressão UV e/ou DTF, com logo em relevo"],
        ["Polimento", "Completo, sempre"],
        ["Extras", "Impressão 3D e elementos de interação"],
        ["Embalagem", "Caixa premium; estojo incluso a partir do N3"]
      ],
      niveis: [
        ["N1", "35 a 42 cm", "Acrílico 6 ou 8 mm, até 2 lâminas", "Caixa com elementos ou revestida"],
        ["N2", "40 a 46 cm", "Acrílico 6 ou 8 mm, 2 lâminas", "Caixa dupla, pedestal ou sextavada"],
        ["N3", "44 a 52 cm", "Acrílico 8 ou 10 mm, cerca de 3 lâminas", "Caixa dupla revestida, pedestal, trapezoidal ou sextavada"],
        ["N4", "Acima de 50 cm", "Acrílico 8 ou 10 mm, cerca de 3 lâminas", "Caixa dupla revestida, pedestal, trapezoidal ou sextavada"]
      ],
      fotos: [
        { arquivo: "fotos/premium-13.jpg", legenda: "Troféu da linha Premium, nível N1", selo: "N1" },
        { arquivo: "fotos/premium-14.jpg", legenda: "Troféu da linha Premium, nível N1", selo: "N1" },
        { arquivo: "fotos/premium-15.jpg", legenda: "Troféu da linha Premium, nível N2", selo: "N2" },
        { arquivo: "fotos/premium-16.jpg", legenda: "Troféu da linha Premium, nível N2", selo: "N2" },
        { arquivo: "fotos/premium-17.jpg", legenda: "Troféu da linha Premium, nível N3", selo: "N3" },
        { arquivo: "fotos/premium-18.jpg", legenda: "Troféu da linha Premium, nível N3", selo: "N3" },
        { arquivo: "fotos/premium-19.jpg", legenda: "Troféu da linha Premium, nível N4", selo: "N4" },
        { arquivo: "fotos/premium-20.jpg", legenda: "Troféu da linha Premium, nível N4", selo: "N4" },
        { arquivo: "fotos/premium-21.jpg", legenda: "Troféu da linha Premium, nível N4", selo: "N4" },
        { arquivo: "fotos/premium-22.jpg", legenda: "Troféu da linha Premium, nível N4", selo: "N4" },
        { arquivo: "fotos/premium-23.jpg", legenda: "Troféu da linha Premium, nível N4", selo: "N4" },
        { arquivo: "fotos/premium-24.jpg", legenda: "Troféu da linha Premium, nível N4", selo: "N4" }
      ]
    },
    {
      id: "diamond",
      nome: "Diamond",
      chamada: "O Premium com um diamante de vidro no centro da peça.",
      descricao: "Tudo o que o Premium entrega em material, polimento e composição, com acabamento completo em todos os elementos, um diamante de vidro na composição e estojo individual.",
      preco: { de: "900", ate: "2.500" },
      precoNota: "",
      altura: "Sob projeto",
      alturaCm: null,
      ficha: [
        ["Composição", "Padrão Premium com diamante de vidro"],
        ["Acabamento", "Completo em todos os elementos"],
        ["Embalagem", "Estojo individual"]
      ],
      niveis: [],
      fotos: [
        { arquivo: "fotos/diamond-25.jpg", legenda: "Troféu da linha Diamond" },
        { arquivo: "fotos/diamond-26.jpg", legenda: "Troféu da linha Diamond" },
        { arquivo: "fotos/diamond-27.jpg", legenda: "Troféu da linha Diamond" },
        { arquivo: "fotos/diamond-28.jpg", legenda: "Troféu da linha Diamond" },
        { arquivo: "fotos/diamond-29.jpg", legenda: "Troféu da linha Diamond" },
        { arquivo: "fotos/diamond-30.jpg", legenda: "Troféu da linha Diamond" }
      ]
    },
    {
      id: "lendaria",
      nome: "Lendária",
      chamada: "Peça única. Feita uma vez, para um evento, e lembrada por anos.",
      descricao: "Projetos totalmente personalizados, fora do formato base e corpo. Já saíram daqui um baú com mecanismo de abertura, pistão, moedas e maçaneta, e uma coleção Dragão com tubo e moedas.",
      preco: null,
      precoNota: "Cada projeto é orçado individualmente.",
      altura: "Sob projeto",
      alturaCm: null,
      ficha: [
        ["Formato", "Livre, desenhado do zero para o seu evento"],
        ["Exemplos", "Baú com mecanismo de abertura; Dragão com tubo e moedas"]
      ],
      niveis: [],
      fotos: [
        { arquivo: "fotos/lendaria-31.jpg", legenda: "Troféu da linha Lendária" },
        { arquivo: "fotos/lendaria-32.jpg", legenda: "Troféu da linha Lendária" },
        { arquivo: "fotos/lendaria-33.jpg", legenda: "Troféu da linha Lendária" },
        { arquivo: "fotos/lendaria-34.jpg", legenda: "Troféu da linha Lendária" },
        { arquivo: "fotos/lendaria-35.jpg", legenda: "Troféu da linha Lendária" },
        { arquivo: "fotos/lendaria-36.jpg", legenda: "Troféu da linha Lendária" }
      ]
    }
  ]
};
