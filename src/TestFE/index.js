import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
export default class TestFE extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            products: [
                {
                  "handle": "ega-botconn",
                  "id": 1,
                  "title": "egaBotConn",
                  "vendor": "EGANY",
                  "tags": "platform__cross-platform, type__apps, doc__ega-botconn, demo__https://egany.com",
                  "image": {
                    "id": 11,
                    "src": "https://picsum.photos/id/14/600"
                  },
                  "variants": [
                    {
                      "id": 111,
                      "sku": "egabotconn",
                      "price": "0",
                      "compare_at_price": "0",
                      "inventory_management": null,
                      "inventory_policy": "deny",
                      "inventory_quantity": 1
                    }
                  ]
                },
                {
                  "handle": "ega-shop",
                  "id": 2,
                  "title": "egaShop",
                  "vendor": "EGANY",
                  "tags": "platform__haravan_sapo_cross-platform, type__apps, doc__ega-shop, demo__https://egany.com",
                  "image": {
                    "id": 22,
                    "src": "https://picsum.photos/id/15/600"
                  },
                  "variants": [
                    {
                      "id": 222,
                      "sku": "egashop",
                      "price": "149000",
                      "compare_at_price": "199000",
                      "inventory_management": null,
                      "inventory_policy": "deny",
                      "inventory_quantity": 1
                    }
                  ]
                },
                {
                  "handle": "ega-countdown",
                  "id": 3,
                  "title": "egaCountdown",
                  "vendor": "EGANY",
                  "tags": "platform__haravan_cross-platform, type__apps, doc__ega-countdown, demo__https://egany.com",
                  "image": {
                    "id": 33,
                    "src": "https://picsum.photos/id/16/600"
                  },
                  "variants": [
                    {
                      "id": 333,
                      "sku": "egabotconn",
                      "price": "99000",
                      "compare_at_price": "149000",
                      "inventory_management": "manual",
                      "inventory_policy": "allow",
                      "inventory_quantity": 0
                    }
                  ]
                },
                {
                  "handle": "ega-salebox",
                  "id": 4,
                  "title": "egaSaleBox",
                  "vendor": "EGANY",
                  "tags": "platform__haravan_cross-platform, type__apps, doc__ega-salebox, demo__https://egany.com",
                  "image": {
                    "id": 44,
                    "src": "https://picsum.photos/id/14/600"
                  },
                  "variants": [
                    {
                      "id": 444,
                      "sku": "egasalebox",
                      "price": "99000",
                      "compare_at_price": "149000",
                      "inventory_management": "manual",
                      "inventory_policy": "allow",
                      "inventory_quantity": -1
                    }
                  ]
                },
                {
                  "handle": "ega-cro",
                  "id": 5,
                  "title": "egaCRO",
                  "vendor": "EGANY",
                  "tags": "platform__haravan_cross-platform_sapo, type__apps, doc__ega-salebox, demo__https://egany.com",
                  "image": {
                    "id": 55,
                    "src": "https://picsum.photos/id/14/600"
                  },
                  "variants": [
                    {
                      "id": 555,
                      "sku": "egasalebox",
                      "price": "99000",
                      "compare_at_price": "149000",
                      "inventory_management": null,
                      "inventory_policy": "deny",
                      "inventory_quantity": 10
                    }
                  ]
                }
              ],
              searchProduct: "",
              productDetail: null,
              
        }
      }
     handleChange = (e) => {
         const {name, value} = e.target;
         this.setState({
            searchProduct: value
         })
     }

     handleSearch = () => {
        this.state.products.map((item) => {
          if (item.title === this.state.searchProduct) {
            this.setState({productDetail: item})
          }  
        })
     }
        
      reder = () => {
        if (this.state.productDetail == null) {
            return <div></div>;
        } else {
          const item = this.state.productDetail;

          return (
              <div className="col-4">
                  <Card>
                      <CardImg top width="100%" src={item.image.src} alt="Card image cap" />
                      <CardBody>
                          <CardTitle tag="h5">Tên sản phẩm: {item.title}</CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                          <CardText>{(item.variants[0].inventory_quantity) > 0 ? "Còn hàng" : "Hết Hàng"}: Số lượng: {item.variants[0].inventory_quantity}</CardText>
                      </CardBody>
                  </Card>
              </div>
          )
        }
     }
    render() {
   
   
        return (
            <div className="main">
                <div className="form-search">
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Search</Label>
                            <Input type="text" onChange={this.handleChange} name="search" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                        <Button onClick={this.handleSearch}>Submit</Button>
                    </Form>
                </div>
                <div className="main__content">

                  <div className="row">
            {this.reder()}
                    </div>  
                </div>  
            </div>
        )
    }
}
