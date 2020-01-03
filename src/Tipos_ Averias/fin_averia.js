import React, { Component } from "react";

import "./fin_averia";

class Fin extends Component {
  state = { theme: null };

  resetTheme = evt => {
    evt.preventDefault();
    this.setState({ theme: null });
  };

  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    this.setState({ theme });
  };
  render() {
    return (
      <div className="container border col-xs-1 col-sh-12 col-md-12 col-lg-12 ">
        <br />

        <form>
          <br/><br/><br/>
          <h2>Formulario Finalización de Averia</h2>
          <br/><br/>
            <div className=" border border-secondary col-xs-1 col-sh-12 col-md-12 col-lg-12">
              <br /><br />
              <div className="input-group">
                <label htmlFor="desc" className="col-lg-4 control-label">
                  <h6>Descripción Evento Mayor:</h6>
                </label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="descripcion"
                    placeholder="Descripcion"/>
                </div>
              </div>
              <br />

              <div className="input-group">
                <label htmlFor="" className="col-lg-4 control-label">
                  <h6>Cantidad De Clientes Afectados:</h6>{" "}
                </label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="cantidad"
                    placeholder="Cantidad"/>
                </div>
              </div>
              <br />


              <div className="input-group">
                <label htmlFor="" className="col-lg-4 control-label">
                  <h6>Boleto de Referencia:</h6>
                </label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="boleto"
                    placeholder="Boleto de Referencia"/>
                </div>
              </div>
              <br />

              <div className="input-group">
                <label htmlFor="" className="col-lg-4 control-label">
                  <h6>Tipo de Clientes impactados:</h6>
                </label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="tipo"
                    placeholder="Tipo de Clientes impactados"/>
                </div>
              </div>
              <br />

              <div className="input-group">
                <label htmlFor="" className="col-lg-4 control-label">
                  <h6>Pueblos Afectados:</h6>{" "}
                </label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="pueblos"
                    placeholder="Pueblos Afectados"/>
                </div>
              </div>
              <br />

              <div className="input-group">
                <label htmlFor="" className="col-lg-4 control-label">
                  <h6>Zona/Región Impactada:</h6>{" "}
                </label>
                <div className="col-lg-6">
                  <select className="form-control">
                    <option value="Metro">Metro</option>
                  </select>
                </div>
              </div>
              <br /><br />
            </div>
            <br />
          
            <div className="container border border-secondary form-horizontal col-xs-1 col-sh-12 col-md-12 col-lg-12 ">
              <div className="col-lg-12">
                <label htmlFor="" className="col-lg-12 control-label">
                <br />
                  <h6>Impacto en el servicio:</h6>
                </label>
              </div>
              <br />
                <div className="input-group">
                  <h6 className="col-lg-4">Radio Bases</h6>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      id="radio"
                      placeholder="Radio Bases"/>
                  </div>
                </div>
                  <br />

                  <div className="input-group">
                    <h6 className="col-lg-4">Remotos</h6>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        id="remotos"
                        placeholder="Remotos"/>
                    </div>
                  </div>
                  <br />

                  <div className="input-group">
                    <h6 className="col-lg-4">DSLAMS</h6>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        id="dslams"
                        placeholder="DSLAMS"/>
                    </div>
                  </div>
                  <br />

                  <div className="input-group">
                    <h6 className="col-lg-4">VRADS</h6>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        id="vrads"
                        placeholder="VRADS"/>
                    </div>
                  </div>
                  <br />

                  <div className="input-group">
                    <h6 className="col-lg-4">EFM (MXK/RAPTOR)</h6>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        id="efm"
                        placeholder="EFM (MXK/RAPTOR)"/>
                    </div>
                  </div>
                  <br />

                  <div className="input-group">
                    <h6 className="col-lg-4">GPON</h6>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        id="gpon"
                        placeholder="GPON"/>
                    </div>
                  </div>
                  <br />

                  <div className="input-group">
                    <h6 className="col-lg-4">Cisco 3800</h6>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        id="cisco3800"
                        placeholder="Cisco 3800"/>
                    </div>
                  </div>
                  <br />

                  <div className="input-group">
                    <h6 className="col-lg-4">Cisco 24G</h6>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        id="cisco24g"
                        placeholder="Cisco 24G"/>
                    </div>
                  </div>
                  <br />
                  
                  <div className="input-group">
                    <h6 className="col-lg-4">Clientes</h6>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control "
                        id="clientes"
                        placeholder="Clientes"/>
                        <br /><br />
                    </div>
          <div className="col-lg-12 input-group border-bottom border-secondary "/>

          <div className="col-lg-12 input-group border-bottom border-secondary ">
            <div className="col-lg-4 input-group ">
              <p className="col-lg-4">Fecha/Hora Comienzo:</p>

              <div className="col-lg-8">
                <input
                  type="Date"
                  className="form-control "
                  id="fecha"
                  placeholder="Fecha"/>
              </div>
            </div>
            <div className="col-lg-4 input-group ">
              <p className="col-lg-4 ">Fecha/Hora Up-Date: </p>

              <div className="col-lg-8">
                <input
                  type="Date"
                  className="form-control "
                  id="update"
                  placeholder="Up-Date"/>
              </div>
            </div>
            <div className="col-lg-4 input-group ">
              <p className="col-lg-4 ">Total dias: </p>

              <div className="col-lg-8">
                <input
                  type="number"
                  className="form-control "
                  id="dias"
                  placeholder="Dias"/>
              </div>
            </div>
            <div className="col-lg-4 input-group ">
              <p className="col-lg-4 ">Tiempo-Hora-Minutos:</p>

              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control "
                  id="tiempo"
                  placeholder="Tiempo"/>
              </div>
            </div>
            <div className="col-lg-4 input-group ">
              <p className="col-lg-4 ">Tiempo Estimado de Reparación:</p>

              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control "
                  id="testimado"
                  placeholder="Tiempo Estimado"/>
              </div>
            </div>
          </div>
        </div>
          <br /> <br />
          <div className="border-secondary">
            <div className="col-lg-4 input-group col-md-offset-5">
              <p className="col-lg-4 ">Comentario:</p>

              <div className="col-lg-6">
                <textarea
                  className="p-3 mb-2 text-dark"
                  defaultValue="Escribe aquí tus comentarios"
                  name="comentarios"
                  rows="10"
                  cols="118"/>
              </div>
            </div>
            <div className="p-3 mb-2 text-dark">
              <p>
                AVISO DE CONFIDENCIALIDAD: Este correo electrónico, incluyendo
                en su caso los archivos adjuntos al mismo, puede contener
                información de carácter confidencial y/o privilegiado, y se
                envían a la atención única y exclusivamente de la persona y/o
                entidad a quien va dirigido. La copia, revisión, uso, revelación
                y/o distribución de dicha información confidencial sin la
                autorización por escrito de Claro está prohibida. Si usted no es
                el destinatario a quien se dirige el presente correo, favor de
                contactar al remitente respondiendo al presente correo y
                eliminar el correo original incluyendo sus archivos, así como
                cualquier copia del mismo. Mediante la recepción del presente
                correo usted reconoce y acepta que en caso de incumplimiento de
                su parte y/o de sus representantes a los términos antes
                mencionados, Claro tendrá derecho a los danos y perjuicios que
                esto le cause.{" "}
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
    );
  }
}

export default Fin;
