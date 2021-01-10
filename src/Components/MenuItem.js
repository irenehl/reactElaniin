import React from 'react'

function MenuItem({ foodFiller }) {
    return (
        <div class="card card-phone card-tablet card-large">
            <img src={foodFiller.image.replace('\\', '')} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title syne">{foodFiller.name}</h5>
                <p class="card-text openSans">{foodFiller.description}</p>
                <div className="col-12 cardFooter d-flex justify-content-between align-items-center">
                    <p className="text-gray card-category p-0 m-0">{foodFiller.category}</p>
                    <a href="#" class="btn btn-custom">${foodFiller.price}</a>
                </div>
            </div>
        </div>
    )
}

export default MenuItem