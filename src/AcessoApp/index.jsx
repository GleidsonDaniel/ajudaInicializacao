import "./AcessoApp.css";

import qs from "query-string";
import React from "react";
import cookie from "react-cookies";

import AcessoPortal from "../AcessoPortal";

class AcessoApp extends React.Component {
  componentDidMount() {
    const { accessKey, tenant, redirect } = qs.parse(
      this.props.location.search
    );

    if (!accessKey || !tenant)
      return window.location.assign(this.props.sentinelaURL);

    this.carregaAutenticacao(accessKey, tenant);
    this.props.history.push(redirect || "/home");
  }

  carregaAutenticacao(accessKey, tenant) {
    sessionStorage.setItem("token", accessKey);
    sessionStorage.setItem("tenant", tenant);
    cookie.save("token", accessKey, { path: "/" });
    cookie.save("tenant", tenant, { path: "/" });
  }

  render() {
    return (
      <AcessoPortal>
        <div className="acesso-app">
          <div>Carregando...</div>
        </div>
      </AcessoPortal>
    );
  }
}

AcessoApp.defaultProps = {
  sentinelaURL:
    window.location.hostname === "localhost"
      ? "http://localhost:6005/"
      : "http://login.tron.com.br"
};

export default AcessoApp;
