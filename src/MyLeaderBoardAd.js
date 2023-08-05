import React, { Component  } from 'react'


const MyLeaderBoardAd = () => (

    componentDidMount() {
     (window.adsbygoogle = window.adsbygoogle || []).push({})
    }

   render () {
    return(
        <div>
        <ins className = "adsbygoogle"
                style = { {display:"inline-block",width:"728px",height:"90px"} }
                data-ad-client = "ca-pub-6389784149267865"
                data-ad-slot = "6486641123"></ins>
        </div>)
    }
)

export default MyLeaderBoardAd
