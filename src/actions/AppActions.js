export function addPic(title, url, id) {

    return {
        type: 'ADD_PIC',
        title: title,
        url: url,
        id: id
    }

}

export function deletePic(id) {

    return {
        type: 'DELETE_PIC',
        id: id
    }

}