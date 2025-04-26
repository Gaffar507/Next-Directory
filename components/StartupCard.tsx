import Link from 'next/link';
import { formateDate } from '@/lib/utils';
import { Eye } from 'lucide-react';
import React from 'react';
import {Button} from './ui/button'
import Image from 'next/image';


interface startupCardType {
    _createdAt: string;
    views: number;
    author: { _id: number, name: string };
    _id: number;
    description: string;
    image: string;
    category: string;
    title: string;
  }
  

const StartupCard = ({post}:{ post: startupCardType}) => {

    const {_createdAt, views,  author:{_id: authorId, name}, _id, description, image, category, title} = post;

  return (
    <li className='startup-card group'>
      <div className='flex-between'>
        <p className='startup_card_date'>{formateDate(_createdAt)}</p>
        <div className='flex gap-1.5'>
            <Eye className='size-6 text-primary' />
            <span className='startup_card_views'>{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
            <div className='flex-1'>
                <Link href={`/user/${authorId}`}>
                    <p className='text-16-medium line-clamp-1'>{name}</p>
                </Link>
                <Link href={`/startup/${_id}`}>
                    <p className='text-26-medium line-clamp-1'>{title}</p>
                </Link>
            </div>
            <Link href={`/user/${authorId}`}>
                <Image width={200} height={200} src='https://static.vecteezy.com/system/resources/previews/036/594/092/original/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg' alt={title} className='startup_card_image w-[40px] h-[40px] rounded-3xl ' /> 
            </Link>
      </div>

            <Link href={`/startup/${_id}`}>
                <p className='startup-card_desc'>{description}</p>
                <Image height={150} width={150} src={image} alt={title} className='startup-card_img' />
            </Link>

            <div className='flex-between mt-5 gap-3'>
                <Link href={`/?query=${category.toLowerCase()}`}>
                    <p className='text-16-medium'>
                        {category}
                    </p>
                </Link>
                <Button className='statup-card_btn' asChild>
                    <Link href={`/startup/${_id}`}>
                        Details
                    </Link>
                </Button>
            </div>
    </li>
  )
}

export default StartupCard
