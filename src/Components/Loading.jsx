import React from 'react'

export default props =>
    <div className={props.show ? '' : 'hidden'}>
        <h1>
            Loading...
            <img src='r2.gif'
                alt="r2-d2" title="r2-d2" width="100"/>
        </h1>
    </div>