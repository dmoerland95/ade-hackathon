import React from 'react'
import styled from 'styled-components'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import ActionButton from '../../common/ActionButton'
import Flex from '../../common/Flex'

const CenterDisplay = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
    
    box-sizing: border-box;

    background-color: ${props => props.theme.background};

    &>* {
        margin: 1rem;
    }
`

const Dashboard = ({ actions, firestore, user }) => {

    let handleAction = action => {
        console.log({ user, action })

        if (!user)
            return

        firestore.add({ collection: 'user_action' }, {
            user_id: user.id,
            action_id: action.id
        })
    }

    return (
        <CenterDisplay>
            <h1>Bracelet Actions</h1>
            <Flex>
                {actions.map(action => (
                    <ActionButton
                        key={action.id}
                        onClick={() => handleAction(action)}
                        score={action.points}
                    >
                        {action.label}
                    </ActionButton>
                ))}
            </Flex>

        </CenterDisplay>
    )
}

export default compose(
    firestoreConnect(['actions', 'users']),
    connect(state => ({
        actions: state.firestore.ordered.actions || [],
        user: Array.isArray(state.firestore.ordered.users)
            ? state.firestore.ordered.users.slice(-1)[0]
            : {}
    }))
)(Dashboard)