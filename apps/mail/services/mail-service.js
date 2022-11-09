// import { utilService } from "./util-service.js"
import { storageService } from '../../../services/async-storage.service.js'

const MAIL_KEY = 'mailDB'
_createMails()


export const mailService = {
    query,
    remove,
    save,
    get,
    addReview,
    removeReview,
    addGoogleMail
    // getEmptyMail,
}

function query() {
    // return utilService.loadFromStorage(MAIL_KEY)
    return storageService.query(MAIL_KEY)
}

function get(mailId) {
    console.log(mailId);
    return storageService.get(MAIL_KEY, mailId)
}
function remove(mail, revId) {
    //     const mails = query()
    //     const idx = mails.findIndex(mail => mail.id === mailId)
    //     mails.splice(idx,1)
    //     utilService.saveToStorage(MAIL_KEY,mails)
    //   return storageService.remove(MAIL_KEY, mailId)
    return storageService.get(MAIL_KEY, mail.id)
        .then(mail => {
            const idx = mail.review.findIndex(rev => rev.id === revId)
            mail.review.splice(idx, 1)
            storageService.put(MAIL_KEY, mail)
            return mail
        })
}
function addReview(mailId, review) {
    review.id = utilService.makeId()
    return storageService.get(MAIL_KEY, mailId)
        .then(mail => {
            if (!mail.reviews) mail.reviews = []
            mail.reviews.push(review)
            return storageService.put(MAIL_KEY, mail)
        })
}
function removeReview(mailId, reviewId) {
    return storageService.get(MAIL_KEY, mailId)
        .then(mail => {
            mail.reviews = mail.reviews.filter(review => review.id !== reviewId)
            return storageService.put(MAIL_KEY, mail)
        })
}



function save(mail) {
    if (mail.id) {
        return storageService.put(GOOGLE_KEY, mail)
    } else {
        return storageService.post(GOOGLE_KEY, mail)
    }
}
// function getEmptyMail(){
//     return {id: '', title: '', price: 0 }
// }

function addGoogleMail(googleMail) {
    storageService.get(MAIL_KEY, googleMail.id)
        .then(mail => {
            if (!mail) {
                storageService.post(MAIL_KEY, googleMail, false)
            }
            else {
                console.log('Mail Already Exists:')
                console.log(mail);
            }
        })
        .catch(err => console.log('Error adding mail', err))
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

function _createMails() {
    let emails = storageService.query(MAIL_KEY)
        .then(mails => {
            if (!mails || !mails.length) {
                console.log('hello')
                mails = [
                    {
                        id:  _makeId(),
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: false,
                        sentAt: 1551133930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com'
                    },
                    {
                        id: _makeId(),
                        subject: 'Lov you!',
                        body: 'Hello there How are You',
                        isRead: false,
                        sentAt: 1551133930594,
                        from: 'YOYOYYOo@momo.com',
                        to: 'user@appsus.com'
                    },
                    {
                        id:  _makeId(),
                        subject: 'Kill you!',
                        body: 'This is templete string',
                        isRead: false,
                        sentAt: 1551133930594,
                        from: 'ALDKSJALKD@momo.com',
                        to: 'user@appsus.com'
                    },
                    {
                        id:  _makeId(),
                        subject: 'Lala you!',
                        body: 'Lorem ipsum just for fun',
                        isRead: false,
                        sentAt: 1551133930594,
                        from: 'NVMCXNVC@momo.com',
                        to: 'user@appsus.com'
                    },
                    {
                        id:  _makeId(),
                        subject: 'Lala you!',
                        body: 'Lorem ipsum just for fun',
                        isRead: false,
                        sentAt: 1551133930594,
                        from: 'user@appsus.com',
                        to: 'JONNY@appsus.com'
                    },
                    {
                        id:  _makeId(),
                        subject: 'Lala you!',
                        body: 'Lorem ipsum just for fun',
                        isRead: false,
                        sentAt: 1551133930594,
                        from: 'user@appsus.com',
                        to: 'SHLOMI@appsus.com'
                    },
                ]
                emails = mails
                storageService.put(MAIL_KEY, emails)

            }
            // return emails
        })
}















