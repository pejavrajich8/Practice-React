import ProductRow from "./ProductRow.jsx";
import ProductCategoryRow from "./ProductCategoryRow.jsx";

export default function ProductTable({ products }) {
    const rows = [];
    let lastCategory = null;


   products.forEach((product, index) => {
    if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow key={`${index}_category`} category={product.category} />)
    }
    rows.push(<ProductRow key={`${index}_product`} product={product}/>)
    lastCategory = product.category
   })

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>

                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
        
    )
}