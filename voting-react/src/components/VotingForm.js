import React, { useState } from 'react'
import { Formik } from 'formik'
import Input from './Input'

export default function VotingForm({voting,onUpdate,onCancel,props}) {

    const [currVoting,setCurrVoting] = useState(voting)

    console.log(currVoting)

    return (
        <div>
            <Formik
            enableReinitialize={true}
            initialValues={{
                title: voting.title || '',
                option1: 
                    (voting.votes.length > 0) 
                        ? voting.votes[0].option
                        : '',
                option2: 
                    (voting.votes.length > 1) 
                        ? voting.votes[1].option
                        : '',
                option3: 
                    (voting.votes.length > 2) 
                        ? voting.votes[2].option
                        : '',
                option4: 
                    (voting.votes.length > 3) 
                        ? voting.votes[3].option
                        : '',
            }}
            validate={values => {
                const errors = {};
                if (!values.title) errors.title = 'Título é obrigatório'
                else if (values.title.length < 5) errors.title = 'Título inválido'

                if (!values.option1) errors.option1 = 'Campo obrigatório'
                if (!values.option2) errors.option2 = 'Campo obrigatório'

                return errors
            }}
            onSubmit={(values, { setSubmitting }) => {
                const options = [{option:values.option1,count:0},
                                {option:values.option2,count:0},
                                {option:values.option3,count:0},
                                {option:values.option4,count:0}
                            ].filter((item) => item.option.trim() !== '')
                
                voting.title = values.title
                voting.votes = options
                onUpdate(voting)
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit}>
                <Input
                    label='Título'
                    name='title'
                    placeholder='Insira o título da votação'
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isRequired={true}
                    errors={errors}
                    touched={touched}
                />
                
                <Input
                    label='Opção 1'
                    name='option1'
                    placeholder='Insira a opção 1'
                    value={values.option1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isRequired={true}
                    errors={errors}
                    touched={touched}
                />

                <Input
                    label='Opção 2'
                    name='option2'
                    placeholder='Insira a opção 2'
                    value={values.option2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isRequired={true}
                    errors={errors}
                    touched={touched}
                />

                <Input
                    label='Opção 3'
                    name='option3'
                    placeholder='Insira a opção 3'
                    value={values.option3}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isRequired={false}
                    errors={errors}
                    touched={touched}
                />

                <Input
                    label='Opção 4'
                    name='option4'
                    placeholder='Insira a opção 4'
                    value={values.option4}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isRequired={false}
                    errors={errors}
                    touched={touched}
                />
                
                <button type='submit' disabled={isSubmitting}>Enviar</button>
                <button onClick={() => onCancel()}>Cancelar</button>
                </form>
            )}
            </Formik>
        </div>
    );
}