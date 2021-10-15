import React from 'react'
import ReactDOM  from 'react-dom'
//import ComponenteFuncional from './components/ComponenteFuncional';
//import ComponenteFuncionalComParams from './components/ComponenteFuncionalComParams'
import Multi,{ BoaNoite } from './components/Multi'

//ReactDOM.render(<ComponenteFuncional/>,document.getElementById('root'))
//passando paramentros para o componente
ReactDOM.render(<ComponenteFuncionalComParams nome="Componente com parametro"/>,document.getElementById('root'))
//usando multiplos componentes
ReactDOM.render(<div>
        <Multi.BoaTarde nome="Ana"/>
        <BoaNoite nome ="Maria"/>
        </div>,
        document.getElementById('root'))
