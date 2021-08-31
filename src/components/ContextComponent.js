import { createContext, useContext } from "react"

// create the context that will share the data
//global storage container

//create Context
const ContactPhoneContext = createContext()
const ContactEmailContext = createContext()


const Header = ({}) =>{
    //use Context
    const phone = useContext(ContactPhoneContext)
    return (

            <header>
                <h1>Header</h1>
                {/* <ContactPhoneContext.Consumer> */}
                    {/* {value =><h2> {value} </h2>} */}
                    <h2>{phone}</h2>
                {/* </ContactPhoneContext.Consumer> */}

            </header>
    )
}


const Footer = ({}) =>{
    return (

            <footer>
                   <h2>Footer</h2>
                <ContactEmailContext.Consumer>
                    {value =><h3> {value} </h3>}
                </ContactEmailContext.Consumer>
            </footer>
    )
}










export {Header, Footer, ContactEmailContext, ContactPhoneContext}