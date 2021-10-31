import React from 'react'

export default function XucXac({xucXac, xuLyXucXac}) {
    return (
        <div className="d-flex p-5 flex-column">
        <div>
            {xucXac.map(item => (
                <img className="mx-2" height="50px" width="70px" src={item.hinhAnh} alt=""/>
            ))}
        </div>
       
        
        <img onClick={xuLyXucXac} style={{cursor:"pointer"}} className="mt-4" width="250px" src="./img_BauCua/soc.png" alt="soc"/>
    </div>
    )
}
