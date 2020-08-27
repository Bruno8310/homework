function printOwing (invoice) {
  console.log('***********************\n' + '**** Customer Owes ****\n' + '***********************');
  let outstanding = 0;
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }

  invoice.dueDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 30);
  console.log(`name: ${invoice.customer}\namount: ${outstanding}\ndate: ${invoice.dueDate.toLocaleDateString()}`);
}

module.exports = {
  printOwing
};