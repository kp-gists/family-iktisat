import {
  FaBaby,
  FaHome,
  FaShoppingCart,
  FaTrain,
  FaUmbrellaBeach
} from 'react-icons/fa'
import { TbHomeCheck, TbShoppingCartHeart } from 'react-icons/tb'
import {
  GiCat,
  GiClothes,
  GiMedicines,
  GiPartyPopper,
  GiPriceTag,
  GiShoppingCart
} from 'react-icons/gi'
import { FiGithub } from 'react-icons/fi'
import { FaFirefoxBrowser } from 'react-icons/fa'
import {
  BiCodeAlt,
  BiCut,
  BiRestaurant,
  BiSolidPlaneAlt,
  BiSolidShoppingBag,
  BiSolidShoppingBags
} from 'react-icons/bi'
import { TbSquareRoundedLetterE } from 'react-icons/tb'
import { IoMdCodeDownload } from 'react-icons/io'
import {
  BsCarFrontFill,
  BsCodeSquare,
  BsFillBusFrontFill,
  BsFillFuelPumpDieselFill,
  BsGiftFill,
  BsHospital
} from 'react-icons/bs'
import { GiCook } from 'react-icons/gi'
import { MdFamilyRestroom, MdOutlineMonetizationOn } from 'react-icons/md'

const defaultStyle = 'text-2xl'

// TODO icons by category most used ones

const iconsMap: Record<string, JSX.Element> = {
  cat: <GiCat className={defaultStyle} />,
  website: <FaFirefoxBrowser className={defaultStyle} />,
  priceTag: <GiPriceTag className={defaultStyle} />,
  github: <FiGithub className={defaultStyle} />,
  barber: <BiCut className={defaultStyle} />,
  clothes: <GiClothes className={defaultStyle} />,
  eatingOut: <BiRestaurant className={defaultStyle} />,
  fuel: <BsFillFuelPumpDieselFill className={defaultStyle} />,
  entertainment: <GiPartyPopper className={defaultStyle} />,
  family: <MdFamilyRestroom className={defaultStyle} />,
  kids: <FaBaby className={defaultStyle} />,
  gifts: <BsGiftFill className={defaultStyle} />,
  holidays: <FaUmbrellaBeach className={defaultStyle} />,
  home: <FaHome className={defaultStyle} />,
  market: <GiShoppingCart className={defaultStyle} />,
  shoppingBag: <BiSolidShoppingBag className={defaultStyle} />,
  shoppingCart: <GiShoppingCart className={defaultStyle} />,
  travelPlane: <BiSolidPlaneAlt className={defaultStyle} />,
  travelBus: <BsFillBusFrontFill className={defaultStyle} />,
  travelCar: <BsCarFrontFill className={defaultStyle} />,
  transport: <FaTrain className={defaultStyle} />,
  hospital: <BsHospital className={defaultStyle} />,
  medicine: <GiMedicines className={defaultStyle} />,
  monetize: <MdOutlineMonetizationOn className={defaultStyle} />
}
export default function getIcon(iconName: string) {
  return iconsMap[iconName] ? iconsMap[iconName] : iconsMap['priceTag']
}
