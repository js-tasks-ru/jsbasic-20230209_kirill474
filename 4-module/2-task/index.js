function makeDiagonalRed(table) {
  // const td = document.getElementsByTagName('td');
  // const step = table.rows.length + 1;
  // for (let i = 0; i <= td.length - 1; i += step) {
  //   td[i].style.backgroundColor = "red"
  // } //мое изначальное решение

  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
  }
}
