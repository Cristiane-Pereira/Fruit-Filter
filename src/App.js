import React, { Fragment, useMemo, useState } from "react";

const frutas = [
  "Banana",
  "Uva",
  "Maça",
  "Pessêgo",
  "Morango",
  "Melância",
  "Laranja",
  "Limão",
  "Tomate",
  "Melão",
  "Cereja",
  "Abacaxi",
  "Abacate",
];

function App() {
  const [busca, setBusca] = useState("");

  const frutasFiltradas = useMemo(() => {
    const lowerBusca = busca.toLocaleLowerCase(); //otimiza o buscador o deixando mais rapido fora do loop;
    return frutas.filter((item) =>
      item.toLocaleLowerCase().includes(lowerBusca)
    );
  }, [busca]);

  return (
    <Fragment>
      <h1>Lista de Frutas</h1>
      <input
        type="text"
        onChange={(e) => setBusca(e.target.value)}
        value={busca}
      />
      {frutasFiltradas.map((item) => (
        <ul key={item}>
          <li>{item}</li>
        </ul>
      ))}
    </Fragment>
  );
}

export default App;
