import React, { useEffect } from 'react'
import { Fragment } from 'react'
import {XCircleIcon,
    CheckIcon,
} from '@heroicons/react/20/solid'
import Modal from 'common/Modal'
import FormProduct from 'components/FormProduct'
import axios from 'axios'
import endPoints from 'services/api'
import Alert from 'common/Alert'
import useAlert from 'hooks/useAlert'
import { deleteProduct } from 'services/api/products'
import Link from 'next/link'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Products = () => {
    const [products, setProducts] = React.useState([])
    const [open, setOpen] = React.useState(false);
    const {alert,setAlert,toogleAlert} = useAlert()
    useEffect(()=>{
        async function getProducts(){

            const response = await axios.get(endPoints.products.getAllProducts);
            setProducts(response.data)
        }
        try {
            getProducts()
        } catch (error) {
            console.log(error)
        }
    },[alert])
    const handleDelete = (id) => {
        deleteProduct(id).then(()=>{
            setAlert({
                active:true,
                message:'Delete product succesfully',
                type:'error',
                autoClose:true
            })
        })
    }
    return (
        <>
        <Alert handleClose={toogleAlert} alert={alert}/>
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        List of Products
                    </h2>
                </div>
                <div className="mt-5 flex lg:mt-2 lg:mb-2 lg:ml-4">


                    <span className="sm:ml-3">
                        <button
                            onClick={()=> setOpen(true)}
                            type="button"
                            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                            Add Product
                        </button>
                    </span>

                </div>
            </div>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Id
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Delete</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {products?.map((product) => (
                                        <tr key={`Product-item-${product.id}`}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full" src={product.images[0]} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{product.title}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{product.category.name}</div>
                                                <div className="text-sm text-gray-500"></div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">${product.price}</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <Link href={`/dashboard/edit/${product.id}`}>
                                                    Edit
                                                </Link>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <XCircleIcon className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer" aria-hidden="true" onClick={() => handleDelete(product.id)} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={open} setOpen={setOpen}>
                <FormProduct setOpen={setOpen} setAlert={setAlert}/>
            </Modal>
        </>
    )
}

export default Products