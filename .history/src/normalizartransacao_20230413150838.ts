//delcarando como global
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
}
export default function normalizarTransacao(transacao: TransacaoApi) {
  return {};
}
