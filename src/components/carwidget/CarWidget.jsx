import { MdOutlineShoppingCart } from "react-icons/md";
import Badge from 'react-bootstrap/Badge';
const Carwidget =({ind})=>{
  return(
    <>
    <MdOutlineShoppingCart fontSize={"2rem"}/>
    <Badge>{ind}</Badge>
    </>
  )
}
export default Carwidget;