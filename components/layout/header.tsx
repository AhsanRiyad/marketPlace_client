import React from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const abc: React.FC = () => {
    return (<div>
        <div className="flex h-12 text-white bg-gradient-to-r from-red-500 to-indigo-500  justify-center  items-center">
            <span className="inline cursor-pointer">SALE Unlimited Downloads! </span> <span className="inline cursor-pointer"> &nbsp; 40% Off on all elements </span>
       </div>
        <div className="grid grid-cols-12 bg-gray-700 text-white h-12 place-content-center">
            <div className="col-start-2 self-center cursor-pointer">
                MarketPlace
            </div>
            <div className="col-start-8  col-span-4">
                <div className="grid justify-end">
                    <div> <button className="bg-gray-500 py-3 px-4 cursor-pointer"> Signin </button> </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-6 bg-gray-700 text-white h-12 place-content-center">
                <div className="col-start-2 col-span-4 relative">
                    <div className="inline mx-3 cursor-pointer relative"> Web Theme & Template 
                        <div className="absolute inset-x-1/2 -bottom-8"><ArrowDropUpIcon style={{ fontSize: 37 }}/></div>
                    </div>
                    <div className="inline mx-3 cursor-pointer"> Code </div>
                    <div className="inline mx-3 cursor-pointer"> Graphics </div>
                    <div className="inline mx-3 cursor-pointer"> Photo </div>
                    <div className="absolute right-4 -bottom-10 rounded bg-gray-500 py-4 px-4">MarketPlace</div>
                </div>
        </div>

        <div className=" grid grid-cols-6 border text-black h-14 place-content-center">
            <div className="col-start-2 col-span-4 relative text-xs ">
                <div className="inline mx-3 cursor-pointer"> All items </div>
                <div className="inline mx-3 cursor-pointer"> Wordpress </div>
                <div className="inline mx-3 cursor-pointer"> Template </div>
                <div className="inline mx-3 cursor-pointer"> CMS </div>
            </div>
        </div>

    </div>);
}

export default abc;