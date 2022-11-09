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
}

function query() {
    // return utilService.loadFromStorage(NOTE_KEY)
    return storageService.query(NOTE_KEY)
}

function get(mailId) {
    console.log(mailId);
    return storageService.get(NOTE_KEY, mailId)
}
function remove(mail, revId) {
    //     const mails = query()
    //     const idx = mails.findIndex(mail => mail.id === mailId)
    //     mails.splice(idx,1)
    //     utilService.saveToStorage(NOTE_KEY,mails)
    //   return storageService.remove(NOTE_KEY, mailId)
    return storageService.get(NOTE_KEY, mail.id)
        .then(mail => {
            const idx = mail.review.findIndex(rev => rev.id === revId)
            mail.review.splice(idx, 1)
            storageService.put(NOTE_KEY, mail)
            return mail
        })
}
function addReview(mailId, review) {
    review.id = utilService.makeId()
    return storageService.get(NOTE_KEY, mailId)
        .then(mail => {
            if (!mail.reviews) mail.reviews = []
            mail.reviews.push(review)
            return storageService.put(NOTE_KEY, mail)
        })
}
function removeReview(mailId, reviewId) {
    return storageService.get(NOTE_KEY, mailId)
        .then(mail => {
            mail.reviews = mail.reviews.filter(review => review.id !== reviewId)
            return storageService.put(NOTE_KEY, mail)
        })
}



function save(mail) {
    if (mail.id) {
        return storageService.put(GOOGLE_KEY, mail)
    } else {
        return storageService.post(GOOGLE_KEY, mail)
    }
}


function _makeId(length = 5) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

const loggedinUser = {
    email: 'user@appsus.com',
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
                        id:_makeId(),
                        type: "text-box",
                        isPinned: true,
                        info: { txt: "Fullstack Me Baby!" }
                    },
                    {
                        id: _makeId(),
                        type: "note-img",
                        info: {
                            url: "http://some-img/me",
                            title: "Bobi and Me"
                        },
                        style: { backgroundColor: "#00d" }
                    },
                    {
                        id: _makeId(),
                        type: "todos",
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
            // return emails
        })
}