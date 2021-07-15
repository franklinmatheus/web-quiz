// O resultado da votação: que irá apresentar ao usuário a contagem de votos, com seus percentuais.

import React from 'react'
import PropTypes from 'prop-types'

export default function VotingResult({votes, ...props}) {
    const totalVotes = votes.reduce((sum, item) => {return sum + item.count}, 0)
    
    const results = votes.map((item,index) => 
            <li key={index}>
                {item.option}: {item.count} votes ({(item.count/totalVotes*100).toFixed(2)}%)
            </li>
        )

    return (
        <div><ol>{results}</ol></div>
    )
}

VotingResult.propTypes = {
    votes: PropTypes.array
}