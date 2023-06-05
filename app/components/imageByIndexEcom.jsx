import Ecom1 from '../assets/Ecom1.png'
import Ecom2 from '../assets/Ecom2.png'


export const images = [Ecom1, Ecom2]

const imageByIndexEcom = (index) => images[index % images.length]

export default imageByIndexEcom
