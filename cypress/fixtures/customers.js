const CUSTOMER = {
  name: 'Luffy da Silva',
  cpf: '11122233344',
  status: 'Ativo',
  balance: 10000
}

const INACTIVE = {
  name: 'Nami Gouveia',
  cpf: '22233344455',
  status: 'Inativo',
  balance: 10000
}

const BALANCE = {
  oneCent: 1
}

const toReais = (value) => {
  return value / 100;
};

export { CUSTOMER, INACTIVE, BALANCE, toReais }
