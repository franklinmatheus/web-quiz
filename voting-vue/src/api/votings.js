import { reactive } from 'vue'

const defaultValue = [
    { 
        title:'Pink Floyd é a melhor banda de Rock britânica?',
        state:'open',
        votes: [
            {'option':'Sim','count':10},
            {'option':'Não','count':2}
        ] 
    },
    { 
        title:'Segunda votação?',
        state:'open',
        votes: [
            {'option':'Sim','count':10},
            {'option':'Não','count':2},
            {'option':'Talvez','count':2}
        ] 
    },
]

const votings = reactive([defaultValue])

export function createVoting() {
  votings.push({title:'',state:'open',votes:[]})
}

export function updateVoting(voting, index) {
  votings[index] = voting
}

export function deleteVoting(index) {
  votings.splice(index, 1)
}
