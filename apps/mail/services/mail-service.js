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
    addGoogleMail,
    getEmptyMail,
    // getEmptyMail,
}

function query() {
    // return utilService.loadFromStorage(MAIL_KEY)
    return storageService.query(MAIL_KEY)
}

function get(mailId) {
    // console.log(mailId);
    return storageService.get(MAIL_KEY, mailId)
}


function remove(mailId) {
    console.log('mailId',mailId)
    return storageService.remove(MAIL_KEY, mailId)
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
        return storageService.put(MAIL_KEY, mail)
    } else {
        return storageService.post(MAIL_KEY, mail)
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


function getEmptyMail(subject='', body='',to='') {
    return { id: '', subject, body,to}
}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

function _createMails() {
    let emails = storageService.query(MAIL_KEY)
        .then(mails => {
            if (!mails || !mails.length ) {
                // console.log('hello')
                mails = [
                    {
                        id:  _makeId(),
                        name: 'Shlomi Bazar',
                        imgUrl: 'https://lh3.googleusercontent.com/a-/ACNPEu-9hksrEHtZfp-8jOm3w0GJCIlceybewcJnH76c=s80-p',
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: true,
                        sentAt: 1551111930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com'
                    },
                    {
                        id: _makeId(),
                        name: 'Shlomi Bazar',
                        imgUrl: 'https://lh3.googleusercontent.com/a-/ACNPEu-9hksrEHtZfp-8jOm3w0GJCIlceybewcJnH76c=s80-p',
                        subject: 'Lov you!',
                        body: 'Hello there How are You',
                        isRead: true,
                        sentAt: 1552222930594,
                        from: 'YOYOYYOo@momo.com',
                        to: 'user@appsus.com'
                    },
                    {
                        id:  _makeId(),
                        name: 'Shlomi Bazar',
                        imgUrl: 'https://lh3.googleusercontent.com/a-/ACNPEu-9hksrEHtZfp-8jOm3w0GJCIlceybewcJnH76c=s80-p',
                        subject: 'Kill you!',
                        body: 'This is templete string',
                        isRead: false,
                        sentAt: 1553333930594,
                        from: 'ALDKSJALKD@momo.com',
                        to: 'user@appsus.com'
                    },
                    {
                        id:  _makeId(),
                        name: 'Shlomi Bazar',
                        imgUrl: 'https://lh3.googleusercontent.com/a-/ACNPEu-9hksrEHtZfp-8jOm3w0GJCIlceybewcJnH76c=s80-p',
                        subject: 'Lala you!',
                        body: 'Lorem ipsum just for fun',
                        isRead: false,
                        sentAt: 1554444930594,
                        from: 'NVMCXNVC@momo.com',
                        to: 'user@appsus.com'
                    },
                    {
                        id:  _makeId(),
                        name: 'Shlomi Bazar',
                        imgUrl: 'https://lh3.googleusercontent.com/a-/ACNPEu-9hksrEHtZfp-8jOm3w0GJCIlceybewcJnH76c=s80-p',
                        subject: 'I Love Meir!',
                        body: 'he is so funny and cute',
                        isRead: false,
                        sentAt: 1555555930594,
                        from: 'user@appsus.com',
                        to: 'JONNY@appsus.com'
                    },
                    {
                        id:  _makeId(),
                        name: 'Shlomi Bazar',
                        imgUrl: 'https://lh3.googleusercontent.com/a-/ACNPEu-9hksrEHtZfp-8jOm3w0GJCIlceybewcJnH76c=s80-p',
                        subject: 'where is oved ?!',
                        body: 'ask for help then dissaper',
                        isRead: false,
                        sentAt: 1556633930594,
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















