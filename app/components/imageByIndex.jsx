import nftmarket1 from '../assets/nftmarket1.png'
import nftmarket2 from '../assets/nftmarket2.png'


export const images = [nftmarket1, nftmarket2]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
