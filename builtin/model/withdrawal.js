module.exports = {
  table: 'withdrawals',
  tableFields: [
    { name: 'tid', type: 'String', length: 64, not_null: true, primary_key: true },
    { name: 'dappId', type: 'String', length: 64, index: true },
    { name: 'currency', type: 'String', length: 22 },
    { name: 'amount', type: 'String', length: 50 }
  ]
}