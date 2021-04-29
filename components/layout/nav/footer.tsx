import React from 'react';

const abc: React.FC = ()=>{
    return (<div>
        <div className="grid grid-cols-12 bg-black">
            <div className="col-start-2 col-span-10 border my-10 border-gray-200 "></div>
            <div className="col-start-2 col-span-10 text-white">
                <div className="grid grid-cols-3 text-xs">
                    <div className="">
                        <div className="text-gray-100 cursor-pointer">Market Place </div>
                        <div className="cursor-pointer my-2">Teams </div>
                        <div className="cursor-pointer my-2">Lisence </div>
                        <div className="cursor-pointer my-2">Market API </div>
                    </div>
                    <div className="">
                        <div className="text-gray-100 cursor-pointer">Help </div>
                        <div className="cursor-pointer my-2">Teams </div>
                        <div className="cursor-pointer my-2">Lisence </div>
                        <div className="cursor-pointer my-2">Market API </div>
                    </div>
                    <div className="">
                        <div className="text-gray-100 cursor-pointer">Our Community </div>
                        <div className="cursor-pointer my-2">Teams </div>
                        <div className="cursor-pointer my-2">Lisence </div>
                        <div className="cursor-pointer my-2">Market API </div>
                    </div>
                </div>
            </div>

            <div className="col-start-2 col-span-10 border my-10 border-gray-200 "></div>

        </div>
    </div>);
}

export default abc;