import './category.css'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBurger, faChampagneGlasses, faCookieBite, faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { CardCategory } from "../../COMPONENTS/card-category/card-category"
import { CategoryPayload } from "../../TYPES/category"


export function Category() {
    const categoria = [{
        image: < FontAwesomeIcon icon={faBurger}/>,
        name: 'Burguers'
    },
    {
        image: < FontAwesomeIcon icon={faChampagneGlasses}/>,
        name: 'Bebidas'
    },
    {
        image: < FontAwesomeIcon icon={faCookieBite}/>,
        name: 'Sobremesas'
    },
    {
        image: < FontAwesomeIcon icon={faPizzaSlice}/>,
        name: 'Pizzas'
    }]

    const [categoryList, setCategoryList] = useState<CategoryPayload[]>(categoria)

    return (
        <div className="categorys">
            <h2 className='category-h2'>CATEGORIAS</h2>
            <div className="category-container">{categoryList.map((item) => (
                <CardCategory category={item} />  
            ))}</div>
        </div>
    )
}

