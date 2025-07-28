import { Margin } from "@mui/icons-material"

function Home(){
    return(
        <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/sthaneka/SVM/ncq/2X_buasdhuif._CB795788272_.jpg" alt="Banner" width="1200px"  height="400px" ></img>
        </div>
    )
}

function About(){
    return(
        <div>
            <p>This page is about us</p>
        </div>
    )
}

function Error(){
    return(
        <div>
            You can not access this page.......
        </div>
    )
    
}

export {Home, About, Error}