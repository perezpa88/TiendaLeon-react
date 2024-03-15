const productos = [
  {
    id:"01",
    nombre: "Producto 1",
    descripcion: "Descripción del Producto 1",
    precio: 25.4,
    stock: 30,
    imagen: "../img/camiseta-1.jpg",
    categoria: "nuevo"
  },
  {
    id:"02",
    nombre: "Producto 2",
    descripcion: "Descripción del Producto 2.jpeg",
    precio: 50,
    stock: 30,
    imagen: "../img/camiseta-2",
    categoria: "oferta"
  },
  {
    id:"03",
    nombre: "Producto 3",
    descripcion: "Descripción del Producto 3",
    precio: 25,
    stock: 30,
    imagen: "../img/camiseta-3.jpeg",
    categoria: "mas vendidos"
  },
  {
    id:"04",
    nombre: "Producto 4",
    descripcion: "Descripción del Producto 4",
    precio: 100,
    stock: 30,
    imagen: "../img/camiseta-4.jpeg",
    categoria: "nuevo"
  },
  {
    id:"05",
    nombre: "Producto 5",
    descripcion: "Descripción del Producto 5",
    precio: 70,
    stock: 30,
    imagen:  "../img/camiseta-5.jpg",
    categoria: "nuevo"
  },
  {
    id:"06",
    nombre: "Producto 6",
    descripcion: "Descripción del Producto 6",
    precio: 40,
    stock: 30,
    imagen: "../img/camiseta-6.png",
    categoria: "nuevo"
  },
]

// Función para agregar un product

export const getproducts = () => {
  return new promise ((resuelve, reject)=>{
    let error = false
    setTimeout(() => {
      if (error){
        reject("no hay data")
      }else{
        resolve(productos)
      }
      
    },2000);
  })
}