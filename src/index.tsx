import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Title from './Title'

const App = () => {
    return (
        <>
            <Title title="App" />
            <Title title="React" num={1} />
            <Content />
        </>
    )
}

const Content = () => {
    return (
        <React.Fragment>
            <p className="blue">
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
