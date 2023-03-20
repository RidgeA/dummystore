import React, {useEffect} from "react";
import {Carousel, Col, Container, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store";
import {loadProductById} from "../../store/products.store";
import {useAppSelector} from "../../hooks";
import Rating from "../../components/rating/rating";

export default function ProductPage() {
    const {productId} = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const product = useAppSelector(state => state.products.product)

    useEffect(() => {
        dispatch(loadProductById(Number(productId)))
    }, [])

    return (
        <Container>
            <Row>
                <h1 className="p-4 text-center fw-bold">{product?.title}</h1>
            </Row>
            <Row>
                <Col md={6}>
                    <Carousel variant="dark">
                        {product?.images.map((image, index) => (
                            <Carousel.Item key={index} className="bg-light">
                                <img src={image} alt={product?.title} className="d-block mx-auto"
                                     style={{"height": "300px"}}/>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col md={6}>
                    <h3 className="pb-4">{product?.description}</h3>
                    <h2 className="fw-bold pb-4">Price: ${product?.price}</h2>
                    <h2 className="pb-4">
                        <Rating value={product?.rating as number}/>
                    </h2>
                </Col>
            </Row>
        </Container>
    )
}

