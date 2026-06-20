const CIDADES = [
    { nome: 'Rio Branco',    lat: -9.9740,  lon: -67.8076 },
    { nome: 'Maceió',        lat: -9.6498,  lon: -35.7089 },
    { nome: 'Macapá',        lat: 0.0355,   lon: -51.0705 },
    { nome: 'Manaus',        lat: -3.1190,  lon: -60.0217 },
    { nome: 'Salvador',      lat: -12.9714, lon: -38.5014 },
    { nome: 'Fortaleza',     lat: -3.7172,  lon: -38.5433 },
    { nome: 'Brasília',      lat: -15.7975, lon: -47.8919 },
    { nome: 'Vitória',       lat: -20.3155, lon: -40.3128 },
    { nome: 'Goiânia',       lat: -16.6864, lon: -49.2643 },
    { nome: 'São Luís',      lat: -2.5387,  lon: -44.3025 },
    { nome: 'Cuiabá',        lat: -15.6010, lon: -56.0974 },
    { nome: 'Campo Grande',  lat: -20.4697, lon: -54.6201 },
    { nome: 'Belo Horizonte',lat: -19.9167, lon: -43.9345 },
    { nome: 'Belém',         lat: -1.4558,  lon: -48.4902 },
    { nome: 'João Pessoa',   lat: -7.1150,  lon: -34.8640 },
    { nome: 'Curitiba',      lat: -25.4290, lon: -49.2671 },
    { nome: 'Recife',        lat: -8.0476,  lon: -34.8770 },
    { nome: 'Teresina',      lat: -5.0920,  lon: -42.8033 },
    { nome: 'Rio de Janeiro',lat: -22.9068, lon: -43.1729 },
    { nome: 'Natal',         lat: -5.7945,  lon: -35.2110 },
    { nome: 'Porto Alegre',  lat: -30.0346, lon: -51.2177 },
    { nome: 'Porto Velho',   lat: -8.7619,  lon: -63.9039 },
    { nome: 'Boa Vista',     lat: 2.8235,   lon: -60.6758 },
    { nome: 'Florianópolis', lat: -27.5954, lon: -48.5482 },
    { nome: 'São Paulo',     lat: -23.5505, lon: -46.6333 },
    { nome: 'Aracaju',       lat: -10.9472, lon: -37.0731 },
    { nome: 'Palmas',        lat: -10.1841, lon: -48.3333 }
];

const CAPITAL_MESOREGIOES = {
    'Rio Branco':      ['Vale do Acre', 'Vale do Juruá'],
    'Maceió':          ['Leste Alagoano', 'Agreste Alagoano', 'Sertão Alagoano'],
    'Macapá':          ['Sul do Amapá', 'Norte do Amapá'],
    'Manaus':          ['Centro Amazonense', 'Norte Amazonense', 'Sul Amazonense', 'Sudoeste Amazonense'],
    'Salvador':        ['Metropolitana de Salvador'],
    'Fortaleza':       ['Metropolitana de Fortaleza', 'Norte Cearense', 'Jaguaribe'],
    'Brasília':        ['Distrito Federal'],
    'Vitória':         ['Central Espírito-santense', 'Noroeste Espírito-santense', 'Litoral Norte Espírito-santense', 'Sul Espírito-santense'],
    'Goiânia':         ['Sul Goiano', 'Centro Goiano'],
    'São Luís':        ['Norte Maranhense', 'Oeste Maranhense', 'Centro Maranhense', 'Leste Maranhense'],
    'Cuiabá':          ['Centro-Sul Mato-grossense', 'Norte Mato-grossense', 'Sudeste Mato-grossense', 'Sudoeste Mato-grossense'],
    'Campo Grande':    ['Centro Norte de Mato Grosso do Sul', 'Leste de Mato Grosso do Sul', 'Sudoeste de Mato Grosso do Sul', 'Pantanais Sul Mato-grossense', 'Centro-Sul Mato-grossense'],
    'Belo Horizonte':  ['Metropolitana de Belo Horizonte'],
    'Belém':           ['Metropolitana de Belém', 'Nordeste Paraense', 'Marajó', 'Sudeste Paraense', 'Sudoeste Paraense', 'Baixo Amazonas'],
    'João Pessoa':     ['Mata Paraibana', 'Agreste Paraibano', 'Sertão Paraibano', 'Borborema'],
    'Curitiba':        ['Metropolitana de Curitiba'],
    'Recife':          ['Metropolitana de Recife', 'Mata Pernambucana', 'Agreste Pernambucano', 'Sertão Pernambucano'],
    'Teresina':        ['Norte Piauiense', 'Centro-Norte Piauiense'],
    'Rio de Janeiro':  ['Metropolitana do Rio de Janeiro', 'Baixadas', 'Centro Fluminense', 'Norte Fluminense', 'Noroeste Fluminense', 'Sul Fluminense'],
    'Natal':           ['Leste Potiguar', 'Agreste Potiguar', 'Oeste Potiguar', 'Central Potiguar'],
    'Porto Alegre':    ['Metropolitana de Porto Alegre'],
    'Porto Velho':     ['Madeira-Guaporé', 'Leste Rondoniense'],
    'Boa Vista':       ['Norte de Roraima', 'Sul de Roraima'],
    'Florianópolis':   ['Grande Florianópolis', 'Norte Catarinense', 'Sul Catarinense', 'Vale do Itajaí', 'Oeste Catarinense', 'Serrana'],
    'São Paulo':       ['Metropolitana de São Paulo', 'Macro Metropolitana Paulista', 'Vale do Paraíba Paulista'],
    'Aracaju':         ['Leste Sergipano', 'Agreste Sergipano', 'Sertão Sergipano'],
    'Palmas':          ['Oriental do Tocantins', 'Ocidental do Tocantins']
};

