import { HomeStyle } from "../css/HomeStyle";
import aboutImage from '../assets/about-img.jpg';
import Shape from '../assets/AbstractShape.png';
import compartilhe from '../assets/compartilhee.jpg';
import header from '../assets/header.png';
import jogar from '../assets/jogar.jpg';
import logo from '../assets/logo-e.png';
import solucao from '../assets/solucao-img.png';

const Home = () => {
    return (
        <HomeStyle>
            <section className="home container" id="home">
                <div className="home-text">
                    <h1>Elevando o<br />patamar das<br />competições.</h1>
                    <a href="#" className="btn">Saiba Mais</a>
                </div>
            </section>

            <section className="about container" id="about">
                <div className="about-img">
                    <img src={aboutImage} alt="Imagem sobre o campeonato" />
                </div>
                <div className="about-text">
                    <span>Sobre</span>
                    <h2>O maior campeonato de <br />carros elétricos</h2>
                    <p>A Fórmula E enfrenta dificuldades em atrair e engajar um público amplo, devido à menor notoriedade em comparação com a Fórmula 1.</p>
                    <ul>
                        <li>- Muitos fãs desconhecem ou subestimam as corridas elétricas.</li>
                        <li>- Falta de plataformas interativas.</li>
                        <li>- Poucos recursos digitais dinâmicos.</li>
                        <li>- Falha na comunicação das inovações tecnológicas e ambientais para o público.</li>
                    </ul>
                    <a href="https://www.g20.org/pt-br/g20-social/grupos-de-engajamento/oceans-20" className="btn">Saiba Mais</a>
                </div>
            </section>

            <div className="grid-container">
                <div className="item2">A Fórmula E promove mobilidade sustentável com carros 100% elétricos.</div>
                <div className="grid-item item3">O campeonato visa diminuir a pegada de carbono no automobilismo.</div>
                <div className="item4">A Fórmula E impulsiona o desenvolvimento de tecnologias de energia limpa.</div>
                <div className="grid-item item5">As corridas acontecem em centros urbanos, promovendo o uso de transporte elétrico.</div>
                <div className="item6">O campeonato educa o público sobre a importância da sustentabilidade.</div>
                <div className="grid-item item7">A Fórmula E representa um novo paradigma para corridas mais ecológicas e responsáveis.</div>
            </div>

            <section className="about container">
                <div className="about-img2">
                    <img src={solucao} alt="Imagem da solução proposta" />
                </div>
                <div className="about-text2">
                    <span>Para você</span>
                    <h2>Nossa Solução</h2>
                    <p>Um site interativo com funcionalidades gamificadas <span>conteúdo informativo</span> e atualizações em tempo real.</p>
                    <h4>Jogo de corrida:</h4>
                    <p>- Um jogo de corrida permitirá aos usuários <span>experimentar virtualmente</span> a emoção de pilotar um carro da Fórmula E.</p>
                    <p>- Com <span>personalização</span> de veículos e sistema de ranking, o engajamento aumentará.</p>
                    <h4>Página de notícias:</h4>
                    <p>- Além do jogo, a página de notícias e eventos manterá os fãs informados com <span>atualizações constantes.</span></p>
                    <h4>A biblioteca de vídeos curtos fornecerá:</h4>
                    <p>Destaques de corridas.</p>
                    <p>Entrevistas.</p>
                    <p>Bastidores.</p>
                    <p>Documentários educacionais.</p>
                </div>
            </section>

            <div className="section acoes container" id="acoes">
                <div className="box">
                    <i className='bx bx-map-alt'></i>
                    <h3>Aumentar a base de fãs</h3>
                    <p>Especialmente entre jovens e entusiastas de tecnologia.</p>
                </div>
                <div className="box">
                    <i className='bx bx-map-alt'></i>
                    <h3>Maior fidelidade</h3>
                    <p>A oportunidade de interação manterá os usuários envolvidos.</p>
                </div>
                <div className="box">
                    <i className='bx bx-map-alt'></i>
                    <h3>Inovação e sustentabilidade</h3>
                    <p>Promover esses tópicos atrairá novos fãs e fortalecerá a imagem da Fórmula E.</p>
                </div>
            </div>

            <div className="sistema-recompensa">
                <h2>Sistema de Recompensas</h2>
                <p>Realize ações, jogue e compartilhe.<br /><span>Troque pontos acumulados por prêmios exclusivos.</span></p>
            </div>

            <div className="pontos-container container">
                <div className="box">
                    <img src={compartilhe} alt="Pessoa acessando o site" />
                    <h3>Compartilhe o link</h3>
                    <div className="conteudo">
                        <div className="text">
                            <h3>15 pontos</h3>
                            <p>Brasil, BR</p>
                        </div>
                        <div className="icon">
                            <i className='bx bx-been-here'></i>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <img src={logo} alt="Logotipo do aplicativo" />
                    <h3>Baixe o App</h3>
                    <div className="conteudo">
                        <div className="text">
                            <h3>30 pontos</h3>
                            <p>Brasil, BR</p>
                        </div>
                        <div className="icon">
                            <i className='bx bx-been-here'></i>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <img src={jogar} alt="Imagem do jogo" />
                    <h3>Jogue o jogo</h3>
                    <div className="conteudo">
                        <div className="text">
                            <h3>20 pontos</h3>
                            <p>Brasil, BR</p>
                        </div>
                        <div className="icon">
                            <i className='bx bx-been-here'></i>
                        </div>
                    </div>
                </div>
            </div>
        </HomeStyle>
    );
};

export default Home;