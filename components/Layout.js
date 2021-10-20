import Nav from "./Nav";

const Layout = (props) => {
    return(
        <div className="container">
            <Nav />             

            <div className="bodyContent">
                {props.children}            
            </div>

            <style jsx>{`
                .container{
                    width: 1170px;
                    margin: 0px auto;
                }
                .bodyContent{
                    margin-top: 20px;
                }
            `}
            </style>
        </div>
    )
};

export default Layout;