const SEVERIDADE_INMET = {
    'Perigo Potencial': { level: 'warning', label: 'Alerta Amarelo', cor: '#f59e0b' },
    'Perigo':           { level: 'danger',  label: 'Alerta Laranja', cor: '#f97316' },
    'Grande Perigo':    { level: 'danger',  label: 'Alerta Vermelho', cor: '#ef4444' }
};

let estado = {
    carregando: false,
    dados: [],
    filtroAtivo: 'all'
};

const dom = {
    error: document.getElementById('errorMessage'),
    errorText: document.getElementById('errorText'),
    cardsGrid: document.getElementById('cardsGrid'),
    btnRefresh: document.getElementById('btnRefresh'),
    loadingCentral: document.getElementById('loadingCentral'),
    countDanger: document.getElementById('countDanger'),
    countWarning: document.getElementById('countWarning'),
    countSuccess: document.getElementById('countSuccess'),
    countTotal: document.getElementById('countTotal'),
    statusItems: document.querySelectorAll('.status-item[data-filter]')
};

const WMO_ICONS = {
    0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
    45: '🌫️', 48: '🌫️',
    51: '🌦️', 53: '🌦️', 55: '🌦️',
    56: '🌦️', 57: '🌦️',
    61: '🌧️', 63: '🌧️', 65: '🌧️',
    66: '🌧️', 67: '🌧️',
    71: '❄️', 73: '❄️', 75: '❄️',
    77: '❄️',
    80: '🌦️', 81: '🌦️', 82: '🌦️',
    85: '❄️', 86: '❄️',
    95: '⛈️', 96: '⛈️', 99: '⛈️'
};

const WMO_DESC = {
    0: 'Céu limpo', 1: 'Predom. limpo', 2: 'Parcialmente nublado', 3: 'Encoberto',
    45: 'Nevoeiro', 48: 'Nevoeiro congelante',
    51: 'Garoa fraca', 53: 'Garoa moderada', 55: 'Garoa forte',
    56: 'Garoa congelante', 57: 'Garoa congelante',
    61: 'Chuva fraca', 63: 'Chuva moderada', 65: 'Chuva forte',
    66: 'Chuva congelante', 67: 'Chuva congelante',
    71: 'Neve fraca', 73: 'Neve moderada', 75: 'Neve forte',
    77: 'Grãos de neve',
    80: 'Pancadas fracas', 81: 'Pancadas moderadas', 82: 'Pancadas fortes',
    85: 'Pancadas de neve', 86: 'Pancadas de neve',
    95: 'Tempestade', 96: 'Tempestade c/ granizo', 99: 'Tempestade c/ granizo'
};

function getIcon(code) {
    return WMO_ICONS[code] || '🌤️';
}

function getDesc(code) {
    return WMO_DESC[code] || 'Desconhecido';
}

function getRiskLabel(risco) {
    const mapa = { danger: 'Perigo', warning: 'Atenção', success: 'Seguro' };
    return mapa[risco] || 'Seguro';
}

function getRiskClass(risco) {
    return risco;
}

