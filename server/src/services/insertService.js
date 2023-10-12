import db from '../models'
import bcrypt from 'bcryptjs'
import { v4 } from 'uuid'
require('dotenv').config()
import chothuecanho from '../../data/chothuecanho.json'
import chothuematbang from '../../data/chothuematbang.json'
import nhachothue from '../../data/nhachothue.json'
import chothuephongtro from '../../data/chothuephongtro.json'
import generateCode from '../utils/generateCode'

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))
const dataBody = chothuephongtro.body

export const insertService = () => new Promise(async (resolve, reject) => {
    try {
        dataBody.forEach(async item => {
            let postId = v4()
            let labelId = generateCode(item?.header?.class?.classType)
            let attributeId = v4()
            let userId = v4()
            let overviewId = v4()
            let imagesId = v4()
            await db.Post.create({
                id: postId,
                title: item?.header?.title,
                star: item?.header?.star,
                labelId,
                address: item?.header?.address,
                attributeId,
                categoryId: 'CTPT',
                description: JSON.stringify(item?.mainContent?.content),
                userId,
                overviewId,
                imagesId
            })
            await db.Attribute.create({
                id: attributeId,
                price: item?.header?.attributes?.price,
                acreage: item?.header?.attributes?.acreage,
                published: item?.header?.attributes?.published,
                hashtag: item?.header?.attributes?.hashtag,
            })
            await db.Image.create({
                id: imagesId,
                image: JSON.stringify(item?.images)
            })
            await db.Label.findOrCreate({
                where: { code: labelId },
                defaults: {
                    code: labelId,
                    value: item.header.class.classType
                }
            })
            await db.Overview.create({
                id: overviewId,
                code: item?.overview?.content.find(i => i.name === 'Mã tin:')?.content,
                area: item?.overview?.content.find(i => i.name === 'Khu vực')?.content,
                type: item?.overview?.content.find(i => i.name === 'Loại tin rao:')?.content,
                target: item?.overview?.content.find(i => i.name === 'Đối tượng thuê:')?.content,
                bonus: item?.overview?.content.find(i => i.name === 'Gói tin:')?.content,
                created: convertDateFormat(item?.overview?.content.find(i => i.name === 'Ngày đăng:')?.content).toString(),
                expired: convertDateFormat(item?.overview?.content.find(i => i.name === "Ngày hết hạn:")?.content).toString(),
            })

            await db.User.create({
                id: userId,
                name: item?.contact?.content.find(i => i.name === 'Liên hệ:')?.content,
                password: hashPassword('123456'),
                phone: item?.contact?.content.find(i => i.name === 'Điện thoại:')?.content,
                zalo: item?.contact?.content.find(i => i.name === 'Zalo')?.content
            })
        })
        resolve('Done.')
    } catch (error) {
        reject(error)
    }
})

function convertDateFormat(inputDate) {
    // Split the input date string into components
    const dateParts = inputDate.split(' ');
    const time = dateParts[0];
    const date = dateParts[1];

    // Split the time component into hours and minutes
    const [hours, minutes] = time.split(':');

    // Split the date component into day, month, and year
    const [day, month, year] = date.split('/');

    // Create a new Date object in the desired format
    const newDate = new Date(`${year}-${month}-${day}T${hours}:${minutes}`);

    // Format the newDate as "yyyy-mm-dd hh:mm"
    const formattedDate = newDate.toISOString().slice(0, 16).replace('T', ' ');

    return formattedDate;
}