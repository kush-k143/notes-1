import React from 'react'
import styled from 'styled-components'

export default function NoteColumn() {
    return (
        <ColumnWrapper> 
       <div className="container-fluid text-center d-none d-lg-block">
            <div className="row my-4">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"></p>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Title</p>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Content</p>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Updated Date</p>
                </div>
             </div>
        </div>
       </ColumnWrapper> 
    )
}

const ColumnWrapper = styled.div`
font-family: 'Oswald', sans-serif !important;
font-size: 1.5rem;
`;