import React from 'react';
import "./Reports.css"
import { Spinner } from "react-bootstrap";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { data } from './data';
import { Impressao } from './impressao.js';

pdfMake.vfs = pdfFonts.pdfMake.vfs;


function Reports() {

    const visualizarImpressao = async () => {
        console.log('report', data);
        const classeImpressao = new Impressao(data);
        const documento = await classeImpressao.PreparaDocumento();
        pdfMake.createPdf(documento).open({}, window.open('', '_blank'));
    }

    return (
        <div className="Reports">
            <h3>Relatório de produtos pesquisados</h3>
            <header className="Reports-header">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                <p>
                    Criando Relatorio de pesquisa por produtos
          </p>
            </header>
            <section className="Reports-body">
                <button className="btn" onClick={visualizarImpressao}>
                    Visualizar documento
          </button>
            </section>
        </div>
    );
}

export default Reports;