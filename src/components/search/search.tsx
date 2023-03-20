import React, {FormEvent, useState} from 'react';
import {Form, FormControl} from 'react-bootstrap';
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store";
import {loadProductsWithParameters} from "../../store/products.store";

function Search() {

    const dispatch = useDispatch<AppDispatch>()

    const [state, setState] = useState("")

    const search = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(loadProductsWithParameters({search: state}))
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)

    return (
        <Form onSubmit={search}>
            <div className="input-group">
                <FormControl type="text"
                             placeholder="Search"
                             className="search-input"
                             value={state}
                             onChange={onChange}
                />
                <button className="btn btn-primary search-button" type="submit">
                    &#128269;
                </button>
            </div>
        </Form>
    );
}

export default Search