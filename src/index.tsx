import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

//React element
// const title = React.createElement('h1', { id: 'title' }, 'Hello React')

//JSX

// const app = (
//     <div>
//         <h1 id="text">Hello App</h1>
//         <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
//             est ipsum quae amet! At omnis ea similique enim impedit sunt.
//         </p>
//     </div>
// )

//React component (виклик-ся як тег <App />)
const App = () => {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}

const Title = () => {
    return <h1>Hello App compoment</h1>
}
//React.Fragment or <> </>, це прибирає зайвий рівень вложеності <div>
const Content = () => {
    return (
        <React.Fragment>
            <p className = "blue">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                magnam numquam soluta repudiandae officia quaerat obcaecati
                maxime tempora enim culpa sed, aut eius dolores quis
                exercitationem animi quam eos optio?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                magnam numquam soluta repudiandae officia quaerat obcaecati
                maxime tempora enim culpa sed, aut eius dolores quis
                exercitationem animi quam eos optio?
            </p>
        </React.Fragment>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
