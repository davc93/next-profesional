import React from "react";

const useAlert = (options) => {

    const defaultOptions = {
        active:false,
        message: "",
        type: "",
        autoClose:true,

    };
    const [alert, setAlert] = React.useState({
        ...defaultOptions,
        ...options
    })
    const toogleAlert = () => {
        setAlert(!alert.active)
    }
    return {
        alert,setAlert,toogleAlert
    }
}

export default useAlert