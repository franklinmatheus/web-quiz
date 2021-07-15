// O resultado da votação: que irá apresentar ao usuário a contagem de votos, com seus percentuais.

import React from 'react'

export default function VotingResult(props) {
    const totalVotes = props.votes.reduce((sum, item) => {return sum + item.count}, 0)
    
    const results = props.votes.map((item,index) => 
            <li key={index}>{item.option}: {item.count} votes ({(item.count/totalVotes*100).toFixed(2)}%)</li>
        )

    return (
        <div><ol>{results}</ol></div>
    )
}