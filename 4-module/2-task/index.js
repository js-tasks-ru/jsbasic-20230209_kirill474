function makeDiagonalRed(table) {
  const td = document.getElementsByTagName('td');
  const step = table.rows.length + 1;
  for (let i = 0; i <= td.length - 1; i += step) {
    td[i].style.backgroundColor = 'red'
  }
}
