import React, { useContext } from 'react'
import './productDetails.scss'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import Instagram from '../../components/instagram/Instagram'

const ProductDetails = ({id,name,price,description,image}) => {
  const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext)

  return (
    <>
    <div>
      <div className="container">
        <div className="mb-5 row">
          <div className="d-flex col-12 col-lg-5">
            <div className="mr-3">
              <img src={url+"/images/"+image} alt="" />
            </div>
          </div>
          <div className="d-flex flex-column justify-content-between col-12 col-lg-7">
            <div className="d-flex flex-column justify-content-between">
              <h6 className="text-muted">Shoes</h6>
              <h4 className="fw-bold">Shoes 1</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ultricies aliquam.</p>
              <div className="d-flex"><div className="d-flex flex-column mr-5 justify-content-between">
                <h6 className="fw-bold text-muted text-uppercase">Quantity</h6>
                <div className="quantity">
                  
                  <FontAwesomeIcon className="icon-FA cursor-pointer" icon={faMinus} onClick={() => cartItems[id]>1?removeFromCart(id):undefined}  />
                  <p>{cartItems[id]}</p>
                  
                  <FontAwesomeIcon className="icon-FA cursor-pointer" icon={faPlus} onClick={() => addToCart(id)} />
                </div>
              </div>
                <div className="d-flex flex-column">
                  <h6 className="fw-bold text-muted text-uppercase">Price</h6>
                  
                  <h6 className="fw-bold">20$</h6>
                </div>
              </div>
            </div>
            <div className="Product_buttonsWrapper___lKHy d-flex"><button type="button" className="flex-fill mr-4 text-uppercase fw-bold btn btn-outline-primary">Add to Cart</button>
              <a className="d-inline-block flex-fill" href='/cart'><button className="text-uppercase fw-bold btn btn-primary">Buy now</button></a></div></div></div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="product__details__tab">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#tabs-5"
                  role="tab">Description</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tabs-6" role="tab">Customer
                  Previews(5)</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tabs-7" role="tab">Additional
                  information</a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="tabs-5" role="tabpanel">
                <div className="product__details__tab__content">
                  <p className="note">Nam tempus turpis at metus scelerisque placerat nulla deumantos
                    solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis
                    ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo
                    pharetras loremos.</p>
                  <div className="product__details__tab__content__item">
                    <h5>Products Infomation</h5>
                    <p>A Pocket PC is a handheld computer, which features many of the same
                      capabilities as a modern PC. These handy little devices allow
                      individuals to retrieve and store e-mail messages, create a contact
                      file, coordinate appointments, surf the internet, exchange text messages
                      and more. Every product that is labeled as a Pocket PC must be
                      accompanied with specific software to operate the unit and must feature
                      a touchscreen and touchpad.</p>
                    <p>As is the case with any new technology product, the cost of a Pocket PC
                      was substantial during it’s early release. For approximately $700.00,
                      consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                      These days, customers are finding that prices have become much more
                      reasonable now that the newness is wearing off. For approximately
                      $350.00, a new Pocket PC can now be purchased.</p>
                  </div>
                  <div className="product__details__tab__content__item">
                    <h5>Material used</h5>
                    <p>Polyester is deemed lower quality due to its none natural quality’s. Made
                      from synthetic materials, not natural like wool. Polyester suits become
                      creased easily and are known for not being breathable. Polyester suits
                      tend to have a shine to them compared to wool and cotton suits, this can
                      make the suit look cheap. The texture of velvet is luxurious and
                      breathable. Velvet is a great choice for dinner party jacket and can be
                      worn all year round.</p>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tabs-6" role="tabpanel">
                <div className="product__details__tab__content">
                  <div className="product__details__tab__content__item">
                    <h5>Products Infomation</h5>
                    <p>A Pocket PC is a handheld computer, which features many of the same
                      capabilities as a modern PC. These handy little devices allow
                      individuals to retrieve and store e-mail messages, create a contact
                      file, coordinate appointments, surf the internet, exchange text messages
                      and more. Every product that is labeled as a Pocket PC must be
                      accompanied with specific software to operate the unit and must feature
                      a touchscreen and touchpad.</p>
                    <p>As is the case with any new technology product, the cost of a Pocket PC
                      was substantial during it’s early release. For approximately $700.00,
                      consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                      These days, customers are finding that prices have become much more
                      reasonable now that the newness is wearing off. For approximately
                      $350.00, a new Pocket PC can now be purchased.</p>
                  </div>
                  <div className="product__details__tab__content__item">
                    <h5>Material used</h5>
                    <p>Polyester is deemed lower quality due to its none natural quality’s. Made
                      from synthetic materials, not natural like wool. Polyester suits become
                      creased easily and are known for not being breathable. Polyester suits
                      tend to have a shine to them compared to wool and cotton suits, this can
                      make the suit look cheap. The texture of velvet is luxurious and
                      breathable. Velvet is a great choice for dinner party jacket and can be
                      worn all year round.</p>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tabs-7" role="tabpanel">
                <div className="product__details__tab__content">
                  <p className="note">Nam tempus turpis at metus scelerisque placerat nulla deumantos
                    solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis
                    ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo
                    pharetras loremos.</p>
                  <div className="product__details__tab__content__item">
                    <h5>Products Infomation</h5>
                    <p>A Pocket PC is a handheld computer, which features many of the same
                      capabilities as a modern PC. These handy little devices allow
                      individuals to retrieve and store e-mail messages, create a contact
                      file, coordinate appointments, surf the internet, exchange text messages
                      and more. Every product that is labeled as a Pocket PC must be
                      accompanied with specific software to operate the unit and must feature
                      a touchscreen and touchpad.</p>
                    <p>As is the case with any new technology product, the cost of a Pocket PC
                      was substantial during it’s early release. For approximately $700.00,
                      consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                      These days, customers are finding that prices have become much more
                      reasonable now that the newness is wearing off. For approximately
                      $350.00, a new Pocket PC can now be purchased.</p>
                  </div>
                  <div className="product__details__tab__content__item">
                    <h5>Material used</h5>
                    <p>Polyester is deemed lower quality due to its none natural quality’s. Made
                      from synthetic materials, not natural like wool. Polyester suits become
                      creased easily and are known for not being breathable. Polyester suits
                      tend to have a shine to them compared to wool and cotton suits, this can
                      make the suit look cheap. The texture of velvet is luxurious and
                      breathable. Velvet is a great choice for dinner party jacket and can be
                      worn all year round.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Instagram></Instagram>
    </>
  )
}

export default ProductDetails