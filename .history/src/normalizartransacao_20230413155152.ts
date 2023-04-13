import moedaParanumero from "./moedaParaNumero.js";

//delcarando como global
//----------------------------------------------------------------
declare global {
  type TransacaoPagamento = "Boleto" | "Cartão de Crédito";
  type TransacaoStatus =
    | "Paga"
    | "Recusada pela operadora de cartão"
    | "Aguardando pagamento"
    | "Estornada";

  interface TransacaoApi {
    Nome: string;
    ID: number;
    Email: string;
    Status: TransacaoStatus;
    Data: string;
    ["Cliente Novo"]: number;
    ["Forma de Pagamento"]: TransacaoPagamento;
    ["Valor (R$)"]: string;
  }
  interface Transacao {
    nome: string;
    id: number;
    data: string;
    status: TransacaoStatus;
    email: string;
    moeda: string;
    valor: number | null;
    pagamento: TransacaoPagamento;
    novo: boolean;
  }
}

//faz a normalização da Api
//----------------------------------------------------------------

export default function normalizarTransacao(transacao: TransacaoApi) {
  return {
    nome: transacao.Nome,
    id: transacao.ID,
    data: transacao.Data,
    status: transacao.Status,
    email: transacao.Email,
    moeda: transacao["Valor (R$)"],
    valor: moedaParanumero(transacao["Valor (R$)"]),
    pagamento: transacao["Forma de Pagamento"],
    novo: Boolean(transacao["Cliente Novo"]),
  };
}
