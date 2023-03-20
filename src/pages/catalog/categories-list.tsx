import {Link, useParams} from "react-router-dom";
import React from "react";
import {selectAllCategory} from "../../store/categories.store";
import {useAppSelector} from "../../hooks";

export default function CategoryList() {
    const {categoryId} = useParams()
    const categories = useAppSelector(selectAllCategory)

    return (
        <div className="category-list">
            <ul>
                {categories.map(cat => {
                    return <Link key={cat.id} to={"/category/" + cat.id}>
                        <li className={cat.id == categoryId ? "active" : ""}>{cat.displayName}</li>
                    </Link>
                })}
            </ul>
        </div>
    )
}