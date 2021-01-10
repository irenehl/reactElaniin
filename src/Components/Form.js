import React from 'react'

function Form() {
    function changeLabelColor(search) {
        var formLabel = document.getElementsByClassName('form-label')

        for (let i = 0; i < formLabel.length; i++)
            formLabel[i].classList.remove('yellow-primary')

        document.getElementById(search).classList.add('yellow-primary')
    }

    function removeLabelColor(search) {
        var formLabel = document.getElementsByClassName('form-label')

        for (let i = 0; i < formLabel.length; i++)
            formLabel[i].classList.remove('yellow-primary')
    }

    return (
        <div className="container-fluid black pb-5">
            <div className="col-12 p-4 d-flex flex-column align-items-center">
                <h1 className="druk mb-4 form-title">Cuentanos tu experiencia</h1>
                <p className="openSans text-white form-desc">
                    Don't miss out on our great offers & Receive deals from all our top restaurants via e-mail.
                </p>
            </div>
            <div className="row grouper">
                <div className="col-12 col-lg-6 pe-2 ps-2">
                    <div className="col-12 inputGroup">
                        <label id="nameLabel" className="form-label" htmlFor="">Nombre y Apellido</label>
                        <input onFocus={() => changeLabelColor('nameLabel')} onBlur={() => removeLabelColor()}
                            type="text" name="" id="" className="form-input" placeholder="John Doe" />
                    </div>
                    <div className="col-12 inputGroup">
                        <label id="emailLabel" className="form-label" htmlFor="">Correo electronico</label>
                        <input onFocus={() => changeLabelColor('emailLabel')} onBlur={() => removeLabelColor()}
                            type="text" name="" id="" className="form-input" placeholder="j.doe@correo.com" />
                    </div>
                </div>
                <div className="col-12 col-lg-6 pe-2 ps-2">
                    <div className="col-12 inputGroup">
                        <label id="messageLabel" className="form-label" htmlFor="">Mensaje</label>
                        <textarea onFocus={() => changeLabelColor('messageLabel')} onBlur={() => removeLabelColor()}
                            name="" id="" cols="30" rows="10" className="form-input form-txtarea"
                            placeholder="El día de ahora mi experiencia fue..."></textarea>
                    </div>
                </div>
                <div className="col-12 pt-2 pb-5 mb-5 d-flex justify-content-end">
                    <button className="btn btn-custom mt-2 mb-5 openSans">Enviar comentarios</button>
                </div>
            </div>
        </div>
    )
}

export default Form