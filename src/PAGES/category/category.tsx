import { useState } from "react"
// import { categoria } from "../../API/category-in-memory"
import { CardCategory } from "../../COMPONENTS/card-category/card-category"
import { CategoryPayload } from "../../TYPES/category"


export function Category() {
    const categoria = [{
        image: 'https://s2.glbimg.com/GRF9KCq-1hiz5uSs-xX9Go_KqIc=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/p/X/eb4KQdToys327cGqnRGg/receita-ceboloni-bacon.jpg',
        name: 'Burguer'
    },
    {
        image: 'https://i0.wp.com/pizzariadabrasa.com.br/wp-content/uploads/2021/09/bebidas.jpg?fit=800%2C800&ssl=1',
        name: 'Bebida'
    },
    {
        image: 'https://i.pinimg.com/736x/32/e0/b9/32e0b9f02fb5a91141706197d399d7fe.jpg',
        name: 'Sobremesa'
    }]

    const [categoryList, setCategoryList] = useState<CategoryPayload[]>([])

    function CategoryFunction() {
        setCategoryList(categoria)
        console.log(categoria)
    }
    return (
        <div className="categorys">
            <h2>CATEGORIAS</h2>
            <div className="teste">{categoryList.map((categoria) => (
                <CardCategory category={categoria} />
            ))}</div>
        </div>
    )
}

