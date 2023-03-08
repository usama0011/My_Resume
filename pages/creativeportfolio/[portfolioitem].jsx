import { useRouter } from 'next/router'
import styles from '../../styles/SingleProduct.module.css'
import AllListItem from '../../components/PortfolioData.json'
import Image from 'next/image'
import TechnologCard from '../../components/TechnologCard'
const SingleItem = () => {
    const router = useRouter();
    let result = parseInt(router.query.portfolioitem);
    let renderingItem = AllListItem.find((item)=>item.id === result);
    console.log(result);
  return (
    <div className={styles.container}>
       <div className={styles.product_UpperContainer}>
        <div className={styles.imageContainer}>
            <h2>Project OverView</h2>
            <Image src={renderingItem?.image} className={styles.singleImage} width={300} height={300} alt="product Image"/>
        </div>
        <div className={styles.technologyContainer}><h2>Project Technology(stack)</h2>
        <div className={styles.details}>
        <TechnologCard source="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge-700x700.png" tName="HTML-5" />
        <TechnologCard source="https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png" tName="CSS-3" />
        <TechnologCard source="https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png" tName="JavaScript" />
        <TechnologCard source="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" tName="React JS" />
        <TechnologCard source="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png" tName="Redux JS" />
        </div>
        </div>
       </div>
       <div className={styles.product_BottomContainer}>
        <h2>Full Stack Ecommerce Website</h2>
        <br />
        <h3>Project Detail Description</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magnam accusamus maiores in ad, ut laboriosam aspernatur voluptas eius provident! Debitis molestias non fugit magnam eaque voluptatum quo vel aut explicabo maxime rem quaerat ex vitae ad dicta reiciendis repudiandae omnis, aliquid iste quod consequuntur! Ad culpa nihil architecto voluptatem voluptates molestiae esse, magnam nobis quia sint, voluptate blanditiis, voluptatum consectetur enim? Architecto corporis hic natus eos rem eius vitae iure. Culpa impedit amet dicta nam rerum commodi officia sint odio fugit, deleniti perspiciatis, quia hic nulla numquam quae nemo vel repellat accusamus libero quidem doloribus sapiente quisquam. Vitae, magni.</p>
           <br />
         <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid sint iste iusto optio odio magnam vel culpa, accusamus sit sapiente fuga natus alias earum repudiandae modi? Fugit, quibusdam maiores.1</p>
           <br />
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas cupiditate obcaecati iste ipsum aut commodi porro magnam molestiae accusantium exercitationem adipisci est quia pariatur. Obcaecati quis amet id inventore nemo dolorem velit harum officiis, iusto qui cum quisquam temporibus ea dicta. Vero quis similique corporis, modi, rem ratione quia eos tempora eius exercitationem sed quae expedita in, repudiandae minus nesciunt! Temporibus saepe similique quibusdam sapiente possimus ducimus, repellat dolores.</p>
    </div>
    <div className={styles.buttons_Container}>
      <button>View on Github</button>
      <button>Show Demo Pages</button>
    </div>
    </div>
  )
}

export default SingleItem
