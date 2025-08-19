
const products = [
  { id: 1, name: "Laptop",image:<img src="https://cdn.pixabay.com/photo/2016/11/21/16/27/laptop-1846277_1280.jpg" height={80} width={80} alt="" srcset="" /> },
  { id: 2, name: "Smartphone" , image:<img src="https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_1280.png" height={80} width={80} alt="" srcset="" />},
  { id: 3, name: "Headphones", image:<img src="https://cdn.pixabay.com/photo/2016/01/09/07/44/headphone-1129896_1280.png" height={80} width={80} alt="" srcset="" />},
  { id: 4, name: "Keyboard", image:<img src="https://media.istockphoto.com/id/153065264/photo/computer-keyboard-with-clipping-path.jpg?s=2048x2048&w=is&k=20&c=fupVNsbHkh_M9tu5pJvWH05Biymi0jhBADR7waWKo5w=" height={80} width={80} alt="" srcset="" />},
  { id: 5, name: "Mouse",  image:<img src="https://cdn.pixabay.com/photo/2017/08/28/16/38/computer-mouse-2690350_1280.png" height={80} width={80} alt="" srcset="" />},
];

function ProductList() {
  return (
    <div>
      <h2>Product List</h2>
      <table border={1} cellPadding={8} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.image}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
