
const Footer = () => {
 

    return (
        <footer className="bg-dark text-center text-white mt-5">
            <div className="container p-4">
                <section className="d-flex justify-content-center">
                    <a className="btn btn-floating m-1" href="#!" role="button"
                    ><i className="bi bi-facebook text-light"></i></a>

                    <a className="btn btn-floating m-1" href="#!" role="button"
                    ><i className="bi bi-instagram text-light"></i></a>

                    <a className="btn btn-floating  m-1" href="#!" role="button"
                    ><i className="bi bi-linkedin text-light"></i></a>
                </section>
            </div>

            <div className="text-center pb-4" >
                <a className="text-white" href="https://mdbootstrap.com/">This web it's made with HTML5, CSS3, Bootstrap and ReactJS</a>
            </div>
        </footer>
    )
}

export default Footer