function classificarRisco(temp, umidade, vento, precipitacao, weatherCode) {
    const razoes = [];

    if (weatherCode >= 95) razoes.push('Tempestade em curso');
    if (temp > 38) razoes.push(`Calor extremo (${Math.round(temp)}°C)`);
    if (weatherCode === 65 || weatherCode === 82 || weatherCode === 67) razoes.push('Chuva forte');
    if (precipitacao > 50) razoes.push(`Precipitação intensa (${precipitacao}mm)`);

    if (razoes.length > 0) {
        return { level: 'danger', reason: razoes.join('. ') };
    }

    if (temp > 32) razoes.push(`Calor elevado (${Math.round(temp)}°C)`);
    if (vento > 50) razoes.push(`Ventos fortes (${vento} km/h)`);
    if (umidade < 30) razoes.push(`Umidade baixa (${umidade}%)`);

    if (razoes.length > 0) {
        return { level: 'warning', reason: razoes.join('. ') };
    }

    return { level: 'success', reason: 'Condições normais' };
}

function classificarRiscoFinal(temp, umidade, vento, precipitacao, weatherCode, alertas) {
    if (alertas && alertas.length > 0) {
        const temPerigo = alertas.some(a => {
            const nivel = SEVERIDADE_INMET[a.severidade];
            return nivel && nivel.level === 'danger';
        });
        if (temPerigo) {
            return { level: 'danger', reason: 'Alerta INMET ativo' };
        }
        return { level: 'warning', reason: 'Alerta INMET ativo' };
    }
    return classificarRisco(temp, umidade, vento, precipitacao, weatherCode);
}

async function buscarClimaCidade(cidade) {
    const params = new URLSearchParams({
        latitude: cidade.lat,
        longitude: cidade.lon,
        current: 'temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m',
        timezone: 'auto'
    });

    const url = `https://api.open-meteo.com/v1/forecast?${params}`;
    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error(`Erro HTTP ${resposta.status}`);
    }

    const dados = await resposta.json();
    const current = dados.current;

    return {
        nome: cidade.nome,
        temp: current.temperature_2m,
        humidity: current.relative_humidity_2m,
        wind: Math.round(current.wind_speed_10m),
        precipitation: current.precipitation || 0,
        weatherCode: current.weather_code,
        icon: getIcon(current.weather_code),
        condition: getDesc(current.weather_code),
        time: current.time
    };
}

async function buscarTodasCidades() {
    const resultados = [];
    const erros = [];

    const lote = 5;
    for (let i = 0; i < CIDADES.length; i += lote) {
        const batch = CIDADES.slice(i, i + lote);
        const promises = batch.map(c =>
            buscarClimaCidade(c)
                .then(r => resultados.push(r))
                .catch(err => erros.push({ cidade: c.nome, erro: err.message }))
        );
        await Promise.all(promises);
        await new Promise(resolve => setTimeout(resolve, 300));
    }

    return { dados: resultados, erros, total: CIDADES.length, sucesso: resultados.length, falhas: erros.length };
}

async function buscarAlertasINMET() {
    const url = 'https://apiprevmet3.inmet.gov.br/avisos/rss';
    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error(`INMET HTTP ${resposta.status}`);
    }

    const xml = await resposta.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, 'text/xml');
    const items = doc.querySelectorAll('item');
    const alertas = [];
    const agora = new Date();

    items.forEach(item => {
        const alerta = extrairDadosAlerta(item);
        if (alerta && alerta.fim > agora) {
            alertas.push(alerta);
        }
    });

    return alertas;
}

function extrairDadosAlerta(item) {
    try {
        const descricaoHTML = item.querySelector('description')?.textContent || '';
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(descricaoHTML, 'text/html');
        const linhas = htmlDoc.querySelectorAll('table tr');
        const dados = {};

        linhas.forEach(tr => {
            const th = tr.querySelector('th')?.textContent?.trim();
            const td = tr.querySelector('td')?.textContent?.trim();
            if (th && td) dados[th] = td;
        });

        const evento = dados['Evento'] || '';
        const severidade = dados['Severidade'] || '';
        const descricao = dados['Descrição'] || '';
        const areaRaw = dados['Área'] || '';
        const area = areaRaw.replace(/^Aviso para as Áreas:\s*/i, '');
        const inicioStr = dados['Início'] || '';
        const fimStr = dados['Fim'] || '';

        const inicio = new Date(inicioStr.replace(' ', 'T'));
        const fim = new Date(fimStr.replace(' ', 'T'));

        if (isNaN(inicio.getTime()) || isNaN(fim.getTime())) return null;

        const mapeado = SEVERIDADE_INMET[severidade];

        return {
            evento,
            severidade,
            descricao,
            area,
            inicio,
            fim,
            level: mapeado ? mapeado.level : 'warning',
            label: mapeado ? mapeado.label : severidade,
            cor: mapeado ? mapeado.cor : '#f59e0b',
            orgao: 'INMET'
        };
    } catch (e) {
        console.warn('Erro ao processar alerta INMET:', e);
        return null;
    }
}

