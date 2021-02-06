import Nav from "../header/NavBar";

interface Props{
    children:any;
}

export default function Layout(props:Props){
    return <div>
        <Nav/>
            
        {props.children}
    </div>;
}



// style={{
//     width:'100%',
//     height:'10vh',
//     backgroundColor:'black',
// }}>
//     {props.children}