import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footerDesktop">
        <div id="rodape">
          <div id="rodapeEsquerdo">
            <div id="imgFooter">
              <img
                src="/images/footer_logo.png"
                className="logo_palavras3"
                alt="logo-palavras3"
              />
              <img
                src="/images/logo_menu.png"
                className="logo_palavras4"
                alt="logo-palavras4"
              />
            </div>
            <div id="textoFooter">
              <p>Um homem que acredita no poder transformador das pessoas</p>
            </div>
            <div id="redesFooter">
              <p>REDES SOCIAIS</p>
              <a
                href="https://www.facebook.com/OtelioDrebes/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/footer icone face.png" alt="facebook" />
              </a>
              <a
                href="https://www.instagram.com/oteliodrebes/?hl=pt-br"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/footer icone insta.png" alt="instagram" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC74Ph3THElVwkCVOOHyX8Vw"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/footer icone youtube.png" alt="youtube" />
              </a>
            </div>
          </div>

          <div id="rodapeNavegacao">
            <h5>NAVEGAÇÃO</h5>
            <a href="https://www.oteliodrebes.com.br/">
              <p>+ Home</p>
            </a>
            <a href="https://www.otelio.com.br/minha_vida/minha_vida.html">
              <p>+ Minha Vida</p>
            </a>
            <a href="https://www.otelio.com.br/palestras/palestras.html">
              <p>+ Palestras</p>
            </a>
            <a href="#projetos">
              <p>+ Projetos</p>
            </a>
            <a href="https://www.oteliodrebes.com.br/fotosdasorte">
              <p>+ Galeria</p>
            </a>
            <a href="https://www.oteliodrebes.com.br/minhasverdades">
              <p>+ Minhas Verdades</p>
            </a>
            <a href="https://www.oteliodrebes.com.br/contato">
              <p>+ Imprensa</p>
            </a>
            <a href="https://www.oteliodrebes.com.br/contato">
              <p>+ Contato</p>
            </a>
          </div>

          <div id="rodapeContato">
            <h5>CONTATO</h5>
            <div id="telefoneRodape">
              <img
                src="/images/footer icone telefone fixo.png"
                alt="icone-telefone"
              />

              <p>
                <span>TELEFONE: </span> (51) 3377.7772
              </p>
            </div>

            <div id="emailRodape">
              <img src="/images/footer icone email.png" alt="icone-email" />

              <p>
                <span>E-MAIL: </span>contato@oteliodrebes.com.br
              </p>
            </div>

            <div id="enderecoRodape">
              <img src="/images/footer icone endereco.png" alt="icone-mapa" />
              <p>
                <span>ENDEREÇO:</span> Rua Tobias da Silva, 120/1107 | Moinhos
                do Vento <br />
                Porto Alegre | RS | CEP: 90570-020
              </p>
            </div>
          </div>
        </div>
        <div className="footer-rodape">
          <div id="farolConecta">
            <img src="/images/footer icone conecta.png" alt="icone-farol" />
            <p>
              Desenvolvido por Farol Conecta Agência Criativa LTDA - Todos os
              direitos reservados Otelio Drebes 2021
            </p>
          </div>
        </div>
      </footer>
      <footer className="footerMobile">
        <div id="rodapeMobile">
          <div className="headerFooterMobile">
            <div id="imgFooterMobile">
              <img
                src="/images/footer_logo.png"
                className="logo_palavrasMobile"
                alt="logo palavras"
              />
              <img
                src="/images/logo_menu.png"
                className="logo_palavras2Mobile"
                alt="logo palavras"
              />
            </div>
            <div id="textoFooterMobile">
              <p>Um homem que acredita no poder transformador das pessoas</p>
            </div>
          </div>

          <div className="bodyFooterMobile">
            <div id="rodapeEsquerdoMobile">
              <div id="rodapeNavegacaoMobile">
                <h5>NAVEGAÇÃO</h5>
                <a href="https://www.oteliodrebes.com.br/">
                  <p>+ Home</p>
                </a>
                <a href="https://www.otelio.com.br/minha_vida/minha_vida.html">
                  <p>+ Minha Vida</p>
                </a>
                <a href="https://www.otelio.com.br/palestras/palestras.html">
                  <p>+ Palestras</p>
                </a>
                <a href="#projetos">
                  <p>+ Projetos</p>
                </a>
                <a href="https://www.oteliodrebes.com.br/fotosdasorte">
                  <p>+ Galeria</p>
                </a>
                <a href="https://www.oteliodrebes.com.br/minhasverdades">
                  <p>+ Minhas Verdades</p>
                </a>
                <a href="https://www.oteliodrebes.com.br/contato">
                  <p>+ Imprensa</p>
                </a>
                <a href="https://www.oteliodrebes.com.br/contato">
                  <p>+ Contato</p>
                </a>
              </div>

              <div id="redesFooterMobile">
                <p>REDES SOCIAIS</p>
                <div className="redesFooterMobile-img">
                  <a
                    href="https://www.facebook.com/OtelioDrebes/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/footer icone face.png" alt="facebook" />
                  </a>
                  <a
                    href="https://www.instagram.com/oteliodrebes/?hl=pt-br"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/footer icone insta.png" alt="instagram" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC74Ph3THElVwkCVOOHyX8Vw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/footer icone youtube.png" alt="youtube" />
                  </a>
                </div>
              </div>
            </div>

            <div id="rodapeContatoMobile">
              <h5>CONTATO</h5>
              <div id="telefoneRodapeMobile">
                <img
                  src="/images/footer icone telefone fixo.png"
                  alt="icone-telefone"
                />

                <p>
                  <span>TELEFONE: </span>
                  <br />
                  (51) 3377.7772
                </p>
              </div>

              <div id="emailRodapeMobile">
                <img src="/images/footer icone email.png" alt="icone-email" />

                <p>
                  <span>E-MAIL: </span>
                  <br />
                  contato@oteliodrebes.com.br
                </p>
              </div>

              <div id="enderecoRodapeMobile">
                <img src="/images/footer icone endereco.png" alt="icone-mapa" />
                <p>
                  <span>ENDEREÇO:</span>
                  <br />
                  The Place Moinhos Rua Tobias da Silva, 120/1107. Moinhos de
                  Vento, Porto Alegre/RS 90570-020
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-rodapeMobile">
          <div id="farolConectaMobile">
            <img src="/images/footer icone conecta.png" alt="icone-farol" />
            <div className="textoConectaFooterMobile">
              <p>Desenvolvido por Farol Conecta Agência Criativa LTDA</p>
              <p>Todos os direitos reservados Otelio Drebes 2021</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
