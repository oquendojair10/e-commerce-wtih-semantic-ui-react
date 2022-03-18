import data from "../../data/base-ciclas-default-rtdb-export.json";

export default function handler(_, res) {
  // const bicycles = [
  //   {
  //     id: "1",
  //     name: "GT Pro 250",
  //     date: "Joined in 2021",
  //     image:
  //       "https://www.lenimp.com/galeriasproductos/macro_gal_gt_bicicletas_1568130532.jpg",
  //     description: "Daniel is a comedian living in Nashville.",
  //     price: 299,
  //   },
  //   {
  //     id: "2",
  //     name: "GT Helion",
  //     date: "Joined in 2021",
  //     image:
  //       "https://www.mtbpro.es/sites/default/files/fotosprincipales/G15_GM0365_01_YLW_3Q.jpg",
  //     description: "Daniel is a comedian living in Nashville.",
  //     price: 599.99,
  //     soldOut: true,
  //   },
  //   {
  //     id: "3",
  //     name: "Rali Rio Mecanica 29",
  //     date: "Joined in 2022",
  //     image:
  //       "https://olimpica.vtexassets.com/arquivos/ids/524355/Bicicleta-RALI-RIO-Mec%EF%BF%BDnica-29-Hombre--Negro-Verde.jpg?v=637558583193570000",
  //     description: "Daniel is a comedian living in Nashville.",
  //     price: 259.99,
  //   },
  // ];

  res.status(200).json(data.bicycles);
}
