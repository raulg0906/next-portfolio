import opentable1 from '../assets/opentable/opentable1.png'
import opentable2 from '../assets/opentable/opentable2.png'


export const images = [opentable1, opentable2]

const imageByIndexOT = (index) => images[index % images.length]

export default imageByIndexOT
