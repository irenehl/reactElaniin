import axios from 'axios'
import React, { useState } from 'react'

import { useAxiosGet } from '../Hooks/UseAxiosGet'
import MenuItem from './MenuItem'

function MenuContainer() {
    var [page, setPage] = useState(1)

    function onClickHandler(e, pageToGo) {
        console.log(`ReceivingPageToGo: ${pageToGo}`)
        e.preventDefault()

        if(pageToGo < 1)
            pageToGo = 1
        else if(pageToGo > 2)
            pageToGo = 2
        
        setPage(pageToGo)

        console.log(`PageToGo: ${pageToGo}`)
        console.log(`Page: ${page}`)
    }

    let petition = useAxiosGet(`https://api.elaniin.dev/api/menu?page=${page}`)
    let content = null

    if (petition.error)
        alert('F')

    if (petition.response !== null)
        content = petition.response.data.map(e => <MenuItem foodFiller={e} />)

    return (
        <div className="container-fluid d-flex flex-wrap justify-content-around">
            <div className="row p-0">
                
            </div>
            <div className="row text-center justify-content-center">
                {content}
            </div>
            <div className="row">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a onClick={(e) => onClickHandler(e, page - 1)} 
                            class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a onClick={(e) => onClickHandler(e, 1)} class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                            <a onClick={(e) => onClickHandler(e, 2)}class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a onClick={(e) => onClickHandler(e, page + 1)} 
                            class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default MenuContainer