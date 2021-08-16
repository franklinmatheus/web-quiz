import React, { useState } from 'react'
import VotingsData from '../hooks/votings-hook'
import VotingCard from './VotingCard'
import VotingForm from './VotingForm'

export default function Votings() {

    const [state,setState] = useState('listing')
    const [current,setCurrent] = useState(null)

    const {votings,createVoting,updateVoting,deleteVoting} = VotingsData()

    function newVoting() {
        createVoting()
        setCurrent(votings.length)
        setState('new')
    }

    function editVoting(index) {
        setCurrent(index)
        setState('edit')
    }

    function removeVoting(index) {
        deleteVoting(index)
    }

    function openVoting(index) {
        setCurrent(index)
        setState('open')
    }

    function updateChanges(voting) {
        updateVoting(voting,current)
        setState('listing')
    }

    function cancelChanges() {
        if (state === 'new') deleteVoting(votings.length-1)
        setState('listing')
    }

    function goBack() {
        setState('listing')
    }

    let content

    if (state === 'open') {
        content = (
            <VotingCard 
                title={votings[current].title} 
                state={votings[current].state}
                votes={votings[current].votes}
            />
        )

        return (
            <div>
                {content}
                <button onClick={() => goBack()}>Voltar</button>
            </div>
        )
    } else if (state === 'new' || state === 'edit') {
        content = ( 
            <VotingForm 
                onUpdate={(voting) => updateChanges(voting)}
                onCancel={() => cancelChanges()}
                voting={votings[current]}
            />
        )
        return (
            <div>
                <h1>Formulário de votação</h1>
                {content}
            </div>
        );

    } else { // listing
        let list = votings.map((item,index) => 
            <p class='vote' key={index+item.title}>
                {item.title}
                {item.votes.map((item,index) =>
                    <span class='option' key={index}>{item.option} ({item.count})</span>
                )}
                <br/>
                <button class='listing' onClick={() => editVoting(index)}>Editar</button>
                <button class='listing' onClick={() => removeVoting(index)}>Remover</button>
                <button class='listing' onClick={() => openVoting(index)}>Abrir</button>
            </p>
        )

        content = (
            <div>
                <p><button class='new' onClick={() => newVoting()}>Nova votação</button></p>
                {list}
            </div>
        )

        return (
            <div>
                <h1>Votações</h1>
                {content}
            </div>
        );
    }
}