import React from 'react'
import ReactDOM  from 'react-dom'
import ComponenteFuncional from './components/ComponenteFuncional';
import ComponenteFuncionalComParams from './components/ComponenteFuncionalComParams'
//ReactDOM.render(<ComponenteFuncional/>,document.getElementById('root'))
//passando paramentros para o componente
ReactDOM.render(<ComponenteFuncionalComParams nome="Componente com parametro"/>,document.getElementById('root'))
