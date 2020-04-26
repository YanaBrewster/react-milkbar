import React from 'react';
import  cake1 from '../../images/cake1.jpg';
import  cake2 from '../../images/cake2.jpg';
import  cake3 from '../../images/cake3.jpg';
import  cake4 from '../../images/cake4.jpg';
import ProductCard from '../productcard/ProductCard';
import './Products.css';


class Products extends React.Component{
  constructor(){
    super();
    this.state={
      cards :[
       {
         id:0,
         imageUrl : cake1,
         title: 'Birthday Cake',
         description: 'Our bestselling Birthday Cake is inspired by the supermarket stuff we grew up with, and it took us over two years to get it just right: three tiers of rainbow-flecked vanilla B\'Day cake layered with creamy B\'Day frosting, crunchy B\'Day crumbs, and rainbow sprinkles. Tastes like childhood. 6” cake serves 8-12; 10" cake serves 20-30.'
       },
       {
         id:2,
         imageUrl : cake2,
         title: 'Chocolate Birthday Cake',
         description: 'The classic Birthday, but make it chocolate. Decadent chocolate cake plus chocolate chips, layered with creamy B\'Day frosting, crunchy B\'Day crumbs, and rainbow sprinkles. 6” cake serves 8-12; 10" cake serves 20-30.'
       },
       {
         id:3,
         imageUrl : cake3,
         title: 'Gluten Free Birthday Cake',
         description: 'Our classic Birthday Cake, inspired by the supermarket stuff we grew up with — now made gluten-free! Three tiers of rainbow-flecked, gluten-free vanilla B\'Day cake layered with creamy B\'Day frosting and crunchy gluten-free B\'Day crumbs. Tastes like childhood (y’know… without the gluten).6” cake serves 8-12; 10" cake serves 20-30.'
       },
       {
         id:1,
         imageUrl : cake4,
         title: 'Strawberry Shortcake',
         description: 'Strawberry Shortcake is an early Tosi claim to fame (it was the first dessert she put on the menu at Momofuku) — but this springtime-only cake is on a whole new level. What’s in a Shortcake Cake? Buttery vanilla cake layers sandwiched with lightly sweet creme fraiche frosting, creamy-crunchy milk crumbs, and a brilliant punch of Tristar strawberry jam.'
       }
     ]
   }

  }

  render(){

   console.log(this.state);
   const cardComponent = this.state.cards.map((card)=>{
     return (
     <ProductCard key={card.id} imgurl={card.imageUrl} tit={card.title} des={card.description}/>
     )
   })

   console.log(cardComponent);

    return(
      <div className="row">
        {cardComponent}
      </div>
    )
  }
}

export default Products;
