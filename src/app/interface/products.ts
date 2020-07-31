

  export interface AccountInformation {
    accountIdentifier: string;
    productType: string;
    bank: string;
    currencyCode: string;
  }

  export interface Term {
    count: number;
    units: string;
  }

  export interface PeriodicityOfPayment {
    count: number;
    units: string;
  }

  export interface SaldoPendientePago {
    amount: number;
  }

  export interface TasaNominal {
    amount: number;
    rate: number;
  }

  export interface InteresPagado {
    amount: number;
  }

  export interface ValorConstitucion {
    amount: number;
  }

  export interface InteresesCausados {
    amount: number;
  }

  export interface Retefuente {
    amount: number;
  }

  export interface PagoTotalPesos {
    amount: number;
    currencyCode: string;
  }

  export interface CupoDisponibleAvancesPesos {
    amount: number;
    currencyCode: string;
  }

  export interface SaldoMoraPesos {
    amount: number;
    currencyCode: string;
  }

  export interface SaldoActual {
    amount: number;
    currencyCode: string;
  }

  export interface CupoDisponibleComprasPesos {
    amount: number;
    currencyCode: string;
  }

  export interface ValorPagoMinimo {
    amount: number;
    currencyCode: string;
  }

  export interface CupoTotal {
    amount: number;
    currencyCode: string;
  }

  export interface SaldoCanje {
    amount: number;
  }

  export interface CupoAprobadoRemesas {
    amount: number;
  }

  export interface CuposAprobadoSobregiro {
    amount: number;
  }

  export interface SaldoDisponible {
    amount: number;
  }

  export interface CupoDisponibleSobregiro {
    amount: number;
  }

  export interface SaldoCanje48Horas {
    amount: number;
  }

  export interface SaldoCanje72Horas {
    amount: number;
  }

  export interface SaldoCanje24Horas {
    amount: number;
  }

  export interface SaldoAyer {
    amount: number;
  }

  export interface ProductAccountBalances {
    saldo_pendiente_pago: SaldoPendientePago;
    tasa_nominal: TasaNominal;
    interes_pagado: InteresPagado;
    valor_constitucion: ValorConstitucion;
    intereses_causados: InteresesCausados;
    retefuente: Retefuente;
    pago_total_pesos: PagoTotalPesos;
    cupo_disponible_avances_pesos: CupoDisponibleAvancesPesos;
    saldo_mora_pesos: SaldoMoraPesos;
    saldo_actual: SaldoActual;
    cupo_disponible_compras_pesos: CupoDisponibleComprasPesos;
    valor_pago_minimo: ValorPagoMinimo;
    cupo_total: CupoTotal;
    saldo_canje: SaldoCanje;
    cupo_aprobado_remesas: CupoAprobadoRemesas;
    cupos_aprobado_sobregiro: CuposAprobadoSobregiro;
    saldo_disponible: SaldoDisponible;
    cupo_disponible_sobregiro: CupoDisponibleSobregiro;
    saldo_canje_48_horas: SaldoCanje48Horas;
    saldo_canje_72_horas: SaldoCanje72Horas;
    saldo_canje_24_horas: SaldoCanje24Horas;
    saldo_ayer: SaldoAyer;
  }

  export interface Products {
    accountInformation: AccountInformation;
    locked: boolean;
    id: string;
    typeAccount: string;
    openedDate: string;
    closedDate: string;
    dueDate: string;
    lastTransactionDate: string;
    term: Term;
    periodicityOfPayment: PeriodicityOfPayment;
    productAccountBalances: ProductAccountBalances;
    capacity?: number;
    status: string;
    overDraftDays?: number;
  }
