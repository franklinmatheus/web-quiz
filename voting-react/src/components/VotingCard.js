/* O card de votação: recebe como parâmetro (props) um título, o estado ("open" ou "closed") 
 * e um array com as opções contendo o texto e o número de votos atuais.
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'

import VotingBooth from './VotingBooth'
import VotingResult from './VotingResult'

export default function VotingCard({title, state, votes, ...props}) {
    
    const [quizState,setQuizState] = useState(state)
    const [quizOptions,setQuizOptions] = useState(votes)

    const options = votes.map(item => item.option)

    function vote(voteIndex) {
        quizOptions[voteIndex]['count'] = quizOptions[voteIndex]['count'] + 1
        setQuizState('closed')
        setQuizOptions(quizOptions)
    }

    let content

    if (quizState === 'open') {
        content = (
            <VotingBooth options={options} onVote={vote} />
        )
    } else if (quizState === 'closed') {
        content = (
            <VotingResult votes={quizOptions} />
        )
    } else {
        content = (
            <p>[wrong state] {quizState}</p>
        )
    }

    return (
        <div className={quizState === 'open' ? 'vote card' : 'vote result'}>
            <h3><b>{title}</b></h3>
            {content}
        </div>
    )
}

VotingCard.propTypes = {
    title: PropTypes.string,
    state: PropTypes.string,
    votes: PropTypes.array
}