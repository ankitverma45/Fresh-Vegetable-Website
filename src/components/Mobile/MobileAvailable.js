import MobileItem from "./MobileItem";
import { useEffect, useState } from "react";
import "./MobileAvailable.css"
import Pagination from "./Pagination";

const MobileAvailable = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);


  useEffect(() => {
    fetch(
      "https://dummyjson.com/products?limit=100"
    ).then((res) => res.json()).then((data)=>setCoinsData(data.products));
  },[]);
  console.log(coinsData)

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

  const mobileItem = currentPosts.map((value) => {
   return <MobileItem
      key={value.id}
      id={value.id}
      name={value.title}
      img={value.thumbnail}
      price={value.price}
    />;
  });


  return (
    <>
    <div className="all">
      {mobileItem}
    </div>
    <Pagination
                totalPosts={coinsData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
    
    </>
  );
};

export default MobileAvailable;
