import { legacy_createStore as createStore} from 'redux'

import Img1 from "../../Image/image1.jpg";
import Img2 from "../../Image/image2.webp";
import Img3 from "../../Image/image3.jpg";
import Img4 from "../../Image/image4.jpg";
import Img5 from "../../Image/image5.jpg";
import Img6 from "../../Image/image6.jpg";
import Img7 from "../../Image/image7.webp";
import Img8 from "../../Image/image8.jpg";
import Img9 from "../../Image/image9.jpg";
import Img10 from "../../Image/image10.jpg";
import Img11 from "../../Image/image11.webp";
import Img12 from "../../Image/image12.jpg";
import Img13 from "../../Image/image13.jpg";
import Img14 from "../../Image/image14.jpg";
import Img15 from "../../Image/image15.jpg";
import Img16 from "../../Image/image16.jpg";

const dummy = [
  {
    id: "m1",
    name: "Broccoli",
    img:Img1,
    price: 30,
  },
  {
    id: "m2",
    name: "Cabbage",
    img:Img2,
    price: 25,
  },
  {
    id: "m3",
    name: "Asparagus",
    img:Img3,
    price: 35,
  },
  {
    id: "m4",
    name: "Avocado",
    img:Img4,
    price: 20,
  },
  {
    id: "m5",
    name: "Beetroot",
    img:Img5,
    price: 15,
  },
  {
    id: "m6",
    name: "Carrot",
    img:Img6,
    price: 25,
  },
  {
    id: "m7",
    name: "Garlic",
    img:Img7,
    price: 30,
  },
  {
    id: "m8",
    name: "Leek",
    img:Img8,
    price: 40,
  },
  {
    id: "m9",
    name: "Lamon",
    img:Img9,
    price: 50,
  },
  {
    id: "m10",
    name: "Lettuce",
    img:Img10,
    price: 45,
  },
  {
    id: "m11",
    name: "Ginger",
    img:Img11,
    price: 55,
  },
  {
    id: "m12",
    name: "Onion",
    img:Img12,
    price: 35,
  },
  {
    id: "m13",
    name: "Potato",
    img:Img13,
    price: 15,
  },
  {
    id: "m14",
    name: "Tomato",
    img:Img14,
    price: 25,
  },
  {
    id: "m15",
    name: "Luffa",
    img:Img15,
    price: 60,
  },
  {
    id: "m16",
    name: "Olive",
    img:Img16,
    price: 30,
  },
];
const init ={
    items:[],
    totalAmount:0,
    filteredItems:dummy
}

const createReducer=(state=init,action)=>{
    if(action.type==="add"){
        const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
  
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      filteredItems:state.filteredItems
    };
  }
  if (action.type === 'remove') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      filteredItems:state.filteredItems
    };
  }
  if(action.type==="filt"){
     const updatedList = dummy.filter((item) => {
       return item.name.toLowerCase().includes(action.change)
    });
    return {
      filteredItems:updatedList,
      items: state.items,
      totalAmount: state.totalAmount
      
    };
  }
   return state
}

const Store = createStore(createReducer)

export default Store
