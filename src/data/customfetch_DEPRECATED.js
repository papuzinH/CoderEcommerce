let is_ok = true;

const customFetch = (time, data) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(is_ok) {
                resolve(data);
            } else {
                reject("Error al traer data de productos")
            }
        }, time)
    });
}

export default customFetch;