import FormProduct from "components/FormProduct";
import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import endPoints from "services/api";

const Edit = () => {
    const [product, setProduct] = React.useState({});
    const router = useRouter()
    React.useEffect(()=>{

        const {id} = router.query;
        if(!router.isReady) return;
        async function getProduct(){
            const response = await axios.get(endPoints.products.getProduct(id));
            
            setProduct(response.data)
        }
        getProduct()
    },[router?.isReady])
    return (
        <FormProduct product={product} />
    )
}

export default Edit