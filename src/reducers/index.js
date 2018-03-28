const initialState = [
    {
        id: 0,
        title: 'very_looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong_name_of_flower',
        url: 'http://foto-cvetov.com/rozy/rozy_50.jpg'
    }, {
        id: 3,
        title: 'brutal',
        url: 'http://www.mobilmusic.ru/mfile/ac/fe/cf/1314840-960.jpg'
    }, {
        id: 5,
        title: 'русский котик',
        url: 'https://tgrm.su/img/stickers/catpower/1.jpg'
    }
];

export default function picstate(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PIC': {
            return state.concat({
                id: action.id,
                title: action.title,
                url: action.url
            })
        }
        case 'DELETE_PIC': {
            return state.filter(p=>p.id!=action.id)
        }
        default:
            return state;
    }
}