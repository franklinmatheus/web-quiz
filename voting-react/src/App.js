import './App.css'
import VotingCard from './components/VotingCard'

const title = 'Pink Floyd é a melhor banda de Rock britânica?'
const votes = [
    {'option':'Sim','count':10},
    {'option':'Não','count':2}
]

export default function App() {
    return (
        <div>
            <VotingCard 
                title={title} 
                state='open'
                votes={votes}
            />
        </div>
    );
}