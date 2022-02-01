/// <reference lib="webworker" />


function elab(num: number): number[]{
  let lista: number[] = []
  for(let i =0 ; i< num; i++){
    lista.push(Math.floor(Math.random() * 100))
  }
  return lista

}

addEventListener('message', ({ data }) => {
  const response = {lista: elab(data)};
  postMessage(response);
});
