import React from 'react';
import Header from '../shared/Navbar/Header/Header';
import Navbar from '../shared/Navbar/Navbar';
import BrackingNews from './BrackingNews/BrackingNews';

const Home = () => {
    return (
        <div className='text-3xl font-poppins'>
        <Header></Header>
        <BrackingNews> </BrackingNews>
        <Navbar> </Navbar>
<div className='grid md: grid-cols-4 gap-6'>

<div>
<h1> this is  right side </h1>
</div>
<div className='col-span-2' >
 this is madden site
</div>
<div >
this left side
</div>
</div>



       <h1> this is Home page</h1>
        </div>
    );
};

export default Home;