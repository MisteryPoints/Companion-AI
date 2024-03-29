import React from 'react'
import { Avatar, AvatarImage } from './ui/Avatar'
import { useUser } from '@clerk/nextjs'

const UserAvatar = () => {
  const { user } = useUser()

  return (
    <Avatar className="h-12 w-12">
        <AvatarImage src={user?.imageUrl} />
    </Avatar>
  )
}


export default UserAvatar