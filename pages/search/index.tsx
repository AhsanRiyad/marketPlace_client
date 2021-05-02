import React from 'react';
import Nav from '../../components/layout/nav/nav';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StarIcon from '@material-ui/icons/Star';

const search: React.FC = () =>{
    return (
            <div>
                <Nav>
                <div className="grid grid-cols-6 text-black gap-3 mt-12">

                    <div className="col-start-2 col-span-4">
                        <div className="grid justify-end">
                            <div>
                                <span className="text-xs">
                                    All prices are in USD
                                </span>

                                <div className="border-0 border-l border-gray-300 h-6 w-px mx-3 inline"> </div>

                                <div className="inline border p-2">
                                    Best Seller
                                </div>
                                <div className="inline border p-2">
                                    Best Rated
                                </div>
                                <div className="inline border p-2">
                                    Newest
                                </div>
                                <div className="inline border p-2">
                                    Trending
                                </div>
                            </div>

                        </div>
                    </div>

                    {
                        [...Array(10)].map((n,i)=>{
                            return (

                                <div className="col-start-2 col-span-4">
                                    <div className="flex border p-3 shadow-md	">
                                        <img className="h-52" src="/static/02_image-preview.jpg" style={{ flexBasis: 400 }} />
                                        <div className="ml-3" style={{ flexBasis: 450 }}>
                                            <p className="font-bold	"> Koble | Business Email Set </p>
                                            <small> <i> by </i> nutzumi in Newsletters </small>
                                            <ul>
                                                <li>✅ More than 200 unique modules 26 templates
                                    </li>
                                                <li>✅ More than 200 unique modules 26 templates
                                    </li>
                                                <li>✅ More than 200 unique modules 26 templates
                                    </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-300 h-100 w-px ml-3"></div>

                                        <div className="ml-3 w-100 " style={{ flexBasis: 400 }}>
                                            <div className="grid h-52">
                                                <div className="flex justify-end bg-white">
                                                    <div className="text-black cursor-pointer"><PlaylistAddIcon /></div>
                                                    <div className="border h-6 mx-3"> </div>
                                                    <div className="text-black cursor-pointer"><FavoriteBorderIcon /></div>
                                                </div>

                                                <div className="self-center justify-self-center">

                                                    <div className="grid justify-center">
                                                        <span className="font-bold text-xl text-center">
                                                            $26
                                            </span>
                                                        <div className="">
                                                            <span className="text-yellow-600">
                                                                <StarIcon fontSize="small" />
                                                            </span>
                                                            <span className="text-yellow-600">
                                                                <StarIcon fontSize="small" />
                                                            </span>
                                                            <span className="text-yellow-600">
                                                                <StarIcon fontSize="small" />
                                                            </span>
                                                            <span className="text-yellow-600">
                                                                <StarIcon fontSize="small" />
                                                            </span>
                                                            <span>
                                                                <StarIcon fontSize="small" />
                                                            </span>

                                                            <span className="text-xs">(183)</span>
                                                        </div>

                                                        <span className="text-xs text-center">
                                                            9.3K Sales
                                            </span>

                                                        <span className="text-xs text-center">
                                                            Last updated: 29 Apr 21
                                            </span>
                                                    </div>

                                                </div>

                                                <div className="self-end justify-self-center mb-3">
                                                    <span className="mr-2">
                                                        <Button variant="outlined" color="primary">
                                                            PREVIEW
                                            </Button>
                                                    </span>

                                                    <span>
                                                        <Button variant="outlined" color="primary">
                                                            <AddShoppingCartIcon />
                                                        </Button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            );
                        })
                    }


                    </div>
                </Nav>
            </div>
        );
}

export default search;