function mapearAlertasParaCapitais(alertas) {
    const mapa = {};
    CIDADES.forEach(c => { mapa[c.nome] = []; });

    alertas.forEach(alerta => {
        if (!alerta.area) return;
        CIDADES.forEach(c => {
            const regioes = CAPITAL_MESOREGIOES[c.nome] || [];
            const corresponde = regioes.some(r =>
                alerta.area.toLowerCase().includes(r.toLowerCase())
            );
            if (corresponde) {
                mapa[c.nome].push(alerta);
            }
        });
    });

    return mapa;
}

function combinarResultados(dadosMeteo, alertasPorCapital) {
    return dadosMeteo.map(item => {
        const alertas = alertasPorCapital[item.nome] || [];
        const classificacao = classificarRiscoFinal(
            item.temp,
            item.humidity,
            item.wind,
            item.precipitation,
            item.weatherCode,
            alertas
        );
        return {
            ...item,
            risco: classificacao.level,
            riscoReason: classificacao.reason,
            alertas: alertas
        };
    });
}

function ordenarPorRisco(cidades) {
    const ordem = { danger: 0, warning: 1, success: 2 };
    return [...cidades].sort((a, b) => ordem[a.risco] - ordem[b.risco]);
}

function renderizar(resultado) {
    const grid = dom.cardsGrid;
    const dados = resultado.dados;

    if (dados.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-light);">
                <p style="font-size: 48px; margin-bottom: 16px;">🌧️</p>
                <h3>Nenhuma cidade carregada</h3>
                <p>Tente novamente mais tarde.</p>
            </div>
        `;
        return;
    }

    const ordenados = ordenarPorRisco(dados);

    const counts = {
        danger: dados.filter(d => d.risco === 'danger').length,
        warning: dados.filter(d => d.risco === 'warning').length,
        success: dados.filter(d => d.risco === 'success').length
    };

    dom.countDanger.textContent = counts.danger;
    dom.countWarning.textContent = counts.warning;
    dom.countSuccess.textContent = counts.success;
    dom.countTotal.textContent = dados.length;

    const filtrados = estado.filtroAtivo === 'all'
        ? ordenados
        : ordenados.filter(d => d.risco === estado.filtroAtivo);

    if (filtrados.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-light);">
                <p style="font-size: 48px; margin-bottom: 16px;">🔍</p>
                <h3>Nenhuma cidade em "${getRiskLabel(estado.filtroAtivo)}"</h3>
                <p>Clique em outro filtro para ver outras regiões.</p>
            </div>
        `;
        return;
    }

    let html = '';
    filtrados.forEach((item, index) => {
        const delay = index * 0.05;
        const dataHora = new Date(item.time).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });

        let alertaHTML = '';
        if (item.alertas && item.alertas.length > 0) {
            const alerta = item.alertas[0];
            const validoAte = alerta.fim.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
            alertaHTML = `
                <div class="card-alert" style="--alerta-cor: ${alerta.cor}">
                    <div class="card-alerta-header">
                        <span class="card-alerta-orgao"><i class="fas fa-exclamation-triangle"></i> ${alerta.orgao}</span>
                        <span class="card-alerta-severidade" style="color: ${alerta.cor}">${alerta.label}</span>
                    </div>
                    <div class="card-alerta-evento">${alerta.evento}</div>
                    <div class="card-alerta-descricao">${alerta.descricao}</div>
                    <div class="card-alerta-validade">Válido até ${validoAte}</div>
                </div>
            `;
        }

        html += `
            <div class="card" style="animation-delay: ${delay}s">
                <span class="badge ${getRiskClass(item.risco)}">${getRiskLabel(item.risco)}</span>
                <div class="card-city">${item.nome}</div>
                <div class="card-state">Brasil • ${dataHora}</div>
                <div class="card-weather">
                    <span class="temp">${Math.round(item.temp)}°C</span>
                    <span class="icon">${item.icon}</span>
                    <span class="condition">${item.condition}</span>
                </div>
                <div class="card-details">
                    <span class="detail"><i class="fas fa-tint"></i> ${item.humidity}%</span>
                    <span class="detail"><i class="fas fa-wind"></i> ${item.wind} km/h</span>
                    <span class="detail"><i class="fas fa-cloud-rain"></i> ${item.precipitation} mm</span>
                    <span class="detail"><i class="fas fa-water"></i> Cód: ${item.weatherCode}</span>
                </div>
                ${item.risco !== 'success' ? `<div class="card-reason"><i class="fas fa-info-circle"></i> ${item.riscoReason}</div>` : ''}
                ${alertaHTML}
                ${item.risco === 'success' ? `
                <div class="card-stable">
                    <div class="card-stable-header">Condições estáveis</div>
                    <div class="card-stable-line">Sem alerta INMET ativo</div>
                    <div class="card-stable-line">Temperatura, vento e chuva dentro da normalidade</div>
                </div>
                ` : ''}
            </div>
        `;
    });

    grid.innerHTML = html;

    if (resultado.falhas > 0) {
        const aviso = document.createElement('div');
        aviso.style.cssText = `
            grid-column: 1/-1;
            background: #3b2a06;
            border: 2px solid #a16207;
            border-radius: 12px;
            padding: 12px 20px;
            text-align: center;
            color: #fde68a;
            font-size: 14px;
        `;
        aviso.innerHTML = `
            ⚠️ ${resultado.falhas} cidade(s) não puderam ser carregadas.
            <button onclick="carregarDados()" style="background:none;border:none;color:#4a6cf7;cursor:pointer;font-weight:600;text-decoration:underline;">
                Tentar novamente
            </button>
        `;
        grid.prepend(aviso);
    }
}

