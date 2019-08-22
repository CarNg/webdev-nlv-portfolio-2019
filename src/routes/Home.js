import React from 'react'
//Components
import Welcome from '../components/Welcome/Welcome'
import Loading from '../components/Loading/Loading'

export default function Home() {
    return (
        <div className="pageWrapper">
            <Welcome />
            <Loading loadingText="Shhhh" hideShow="hide" />
        </div>
    )
}
