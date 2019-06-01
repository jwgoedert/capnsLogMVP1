export const createEntry = (entry) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //gonna fetch stuff here later....
        const firestore = getFirestore();
        firestore.collection('entries').add({
            ...entry,
            firstName: 'James',
            lastName: 'Goedert',
            userName: 'captainTest',
            email: 'jwgoedert@gmail.com',
            authorId: 1235,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_ENTRY', entry });
        }).catch((err) => {
            dispatch({type:'CREATE_ENTRY_ERROR', err});
        })
    }
}