function mostrarLoading(ativo) {
    estado.carregando = ativo;
    dom.btnRefresh.disabled = ativo;
    dom.btnRefresh.innerHTML = ativo
        ? '<i class="fas fa-spinner fa-spin"></i> Carregando...'
        : '<i class="fas fa-sync-alt"></i> Atualizar';

    dom.loadingCentral.classList.toggle('hidden', !ativo);
    if (ativo) {
        dom.cardsGrid.innerHTML = '';
        dom.error.classList.remove('active');
    }
}

function mostrarErro(mensagem) {
    dom.errorText.textContent = mensagem;
    dom.error.classList.add('active');
    dom.cardsGrid.innerHTML = '';
}

function esconderErro() {
    dom.error.classList.remove('active');
}

async function carregarDados() {
    if (estado.carregando) return;

    try {
        esconderErro();
        estado.filtroAtivo = 'all';
        dom.statusItems.forEach(item => {
            item.classList.toggle('active', item.dataset.filter === 'all');
        });
        mostrarLoading(true);

        const [resultadoMeteo, alertasINMET] = await Promise.all([
            buscarTodasCidades(),
            buscarAlertasINMET().catch(err => {
                console.warn('INMET indisponível, usando apenas dados meteorológicos:', err.message);
                return [];
            })
        ]);

        if (resultadoMeteo.dados.length === 0) {
            const msg = resultadoMeteo.erros[0]?.erro || 'Erro ao conectar com o servidor.';
            throw new Error(`Nenhuma cidade carregada. ${msg}`);
        }

        const alertasPorCapital = mapearAlertasParaCapitais(alertasINMET);
        const dadosCombinados = combinarResultados(resultadoMeteo.dados, alertasPorCapital);

        estado.dados = dadosCombinados;
        renderizar({ dados: dadosCombinados, falhas: resultadoMeteo.falhas });

        if (alertasINMET.length > 0) {
            console.log(`⚠️ ${alertasINMET.length} alertas INMET ativos`);
        }

        if (resultadoMeteo.falhas > 0) {
            console.warn(`${resultadoMeteo.falhas} cidades falharam:`, resultadoMeteo.erros);
        }
    } catch (erro) {
        console.error('Erro:', erro);
        mostrarErro(erro.message);
    } finally {
        mostrarLoading(false);
    }
}

function aplicarFiltro(filter) {
    estado.filtroAtivo = filter;
    dom.statusItems.forEach(item => {
        item.classList.toggle('active', item.dataset.filter === filter);
    });
    if (estado.dados.length > 0) {
        renderizar({ dados: estado.dados, falhas: 0 });
    }
}

dom.statusItems.forEach(item => {
    item.addEventListener('click', () => aplicarFiltro(item.dataset.filter));
    item.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') aplicarFiltro(item.dataset.filter);
    });
});

dom.btnRefresh.addEventListener('click', carregarDados);
carregarDados();
setInterval(carregarDados, 300000);

const btnTop = document.getElementById('btnTop');

window.addEventListener('scroll', () => {
    btnTop.classList.toggle('visible', window.scrollY > 300);
});

btnTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

console.log('🌤️ Monitor de Risco Climático - Capitais do Brasil (Open-Meteo + INMET)');
console.log(`📍 ${CIDADES.length} capitais configuradas`);
console.log('⚠️ Alertas INMET integrados via RSS oficial');
console.log('🔄 Atualização automática a cada 5 minutos');
