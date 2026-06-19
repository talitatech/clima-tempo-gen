# 🌤️ Monitor de Risco Climático - Brasil

Aplicação web standalone que acompanha as condições climáticas das principais cidades brasileiras e classifica cada uma por nível de risco (Perigo, Atenção, Seguro).

## 🚀 Como usar

**🌐 Acesse online:** [talitatech.github.io/clima-tempo-gen](https://talitatech.github.io/clima-tempo-gen/)

Ou localmente:

1. **Abra o arquivo** `index.html` em qualquer navegador moderno
2. Os dados carregam automaticamente — **sem necessidade de chave API**
3. Use os filtros na barra de status para ver cidades por nível de risco

### Botões

| Botão | Ação |
|-------|------|
| 🔄 **Atualizar** | Recarrega os dados de todas as cidades |
| 🔴 **Perigo** | Filtra apenas cidades em situação de perigo |
| 🟡 **Atenção** | Filtra apenas cidades em atenção |
| 🟢 **Seguro** | Filtra apenas cidades seguras |
| 🏙️ **Total** | Mostra todas as cidades |

## 📡 API

Utiliza a [Open-Meteo](https://open-meteo.com/) — API pública, gratuita e sem necessidade de cadastro ou chave.

**Endpoint:** `https://api.open-meteo.com/v1/forecast`

**Dados coletados por cidade:**
- Temperatura (°C)
- Umidade relativa (%)
- Velocidade do vento (km/h)
- Precipitação (mm)
- Código climático WMO

## ⚠️ Classificação de Risco

### 🔴 Perigo (Vermelho)
| Condição | Critério |
|----------|----------|
| Tempestade | Código WMO ≥ 95 |
| Calor extremo | Temperatura > 38°C |
| Chuva forte | Código 65, 82 ou 67 |
| Precipitação intensa | > 50mm |

### 🟡 Atenção (Amarelo)
| Condição | Critério |
|----------|----------|
| Calor elevado | Temperatura > 32°C |
| Ventos fortes | > 50 km/h |
| Umidade baixa | < 30% |

### 🟢 Seguro (Verde)
Condições dentro da normalidade.

## 📂 Estrutura

```
clima-tempo/
├── index.html       # Estrutura HTML
├── css/
│   └── style.css    # Estilos (tema escuro, responsivo)
├── js/
│   └── app.js       # Lógica (API, classificação, filtros)
└── README.md
```

## 🛠️ Stack

- **HTML5** semântico
- **CSS3** com variáveis, Grid e Flexbox
- **JavaScript ES6+** (async/await, fetch)
- **Font Awesome 6** via CDN
- **Zero frameworks** — código puro e leve

## 📱 Responsivo

| Dispositivo | Grid |
|-------------|------|
| Desktop | Múltiplas colunas (auto-fill) |
| Tablet | 2 colunas |
| Mobile | 1 coluna |

## 🔄 Atualização automática

Os dados são atualizados automaticamente a cada **5 minutos**.

---

<sub>Dados fornecidos por [Open-Meteo](https://open-meteo.com/) • Design dark mode com paleta Slate</sub>
