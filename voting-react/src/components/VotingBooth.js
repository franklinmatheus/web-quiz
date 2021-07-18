/* A cabine de votação: que irá receber o voto do usuário. 
 * Ele recebe como parâmetro (propriedade) as opções, e gera como saída (evento) a opção que o usuário escolher.
 */

import React from 'react'
import PropTypes from 'prop-types'

export default function VotingBooth({options, onVote, ...props}) {
    const buttons = options.map((item,index) => 
            <button key={index} onClick={() => onVote(index)}>
                {item}
            </button>
        )

    return (
        <div key='0'>{buttons}</div>
    )
}

VotingBooth.propTypes = {
    options: PropTypes.array,
    onVote: PropTypes.func
}