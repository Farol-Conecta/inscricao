import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage, useFormik, setFieldValue } from "formik";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Formulario.css";
import schema from "./schema";
import Modal from "./Modal";
import fetchEvents from "../api/fetch-events";
import AsyncSelect from "react-select/async";

function Formulario() {

  // const Formulario = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function onSubmit(values, actions) {
    console.log("SUBMIT", values);
  }


  function onBlurCep(ev) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        formik.setFieldValue("complemento", data.logradouro);
        formik.setFieldValue("bairro", data.bairro);
        formik.setFieldValue("city", data.localidade);
        formik.setFieldValue("estado", data.uf);
      });
  }

  const [items, setItems] = useState([]);
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);


  function setEventid() {
    return this.eventId.toString();
  }
  // handle selection
  const handleChange = (event)=>{

    const {name,value} = event.target
    
    formik.setFieldValue(name,value) 
   }


   const handleSelectChange = (selectedOption) => {
    setSelectedValue(selectedOption);
    formik.setFieldValue("id", selectedOption.id);
  
   }

  const fetchData = () => {
    return fetchEvents.get('/events').then(result => {
      const res = result.data;
      return res;
    });
  }


  const Eventos = async () => {
    const result = await fetchData();
    setItems(result);
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      data: "",
      cpf: "",
      cep: "",
      numero: "",
      complemento: "",
      city: "",
      bairro: "",
      estado: "",
      phone: "",
      email: "",
    },
    onSubmit: values => {
      fetchEvents.post('/events/inscritos', {
        id: values.id,
        subscribers: [
          {
            ...values
          }
        ]
      })
    },
  });


  return (
    <>
      <form onSubmit={formik.handleSubmit}>

        <div className="formulario">
          <fieldset>
            <legend>
              <h3>INSCRIÇÕES</h3>
            </legend>
            <div className="form-group">
              <label htmlFor="event">Evento</label>

              <AsyncSelect
                cacheOptions
                defaultOptions
                value={selectedValue}
                getOptionLabel={e => e.nome}
                getOptionValue={e => e.id}
                loadOptions={fetchData}
                
                onChange={(e) => handleSelectChange(e)}
              />

            </div>
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="name"
                placeholder="Nome"
                onChange={handleChange}
                value={formik.values.name}
              />

              
            </div>

            <div className="form-group">
              <label htmlFor="data_de_Nascimento">Data de Nascimento: </label>
              <input
                name="data"
                type="date"
                className="form-control"
                id="data_de_Nascimento"
                placeholder="Data de Nascimento"
                onChange={handleChange}
                value={formik.values.data}
              />
              
            </div>

            <div className="form-group">
              <label htmlFor="cpf" />
              <input
                name="cpf"
                type="text"
                className="form-control"
                id="cpf"
                placeholder="CPF"
                onChange={handleChange}
                value={formik.values.cpf}
              />
              
            </div>

            <div className="form-group">
              <label htmlFor="cep" />
              <input
                name="cep"
                type="text"
                className="form-control"
                id="cep"
                placeholder="CEP"
                onBlur={(ev) => onBlurCep(ev)}
                onChange={handleChange}
                value={formik.values.cep}
              />
            </div>

            <div className="form-group">
              <label htmlFor="numero" />
              <input
                name="numero"
                type="number"
                className="form-control"
                id="numero"
                placeholder="Número"
                onChange={handleChange}
                value={formik.values.numero}
              />
            </div>

            <div className="form-group">
              <label htmlFor="complemento" />
              <input
                name="complemento"
                type="text"
                className="form-control"
                id="complemento"
                placeholder="Complemento"
                onChange={handleChange}
                value={formik.values.complemento}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cidade" />
              <input
                name="city"
                type="text"
                className="form-control"
                id="cidade"
                placeholder="Cidade"
                onChange={handleChange}
                value={formik.values.city}
              />
            </div>

            <div className="form-group">
              <label htmlFor="estado" />
              <input
                name="estado"
                type="text"
                className="form-control"
                id="estado"
                placeholder="Estado"
                onChange={handleChange}
                value={formik.values.estado}
              />
            </div>

            <div className="form-group">
              <label htmlFor="bairro" />
              <input
                name="bairro"
                type="text"
                className="form-control"
                id="bairro"
                placeholder="Bairro"
                onChange={handleChange}
                value={formik.values.bairro}
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefone" />
              <input
                name="phone"
                type="text"
                className="form-control"
                id="telefone"
                placeholder="Telefone"
                onChange={handleChange}
                value={formik.values.phone}
              />
              
            </div>

            <div className="form-group">
              <label htmlFor="email" />
              <input
                name="email"
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                onChange={handleChange}
                value={formik.values.email}
              />
              
            </div>

            <div className="form-group grupo">
              <h5>Me informe sobre os Projetos de Otelio, sou:</h5>
              <input
                type="checkbox"
                id="musico"
                name="musico"
                value="musico"
              />
              <label htmlFor="musico"> Músico</label>
              <br />
              <input
                type="checkbox"
                id="professor"
                name="professor"
                value="professor"
              />
              <label htmlFor="Professor"> Professor</label>
              <br />
              <input
                type="checkbox"
                id="doador"
                name="doador"
                value="doador"
              />
              <label htmlFor="doador"> Doador de Sangue</label>
              <br />
              <input
                type="checkbox"
                id="empresario"
                name="empresario"
                value="empresario"
              />
              <label htmlFor="empresario"> Empresário</label>
              <br />
              <input
                type="checkbox"
                id="universitario"
                name="universitario"
                value="universitario"
              />
              <label htmlFor="universitario"> Universitário</label>
              <br />
              <input
                type="checkbox"
                id="imprensa"
                name="imprensa"
                value="imprensa"
              />
              <label htmlFor="imprensa"> Imprensa</label>
              <br />
              <input
                type="checkbox"
                id="outros"
                name="outros"
                value="outros"
              />
              <label htmlFor="outros"> Outros</label>
              <textarea
                name="outros"
                id="outros"
                cols="1"
                rows="1"
              ></textarea>
            </div>

            <div className="form-group conheceu">
              <h5>Como você conheceu Otelio Drebes?</h5>
              <input
                type="checkbox"
                id="redes_sociais"
                name="redes_sociais"
                value="redes_sociais"
              />
              <label htmlFor="redes_sociais"> Redes Sociais</label>
              <br />
              <input
                type="checkbox"
                id="imprensa2"
                name="imprensa2"
                value="imprensa2"
              />
              <label htmlFor="imprensa2"> Imprensa</label>
              <br />
              <input
                type="checkbox"
                id="amigos"
                name="amigos"
                value="amigos"
              />
              <label htmlFor="amigos"> Indicação de um amigo</label>
              <br />
              <input
                type="checkbox"
                id="clube"
                name="clube"
                value="clube"
              />
              <label htmlFor="clube">
                Através de Clube de Serviços. Qual?
              </label>
              <textarea
                name="outros"
                id="outros"
                cols="1"
                rows="1"
              ></textarea>
              <br />
              <input
                type="checkbox"
                id="outros2"
                name="outros2"
                value="outros2"
              />
              <label htmlFor="outros2"> Outros</label>
            </div>

            <div className="form-group clube">
              <h5>Você participa de algum Clube de Serviços?</h5>
              <input type="checkbox" id="sim" name="sim" value="sim" />
              <label htmlFor="sim">Sim. Qual?</label>
              <textarea name="sim" id="sim" cols="1" rows="1"></textarea>
              <br />
              <input type="checkbox" id="nao" name="nao" value="nao" />
              <label htmlFor="nao">Não</label>
            </div>

            <div className="form-group doar">
              <h5>
                Doar sangue é um ato de amor. Você pode salvar até 4 vidas
              </h5>
              <input
                type="checkbox"
                id="sim-doar"
                name="sim-doar"
                value="sim-doar"
              />
              <label htmlFor="sim-doar">
                {" "}
                Tenho interesse em ser candidato a doar sangue e autorizo
                que seja enviado meus dados para o Hemocentro mais próximo
                da minha cidade
              </label>
            </div>
            <button
              type="submit"
              onClick={() => setIsModalVisible(true)}
              disabled={!formik.isValid}
              className="btn btn-primary"
            >
              Enviar
            </button>
            {isModalVisible ? (
              <Modal onClose={() => setIsModalVisible(false)}>
                <p>
                  Estou muito feliz com a sua inscrição. O seu cadastro foi
                  preenchido com sucesso. Me siga nas redes sociais e
                  acompanhe as novidades. Até o nosso encontro!
                </p>
                <a
                  href="https://www.instagram.com/oteliodrebes/?hl=pt-br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-instagram"
                >
                  <button> Instagram</button>
                </a>
                <a
                  href="https://www.facebook.com/OtelioDrebes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-facebook "
                >
                  <button> Facebook</button>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC74Ph3THElVwkCVOOHyX8Vw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-youtube"
                >
                  <button> YouTube</button>
                </a>
              </Modal>
            ) : null}

          </fieldset>
        
        </div>
      </form>
      <section className="contatos">
        <p>
          *Ao participar desta palestra/evento, você autoriza o uso de sua
          imagem para eventual divulgação da palestra/evento nas redes sociais
          @oteliodrebes ou qualquer outro meio que esteja vinculando a marca
          Otelio Drebes.
        </p>
      </section>

    </>
  );
}

export default Formulario;
