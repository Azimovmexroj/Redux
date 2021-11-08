const initalState = [
    {
        id:0,
        name:"Abror",
        email:"abror@gmail.com",
        number:"12345"
    },
    {
        id:1,
        name:"G'ani",
        email:"gami@mail.ru",
        number:"54321"
    }
]

const contactReducer = (state = initalState, action) => {
    switch (action.type){
        case "ADD_CONTACT":
            state =[...state, action.payload];
            return state;
            case 'UPDATE_CONTACT':
                const updateState = state.map(contact => contact.id === action.payload.id ? action.payload: contact);
                state = updateState;
                return state;       
                case "DELETE_CONTACT":
                    const finterContacts = state.filter(contact => contact.id !== action.payload && contact);
                    state = finterContacts;
                    return state;

                    default: 
                    return state
    }
}

export default  contactReducer;