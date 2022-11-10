// import { utilService } from "./util-service.js"
import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'
_createNotes()


export const noteService = {
    query,
    remove,
    save,
    get,
    addReview,
    removeReview,
    makeId,
}

function query() {
    // return utilService.loadFromStorage(NOTE_KEY)
    return storageService.query(NOTE_KEY)
}

function get(noteId) {
    console.log(noteId);
    return storageService.get(NOTE_KEY, noteId)
}
// function remove(note, revId) {
//     //     const notes = query()
//     //     const idx = notes.findIndex(note => note.id === noteId)
//     //     notes.splice(idx,1)
//     //     utilService.saveToStorage(NOTE_KEY,notes)
//     //   return storageService.remove(NOTE_KEY, noteId)
//     return storageService.get(NOTE_KEY, note.id)
//         .then(note => {
//             const idx = note.review.findIndex(rev => rev.id === revId)
//             note.review.splice(idx, 1)
//             storageService.put(NOTE_KEY, note)
//             return note
//         })
// }

function remove(noteId) {
    console.log(noteId)
    return storageService.remove(NOTE_KEY, noteId)
}
function addReview(noteId, review) {
    review.id = utilService.makeId()
    return storageService.get(NOTE_KEY, noteId)
        .then(note => {
            if (!note.reviews) note.reviews = []
            note.reviews.push(review)
            return storageService.put(NOTE_KEY, note)
        })
}
function removeReview(noteId, reviewId) {
    return storageService.get(NOTE_KEY, noteId)
        .then(note => {
            note.reviews = note.reviews.filter(review => review.id !== reviewId)
            return storageService.put(NOTE_KEY, note)
        })
}



function save(note) {
    console.log(note);
    if (note.id) {
        return storageService.putNote(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}


function makeId(length = 5) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

const loggedinUser = {
    enote: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

function _createNotes() {
    console.log('hey')
    let notes = storageService.query(NOTE_KEY)
        .then(note => {
            if (!note || !note.length) {
                console.log('hello')
                note = [
                    {
                        id:makeId(),
                        type: "text-box",
                        isPinned: true,
                        isEdit: false,
                        isColor:false,
                        color:'green',
                        info: { txt: "Fullstack Me Baby!" }
                    },
                    {
                        id: makeId(),
                        type: "note-img",
                        isEdit: false,
                        isColor:false,
                        color:'green',
                        info: {
                            url: "assets/img/03.jpg",
                            title: "Bobi and Me"
                        },
                        style: { backgroundColor: "#00d" }
                    },
                    {
                        id: makeId(),
                        type: "todos",
                        isEdit: false,
                        isColor:false,
                        color:'green',
                        info: {
                            label: "Get my stuff together",
                            todos: [
                                { txt: "Driving liscence", doneAt: null },
                                { txt: "Coding power", doneAt: 187111111 }
                            ]
                        }
                    }

                ]
                notes = note
                storageService.put(NOTE_KEY, notes)

            }
            // return enotes
        })
}