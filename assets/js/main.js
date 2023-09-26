const screen = document.getElementById('screen');

const typeColor = variable => {
  if(typeof(variable)==='string')
    return `<span class="type-string">'${variable}'</span>`
  else
    return `<span class="type-int">${variable}</span>`
} 

screen.innerHTML = 'presona una tecla'

document.addEventListener('keydown', e => {
  const k = [
    ['keyCodeDEP', e.which],
    ['key', e.key],
    ['code', e.code],
    ['location', e.location],
  ]
  console.table(k);

  let kf = `
  <table>
    <tr>
      <th>(index)</th>
      <th></th>
      <th></th>
      </tr>`
      k.forEach((e,idx)=> kf += `
      <tr>
        <td>${idx}</td>
        <td>${typeColor(e[0])}</td>
        <td>${typeColor(e[1])}</td>
      </tr>`
      )
  kf += `</table>`
  screen.innerHTML = kf
});

