import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
      const [categories, setCategories] = useState([]);
   

      useEffect(()=>{
            fetch('/categories.json')
            .then(res => res.json())
            .then(data =>{
                  setCategories(data)
            })
}, []);

      return (
            <div className='p-4'>
                  <h3 className=' font-bold text-primary mb-4'>All Categories</h3>
                  <div>
                        {
                         categories.map(category =>  <button key={category.id} className=" btn btn-outline btn-sm btn-accent w-full mb-3"><Link to={`/category/${category.id}`} className="flex items-center gap-4" href="">{category.name}</Link></button>)     
                        }
                  </div>
            </div>
      );
};

export default LeftSideNav;