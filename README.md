# 🌤️ Monitor de Risco Climático - Brasil

Aplicação web standalone que monitora as **27 capitais brasileiras** e classifica cada uma por nível de risco (Perigo, Atenção, Seguro), combinando dados meteorológicos da Open-Meteo com **alertas oficiais do INMET**.

## 🚀 Como usar

**🌐 Acesse online:** [talitatech.github.io/clima-tempo-gen](https://talitatech.github.io/clima-tempo-gen/)

Ou localmente:

1. **Abra o arquivo** `index.html` em qualquer navegador moderno
2. Os dados carregam automaticamente — **sem necessidade de chave API**
3. Use os chips de filtro na barra de status para filtrar por nível de risco

### Interface

| Elemento | Função |
|----------|--------|
| 🔄 **Atualizar** | Recarrega os dados de todas as capitais |
| 🔴 **Perigo** / 🟡 **Atenção** / 🟢 **Seguro** | Chips clicáveis — filtram cidades pelo risco |
| 📋 **Total** | Contador informativo de todas as capitais |
| ⬆️ **Back to Top** | Botão flutuante que aparece ao rolar a página |
| ⏳ Loading central | Spinner exibido durante o carregamento inicial |

## 📡 APIs Utilizadas

### Open-Meteo (dados meteorológicos)
API pública, gratuita e sem necessidade de cadastro.

**Endpoint:** `https://api.open-meteo.com/v1/forecast`

**Dados coletados por capital:**
- Temperatura (°C)
- Umidade relativa (%)
- Velocidade do vento (km/h)
- Precipitação (mm)
- Código climático WMO

### INMET (alertas oficiais)
Alertas meteorológicos oficiais consumidos via RSS.

**Endpoint:** `https://apiprevmet3.inmet.gov.br/avisos/rss`

Os alertas são mapeados para as capitais por mesorregiões IBGE. Em caso de indisponibilidade do INMET, o sistema opera apenas com dados Open-Meteo (degradação graciosa).

## ⚠️ Classificação de Risco

A classificação final combina duas camadas:

1. **Alerta INMET ativo** → prioridade máxima
   - Alerta Vermelho/Laranja → **Perigo**
   - Alerta Amarelo → **Atenção**
2. **Classificação meteorológica** (fallback quando não há alerta)

### 🔴 Perigo
| Condição | Critério |
|----------|----------|
| Tempestade | Código WMO ≥ 95 |
| Calor extremo | Temperatura > 38°C |
| Chuva forte | Código 65, 82 ou 67 |
| Precipitação intensa | > 50mm |

### 🟡 Atenção
| Condição | Critério |
|----------|----------|
| Calor elevado | Temperatura > 32°C |
| Ventos fortes | > 50 km/h |
| Umidade baixa | < 30% |

### 🟢 Seguro
Condições dentro da normalidade. Exibe seção informativa "✅ Condições estáveis" no card.

## 📂 Estrutura

```
clima-tempo/
├── index.html       # Estrutura HTML
├── css/
│   └── style.css    # Estilos (tema escuro, responsivo)
├── js/
│   └── app.js       # Lógica (APIs, classificação, filtros, UI)
└── README.md
```

## 🛠️ Stack

- **HTML5** semântico
- **CSS3** com variáveis, Grid, Flexbox e media queries
- **JavaScript ES6+** (async/await, fetch, DOMParser)
- **Font Awesome 6** via CDN
- **Zero frameworks** — código puro e leve

## 📱 Responsivo

| Dispositivo | Grid de cards |
|-------------|--------------|
| Desktop (≥ 1024px) | 3 colunas |
| Tablet (≥ 640px) | 2 colunas |
| Mobile (< 480px) | 1 coluna |

Funcionalidades adaptadas:
- Título dobra linha sem hífen no mobile
- Botão Back to Top reposicionado em telas maiores
- Chips de filtro com wrap para caber em qualquer largura

## 🔄 Atualização automática

Os dados são atualizados automaticamente a cada **5 minutos**.

---

<sub>Dados meteorológicos por [Open-Meteo](https://open-meteo.com/) • Alertas oficiais pelo [INMET](https://www.inmet.gov.br/) • Design dark mode • Desenvolvido com IAs</sub>
