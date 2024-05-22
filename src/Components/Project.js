import React from 'react'

function Project() {
    return (
        <>


            <form action="" className=" min-h-screen flex items-center justify-center ">
                <div>
                    <nav className=' p-8 bg-[#222231] shadow md:flex md:items-center md:justify-between'>
                        <div>
                            <span>
                                logo
                            </span>
                        </div>
                        <ul className=' md:flex md:items-center'>
                            <li className=' mx-6 bg-[#70CBA2] px-7 p-2 rounded-md'>
                                <a href="#">Project</a>
                            </li>
                            <li className=' mx-6'>
                                <a href="#" className=' text-green-300'>Task</a>
                            </li>
                            <li className=' mx-6'>
                                <a href="#" className=' text-green-300'>Jobs</a>
                            </li>
                        </ul>
                        <div className=' pr-8'>
                            <button className=' text-green-300 border border-green-300 px-8 p-2 '>
                                Signin
                            </button>
                            <button className=' bg-green-300 px-8 p-2 ml-6 '>
                                Signup
                            </button>
                        </div>
                    </nav>

                    <div className=" text-4xl font-semibold ">
                        <h1 className=' pb-12 pt-12 text-6xl'>Create New Project</h1>

                        <div className="  bg-[#22295B] p-10 space-y-5 ">


                            <div className=" grid grid-cols-1 gap-1">
                                <label htmlFor="" className=" mb-1 text-xl ">
                                    Project name
                                </label>
                                <input
                                    type="text"
                                    className=" bg-[#0f0f36] border "
                                />
                            </div>
                            <div className=" grid grid-cols-1 gap-1">
                                <label htmlFor="" className=" mb-1 text-xl ">
                                    Assigned to
                                </label>
                                <input
                                    type="text"
                                    className="bg-[#0f0f36]  border px-96 "
                                />
                            </div>
                            <div className=' grid justify-items-stretch'>
                                <input type="text"
                                    className="bg-[#0f0f36] text-center text-sm p-1  border  justify-self-end "
                                    placeholder='Add New Labels '
                                />
                                <div className=" grid grid-cols-1 gap-1 ">
                                    <label htmlFor="" className="  text-xl ">
                                        Labels
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-[#0f0f36]  border"
                                    />
                                </div>
                                <div className=" grid grid-cols-1">
                                    <input
                                        type="text"
                                        className="bg-[#0f0f36]  border p-4 "
                                    />
                                </div>
                            </div>
                            <div className=' flex flex-row gap-4 text-sm justify-end  '>
                                <button className="  bg-[#70CBA2] px-10 p-1  ">
                                    Save
                                </button>
                                <button className=' bg-[#0f0f36]  border px-10 ' >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </form>


        </>
    );
}

export default Project;