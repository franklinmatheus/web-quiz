import { writable } from 'svelte/store'

const defaultValues = 
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

export function createVotings() {
    const {subscribe,update} = writable(defaultValues)

    function createVoting() {
        update((list) => [...list,{title:'',state:'open',votes:[]}])
    }

    function updateVoting(voting, index) {
        update((list) => [
        ...list.slice(0, index), 
        voting, 
        ...list.slice(index + 1) 
        ])
    }
    
    function deleteVoting(index) {
        update((list) => [
        ...list.slice(0, index), 
        ...list.slice(index + 1) 
        ])
    }

    return {subscribe,createVoting,updateVoting,deleteVoting}
}
