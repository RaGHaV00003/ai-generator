// import { UserInputContext } from '@/app/_context/UserInputContext'
// import CategoryList from '@/app/_shared/CategoryList'
// import Image from 'next/image'
// import React, { useContext } from 'react'

// function SelectCategory() {
//     const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);
 
//     const handleCategoryChange=(category)=>{
//             setUserCourseInput(prev=>({
//                 ...prev,
//                 category:category
//             }))
//     }
//     return (
//     <div className='px-10 md:px-20'>
//          <h2 className='my-5'> Select the Course Category</h2>
   
//     <div className='grid grid-cols-3 gap-2 md:gap-10 '>
       
//         {CategoryList.map((item,index)=>(
//             <div className={`flex flex-col p-5 border 
//             items-center rounded-xl hover:border-primary hover:bg-blue-50
//             cursor-pointer ${userCourseInput?.category==item.name&&'border-primary bg-blue-50'}`}
//             onClick={()=>handleCategoryChange(item.name)}
//             >
//                 <Image src={item.icon} width={50} height={50}/>
//                 <h2 className='text-sm hidden md:block'>{item.name}</h2>
//             </div>
//         ))}
//     </div>
//     </div>
//   )
// }

// export default SelectCategory
import { UserInputContext } from '@/app/_context/UserInputContext'
import CategoryList from '@/app/_shared/CategoryList'
import Image from 'next/image'
import React, { useContext } from 'react'

function SelectCategory() {
    const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

    // Function to handle category change
    const handleCategoryChange = (category) => {
        setUserCourseInput(prev => ({
            ...prev,
            category: category
        }));
    }

    return (
        <div className='px-10 md:px-20'>
            <h2 className='my-5'> Select the Course Category</h2>

            <div className='grid grid-cols-3 gap-2 md:gap-10'>
                {/* Map through CategoryList and render each item with a unique key */}
                {CategoryList.map((item, index) => (
                    <div
                        key={item.id || index} // Ensure each child has a unique key (use item.id if available, else fallback to index)
                        className={`flex flex-col p-5 border 
                        items-center rounded-xl hover:border-primary hover:bg-blue-50
                        cursor-pointer ${userCourseInput?.category === item.name && 'border-primary bg-blue-50'}`}
                        onClick={() => handleCategoryChange(item.name)} // Change the category when clicked
                    >
                        <Image src={item.icon} width={50} height={50} alt={item.name} /> {/* Add alt text for accessibility */}
                        <h2 className='text-sm hidden md:block'>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SelectCategory;
