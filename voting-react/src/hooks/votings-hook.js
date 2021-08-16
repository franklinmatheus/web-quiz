import { useState } from 'react'

const temp = 
[
  { title:'Pink Floyd é a melhor banda de Rock britânica?',
    state:'open',
    votes: [
      {'option':'Sim','count':10},
      {'option':'Não','count':2}
    ] 
  },
  { title:'Segunda votação?',
    state:'open',
    votes: [
      {'option':'Sim','count':10},
      {'option':'Não','count':2},
      {'option':'Talvez','count':2}
    ] 
  },
]
export default function VotingsData() {
  
  const [votings,setVotings] = useState(temp)

  const createVoting = () => {
    const newVoting = {title:'',state:'open',votes:[]}
    setVotings([...votings, newVoting])
  }

  const updateVoting = (voting,index) => {
    setVotings([
      ...votings.slice(0,index),
      voting,
      ...votings.slice(index + 1)
    ])
  }

  const deleteVoting = (index) => {
    setVotings([...votings.slice(0,index),...votings.slice(index + 1)])
  }

  return {votings,createVoting,updateVoting,deleteVoting}
}
